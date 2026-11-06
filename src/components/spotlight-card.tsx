"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** cor do brilho em "r g b" */
  glow?: string;
};

export function SpotlightCard({ children, className = "", glow }: Props) {
  function onMove(e: PointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  return (
    <div
      onPointerMove={onMove}
      className={`spotlight rounded-2xl border border-line bg-surface/70 backdrop-blur-sm ${className}`}
      style={glow ? ({ "--glow": glow } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
