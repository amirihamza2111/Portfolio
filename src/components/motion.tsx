"use client";

import type { ReactNode } from "react";
// LazyMotion + `m` ship only the animation features we use (not the full `motion` bundle).
import { LazyMotion, MotionConfig, domAnimation, m, useScroll, useSpring, useTransform, type Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Honors the visitor's "reduce motion" setting for every animation below. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

/** Thin green bar at the top of the page that fills as you scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  return (
    <m.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-jungle-500 to-jungle-300"
    />
  );
}

/** Fades and slides its content in the first time it scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  x = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  className?: string;
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </m.div>
  );
}

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

/** A list whose items appear one after another. */
export function StaggerList({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.ul
      className={className}
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </m.ul>
  );
}

export function StaggerItem({ children, className, lift = false }: { children: ReactNode; className?: string; lift?: boolean }) {
  return (
    <m.li
      className={className}
      variants={item}
      whileHover={lift ? { y: -5, transition: { duration: 0.2 } } : undefined}
    >
      {children}
    </m.li>
  );
}

/** Same as StaggerList, for a definition list (project highlights). */
export function StaggerDl({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.dl
      className={className}
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </m.dl>
  );
}

export function StaggerDiv({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.div className={className} variants={item}>
      {children}
    </m.div>
  );
}

/** Moves its content a little slower than the page while scrolling. */
export function Parallax({ children, className, distance = 60 }: { children: ReactNode; className?: string; distance?: number }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, distance]);
  return (
    <m.div className={className} style={{ y }}>
      {children}
    </m.div>
  );
}
