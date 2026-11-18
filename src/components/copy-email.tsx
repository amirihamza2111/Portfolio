"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email, label, idle, done }: { email: string; label: string; idle: string; done: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked: the mailto link next to it still works.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      className="inline-flex h-9 shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-jungle-700 px-3 text-xs font-semibold text-jungle-200 transition-colors hover:border-jungle-500 hover:text-white"
    >
      {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
      <span aria-live="polite">{copied ? done : idle}</span>
    </button>
  );
}
