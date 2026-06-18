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
    if (!showSplash) return;
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [showSplash, images.length]);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSplash]);

  if (!isMounted) return <div className="fixed inset-0 z-[100] bg-background" />;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-1000 ${
        showSplash ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
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
                  setShowSplash(false);
                  if (btn.targetId) {
                    setTimeout(() => document.getElementById(btn.targetId)?.scrollIntoView({ behavior: 'smooth' }), 100);
                  } else if (btn.href) {
                    window.location.href = btn.href;
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
            onClick={() => setShowSplash(false)}
            className="px-10 py-4 bg-primary text-[#FFDDEE] rounded-full font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[0.25em] uppercase hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] transition-all active:scale-95"
          >
            {enterText}
          </button>
        )}
      </div>
    </div>
  );
}
