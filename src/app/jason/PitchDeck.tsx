'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = slides.length + 2;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const showNav = currentSlide < totalSlides - 1;
  const isEndSlide = currentSlide >= totalSlides - 2;

  return (
    <div className="relative w-full h-screen bg-ambient-glow overflow-hidden flex flex-col items-center justify-center">
      {/* Slide Content */}
      <div className="w-full max-w-5xl px-8 z-10 transition-all duration-500 ease-in-out h-[80vh] [&>div]:h-full [&>div]:flex [&>div]:flex-col [&>div]:justify-center">
        {currentSlide === slides.length ? (
          <ConclusionSlide onSecretClick={() => setCurrentSlide(totalSlides - 1)} />
        ) : currentSlide === slides.length + 1 ? (
          <div className="glass-surface p-16 rounded-3xl text-center space-y-8 transform flex flex-col items-center justify-center h-[80vh]">
            <DealCloser />
          </div>
        ) : (
          slides[currentSlide]
        )}
      </div>

      {/* Navigation Controls */}
      <div className={`absolute bottom-8 left-0 right-0 flex justify-between items-center px-12 z-20 transition-opacity duration-500 ${showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-3 rounded-full glass-surface transition-opacity ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
        >
          <ChevronLeft className="w-8 h-8 text-[var(--color-primary)]" />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalSlides - 1 }).map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-[var(--color-primary)]' : 'w-2 bg-[var(--color-border-main)]'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={isEndSlide}
          className={`p-3 rounded-full glass-surface transition-opacity ${isEndSlide ? 'opacity-0 cursor-default pointer-events-none' : 'opacity-100 hover:scale-110'}`}
        >
          <ChevronRight className="w-8 h-8 text-[var(--color-primary)]" />
        </button>
      </div>
    </div>
  );
}

// Confetti Component
const Confetti = () => {
  const colors = ['#ff0099', '#00f2fe', '#4facfe', '#ff0844', '#f5576c'];
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {[...Array(150)].map((_, i) => {
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 3 + 2;
        const animationDelay = Math.random() * 0.5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <div 
            key={i} 
            className="absolute top-[-5%]"
            style={{
              left: `${left}%`,
              width: '12px',
              height: '12px',
              backgroundColor: color,
              animation: `fall ${animationDuration}s linear ${animationDelay}s forwards`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        );
      })}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// Interactive Demo Slide Component
function InteractiveDemoSlide() {
  const [showExplainer, setShowExplainer] = React.useState(true);

  return (
    <div className="glass-surface p-12 rounded-3xl space-y-4">
      <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-2">The Asset: Production-Ready</h2>
      <div className="grid grid-cols-2 gap-8 items-center h-[calc(100%-80px)]">
        <div className="space-y-6">
          <p className="font-body-lg text-[var(--color-secondary)]">
            DIANA is built. We bypass the standard 18-month development cycle and the high-burn engineering costs that come with it. It&apos;s a fully engineered, interactive ecosystem. <strong className="text-[var(--color-primary)]">You can even try it yourself right now.</strong>
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-[var(--color-primary)]/5 px-4 py-3 rounded-xl border border-[var(--color-primary)]/20">
              <span className="text-[var(--color-primary)] font-bold text-lg mt-0.5">•</span>
              <span className="font-body-md text-[var(--color-text-subtle)]"><strong>73,500+ Lines of Code:</strong> Proprietary, cross-platform architecture ready for immediate market deployment.</span>
            </div>
            <div className="flex items-start gap-3 bg-[var(--color-primary)]/5 px-4 py-3 rounded-xl border border-[var(--color-primary)]/20">
              <span className="text-[var(--color-primary)] font-bold text-lg mt-0.5">•</span>
              <span className="font-body-md text-[var(--color-text-subtle)]"><strong>DIANA Web:</strong> Next.js global marketing funnel & brand presence.</span>
            </div>
            <div className="flex items-start gap-3 bg-[var(--color-primary)]/5 px-4 py-3 rounded-xl border border-[var(--color-primary)]/20">
              <span className="text-[var(--color-primary)] font-bold text-lg mt-0.5">•</span>
              <span className="font-body-md text-[var(--color-text-subtle)]"><strong>DIANA App:</strong> React Native consumer marketplace & merchant ecosystem.</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="relative w-[260px] h-[520px] bg-[#0A0507] rounded-[40px] border-[6px] border-[#0A0507] overflow-hidden">
            {showExplainer && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#0A0507] rounded-b-2xl z-40"></div>
            )}
            
            {showExplainer && (
              <div className="absolute inset-0 z-30 bg-[#FFDDEE] flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-5 w-[90%] flex flex-col items-center shadow-sm border border-white/50">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <img src="/diana-logo.png" alt="DIANA" className="w-full h-full object-contain drop-shadow-md" />
                  </div>
                  <h3 className="font-headline-lg text-[22px] text-primary mb-3" style={{ fontFamily: 'Playfair Display' }}>App Demo</h3>
                  <p className="font-body-sm text-secondary font-medium leading-tight mb-4 text-xs">
                    Try any feature first-hand without entering personal or payment details.
                  </p>
                  <button
                    onClick={() => setShowExplainer(false)}
                    className="w-full py-3 bg-primary text-white rounded-full font-label-caps tracking-[0.2em] text-xs uppercase hover:scale-105 transition-transform shadow-[0_4px_14px_rgba(255,0,153,0.39)]"
                  >
                    LET'S GO!
                  </button>
                  <p className="text-[8px] text-text-muted mt-4 leading-tight px-1 font-body-sm">
                    Data is for demo purposes only. Risk-free exploration.
                  </p>
                </div>
              </div>
            )}

            <iframe
              src="https://appdemo.dianafortheanimals.org/nexus"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 'calc(100% / 0.7)',
                height: 'calc(100% / 0.7)',
                transform: 'scale(0.7)',
                transformOrigin: 'top left',
                border: 'none',
              }}
              loading="eager"
              title="DIANA App Demo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Deal Closer Signature Pad Component
function DealCloser() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = React.useState(false);
  const [hasSigned, setHasSigned] = React.useState(false);
  const [dealClosed, setDealClosed] = React.useState(false);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#ff0099';
      }
    }
  }, [dealClosed]);

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDrawing(true);
    setHasSigned(true);
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setHasSigned(false);
    setDealClosed(false);
  };

  return (
    <div className="w-full flex flex-col items-center mt-8 space-y-6">
      {dealClosed && <Confetti />}
      
      {!dealClosed ? (
        <div className="bg-white/10 p-6 rounded-2xl border border-[var(--color-primary)]/30 w-full max-w-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="font-label-caps text-sm text-[var(--color-text-subtle)]">Digital Signature</span>
            {hasSigned && <button onClick={clearSignature} className="text-xs text-[var(--color-primary)] hover:underline z-10 relative">Clear</button>}
          </div>
          <div className="relative touch-none">
            <canvas
              ref={canvasRef}
              width={500}
              height={150}
              className="bg-white/80 rounded-xl cursor-crosshair w-full h-[150px] border border-dashed border-[var(--color-text-subtle)]"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseOut={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />
          </div>
          <div className="text-center mt-4 border-t border-[var(--color-primary)]/20 pt-2">
            <span className="font-headline-md text-lg text-[var(--color-primary)]">Jason Teague</span>
            <span className="block text-xs text-[var(--color-text-subtle)]">Seed Investor</span>
          </div>
          
          <button 
            disabled={!hasSigned}
            onClick={() => setDealClosed(true)}
            className={`w-full mt-6 py-4 rounded-xl font-headline-md text-xl transition-all ${hasSigned ? 'bg-[var(--color-primary)] text-white shadow-[0_0_20px_rgba(255,0,153,0.4)] hover:scale-[1.02] cursor-pointer' : 'bg-gray-500/20 text-gray-400 cursor-not-allowed opacity-50'}`}
          >
            Commit to Seed Round
          </button>
        </div>
      ) : (
        <div className="bg-[var(--color-primary)]/20 p-8 rounded-2xl border border-[var(--color-primary)] w-full max-w-lg text-center animate-in fade-in zoom-in duration-500">
          <span className="font-impact-stat text-5xl text-[var(--color-primary)] block mb-4">DEAL SECURED</span>
          <p className="font-body-md text-[var(--color-text-subtle)]">Welcome to the future of DIANA, Jason.</p>
        </div>
      )}
    </div>
  );
}

function ConclusionSlide({ onSecretClick }: { onSecretClick: () => void }) {
  return (
    <div className="glass-surface p-16 rounded-3xl text-center space-y-8 transform flex flex-col items-center justify-center h-full">
      <h2 className="font-headline-lg text-6xl text-[var(--color-primary)] mb-4">Join the Movement</h2>
      <p className="font-body-lg text-[var(--color-secondary)] max-w-2xl mx-auto">
        DIANA is built to be the central financial clearinghouse of the conscious economy. Every transaction funds the future of animal advocacy. It is already in motion. Your investment puts it in the hands of every conscious consumer on the planet. Let&apos;s make the inevitable happen sooner rather than later.
      </p>
      <div className="font-headline-md text-3xl mt-4 italic leading-tight">
        <span className="block text-[var(--color-primary)]">the global currency of compassion and celebration</span>
      </div>
      
      <div className="mt-12 space-y-4">
        <p className="font-label-caps tracking-widest text-[var(--color-secondary)]">NEXT STEPS</p>
        <div className="flex justify-center gap-4">
          <div 
            onClick={onSecretClick}
            className="bg-white/40 px-6 py-3 rounded-full text-[var(--color-primary)] font-medium flex items-center select-none"
          >
            1. Confirm Seed Commitment
          </div>
          <div className="bg-white/40 px-6 py-3 rounded-full text-[var(--color-secondary)] font-medium flex items-center">2. Initiate Equity Setup</div>
          <div className="bg-white/40 px-6 py-3 rounded-full text-[var(--color-secondary)] font-medium flex items-center">3. Execute Onboarding Sprint</div>
        </div>
      </div>
    </div>
  );
}

function CapitalStrategySlide() {
  return (
    <div className="glass-surface p-12 rounded-3xl space-y-8">
      <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">Your Investment, Protected</h2>
      <div className="grid grid-cols-2 gap-8 items-stretch mt-8">
        <div className="flex flex-col gap-4 h-full">
          <div className="bg-white/40 p-8 rounded-xl border-t-4 border-[var(--color-primary)] flex flex-col flex-1">
            <h3 className="font-label-caps text-xl text-[var(--color-secondary)] mb-4 border-b border-[var(--color-primary)]/20 pb-4">Grants &amp; Non-Dilutive Capital</h3>
            <p className="font-body-md text-[var(--color-text-subtle)]">
              We are aggressively pursuing global incubator grants and utilizing the <strong>43.5% Australian R&amp;D Tax Incentive</strong>. Eligible technical spend returns nearly half its cost in cash, extending our runway and increasing our valuation <strong>without diluting your equity stake</strong>.
            </p>
          </div>
          <div className="bg-[var(--color-secondary)]/10 p-4 rounded-xl border border-[var(--color-secondary)]/20 min-h-[80px] flex items-center justify-center">
            <p className="font-body-sm text-[var(--color-text-subtle)] italic text-center">
              Every grant dollar secured extends DIANA&apos;s runway, raises its valuation, and compounds the return potential of your equity stake, all without touching your ownership.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-full">
          <div className="bg-white/40 p-8 rounded-xl border-t-4 border-[var(--color-secondary)] flex flex-col flex-1">
            <h3 className="font-label-caps text-xl text-[var(--color-primary)] mb-4 border-b border-[var(--color-primary)]/20 pb-4">Future Institutional Funding</h3>
            <p className="font-body-md text-[var(--color-text-subtle)]">
              Should DIANA open to future institutional investors (e.g., Series A), your shares carry standard <strong>pro-rata rights</strong>. You retain the option to participate in future rounds to maintain your ownership percentage, or allow standard, equal dilution alongside the founder.
            </p>
          </div>
          <div className="bg-[var(--color-primary)]/10 p-4 rounded-xl border border-[var(--color-primary)]/20 min-h-[80px] flex items-center justify-center">
            <p className="font-body-sm text-[var(--color-text-subtle)] italic text-center">
              Equal dilution ensures alignment. Trading a smaller percentage for a piece of a significantly larger valuation pie is the standard mechanism for venture returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const slides = [
  // Slide 1: Welcome
  <div key="slide-1" className="glass-surface p-16 rounded-3xl text-center space-y-6 transform">
    <img src="/diana-logo.png" alt="DIANA Logo" className="h-48 w-auto mx-auto mb-2 drop-shadow-md" />
    <h1 className="font-headline-lg text-6xl text-[var(--color-primary)] mb-4">DIANA</h1>
    <p className="font-label-caps text-xl text-[var(--color-secondary)] tracking-widest mb-2">Digital Infrastructure for Animal Networks & Advocacy</p>
    <div className="font-body-lg italic mt-2">
      <span className="block text-[var(--color-primary)]">the global currency of compassion and celebration</span>
    </div>
    <div className="h-px w-24 bg-[var(--color-primary)] mx-auto my-8 opacity-50"></div>
    <h2 className="font-headline-md text-3xl">Investment Proposition</h2>
    <p className="font-body-lg text-[var(--color-text-subtle)]">Prepared for Jason Teague • June 2026</p>
  </div>,

  // Slide 2: The Problem & Solution
  <div key="slide-2" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">The Market Gap</h2>
    <div className="grid grid-cols-2 gap-8 font-body-md text-[var(--color-text-subtle)]">
      <div className="space-y-4 bg-white/40 p-8 rounded-xl border border-white/60">
        <h3 className="font-headline-md text-2xl text-[var(--color-secondary)] border-b border-[var(--color-primary)]/30 pb-2">The Problem</h3>
        <p>The vegan economy is highly fragmented. Consumers struggle to find reliable businesses. Merchants struggle to find targeted audiences without paying massive ad premiums. Sanctuaries struggle with donor fatigue.</p>
      </div>
      <div className="space-y-4 bg-white/40 p-8 rounded-xl border border-white/60">
        <h3 className="font-headline-md text-2xl text-[var(--color-primary)] border-b border-[var(--color-primary)]/30 pb-2">The DIANA Solution</h3>
        <p>A unified, closed-loop financial clearinghouse where daily actions quietly support animals. We connect consumers directly to merchants, passively automating sanctuary funding through every transaction.</p>
      </div>
    </div>
  </div>,

  // Slide 3: The Asset: Production-Ready (Combined Demo)
  <InteractiveDemoSlide key="slide-3" />,

  // Slide 4: The Global Travel Wallet
  <div key="slide-4-wallet" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">The Global Travel Wallet</h2>
    <div className="grid grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <p className="font-body-lg text-[var(--color-secondary)]">A borderless financial ecosystem designed for the globe-trotting conscious consumer.</p>
        <ul className="space-y-4 font-body-md text-[var(--color-text-subtle)]">
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>Zero-Friction Top Ups:</strong> Users load their DIANA wallet easily using their local currency.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>Borderless Payments:</strong> Pay any DIANA partner business, anywhere in the world, directly from the app.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>No Hidden Fees:</strong> Bypass traditional bank conversion markups and international transaction fees entirely.</span>
          </li>
        </ul>
      </div>
      <div className="bg-[var(--color-background)] p-8 rounded-2xl border border-[var(--color-primary)]/20 text-center flex flex-col justify-center h-full">
        <span className="font-label-caps text-[var(--color-text-subtle)] mb-4">The Lifestyle Feature</span>
        <span className="font-impact-stat text-5xl text-[var(--color-primary)] mb-4">One Wallet.</span>
        <span className="font-impact-stat text-5xl text-[var(--color-secondary)]">Global Access.</span>
        <p className="font-body-sm text-[var(--color-text-subtle)] mt-6 border-t border-[var(--color-primary)]/20 pt-4">Seamless integration into the global travel lifestyle.</p>
      </div>
    </div>
  </div>,

  // Slide 5: Multi-Impact Financial Engine
  <div key="slide-4" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">The Multi-Impact Financial Engine</h2>
    <div className="space-y-6 font-body-lg">
      <p>A frictionless transactional model where every dollar spent creates compounding value, automatically split at the point of sale.</p>
      
      <div className="bg-white/50 p-8 rounded-xl border border-[var(--color-primary)]/20">
        <div className="grid grid-cols-3 gap-4 font-label-caps text-sm text-center items-start">
          <div className="flex flex-col items-center justify-start">
            <span className="block text-4xl text-[var(--color-secondary)] mb-2">Max 90%</span>
            <span className="text-[var(--color-text-subtle)]">Merchant Keeps</span>
          </div>
          <div className="flex flex-col items-center justify-start">
            <span className="block text-4xl text-[var(--color-primary)] mb-2">5%</span>
            <span className="text-[var(--color-text-subtle)]">DIANA Revenue</span>
            <span className="text-xs text-[var(--color-primary)]/80 mt-2 tracking-normal">(- 5% to Sanctuary)</span>
          </div>
          <div className="flex flex-col items-center justify-start">
            <span className="block text-4xl text-[var(--color-secondary)] mb-2">Min 5%</span>
            <span className="text-[var(--color-text-subtle)]">Sanctuary Funding</span>
            <span className="text-xs text-[var(--color-primary)]/80 mt-2 tracking-normal">(+ DIANA's 5%)</span>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Slide 6: The Founder Advantage
  <div key="slide-founder" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">The Founder Advantage</h2>
    <div className="grid grid-cols-2 gap-8 items-stretch">
      <div className="space-y-6">
        <p className="font-body-md text-[var(--color-text-subtle)]">
          The execution of DIANA is uniquely de-risked by having a founder who combines technical build capability with genuine market insight.
        </p>
        <ul className="space-y-4 font-body-md text-[var(--color-text-subtle)]">
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>Built in-House:</strong> Solo-built the complete web platform and mobile app in just 5 months, bypassing what would normally cost $450,000+ in software agency development fees.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>Real Market Understanding:</strong> Founder of the first all-vegan pizzeria in the Philippines, bringing firsthand experience of what ethical business owners actually need, combined with over a decade as a conscious consumer.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>Trusted Relationships:</strong> Genuine friendships and collaborations with well-known vegan advocates, business owners, and community leaders who are ready to support and champion our launch.</span>
          </li>
        </ul>
      </div>
      <div className="relative h-full flex flex-col items-center justify-center p-8 bg-[var(--color-background)] rounded-2xl border border-[var(--color-primary)]/20 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-primary)]/5 z-0"></div>
        <img src="/diane-founder.jpg" alt="Diane" className="w-48 h-48 rounded-full border-4 border-[#ff0099] mb-6 shadow-[0_0_30px_rgba(255,0,153,0.3)] relative z-10 object-cover" />
        <span className="font-headline-lg text-4xl text-[#ff0099] relative z-10">DIANE</span>
        <span className="font-headline-md text-xl text-[var(--color-secondary)] relative z-10 mb-4">Diana Rose G. Mejilla</span>
        <span className="font-body-sm text-[var(--color-secondary)] text-center relative z-10 mb-4 px-4">The visionary, the builder, and the target market, all in one.</span>
        <span className="font-label-caps text-xl text-[#ff0099] relative z-10">Founder &amp; CEO</span>
      </div>
    </div>
  </div>,

  // Slide 7: Our Early Advantages
  <div key="slide-5" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">Our Early Advantages</h2>
    <div className="grid grid-cols-2 gap-6 font-body-md text-[var(--color-text-subtle)]">
      <div className="glass-surface p-6 rounded-xl border border-white/40 flex flex-col">
        <h3 className="font-headline-md text-xl text-[var(--color-secondary)] mb-2">Ready Partner Businesses</h3>
        <p className="flex-grow">Close personal connections with a curated group of ethical business owners who are excited to be our first partner venues upon launch.</p>
      </div>
      <div className="glass-surface p-6 rounded-xl border border-white/40 flex flex-col">
        <h3 className="font-headline-md text-xl text-[var(--color-secondary)] mb-2">Organic Word-of-Mouth</h3>
        <p className="flex-grow">Our friends and community partners reach over 48M animal lovers globally. Their authentic excitement to share DIANA means we can attract our initial user base without spending thousands on paid ads.</p>
      </div>
      <div className="glass-surface p-6 rounded-xl border border-white/40 flex flex-col">
        <h3 className="font-headline-md text-xl text-[var(--color-secondary)] mb-2">Capturing Displaced Users</h3>
        <p className="flex-grow">The major vegan review app abillion closed down recently, leaving a massive community of active users searching for a new daily platform. DIANA is perfectly timed to welcome them.</p>
      </div>
    </div>
  </div>,

  // Slide 8: Market Strategy & Timeline
  <div key="slide-6" className="glass-surface p-12 rounded-3xl space-y-6">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-1">Path to Profitability &amp; Timelines</h2>
    <p className="font-body-md text-[var(--color-secondary)]">To provide complete transparency and show how safe your investment is, we mapped out both an optimistic growth plan and a conservative baseline plan to reach our 1,000 active user break-even goal.</p>
    
    <div className="grid grid-cols-2 gap-6 items-stretch mt-4">
      {/* Optimistic Track */}
      <div className="bg-white/40 p-6 rounded-2xl border-t-4 border-[var(--color-primary)] flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex justify-between items-center mb-4 border-b border-[var(--color-primary)]/20 pb-3">
            <div>
              <h3 className="font-label-caps text-lg text-[var(--color-primary)]">Projected Timeline</h3>
              <span className="text-xs font-semibold text-[var(--color-text-subtle)]">Optimistic Case • 6 Months</span>
            </div>
            <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-xs font-bold">Fast-Track</span>
          </div>
          <ul className="space-y-3 font-body-sm text-[var(--color-text-subtle)]">
            <li className="flex items-start gap-2"><span className="text-[var(--color-primary)] font-bold">Jul 2026:</span> <span>App Store launch with our first 50 partner businesses.</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--color-primary)] font-bold">Q3 2026:</span> <span>Rapid welcome of displaced abillion community members (320 users).</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--color-primary)] font-bold">Dec 2026:</span> <span>Hit **1,000 active monthly users** achieving full profitability.</span></li>
          </ul>
        </div>
        <div className="mt-4 pt-3 border-t border-[var(--color-primary)]/10 flex justify-between items-center text-xs font-bold text-[var(--color-primary)]">
          <span>Runway Needed: 6 Months</span>
          <span>Break-Even: Month 6</span>
        </div>
      </div>

      {/* Conservative Track */}
      <div className="bg-white/40 p-6 rounded-2xl border-t-4 border-[var(--color-secondary)] flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex justify-between items-center mb-4 border-b border-[var(--color-secondary)]/20 pb-3">
            <div>
              <h3 className="font-label-caps text-lg text-[var(--color-secondary)]">Minimum Timeline</h3>
              <span className="text-xs font-semibold text-[var(--color-text-subtle)]">Conservative Baseline • 12 Months</span>
            </div>
            <span className="px-3 py-1 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-full text-xs font-bold">Safe-Track</span>
          </div>
          <ul className="space-y-3 font-body-sm text-[var(--color-text-subtle)]">
            <li className="flex items-start gap-2"><span className="text-[var(--color-secondary)] font-bold">Q3 2026:</span> <span>Steady, organic onboarding across 25 initial local venues (150 users).</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--color-secondary)] font-bold">Q4 2026:</span> <span>Gradual word-of-mouth expansion across Australia &amp; Asia (400 users).</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--color-secondary)] font-bold">Jun 2027:</span> <span>Hit **1,000 active monthly users** comfortably within our 1-year runway.</span></li>
          </ul>
        </div>
        <div className="mt-4 pt-3 border-t border-[var(--color-secondary)]/10 flex justify-between items-center text-xs font-bold text-[var(--color-secondary)]">
          <span>Runway Secured: 12+ Months</span>
          <span>Break-Even: Month 12</span>
        </div>
      </div>
    </div>
  </div>,

  // Slide 9: How We Easily Protect Our 5% Profit
  <div key="slide-unit-economics" className="glass-surface p-12 rounded-3xl space-y-6">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-1">How We Easily Protect Our 5% Profit</h2>
    <p className="font-body-md text-[var(--color-secondary)]">Most apps lose half their revenue to credit card processing fees. Here is how DIANA keeps our operating costs near zero so we become profitable fast.</p>
    
    <div className="grid grid-cols-3 gap-6 mt-4">
      {/* Pillar 1 */}
      <div className="bg-white/40 p-6 rounded-2xl border-t-4 border-[var(--color-primary)] flex flex-col justify-between shadow-sm">
        <div>
          <span className="font-label-caps text-xs text-[var(--color-primary)] tracking-widest block mb-2">1. $0 Cost App Transactions</span>
          <h3 className="font-headline-md text-xl text-[var(--color-secondary)] mb-3">No Card Swipes Inside</h3>
          <p className="font-body-xs text-[var(--color-text-subtle)] leading-relaxed text-xs">
            When users shop at ethical businesses, watch ad double-ups, or send gifts to sanctuaries inside the app, we don&apos;t swipe a credit card every time. We simply adjust digital balances inside our system, which means our daily transaction cost is **$0.00**.
          </p>
        </div>
      </div>

      {/* Pillar 2 */}
      <div className="bg-white/40 p-6 rounded-2xl border-t-4 border-[var(--color-secondary)] flex flex-col justify-between shadow-sm">
        <div>
          <span className="font-label-caps text-xs text-[var(--color-secondary)] tracking-widest block mb-2">2. Cheap Wallet Loading</span>
          <h3 className="font-headline-md text-xl text-[var(--color-primary)] mb-3">Bank Transfer Rails</h3>
          <p className="font-body-xs text-[var(--color-text-subtle)] leading-relaxed text-xs">
            Instead of paying expensive 3% credit card fees when users load money into their wallet, we encourage simple local bank transfers (like PayID in Australia or GCash in Asia). Loading $50 only costs us a **tiny ~10¢–20¢ flat rate**.
          </p>
        </div>
      </div>

      {/* Pillar 3 */}
      <div className="bg-[var(--color-primary)]/10 p-6 rounded-2xl border-2 border-[var(--color-primary)] flex flex-col justify-between shadow-md">
        <div>
          <span className="font-label-caps text-xs text-[var(--color-primary)] tracking-widest block mb-2">3. Batched Bank Payouts</span>
          <h3 className="font-headline-md text-xl text-[var(--color-primary)] mb-3">Pure Profit Margin</h3>
          <p className="font-body-xs text-[var(--color-text-subtle)] leading-relaxed text-xs">
            Instead of sending thousands of tiny bank transfers every day, we send one combined bank payout to merchants and sanctuaries every two weeks or monthly. A $1 bank fee on a $500 payout is practically nothing, leaving our **5% fee intact as pure profit!**
          </p>
        </div>
      </div>
    </div>
  </div>,


  // Slide 7: Valuation Breakdown
  <div key="slide-7" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">What We Have Built</h2>
    <div className="space-y-6 font-body-md text-[var(--color-text-subtle)]">
      <h3 className="font-headline-md text-2xl text-[var(--color-secondary)] border-b border-[var(--color-primary)]/30 pb-2">Valuation Breakdown</h3>
      <div className="grid grid-cols-2 gap-8 mt-12">
        <div className="bg-white/40 p-12 rounded-2xl border-t-4 border-[var(--color-primary)] flex flex-col justify-between min-h-[280px] shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col mb-8">
            <h4 className="font-label-caps text-2xl text-[var(--color-primary)] mb-4">Software Build Value</h4>
            <span className="font-impact-stat text-5xl text-[var(--color-primary)]">$450,000</span>
          </div>
          <p className="font-body-lg text-[var(--color-text-subtle)] leading-relaxed">
            A complete, finished digital product including both the web platform and mobile app. Built over 1,800+ hours of dedicated engineering, saving the business from spending hundreds of thousands of dollars on external software agencies.
          </p>
        </div>
        <div className="bg-white/40 p-12 rounded-2xl border-t-4 border-[var(--color-secondary)] flex flex-col justify-between min-h-[280px] shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col mb-8">
            <h4 className="font-label-caps text-2xl text-[var(--color-secondary)] mb-4">Community Pipeline Value</h4>
            <span className="font-impact-stat text-5xl text-[var(--color-secondary)]">$185,000</span>
          </div>
          <p className="font-body-lg text-[var(--color-text-subtle)] leading-relaxed">
            The enormous advantage of starting with ready-to-onboard partner businesses and supportive advocate friends who can share DIANA with thousands of animal lovers, giving us immediate momentum without expensive advertising campaigns.
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 8: Valuation Methodology & Independent Validation
  <div key="slide-8-math" className="glass-surface p-12 rounded-3xl space-y-6">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-2">Valuation Check</h2>
    <p className="font-body-md text-[var(--color-secondary)]">How did we make sure our $635,000 AUD valuation is fair? We checked our numbers against two standard startup calculation methods.</p>
    
    <div className="grid grid-cols-3 gap-6 mt-4">
      {/* Our Valuation */}
      <div className="bg-[var(--color-primary)]/10 p-6 rounded-2xl border-2 border-[var(--color-primary)] flex flex-col justify-between shadow-md transform scale-[1.02]">
        <div>
          <span className="font-label-caps text-xs text-[var(--color-primary)] tracking-widest block mb-1">Our Agreed Baseline</span>
          <span className="font-impact-stat text-4xl text-[var(--color-primary)] block mb-3">$635,000</span>
          <p className="font-body-xs text-[var(--color-text-subtle)] leading-relaxed text-xs">
            Based directly on tangible assets: the actual cost to build the finished software ($450k) plus the immediate value of our initial community and partner connections ($185k).
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-[var(--color-primary)]/20 font-bold text-xs text-[var(--color-primary)] text-center">
          ✓ Solid &amp; Tangible
        </div>
      </div>

      {/* Berkus Method */}
      <div className="bg-white/40 p-6 rounded-2xl border-t-4 border-[var(--color-secondary)] flex flex-col justify-between shadow-sm">
        <div>
          <span className="font-label-caps text-xs text-[var(--color-secondary)] tracking-widest block mb-1">Method 1: Risk Reduction</span>
          <span className="font-impact-stat text-4xl text-[var(--color-secondary)] block mb-3">$750,000</span>
          <p className="font-body-xs text-[var(--color-text-subtle)] leading-relaxed text-xs">
            A standard early-stage calculation that assigns value for having a great core idea, a 100% working product ready to launch, domain experience, and existing industry relationships.
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-[var(--color-secondary)]/20 font-bold text-xs text-[var(--color-secondary)] text-center">
          +$115k Above Our Ask
        </div>
      </div>

      {/* Scorecard Method */}
      <div className="bg-white/40 p-6 rounded-2xl border-t-4 border-gray-400 flex flex-col justify-between shadow-sm">
        <div>
          <span className="font-label-caps text-xs text-gray-600 tracking-widest block mb-1">Method 2: Market Average</span>
          <span className="font-impact-stat text-4xl text-gray-700 block mb-3">$680,000</span>
          <p className="font-body-xs text-[var(--color-text-subtle)] leading-relaxed text-xs">
            Compares DIANA against average early tech startups in Australia (~$1.8M average), heavily discounted to keep things conservative, but rewarded for having the software fully built.
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-300 font-bold text-xs text-gray-600 text-center">
          +$45k Above Our Ask
        </div>
      </div>
    </div>
  </div>,

  // Slide 9: Total Valuation
  <div key="slide-8-total" className="glass-surface p-12 rounded-3xl space-y-8 flex flex-col items-center justify-center text-center h-full">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">The Final Valuation</h2>
    <div className="w-full max-w-2xl text-center p-12 bg-[var(--color-primary)]/10 rounded-3xl border-2 border-[var(--color-primary)]/30 transform hover:scale-105 transition-transform">
      <span className="font-label-caps block mb-4 text-[var(--color-text-subtle)] tracking-widest">Total Platform &amp; Brand Value</span>
      <span className="font-impact-stat text-7xl text-[var(--color-primary)]">AUD $635,000</span>
      <span className="block mt-4 font-body-lg text-[var(--color-secondary)] font-bold">Base Case Total</span>
    </div>
    <p className="font-body-md text-[var(--color-text-subtle)] mt-8 bg-white/40 p-4 rounded-xl max-w-lg">
      Optimistic Growth Target: <strong>AUD $925,000</strong>
    </p>
  </div>,

  // Slide 10: Granular Use of Funds ($50,000 Breakdown)
  <div key="slide-8" className="glass-surface p-12 rounded-3xl space-y-6">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-1">Where Your $50K Investment Goes</h2>
    <p className="font-body-sm text-[var(--color-secondary)]">Because the software is fully built and we don&apos;t need expensive advertising, your $50,000 capital goes directly into onboarding businesses and launching smoothly.</p>
    <div className="flex gap-1 rounded-full overflow-hidden h-3 w-full">
      <div className="bg-[var(--color-primary)] h-full" style={{ width: '50%' }} title="Partner Business Onboarding 50%"></div>
      <div className="bg-[var(--color-secondary)] h-full" style={{ width: '30%' }} title="Hosting & Legal Setup 30%"></div>
      <div className="bg-[var(--color-primary)]/40 h-full" style={{ width: '20%' }} title="Operations & Support 20%"></div>
    </div>
    <div className="grid grid-cols-3 gap-5 mt-2">
      {/* Category 1 */}
      <div className="bg-white/50 p-5 rounded-xl border-t-4 border-[var(--color-primary)] flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex justify-between items-center mb-3 border-b border-[var(--color-primary)]/20 pb-2">
            <h3 className="font-label-caps text-sm text-[var(--color-primary)] font-bold">1. Business Onboarding</h3>
            <span className="font-impact-stat text-xl text-[var(--color-primary)]">50% ($25k)</span>
          </div>
          <ul className="space-y-2 font-body-xs text-xs text-[var(--color-text-subtle)] leading-relaxed">
            <li>• <strong>$10,000 Bali Launch Event:</strong> Signature launch event &amp; experience in Bali with celebrity friends, creators, and partner brands to ignite massive global buzz.</li>
            <li>• <strong>$8,000 Partner Meetings &amp; Travel:</strong> Face-to-face onboarding trips across core launch hubs (Perth, Sydney, Melbourne, SE Asia) to lock in anchor venues.</li>
            <li>• <strong>$7,000 In-Store Displays:</strong> Printing physical QR table standees, window decals, and tap-to-pay kits for our first 200 partner businesses.</li>
          </ul>
        </div>
      </div>

      {/* Category 2 */}
      <div className="bg-white/50 p-5 rounded-xl border-t-4 border-[var(--color-secondary)] flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex justify-between items-center mb-3 border-b border-[var(--color-secondary)]/20 pb-2">
            <h3 className="font-label-caps text-sm text-[var(--color-secondary)] font-bold">2. Hosting &amp; Legal Setup</h3>
            <span className="font-impact-stat text-xl text-[var(--color-secondary)]">30% ($15k)</span>
          </div>
          <ul className="space-y-2 font-body-xs text-xs text-[var(--color-text-subtle)] leading-relaxed">
            <li>• <strong>$7,500 Global Trademarks:</strong> Registering DIANA&apos;s brand legally across Australia and key global markets, plus standard tax structuring.</li>
            <li>• <strong>$4,500 Secure Cloud Hosting:</strong> Paying for 12 months of reliable server hosting, automated backups, and safety checkups.</li>
            <li>• <strong>$3,000 Banking Setup:</strong> Integrating global payment accounts and automated identity verification systems.</li>
          </ul>
        </div>
      </div>

      {/* Category 3 */}
      <div className="bg-white/50 p-5 rounded-xl border-t-4 border-[var(--color-primary)]/40 flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex justify-between items-center mb-3 border-b border-gray-300 pb-2">
            <h3 className="font-label-caps text-sm text-gray-700 font-bold">3. Operations &amp; Support</h3>
            <span className="font-impact-stat text-xl text-gray-700">20% ($10k)</span>
          </div>
          <ul className="space-y-2 font-body-xs text-xs text-[var(--color-text-subtle)] leading-relaxed">
            <li>• <strong>$6,000 Founder Focus:</strong> Essential operating allowance allowing full-time focus on securing key partner merchants.</li>
            <li>• <strong>$4,000 Launch Support:</strong> On-demand testing and extra developer assistance to ensure the app runs smoothly during peak launch week.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>,


  // Slide 11: ESIC
  <div key="slide-9" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">The ESIC Tax Offset</h2>
    <p className="font-body-lg">The future corporate entity is designed to qualify as an Australian Early Stage Innovation Company (ESIC).</p>
    <div className="grid grid-cols-2 gap-8 mt-8">
      <div className="p-8 rounded-xl bg-white/50 border-t-4 border-[var(--color-primary)]">
        <h3 className="font-impact-stat text-4xl text-[var(--color-primary)] mb-4">20%</h3>
        <p className="font-body-md text-[var(--color-text-subtle)]"><strong>Non-Refundable Tax Offset:</strong> The Australian Tax Office effectively subsidizes 20% of your investment, claimable on your tax return for the financial year the investment is made.</p>
      </div>
      <div className="p-8 rounded-xl bg-white/50 border-t-4 border-[var(--color-secondary)]">
        <h3 className="font-impact-stat text-4xl text-[var(--color-secondary)] mb-4">0%</h3>
        <p className="font-body-md text-[var(--color-text-subtle)]"><strong>Capital Gains Tax (CGT):</strong> If you hold the shares for between 1 and 10 years, all future profits on the sale of those shares are 100% tax-free.</p>
      </div>
    </div>
  </div>,

  // Slide 12: Your Investment, Protected
  <CapitalStrategySlide key="slide-12-capital" />,

  // Slide 13: The Equity Proposal
  <div key="slide-10-equity" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">The Equity Proposal</h2>
    <div className="grid grid-cols-2 gap-12 items-center">
      <div className="space-y-6 text-left">
        <div className="bg-white/40 p-6 rounded-xl border-l-4 border-[var(--color-text-subtle)]">
          <p className="font-label-caps text-[var(--color-text-subtle)] mb-2">Mathematical Equity</p>
          <p className="font-body-md">At the $635,000 base valuation, a $50,000 capital injection mathematically equates to <strong>~7.8%</strong> equity.</p>
        </div>
        <div className="bg-[var(--color-primary)]/10 p-6 rounded-xl border-l-4 border-[var(--color-primary)]">
          <p className="font-label-caps text-[var(--color-primary)] mb-2">The Catalyst Discount</p>
          <p className="font-body-md text-[var(--color-text-subtle)]">Because a previous argument between us was the direct spark that led to the creation of DIANA, I am assigning a &quot;Catalyst Discount&quot; to this seed round.</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8 bg-white/50 rounded-2xl border-2 border-[var(--color-secondary)] text-center shadow-lg transform hover:scale-105 transition-transform">
        <span className="font-label-caps block mb-4 text-[var(--color-text-subtle)]">The Final Offer</span>
        <span className="font-impact-stat text-7xl text-[#ff0099] mb-2">10%</span>
        <span className="font-body-lg text-[var(--color-primary)] font-bold">Ordinary Equity</span>
        <span className="block mt-4 text-sm text-[var(--color-text-subtle)] bg-[var(--color-secondary)]/10 px-4 py-2 rounded-full">For $50,000 Seed Capital</span>
      </div>
    </div>
  </div>,

  // Slide 14: The Ask
  <div key="slide-11" className="glass-surface p-12 rounded-3xl space-y-8 text-center">
    <h2 className="font-headline-lg text-5xl text-[var(--color-primary)] mb-4">The Ask</h2>
    <p className="font-body-lg text-[var(--color-secondary)] max-w-xl mx-auto">Two sequential commitments. One to open the door. One to walk through it.</p>
    <div className="h-px w-24 bg-[var(--color-primary)] mx-auto my-8 opacity-50"></div>
    <div className="grid grid-cols-2 gap-8 text-left mt-8">
      <div className="space-y-4 p-8 bg-white/40 rounded-xl">
        <h3 className="font-label-caps text-xl text-[var(--color-primary)]">Step 1: The Foundation Loan</h3>
        <p className="font-body-md text-[var(--color-text-subtle)]">A small Director&apos;s Loan to cover ASIC incorporation and legal setup fees. This establishes the entity legally so it can receive your capital. Repaid from the first tranche of the seed round.</p>
      </div>
      <div className="space-y-4 p-8 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 rounded-xl">
        <h3 className="font-label-caps text-xl text-[var(--color-primary)]">Step 2: The Seed Investment</h3>
        <p className="font-body-md text-[var(--color-secondary)]">$50,000 into the newly established entity in exchange for 10% ordinary equity, formally documented in a shareholders agreement and allocated directly to the three operational priorities above.</p>
      </div>
    </div>
  </div>,
];

