"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-surface/80 py-1.5 pr-1.5 pl-4 font-mono text-[13px] text-fg backdrop-blur transition-colors hover:border-accent/50 sm:gap-3 sm:py-2 sm:pr-2 sm:pl-5 sm:text-base"
    >
      <span className="truncate">{email}</span>
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-tint/5 text-muted transition-colors group-hover:text-fg">
        {copied ? <CheckIcon width={16} height={16} className="text-accent-3" /> : <CopyIcon width={16} height={16} />}
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? "E-mail copiado" : ""}
      </span>
    </button>
  );
}
