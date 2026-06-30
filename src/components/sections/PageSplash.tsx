'use client';

import { useState, useEffect } from 'react';

export interface SplashButton {
  label: string;
  targetId?: string;
  href?: string;
  primary?: boolean;
}

interface PageSplashProps {
  title: React.ReactNode;
  subtitle: string;
  images: string[];
  overlayColor?: string;
  enterText?: string;
  align?: 'center' | 'left';
  actionButtons?: SplashButton[];
}

export default function PageSplash({
  title,
  subtitle,
  images,
  overlayColor = 'bg-[#FFDDEE]/90',
  enterText = 'ENTER',
  align = 'center',
  actionButtons,
}: PageSplashProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!isMounted) return <section id="hero-splash" className="w-full h-screen relative shrink-0 snap-start snap-always bg-background" />;

  return (
    <section
      id="hero-splash"
      className="w-full h-screen relative shrink-0 snap-start snap-always overflow-hidden flex flex-col items-center justify-center z-40 bg-background select-none"
    >
      {/* Background Images */}
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === currentImageIdx ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay wash */}
      <div className={`absolute inset-0 ${overlayColor} backdrop-blur-[1px]`} />

      {/* Content */}
      <div className={`relative z-10 flex flex-col px-6 w-full ${align === 'left' ? 'items-start text-left max-w-[var(--spacing-container-max-width)] mx-auto' : 'items-center text-center max-w-4xl mx-auto'}`}>
        <h1 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[48px] md:text-[80px] leading-tight mb-6 select-none text-text-main drop-shadow-sm">
          {title}
        </h1>
        <p className={`font-body-lg text-[var(--text-body-lg)] text-text-main/80 mb-12 select-none font-medium ${align === 'left' ? 'max-w-2xl' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
        
        {actionButtons ? (
          <div className="flex flex-col sm:flex-row gap-6">
            {actionButtons.map((btn, i) => (
              <button
                key={i}
                onClick={() => {
                  if (btn.targetId) {
                    const id = btn.targetId;
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  } else if (btn.href) {
                    window.location.href = btn.href;
                  } else {
                    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                  }
                }}
                className={
                  btn.primary !== false
                    ? "bg-primary text-[#FFDDEE] px-10 py-4 rounded-full border-2 border-primary font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                    : "border-2 border-primary text-primary px-10 py-4 rounded-full font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:shadow-[0_4px_20px_rgba(255,0,153,0.25)] hover:scale-[1.02] transition-all text-center"
                }
              >
                {btn.label}
              </button>
            ))}
          </div>
        ) : (
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="px-10 py-4 bg-primary text-[#FFDDEE] rounded-full font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[0.25em] uppercase hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] transition-all active:scale-95"
          >
            {enterText}
          </button>
        )}
      </div>
    </section>
  );
}
