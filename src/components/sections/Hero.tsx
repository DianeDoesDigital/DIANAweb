'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden flex flex-col justify-center bg-background">
      {/* Light Overlay for content legibility - baked in styling now since video is gone */}
      <div className="absolute inset-0 bg-[#FFDDEE]/10 backdrop-blur-[1px] z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] text-left">
        <div className="max-w-4xl mr-auto">
          <h1 
            className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[64px] md:text-[80px] leading-none mb-2 text-[#ff0099] select-none"
            style={{ 
              letterSpacing: '0.15em',
              textShadow: '0 0 40px rgba(255,221,238,1), 0 0 20px rgba(255,221,238,0.8), 0 0 10px rgba(255,221,238,0.6)'
            }}
          >
            DIANA
          </h1>
          <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[32px] md:text-[40px] leading-tight mb-8 select-none text-[#0a0507]"
            style={{ 
              letterSpacing: '0.02em',
              textShadow: '0 0 40px rgba(255,221,238,1), 0 0 20px rgba(255,221,238,0.8), 0 0 10px rgba(255,221,238,0.6)'
            }}
          >
            where daily actions quietly support animals
          </h2>
          <p
            className="font-body-lg italic text-[#ff0099] text-[20px] mb-6 select-none"
            style={{ textShadow: '0 0 30px rgba(255,221,238,1), 0 0 15px rgba(255,221,238,0.8)' }}
          >
            the global currency of compassion and celebration
          </p>
          <p 
            className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-2xl mb-12 select-none"
            style={{ textShadow: '0 0 30px rgba(255,221,238,1), 0 0 15px rgba(255,221,238,0.8)' }}
          >
            DIANA is the financial clearinghouse connecting conscious consumers, ethical merchants, and animal sanctuaries. By merging daily commerce with continuous advocacy, we've built an ecosystem where your ordinary actions quietly support the extraordinary work of saving animals.
          </p>

          <div className="flex flex-col sm:flex-row items-start justify-start gap-6">
            <Link
              href="/advocates#activate"
              className="w-full sm:w-auto px-8 min-w-[240px] h-[60px] flex items-center justify-center bg-primary text-[#FFDDEE] rounded-full border-2 border-primary font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[0.25em] uppercase text-[15px] hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] hover:scale-[1.03] active:scale-[0.97] transition-all"
            >
              ACTIVATE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
