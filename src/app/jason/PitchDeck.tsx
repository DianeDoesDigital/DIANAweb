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
  <div key="slide-3" className="glass-surface p-12 rounded-3xl space-y-4">
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#0A0507] rounded-b-2xl z-10"></div>
          <iframe
            src="http://localhost:8081/?view=demo_preview"
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

  // Slide 5: The Global Travel Wallet
  <div key="slide-4-wallet" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">The Global Travel Wallet</h2>
    <div className="grid grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <p className="font-body-lg text-[var(--color-secondary)]">A borderless financial ecosystem designed for the globe-trotting conscious consumer.</p>
        <ul className="space-y-4 font-body-md text-[var(--color-text-subtle)]">
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>Zero-Friction Top Ups:</strong> Users load their DIANA wallet using their home currency.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>Borderless Payments:</strong> Pay any DIANA merchant, anywhere in the world, directly from the app.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>No Exchange Fees:</strong> Bypass traditional bank conversion spreads and international transaction fees entirely.</span>
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
  // Slide X: The Founder Advantage
  <div key="slide-founder" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">The Founder Advantage</h2>
    <div className="grid grid-cols-2 gap-8 items-stretch">
      <div className="space-y-6">
        <p className="font-body-md text-[var(--color-text-subtle)]">
          The execution of DIANA is entirely de-risked by the founder's unique, overlapping skillsets.
        </p>
        <ul className="space-y-4 font-body-md text-[var(--color-text-subtle)]">
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>Full-Stack Architect:</strong> Solo-engineered a production-ready, 73,500+ line codebase in just 5 months, bypassing $450k+ in standard agency development costs.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>Domain Expertise:</strong> Founder of the first all-vegan pizzeria in the Philippines, combining deep empathy for the ethical merchant with over a decade as a conscious vegan consumer and growing international travel experience.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>The Network Key:</strong> The sole gatekeeper to a highly lucrative, closed-door network of vegan celebrities, influencers, and business owners.</span>
          </li>
        </ul>
      </div>
      <div className="relative h-full flex flex-col items-center justify-center p-8 bg-[var(--color-background)] rounded-2xl border border-[var(--color-primary)]/20 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-primary)]/5 z-0"></div>
        <img src="/diane-founder.jpg" alt="Diane" className="w-48 h-48 rounded-full border-4 border-[#ff0099] mb-6 shadow-[0_0_30px_rgba(255,0,153,0.3)] relative z-10 object-cover" />
        <span className="font-headline-lg text-4xl text-[#ff0099] relative z-10">DIANE</span>
        <span className="font-headline-md text-xl text-[var(--color-secondary)] relative z-10 mb-4">Diana Rose G. Mejilla</span>
        <span className="font-body-sm text-[var(--color-secondary)] text-center relative z-10 mb-4 px-4">The visionary, the engineer, and the target market, all in one.</span>
        <span className="font-label-caps text-xl text-[#ff0099] relative z-10">Founder & CEO</span>
      </div>
    </div>
  </div>,


  // Slide 5: The Competitive Moat
  <div key="slide-5" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">The Competitive Moat</h2>
    <div className="grid grid-cols-2 gap-6 font-body-md text-[var(--color-text-subtle)]">
      <div className="glass-surface p-6 rounded-xl border border-white/40 flex flex-col">
        <h3 className="font-headline-md text-xl text-[var(--color-secondary)] mb-2">Pre-Wired Pipeline</h3>
        <p className="flex-grow">Deep relationships with a highly curated, global pipeline of vegan business owners ready to be onboarded as early adopters. The network is fully primed for immediate activation and scaling.</p>
      </div>
      <div className="glass-surface p-6 rounded-xl border border-white/40 flex flex-col">
        <h3 className="font-headline-md text-xl text-[var(--color-secondary)] mb-2">Massive Reach</h3>
        <p className="flex-grow">Direct access to ~48M combined celebrity reach, 29,000+ owned followers, and an exclusive gateway to over 145,000 highly targeted, ready-to-convert community members.</p>
      </div>
      <div className="glass-surface p-6 rounded-xl border border-white/40 flex flex-col">
        <h3 className="font-headline-md text-xl text-[var(--color-secondary)] mb-2">The Market Vacuum</h3>
        <p className="flex-grow">The incumbent platform abillion closed in March, leaving a massive vacuum of displaced, highly-engaged users actively seeking a new home. DIANA is perfectly positioned to capture this migration.</p>
      </div>
      <div className="glass-surface p-6 rounded-xl border border-white/40 flex flex-col">
        <h3 className="font-headline-md text-xl text-[var(--color-secondary)] mb-2">Institutional Support</h3>
        <p className="flex-grow">Established connections with global industry mentorship, specialized scaling advisors, and an active pipeline into premier global startup accelerator programs and institutional networks.</p>
      </div>
    </div>
  </div>,

  // Slide: DIANA vs. The Market — Competitive Landscape Table
  <div key="slide-competitive-table" className="glass-surface p-12 rounded-3xl space-y-6">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-2">DIANA vs. The Market</h2>
    <p className="font-body-lg text-[var(--color-secondary)]">No single platform does what DIANA does. Most don&apos;t even come close.</p>
    <div className="overflow-hidden rounded-2xl border border-[var(--color-primary)]/20 mt-4">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
            <th className="text-left p-4 font-label-caps align-top">Feature</th>
            <th className="text-center p-4 font-label-caps align-top">DIANA</th>
            <th className="text-center p-4 font-label-caps align-top">
              abillion<br />
              <span className="font-body-sm font-normal opacity-70 text-xs">(now closed)</span>
            </th>
            <th className="text-center p-4 font-label-caps align-top">HappyCow</th>
            <th className="text-center p-4 font-label-caps align-top">Generic Apps</th>
          </tr>
        </thead>
        <tbody className="font-body-md text-[var(--color-secondary)]">
          {([
            ['Vegan-focused directory', true, true, true, false],
            ['In-app payments & wallet', true, false, false, true],
            ['Borderless, no-fee payments', true, false, false, false],
            ['Transaction-based revenue model', true, false, false, true],
            ['Automated sanctuary funding', true, false, false, false],
          ] as [string, boolean | string, boolean | string, boolean | string, boolean | string][]).map(([feature, diana, abillion, happycow, generic], i) => {
            const cell = (val: boolean | string, key: string) => (
              <td key={key} className="text-center p-3">
                {val === true
                  ? <span className="text-[var(--color-primary)] font-bold text-xl">✓</span>
                  : val === 'partial'
                  ? <span className="text-[var(--color-text-subtle)] text-xs font-label-caps">partial</span>
                  : <span className="text-[var(--color-text-subtle)] opacity-30 text-xl">✗</span>}
              </td>
            );
            return (
              <tr key={String(feature)} className={i % 2 === 0 ? 'bg-white/30' : 'bg-white/10'}>
                <td className="p-3 text-[var(--color-secondary)]">{feature}</td>
                {cell(diana, 'diana')}{cell(abillion, 'abillion')}{cell(happycow, 'happycow')}{cell(generic, 'generic')}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>,

  // Slide 6: Market Strategy
  <div key="slide-6" className="glass-surface p-12 rounded-3xl space-y-6">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-2">Path to Profitability</h2>
    <p className="font-body-lg text-[var(--color-secondary)]">With a highly efficient operational model and 8 distinct merchant categories, reaching our 1,000-user break-even target is highly achievable.</p>
    <div className="grid grid-cols-2 gap-8 items-stretch">
      <div className="bg-[var(--color-surface)] p-6 rounded-xl space-y-4 font-body-md text-[var(--color-text-subtle)]">
        <div className="flex items-start gap-3"><div className="w-8 h-8 shrink-0 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] font-bold text-sm">1</div><div><strong>July 2026:</strong> Cross-platform launch on App Store and Google Play with live Stripe Connect.</div></div>
        <div className="flex items-start gap-3"><div className="w-8 h-8 shrink-0 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] font-bold text-sm">2</div><div><strong>Q3/Q4 2026:</strong> Activate merchant pipeline across Food, Retail, Travel, and Experiences.</div></div>
        <div className="flex items-start gap-3"><div className="w-8 h-8 shrink-0 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] font-bold text-sm">3</div><div><strong>Break-Even:</strong> ~1,000 active monthly consumers achieve full operational profitability.</div></div>
        <div className="flex items-start gap-3"><div className="w-8 h-8 shrink-0 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] font-bold text-sm">4</div><div><strong>Dividends:</strong> Initiated after a 6-month post-profitability runway is secured.</div></div>
      </div>
      <div className="bg-white/40 p-6 rounded-xl h-full flex flex-col justify-between">
        <p className="font-label-caps text-xs text-[var(--color-text-subtle)] mb-4">Projected User Growth to Break-Even</p>
        <div className="flex items-end gap-2 h-36">
          {[{ m: 'Jul', u: 50 }, { m: 'Aug', u: 180 }, { m: 'Sep', u: 320 }, { m: 'Oct', u: 500 }, { m: 'Nov', u: 730 }, { m: 'Dec', u: 1000 }].map(({ m, u }) => (
            <div key={m} className="flex flex-col items-center flex-1 h-full justify-end">
              <span className="font-label-caps text-xs text-[var(--color-primary)] mb-1">{u >= 1000 ? '1k' : u}</span>
              <div
                className="w-full rounded-t-md"
                style={{
                  height: `${(u / 1000) * 100}%`,
                  background: u >= 1000 ? 'var(--color-primary)' : `linear-gradient(to top, rgba(255,0,153,0.8), rgba(255,0,153,0.3))`
                }}
              />
              <span className="font-label-caps text-xs text-[var(--color-text-subtle)] mt-2">{m}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-[var(--color-primary)]/20 flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[var(--color-primary)]"></div>
          <span className="font-body-sm text-xs text-[var(--color-text-subtle)]">Break-even reached at 1,000 users</span>
        </div>
      </div>
    </div>
  </div>,


  // Slide 7: Valuation Breakdown
  <div key="slide-7" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">The Assets</h2>
    <div className="space-y-6 font-body-md text-[var(--color-text-subtle)]">
      <h3 className="font-headline-md text-2xl text-[var(--color-secondary)] border-b border-[var(--color-primary)]/30 pb-2">Valuation Breakdown</h3>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="bg-white/40 p-8 rounded-xl border-t-4 border-[var(--color-primary)] flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h4 className="font-label-caps text-xl text-[var(--color-primary)] pr-4">Technical Cost</h4>
            <span className="font-impact-stat text-3xl text-[var(--color-primary)]">$450,000</span>
          </div>
          <p className="text-sm flex-grow">Based on 73.5K LOC & 1,800+ Dev Hours. Includes all proprietary source code across DIANA App and Web platforms.</p>
        </div>
        <div className="bg-white/40 p-8 rounded-xl border-t-4 border-[var(--color-secondary)] flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h4 className="font-label-caps text-xl text-[var(--color-secondary)] pr-4">Network Premium</h4>
            <span className="font-impact-stat text-3xl text-[var(--color-secondary)]">$185,000</span>
          </div>
          <p className="text-sm flex-grow">Pre-wired merchant pipeline, exclusive 145K+ community access, and zero initial marketing spend required.</p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 8: Valuation Methodology
  <div key="slide-8-math" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">Valuation Methodology</h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-white/40 p-8 rounded-xl border-t-4 border-[var(--color-secondary)]">
        <h3 className="font-label-caps text-xl text-[var(--color-primary)] mb-4 border-b border-[var(--color-primary)]/20 pb-4">1. Technical Replacement Cost</h3>
        <ul className="space-y-4 font-body-md text-[var(--color-text-subtle)]">
          <li className="flex items-start gap-3"><span className="text-[var(--color-secondary)] font-bold mt-1">•</span> <span><strong>73,500+ Lines of Proprietary Code</strong> across React Native (App) and Next.js (Web).</span></li>
          <li className="flex items-start gap-3"><span className="text-[var(--color-secondary)] font-bold mt-1">•</span> <span><strong>~1,800 Development Hours</strong> fully logged.</span></li>
          <li className="flex items-start gap-3"><span className="text-[var(--color-secondary)] font-bold mt-1">•</span> <span>Calculated at standard agency replacement rate ($250/hr), equating to <strong>$450,000</strong>.</span></li>
        </ul>
      </div>
      <div className="bg-white/40 p-8 rounded-xl border-t-4 border-[var(--color-primary)]">
        <h3 className="font-label-caps text-xl text-[var(--color-primary)] mb-4 border-b border-[var(--color-primary)]/20 pb-4">2. Network Premium</h3>
        <ul className="space-y-4 font-body-md text-[var(--color-text-subtle)]">
          <li className="flex items-start gap-3"><span className="text-[var(--color-primary)] font-bold mt-1">•</span> <span><strong>~48 Million</strong> combined global follower reach via pre-wired celebrity network.</span></li>
          <li className="flex items-start gap-3"><span className="text-[var(--color-primary)] font-bold mt-1">•</span> <span><strong>145,000+</strong> highly-engaged direct community members ready to convert.</span></li>
          <li className="flex items-start gap-3"><span className="text-[var(--color-primary)] font-bold mt-1">•</span> <span>Zero marketing spend required to acquire initial merchant and user bases drives a <strong>$185,000</strong> premium assignment.</span></li>
        </ul>
      </div>
    </div>
  </div>,

  // Slide 9: Total Valuation
  <div key="slide-8-total" className="glass-surface p-12 rounded-3xl space-y-8 flex flex-col items-center justify-center text-center h-full">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">The Final Valuation</h2>
    <div className="w-full max-w-2xl text-center p-12 bg-[var(--color-primary)]/10 rounded-3xl border-2 border-[var(--color-primary)]/30 transform hover:scale-105 transition-transform">
      <span className="font-label-caps block mb-4 text-[var(--color-text-subtle)] tracking-widest">Class A Asset Pool (DIANA IP)</span>
      <span className="font-impact-stat text-7xl text-[var(--color-primary)]">AUD $635,000</span>
      <span className="block mt-4 font-body-lg text-[var(--color-secondary)] font-bold">Base Case Total</span>
    </div>
    <p className="font-body-md text-[var(--color-text-subtle)] mt-8 bg-white/40 p-4 rounded-xl max-w-lg">
      Optimistic Case Target: <strong>AUD $925,000</strong>
    </p>
  </div>,

  // Slide 10: Use of Funds
  <div key="slide-8" className="glass-surface p-12 rounded-3xl space-y-6">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-2">Use of Funds</h2>
    <p className="font-body-lg text-[var(--color-secondary)]">Since technical MVP and marketing CAC are fully solved, the $50,000 seed capital is purely for operational scale.</p>
    <div className="flex gap-1 rounded-full overflow-hidden h-4 w-full">
      <div className="bg-[var(--color-primary)] h-full" style={{ width: '50%' }} title="Global Merchant Pipeline 50%"></div>
      <div className="bg-[var(--color-secondary)] h-full" style={{ width: '30%' }} title="Technical & Legal 30%"></div>
      <div className="bg-[var(--color-primary)]/30 h-full" style={{ width: '20%' }} title="Executive Team 20%"></div>
    </div>
    <div className="grid grid-cols-3 gap-6 mt-2">
      <div className="bg-white/50 p-6 rounded-xl border-t-4 border-[var(--color-primary)] flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-label-caps text-sm text-[var(--color-primary)]">1. Global Merchant Pipeline</h3>
          <span className="font-impact-stat text-2xl text-[var(--color-primary)]">50%</span>
        </div>
        <p className="font-body-sm text-[var(--color-text-subtle)] flex-grow">High-level B2B travel and event hosting to personally onboard key anchor merchants, premium brands, and high-volume service providers across all categories in crucial early-adopter markets.</p>
        <p className="font-label-caps text-xs text-[var(--color-primary)] mt-3">$25,000</p>
      </div>
      <div className="bg-white/50 p-6 rounded-xl border-t-4 border-[var(--color-secondary)] flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-label-caps text-sm text-[var(--color-primary)]">2. Technical &amp; Legal Scaling</h3>
          <span className="font-impact-stat text-2xl text-[var(--color-secondary)]">30%</span>
        </div>
        <p className="font-body-sm text-[var(--color-text-subtle)] flex-grow">Funding robust cloud infrastructure to support massive user volume and high-frequency transactions, alongside global trademark registrations and advanced IP protection across key jurisdictions.</p>
        <p className="font-label-caps text-xs text-[var(--color-secondary)] mt-3">$15,000</p>
      </div>
      <div className="bg-white/50 p-6 rounded-xl border-t-4 border-[var(--color-primary)]/30 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-label-caps text-sm text-[var(--color-primary)]">3. Executive Team</h3>
          <span className="font-impact-stat text-2xl text-[var(--color-text-subtle)]">20%</span>
        </div>
        <p className="font-body-sm text-[var(--color-text-subtle)] flex-grow">Fully funding the dedicated CEO position and deploying agile contracting teams to guarantee rapid merchant onboarding and completely eliminate any operational bottlenecks during our hyper-growth scaling phase.</p>
        <p className="font-label-caps text-xs text-[var(--color-text-subtle)] mt-3">$10,000</p>
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

