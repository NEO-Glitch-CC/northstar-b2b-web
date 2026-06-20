'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function NorthStarEntrance() {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);
  const accentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const grid = gridRef.current;
    const line = lineRef.current;
    const text = textRef.current;
    const accent = accentRef.current;

    // Create grid lines
    const gridLines = [];
    for (let i = 0; i < 8; i++) {
      const hLine = document.createElement('div');
      hLine.className = 'grid-line-h';
      hLine.style.cssText = `
        position: absolute;
        width: 100%;
        height: 1px;
        background: rgba(251, 191, 36, 0.1);
        left: 0;
        top: ${(i + 1) * 12.5}%;
        transform: scaleX(0);
        transform-origin: left;
      `;
      grid.appendChild(hLine);
      gridLines.push(hLine);

      const vLine = document.createElement('div');
      vLine.className = 'grid-line-v';
      vLine.style.cssText = `
        position: absolute;
        width: 1px;
        height: 100%;
        background: rgba(251, 191, 36, 0.1);
        top: 0;
        left: ${(i + 1) * 12.5}%;
        transform: scaleY(0);
        transform-origin: top;
      `;
      grid.appendChild(vLine);
      gridLines.push(vLine);
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          container.style.display = 'none';
        }, 100);
      }
    });

    // Initial states
    gsap.set(text, { opacity: 0, y: 100 });
    gsap.set(line, { scaleX: 0 });
    gsap.set(accent, { opacity: 0, x: -50 });

    // Animate grid lines
    gridLines.forEach((line, index) => {
      tl.to(line, {
        scaleX: line.classList.contains('grid-line-h') ? 1 : undefined,
        scaleY: line.classList.contains('grid-line-v') ? 1 : undefined,
        duration: 0.8,
        ease: 'power2.out',
      }, 0.1 + (index * 0.05));
    });

    // Animate accent bar
    tl.to(accent, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, 0.5);

    // Animate main text with split effect
    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
    }, 0.8);

    // Animate line
    tl.to(line, {
      scaleX: 1,
      duration: 1,
      ease: 'power2.inOut',
    }, 1);

    // Exit animation
    tl.to(container, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
    }, 3);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden"
    >
      {/* Grid Background */}
      <div ref={gridRef} className="absolute inset-0" />

      {/* Accent Bar */}
      <div
        ref={accentRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[2px] bg-yellow-400"
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-8">
        <div ref={textRef} className="space-y-6">
          <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tight leading-none">
            NorthStar
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm md:text-base">
            <span className="text-yellow-400 font-mono">B2B</span>
            <span className="w-8 h-px bg-yellow-400" />
            <span className="text-gray-400 tracking-widest uppercase">
              Platform
            </span>
          </div>
        </div>

        {/* Animated Line */}
        <div
          ref={lineRef}
          className="mt-12 mx-auto w-[400px] h-[1px] bg-white origin-left"
        />
      </div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-yellow-400" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-yellow-400" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-yellow-400" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-yellow-400" />
    </div>
  );
}
