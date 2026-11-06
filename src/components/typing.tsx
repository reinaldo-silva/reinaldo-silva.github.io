"use client";

import { useEffect, useState } from "react";

export function Typing({ lines }: { lines: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = lines[index % lines.length];
    let delay = deleting ? 28 : 55;
    if (!deleting && text === full) delay = 1800;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === full) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
        return;
      }
      setText(full.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, lines]);

  return (
    <span className="font-mono">
      <span aria-hidden>{text}</span>
      <span className="sr-only">{lines.join(", ")}</span>
      <span aria-hidden className="ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.18em] animate-blink bg-accent" />
    </span>
  );
}
