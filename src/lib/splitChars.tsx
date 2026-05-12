import type { ReactNode } from "react";

export function splitChars(text: string): ReactNode {
  const words = text.split(" ");
  return words.map((w, wi) => (
    <span key={wi} className="word">
      {[...w].map((c, ci) => (
        <span
          key={ci}
          className="char"
          style={{ transitionDelay: `${wi * 80 + ci * 30}ms` }}
        >
          {c}
        </span>
      ))}
      {wi < words.length - 1 ? (
        <span
          className="char"
          style={{ transitionDelay: `${wi * 80 + w.length * 30}ms` }}
        >
          &nbsp;
        </span>
      ) : null}
    </span>
  ));
}
