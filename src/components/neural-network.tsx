"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number; phase: number };
type Pulse = { a: number; b: number; t: number; speed: number };

const PALETTE = {
  light: { node: "41,171,135", link: "41,171,135", pulse: "28,107,77", glow: "79,195,159" },
  dark: { node: "79,195,159", link: "79,195,159", pulse: "194,235,220", glow: "143,217,191" },
};

/**
 * Green "neurons": drifting nodes linked to their neighbours, with signals firing along the links.
 * Canvas only, paused off-screen, one still frame for visitors who prefer reduced motion.
 */
export function NeuralNetwork({
  variant = "light",
  density = 1,
  className = "",
}: {
  variant?: "light" | "dark";
  density?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const colors = PALETTE[variant];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let linkDist = 140;
    let raf = 0;
    let visible = false;
    let last = 0;
    const pointer = { x: -9999, y: -9999 };

    function setup() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      linkDist = Math.max(110, Math.min(170, width / 8));
      // fewer neurons on phones: same look, a fraction of the work
      const max = width < 640 ? 34 : 90;
      const count = Math.round(Math.min(max, Math.max(22, (width * height) / 16000)) * density);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1.4 + Math.random() * 2.2,
        phase: Math.random() * Math.PI * 2,
      }));
      pulses = [];
    }

    function neighbours(i: number) {
      const out: number[] = [];
      const n = nodes[i];
      for (let j = 0; j < nodes.length; j++) {
        if (j === i) continue;
        const dx = nodes[j].x - n.x;
        const dy = nodes[j].y - n.y;
        if (dx * dx + dy * dy < linkDist * linkDist) out.push(j);
      }
      return out;
    }

    function fire() {
      const a = Math.floor(Math.random() * nodes.length);
      const near = neighbours(a);
      if (near.length) pulses.push({ a, b: near[Math.floor(Math.random() * near.length)], t: 0, speed: 0.012 + Math.random() * 0.012 });
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height);

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 > linkDist * linkDist) continue;
          const alpha = (1 - Math.sqrt(d2) / linkDist) * (variant === "dark" ? 0.5 : 0.38);
          ctx!.strokeStyle = `rgba(${colors.link},${alpha})`;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(nodes[i].x, nodes[i].y);
          ctx!.lineTo(nodes[j].x, nodes[j].y);
          ctx!.stroke();
        }
      }

      // signals travelling along links
      for (const p of pulses) {
        const a = nodes[p.a];
        const b = nodes[p.b];
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const g = ctx!.createRadialGradient(x, y, 0, x, y, 9);
        g.addColorStop(0, `rgba(${colors.glow},0.9)`);
        g.addColorStop(1, `rgba(${colors.glow},0)`);
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(x, y, 9, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = `rgba(${colors.pulse},1)`;
        ctx!.beginPath();
        ctx!.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx!.fill();
      }

      // neurons (soft breathing)
      for (const n of nodes) {
        const breathe = 0.55 + 0.45 * Math.sin(time / 900 + n.phase);
        const near = Math.hypot(n.x - pointer.x, n.y - pointer.y) < 120;
        ctx!.fillStyle = `rgba(${colors.node},${near ? 0.95 : 0.35 + breathe * 0.4})`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r + (near ? 1.2 : 0), 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    // 30 frames per second is plenty for a slow drift and halves the work
    const FRAME = 1000 / 30;
    function step(time: number) {
      if (last && time - last < FRAME - 2) {
        raf = visible ? requestAnimationFrame(step) : 0;
        return;
      }
      const dt = Math.min(48, time - (last || time)) / 16.7;
      last = time;
      for (const n of nodes) {
        // gentle pull towards the pointer
        const dx = pointer.x - n.x;
        const dy = pointer.y - n.y;
        const d = Math.hypot(dx, dy);
        if (d < 160 && d > 1) {
          n.vx += (dx / d) * 0.004;
          n.vy += (dy / d) * 0.004;
        }
        n.vx *= 0.995;
        n.vy *= 0.995;
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      }
      for (const p of pulses) p.t += p.speed * dt;
      // a signal that arrives makes the next neuron fire
      const arrived = pulses.filter((p) => p.t >= 1);
      pulses = pulses.filter((p) => p.t < 1);
      for (const p of arrived) {
        const near = neighbours(p.b).filter((j) => j !== p.a);
        if (near.length && Math.random() < 0.7 && pulses.length < 26)
          pulses.push({ a: p.b, b: near[Math.floor(Math.random() * near.length)], t: 0, speed: p.speed });
      }
      if (pulses.length < 6 && Math.random() < 0.06) fire();

      draw(time);
      raf = visible ? requestAnimationFrame(step) : 0;
    }

    // Wait until the page has loaded and the browser is idle, so the hero photo and text paint first.
    let ready = false;
    function start() {
      if (!ready || reduce || raf) return;
      last = 0;
      raf = requestAnimationFrame(step);
    }

    setup();
    if (reduce) {
      draw(0);
      canvas.style.opacity = "1";
    }

    let idleId = 0;
    const begin = () => {
      const go = () => {
        ready = true;
        canvas.style.opacity = "1";
        start();
      };
      // Safari has no requestIdleCallback: fall back to a short timeout there
      idleId = typeof window.requestIdleCallback === "function" ? window.requestIdleCallback(go, { timeout: 2500 }) : window.setTimeout(go, 300);
    };
    if (document.readyState === "complete") begin();
    else window.addEventListener("load", begin, { once: true });

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    io.observe(canvas);

    const ro = new ResizeObserver(() => {
      setup();
      if (reduce) draw(0);
    });
    ro.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = pointer.y = -9999;
    };
    // listen on the window: the canvas sits behind content and takes no pointer events itself
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("load", begin);
      if (typeof window.cancelIdleCallback === "function") window.cancelIdleCallback(idleId);
      window.clearTimeout(idleId);
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [variant, density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      // fades in once the animation starts; the still frame (reduced motion) shows at once
      style={{ opacity: 0, transition: "opacity 1.2s ease-out" }}
      className={`pointer-events-none absolute inset-0 size-full ${className}`}
    />
  );
}
