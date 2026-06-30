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
    <div className="relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-[#0F0D15] border border-primary/30 shadow-2xl group flex items-center justify-center p-8 select-none">
      {/* Decorative gradient glows matching Impact Calculator */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Construction Matrix (No Text) */}
      <div className="relative z-10 w-full max-w-[280px] aspect-square grid grid-cols-4 gap-4 my-auto">
        {Array.from({ length: 16 }).map((_, idx) => {
          const isActive = activeSquares.includes(idx);
          const isCore = idx === 5 || idx === 6 || idx === 9 || idx === 10;
          return (
            <div
              key={idx}
              className={`relative rounded-xl border transition-all duration-500 flex items-center justify-center ${
                isActive
                  ? isCore
                    ? 'bg-primary border-primary shadow-[0_0_24px_rgba(255,0,153,0.8)] scale-105'
                    : 'bg-primary/25 border-primary/70 shadow-[0_0_15px_rgba(255,0,153,0.4)]'
                  : 'bg-[#181522]/60 border-border-main/30 hover:border-primary/40'
              }`}
            >
              {/* Inner glowing core dot when active */}
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? (isCore ? 'bg-white scale-125 shadow-[0_0_8px_#fff]' : 'bg-primary shadow-[0_0_6px_#ff0099]') : 'bg-transparent'
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
            d="M 12.5,12.5 L 87.5,12.5 L 87.5,87.5 L 12.5,87.5 Z M 37.5,37.5 L 62.5,37.5 L 62.5,62.5 L 37.5,62.5 Z M 12.5,37.5 L 87.5,62.5 M 62.5,12.5 L 37.5,87.5"
            fill="none"
            stroke="#FF0099"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-1000 ${
              linesDrawn ? 'opacity-85 stroke-dashoffset-0' : 'opacity-0'
            }`}
            style={{
              strokeDasharray: '500',
              strokeDashoffset: linesDrawn ? '0' : '500',
            }}
          />
        </svg>
      </div>
    </div>
  );
}
