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
      className="group inline-flex items-center gap-3 rounded-full border border-line bg-surface/80 py-2 pr-2 pl-5 font-mono text-sm text-fg backdrop-blur transition-colors hover:border-accent/50 sm:text-base"
    >
      {email}
      <span className="grid size-9 place-items-center rounded-full bg-white/5 text-muted transition-colors group-hover:text-fg">
        {copied ? <CheckIcon width={16} height={16} className="text-accent-3" /> : <CopyIcon width={16} height={16} />}
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? "E-mail copiado" : ""}
      </span>
    </button>
  );
}
