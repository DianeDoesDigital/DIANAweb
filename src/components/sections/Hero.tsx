'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onActivate: () => void;
}

export default function Hero({ onActivate }: HeroProps) {
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Logo fades in and scales up
    const logo = logoRef.current;
    const content = contentRef.current;
    if (!logo || !content) return;

    logo.style.opacity = '0';
    logo.style.transform = 'scale(0.75)';
    content.style.opacity = '0';
    content.style.transform = 'translateY(24px)';

    // Logo reveal
    setTimeout(() => {
      logo.style.transition = 'opacity 1.2s ease, transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)';
      logo.style.opacity = '1';
      logo.style.transform = 'scale(1)';
    }, 100);

    // Content fades in after logo
    setTimeout(() => {
      content.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
      content.style.opacity = '1';
      content.style.transform = 'translateY(0)';
    }, 900);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-background flex flex-col items-center justify-center">
      {/* Top ambient glow */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-ambient-glow pointer-events-none" />

      {/* Ambient glow behind logo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/5 blur-[80px] rounded-full" />
      </div>

      {/* Bottom hero fade full to blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-hero-fade pointer-events-none z-20" />

      <div className="relative z-10 max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] flex flex-col items-center text-center">
        {/* Logo reveal */}
        <div ref={logoRef} style={{ opacity: 0 }} className="mb-8">
          <div className="relative w-52 h-52 md:w-72 md:h-72">
            {/* Outer border ring */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
            <Image
              src="/diana-logo.png"
              alt="DIANA: Digital Infrastructure for Animal Networks and Advocacy"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* DIANA wordmark under logo */}
        <div ref={contentRef} style={{ opacity: 0 }} className="flex flex-col items-center gap-4">
          <h1 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[56px] md:text-[80px] leading-none tracking-[0.08em] text-secondary neon-glow select-none">
            DIANA
          </h1>

          <p className="font-body-lg font-[var(--text-body-lg--font-weight)] text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted italic select-none">
            where daily actions quietly support animals
          </p>

          <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary/60 uppercase select-none">
            Digital Infrastructure for Animal Networks and Advocacy
          </span>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
            <button
              id="hero-activate-btn"
              onClick={onActivate}
              className="bg-primary text-white px-10 py-4 rounded-md text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all neon-border min-w-[180px]"
            >
              ACTIVATE
            </button>
            <Link
              href="#how-it-works"
              id="hero-learn-link"
              className="border border-border-main text-secondary px-10 py-4 rounded-md text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:bg-surface-hover hover:scale-[1.02] active:scale-[0.98] transition-all min-w-[180px] text-center"
            >
              learn how it works
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-1 animate-bounce">
          <ChevronDown className="text-text-subtle" size={24} />
        </div>
      </div>
    </section>
  );
}
