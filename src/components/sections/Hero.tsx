'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

type IntroState = 'playing_video' | 'showing_content';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [introState, setIntroState] = useState<IntroState>('playing_video');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const skipVideo = () => {
    if (introState === 'playing_video') {
      setIntroState('showing_content');
    }
  };

  // Prevent hydration mismatch flash
  if (!isMounted) {
    return <div className="w-full min-h-screen bg-background" />;
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center bg-background">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop={false}
        muted
        playsInline
        onEnded={skipVideo}
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Video Overlay / Skip mechanism */}
      {introState === 'playing_video' && (
        <div 
          className="absolute inset-0 z-10 cursor-pointer flex flex-col items-end justify-end p-8 md:p-12"
          onClick={skipVideo}
        >
          <span className="text-white/50 hover:text-white transition-colors font-label-caps tracking-widest text-[10px] md:text-xs uppercase drop-shadow-md">
            Skip Intro
          </span>
        </div>
      )}

      {/* Light Overlay for content legibility */}
      <div 
        className={`absolute inset-0 bg-[#FFDDEE]/90 backdrop-blur-[1px] transition-opacity duration-1000 z-10 pointer-events-none ${
          introState === 'showing_content' ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      {/* Hero Content */}
      <div 
        className={`relative z-20 w-full max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] transition-opacity duration-[1500ms] text-left ${
          introState === 'showing_content' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
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
          <h2 
            className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[32px] md:text-[40px] leading-tight mb-8 select-none text-[#0a0507]"
            style={{ 
              letterSpacing: '0.02em',
              textShadow: '0 0 40px rgba(255,221,238,1), 0 0 20px rgba(255,221,238,0.8), 0 0 10px rgba(255,221,238,0.6)'
            }}
          >
            Digital Infrastructure for Animal Networks and Advocacy
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
            DIANA is the financial clearinghouse connecting conscious consumers, ethical merchants, and animal sanctuaries. By merging daily commerce with continuous advocacy, we&apos;ve built an ecosystem where your ordinary actions quietly support the extraordinary work of saving animals.
          </p>

          <div className="flex flex-col sm:flex-row items-start justify-start gap-6">
            <Link
              href="/home#activate"
              className="w-full sm:w-auto px-8 min-w-[240px] h-[60px] flex items-center justify-center bg-primary text-[#FFDDEE] rounded-full border-2 border-primary font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[0.25em] uppercase text-[15px] hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] hover:scale-[1.03] active:scale-[0.97] transition-all"
            >
              JOIN THE NEXUS
            </Link>
            <Link
              href="/home#how-it-works"
              className="w-full sm:w-auto px-8 min-w-[240px] h-[60px] flex items-center justify-center bg-[#FFDDEE] text-primary rounded-full border-2 border-primary font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[0.25em] uppercase text-[15px] hover:shadow-[0_8px_30px_rgba(255,221,238,0.45)] hover:scale-[1.03] active:scale-[0.97] transition-all"
            >
              LEARN HOW IT WORKS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
