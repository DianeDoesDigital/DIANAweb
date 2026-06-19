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
  const [showSplash, setShowSplash] = useState(!skipSplash);
  const [videoState, setVideoState] = useState<'playing' | 'finished'>(playVideo ? 'playing' : 'finished');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only lock scroll if this splash is actually visible and blocking content
    // Note: On the root page (/), there is no content below to block, but locking scroll doesn't hurt.
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSplash]);

  const endVideo = () => {
    setVideoState('finished');
  };

  const handleOurMissionClick = () => {
    if (playVideo) {
      // If we are on the root route (/), navigate to the mission page and skip the splash there.
      router.push('/mission?skipSplash=true');
    } else {
      // If we are already on the /mission route, just dismiss the splash. No scrolling, stay at the top.
      setShowSplash(false);
    }
  };

  const handleActivateClick = () => {
    router.push('/advocates#activate');
  };

  if (!isMounted) return <div className="fixed inset-0 z-[100] bg-background" />;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-start justify-center transition-opacity duration-1000 ${
        showSplash ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Background Image (always present, but obscured by video initially if playing) */}
      <img
        src="/hero-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Video Overlay */}
      {playVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop={false}
          muted
          playsInline
          onEnded={endVideo}
          className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 ${
            videoState === 'playing' ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      )}

      {/* Video Skip Button */}
      {playVideo && videoState === 'playing' && (
        <div 
          className="absolute inset-0 z-20 cursor-pointer flex flex-col items-end justify-end p-8 md:p-12"
          onClick={endVideo}
        >
          <span className="text-white/50 hover:text-white transition-colors font-label-caps tracking-widest text-[10px] md:text-xs uppercase drop-shadow-md">
            Skip Intro
          </span>
        </div>
      )}

      {/* Text Overlay Wash - fades in when video ends, or instantly there if no video */}
      <div 
        className={`absolute inset-0 bg-[#FFDDEE]/90 backdrop-blur-[1px] z-20 pointer-events-none transition-opacity duration-1000 ${
          videoState === 'finished' ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      {/* Splash Content - fades in when video ends, or instantly there if no video */}
      <div 
        className={`relative z-30 flex flex-col px-6 w-full items-start text-left max-w-[var(--spacing-container-max-width)] mx-auto transition-opacity duration-[1500ms] ${
          videoState === 'finished' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
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
          DIANA is the financial clearinghouse connecting conscious consumers, ethical merchants, and animal sanctuaries. By merging daily commerce with continuous advocacy, we've built an ecosystem where your ordinary actions quietly support the extraordinary work of saving animals.
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
    </div>
  );
}

export default function MissionHero(props: MissionHeroProps) {
  return (
    <Suspense fallback={<div className="fixed inset-0 z-[100] bg-background" />}>
      <MissionHeroContent {...props} />
    </Suspense>
  );
}
