'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface MissionHeroProps {
  playVideo?: boolean;
}

function MissionHeroContent({ playVideo = false }: MissionHeroProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const skipSplash = searchParams.get('skipSplash') === 'true';
  const [isMounted, setIsMounted] = useState(false);
  const [videoState, setVideoState] = useState<'playing' | 'finished'>(playVideo && !skipSplash ? 'playing' : 'finished');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (skipSplash) {
      setVideoState('finished');
    }
  }, [skipSplash]);

  const endVideo = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setVideoState('finished');
  };

  useEffect(() => {
    if (videoState !== 'playing') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', 'Space', 'Enter', 'Escape'].includes(e.code) || ['ArrowDown', 'PageDown', ' ', 'Enter', 'Escape'].includes(e.key)) {
        e.preventDefault();
        endVideo();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        e.preventDefault();
        endVideo();
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [videoState]);

  const handleOurMissionClick = () => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  if (!isMounted) return <section id="hero-splash" className="w-full h-screen relative shrink-0 snap-start snap-always bg-background" />;

  return (
    <>
      {/* Fixed Video Splash Overlay - Fades out smoothly into Mission Hero section */}
      {playVideo && (
        <div
          onWheel={(e) => {
            e.preventDefault();
            endVideo();
          }}
          onTouchMove={(e) => {
            endVideo();
          }}
          className={`fixed inset-0 z-60 bg-background overflow-hidden flex flex-col items-center justify-center select-none transition-opacity duration-1000 ${
            videoState === 'playing' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <video
            ref={videoRef}
            autoPlay
            loop={false}
            muted
            playsInline
            onEnded={endVideo}
            className="absolute inset-0 w-full h-full object-cover z-10"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Skip Intro Button */}
          <div 
            className="absolute inset-0 z-20 cursor-pointer flex flex-col items-end justify-end p-8 md:p-12"
            onClick={endVideo}
          >
            <span className="text-white/80 hover:text-white transition-colors font-label-caps tracking-widest text-[10px] md:text-xs uppercase drop-shadow-md bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 hover:scale-105 active:scale-95">
              Skip Intro &rarr;
            </span>
          </div>
        </div>
      )}

      {/* Section 1: Mission Hero Splash Text & Actions */}
      <section
        id="hero-splash"
        className="w-full h-screen relative shrink-0 snap-start snap-always overflow-hidden flex flex-col items-start justify-center z-40 bg-background select-none"
      >
        {/* Background Image */}
        <img
          src="/hero-bg.jpg"
          alt="Mission Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Text Overlay Wash */}
        <div className="absolute inset-0 bg-[#FFDDEE]/90 backdrop-blur-[1px] z-10 pointer-events-none" />

        {/* Splash Content */}
        <div className="relative z-20 flex flex-col px-6 w-full items-start text-left max-w-[var(--spacing-container-max-width)] mx-auto">
          <div className="flex flex-col items-start">
            <span 
              className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[64px] md:text-[80px] leading-none mb-2 text-[#ff0099] select-none block"
              style={{ letterSpacing: '0.15em', textShadow: '0 0 40px rgba(255,221,238,1), 0 0 20px rgba(255,221,238,0.8), 0 0 10px rgba(255,221,238,0.6)' }}
            >
              DIANA
            </span>
            <span className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[32px] md:text-[40px] leading-tight mb-4 select-none text-[#0a0507] block"
              style={{ letterSpacing: '0.02em', textShadow: '0 0 40px rgba(255,221,238,1), 0 0 20px rgba(255,221,238,0.8), 0 0 10px rgba(255,221,238,0.6)' }}
            >
              where daily actions quietly support animals
            </span>
            <span
              className="font-body-lg italic text-[#ff0099] text-[20px] select-none block mb-6"
              style={{ textShadow: '0 0 30px rgba(255,221,238,1), 0 0 15px rgba(255,221,238,0.8)' }}
            >
              the global currency of compassion and celebration
            </span>
          </div>
          
          <p className="font-body-lg text-[var(--text-body-lg)] text-text-main/80 mb-12 select-none font-medium max-w-2xl">
            DIANA is the financial clearinghouse connecting animal sanctuaries to conscious consumers and ethical merchants. By merging daily commerce with continuous advocacy, we&apos;ve built an ecosystem where your ordinary actions quietly support the extraordinary work of saving animals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => window.dispatchEvent(new Event('openAppDemo'))}
              className="bg-primary text-[#FFDDEE] px-10 py-4 rounded-full border-2 border-primary font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
            >
              VIEW DEMO
            </button>
            <button
              onClick={handleOurMissionClick}
              className="bg-[#FFDDEE] border-2 border-primary text-primary px-10 py-4 rounded-full font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:shadow-[0_8px_30px_rgba(255,221,238,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
            >
              OUR MISSION
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default function MissionHero(props: MissionHeroProps) {
  return (
    <Suspense fallback={<section id="hero-splash" className="w-full h-screen relative shrink-0 snap-start snap-always bg-background" />}>
      <MissionHeroContent {...props} />
    </Suspense>
  );
}
