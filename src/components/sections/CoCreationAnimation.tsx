'use client';

import React, { useState, useEffect } from 'react';

export default function CoCreationAnimation() {
  const [activeSquares, setActiveSquares] = useState<number[]>([]);
  const [linesDrawn, setLinesDrawn] = useState(false);

  useEffect(() => {
    // Loop animation cycle
    const interval = setInterval(() => {
      // Light up squares in a building sequence
      const sequence = [2, 7, 12, 17, 6, 8, 11, 13, 0, 4, 15, 19];
      let step = 0;

      setActiveSquares([]);
      setLinesDrawn(false);

      const subInterval = setInterval(() => {
        if (step < sequence.length) {
          setActiveSquares((prev) => [...prev, sequence[step]]);
          step++;
        } else if (step === sequence.length) {
          setLinesDrawn(true);
          step++;
        } else if (step > sequence.length + 6) {
          clearInterval(subInterval);
        } else {
          step++;
        }
      }, 250);

      return () => clearInterval(subInterval);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border-main glass-surface aspect-[3/4] shadow-md group flex flex-col items-center justify-center bg-[#0A0A0E] p-6 select-none">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,153,0.12),transparent_70%)] pointer-events-none" />

      {/* Grid Construction Matrix */}
      <div className="relative z-10 w-full max-w-[260px] aspect-square grid grid-cols-4 gap-3 my-auto">
        {Array.from({ length: 16 }).map((_, idx) => {
          const isActive = activeSquares.includes(idx);
          const isCore = idx === 5 || idx === 6 || idx === 9 || idx === 10;
          return (
            <div
              key={idx}
              className={`relative rounded-xl border transition-all duration-500 flex items-center justify-center ${
                isActive
                  ? isCore
                    ? 'bg-primary border-primary shadow-[0_0_20px_rgba(255,0,153,0.6)] scale-105'
                    : 'bg-primary/20 border-primary/60 shadow-[0_0_12px_rgba(255,0,153,0.3)]'
                  : 'bg-surface/40 border-border-main/50 hover:border-primary/30'
              }`}
            >
              {/* Inner glowing dot when active */}
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive ? (isCore ? 'bg-white scale-125' : 'bg-primary') : 'bg-transparent'
                }`}
              />
            </div>
          );
        })}

        {/* Connecting Data Lines Overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 12.5,12.5 L 87.5,12.5 L 87.5,87.5 L 12.5,87.5 Z M 37.5,37.5 L 62.5,37.5 L 62.5,62.5 L 37.5,62.5 Z"
            fill="none"
            stroke="#FF0099"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-1000 ${
              linesDrawn ? 'opacity-80 stroke-dashoffset-0' : 'opacity-0'
            }`}
            style={{
              strokeDasharray: '400',
              strokeDashoffset: linesDrawn ? '0' : '400',
            }}
          />
        </svg>
      </div>

      {/* Dynamic Status Bar */}
      <div className="relative z-10 w-full max-w-[260px] mt-6 flex items-center justify-between border-t border-border-main/40 pt-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span className="font-label-caps text-[11px] tracking-[0.15em] text-primary uppercase">
            {linesDrawn ? 'Infrastructure Active' : 'Building Grid...'}
          </span>
        </div>
        <span className="font-mono text-xs text-text-muted">
          {activeSquares.length}/16 Nodes
        </span>
      </div>
    </div>
  );
}
