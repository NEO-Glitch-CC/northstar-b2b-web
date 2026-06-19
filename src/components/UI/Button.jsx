"use client";

import { useRef } from "react";
import gsap from "gsap";

export default function Button({ children, href = "#simulator", variant = "dark", className = "" }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    gsap.to(el, {
      x: x * 0.18,
      y: y * 0.28,
      duration: 0.45,
      ease: "power3.out"
    });
  };

  const handleLeave = () => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.75,
      ease: "elastic.out(1, 0.42)"
    });
  };

  const theme =
    variant === "light"
      ? "border-inverse bg-inverse text-charcoal hover:bg-charcoal hover:text-inverse"
      : "border-charcoal bg-charcoal text-inverse hover:bg-bone hover:text-charcoal";

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-flex min-h-12 items-center justify-center border px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ease-editorial ${theme} ${className}`}
    >
      {children}
    </a>
  );
}
