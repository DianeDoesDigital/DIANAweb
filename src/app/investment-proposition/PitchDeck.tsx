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
      <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-2">Already Built. Ready to Launch.</h2>
      <div className="grid grid-cols-2 gap-8 items-center h-[calc(100%-80px)]">
        <div className="space-y-6">
          <p className="font-body-lg text-[var(--color-secondary)]">
            DIANA is already built and finished. There is no waiting around for months of development, and no enormous build bill to pay later. <strong className="text-[var(--color-primary)]">You can even try it yourself right now.</strong>
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-[var(--color-primary)]/5 px-4 py-3 rounded-xl border border-[var(--color-primary)]/20">
              <span className="text-[var(--color-primary)] font-bold text-lg mt-0.5">•</span>
              <span className="font-body-md text-[var(--color-text-subtle)]"><strong>100,000+ Lines of Code:</strong> A complete, finished product built from scratch and ready to launch right now, on any device.</span>
            </div>
            <div className="flex items-start gap-3 bg-[var(--color-primary)]/5 px-4 py-3 rounded-xl border border-[var(--color-primary)]/20">
              <span className="text-[var(--color-primary)] font-bold text-lg mt-0.5">•</span>
              <span className="font-body-md text-[var(--color-text-subtle)]"><strong>DIANA Web Platform:</strong> High-speed global marketing funnel, interactive calculator, &amp; brand hub.</span>
            </div>
            <div className="flex items-start gap-3 bg-[var(--color-primary)]/5 px-4 py-3 rounded-xl border border-[var(--color-primary)]/20">
              <span className="text-[var(--color-primary)] font-bold text-lg mt-0.5">•</span>
              <span className="font-body-md text-[var(--color-text-subtle)]"><strong>DIANA Mobile App:</strong> Cross-platform iOS &amp; Android marketplace for consumers &amp; partner merchants.</span>
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
            <span className="font-headline-md text-lg text-[var(--color-primary)]">Authorized Signatory</span>
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
          <p className="font-body-md text-[var(--color-text-subtle)]">Welcome to the future of DIANA.</p>
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
        DIANA is built to be the financial backbone of the conscious economy. Every purchase funds the future of animal advocacy. It is already in motion. Your investment puts it in the hands of every conscious shopper on the planet. Let&apos;s make this happen sooner rather than later.
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
            <h3 className="font-label-caps text-xl text-[var(--color-secondary)] mb-4 border-b border-[var(--color-primary)]/20 pb-4">Government Grants Won&apos;t Dilute You</h3>
            <p className="font-body-md text-[var(--color-text-subtle)]">
              We are actively applying for government grants and innovation funding. If we receive any, that money goes directly into the business. It does <strong>not</strong> come with new shareholders attached. Your ownership percentage stays exactly the same.
            </p>
          </div>
          <div className="bg-[var(--color-secondary)]/10 p-4 rounded-xl border border-[var(--color-secondary)]/20 min-h-[80px] flex items-center justify-center">
            <p className="font-body-sm text-[var(--color-text-subtle)] italic text-center">
              Every grant we receive grows the business and makes your share more valuable, without reducing it.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-full">
          <div className="bg-white/40 p-8 rounded-xl border-t-4 border-[var(--color-secondary)] flex flex-col flex-1">
            <h3 className="font-label-caps text-xl text-[var(--color-primary)] mb-4 border-b border-[var(--color-primary)]/20 pb-4">Future Investors Treated Equally</h3>
            <p className="font-body-md text-[var(--color-text-subtle)]">
              If DIANA ever brings in additional investors down the track, you and the founder are treated exactly the same. Nobody gets a secret deal or special advantage over you. If new investors come in and everyone&apos;s share gets a little smaller to make room, yours and the founder&apos;s shrink by the same percentage.
            </p>
          </div>
          <div className="bg-[var(--color-primary)]/10 p-4 rounded-xl border border-[var(--color-primary)]/20 min-h-[80px] flex items-center justify-center">
            <p className="font-body-sm text-[var(--color-text-subtle)] italic text-center">
              The goal is always to grow the overall value of the business so everyone&apos;s share is worth more, not less.
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
    <p className="font-body-lg text-[var(--color-text-subtle)]">Seed Investment Proposition • June 2026</p>
  </div>,

  // Slide 2: The Problem & Solution
  <div key="slide-2" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">The Market Gap</h2>
    <div className="grid grid-cols-2 gap-8 font-body-md text-[var(--color-text-subtle)]">
      <div className="space-y-4 bg-white/40 p-8 rounded-xl border border-white/60">
        <h3 className="font-headline-md text-2xl text-[var(--color-secondary)] border-b border-[var(--color-primary)]/30 pb-2">The Problem</h3>
        <p>The vegan economy is scattered and hard to navigate. Consumers struggle to find trustworthy businesses. Merchants struggle to find vegan customers without spending huge amounts on advertising. Sanctuaries struggle because people get tired of being constantly asked for donations.</p>
      </div>
      <div className="space-y-4 bg-white/40 p-8 rounded-xl border border-white/60">
        <h3 className="font-headline-md text-2xl text-[var(--color-primary)] border-b border-[var(--color-primary)]/30 pb-2">The DIANA Solution</h3>
        <p>A single platform where everyday shopping quietly supports animals. We connect consumers directly to ethical businesses, and every purchase automatically sends a portion to animal sanctuaries in the background, with no extra steps for anyone.</p>
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
        <p className="font-body-lg text-[var(--color-secondary)]">A payment system built for people who love to travel and live ethically, wherever they are in the world.</p>
        <ul className="space-y-4 font-body-md text-[var(--color-text-subtle)]">
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>Easy Top Ups:</strong> Users add money to their DIANA wallet quickly using their local currency.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>Borderless Payments:</strong> Pay any DIANA partner business, anywhere in the world, directly from the app.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>No Hidden Fees:</strong> Avoid the extra charges banks typically add when you spend money in a different country.</span>
          </li>
        </ul>
      </div>
      <div className="bg-[var(--color-background)] p-8 rounded-2xl border border-[var(--color-primary)]/20 text-center flex flex-col justify-center h-full">
        <span className="font-label-caps text-[var(--color-text-subtle)] mb-4">The Lifestyle Feature</span>
        <span className="font-impact-stat text-5xl text-[var(--color-primary)] mb-4">One Wallet.</span>
        <span className="font-impact-stat text-5xl text-[var(--color-secondary)]">Global Access.</span>
        <p className="font-body-sm text-[var(--color-text-subtle)] mt-6 border-t border-[var(--color-primary)]/20 pt-4">A natural fit for anyone who travels and wants their money to do good along the way.</p>
      </div>
    </div>
  </div>,

  // Slide 5: Multi-Impact Financial Engine
  <div key="slide-4" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">How the Money Works</h2>
    <div className="space-y-6 font-body-lg">
      <p>A simple system where every dollar spent automatically creates good. The money is divided the moment a purchase is made, with no extra steps required from anyone.</p>
      
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

  // Slide 6: The Founder Edge
  <div key="slide-founder" className="glass-surface p-12 rounded-3xl space-y-8">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">The Founder Edge</h2>
    <div className="grid grid-cols-2 gap-8 items-stretch">
      <div className="space-y-6">
        <p className="font-body-md text-[var(--color-text-subtle)]">
          What makes DIANA a safer bet is that the founder can build the technology herself and deeply understands the people she is building it for.
        </p>
        <ul className="space-y-4 font-body-md text-[var(--color-text-subtle)]">
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>Built in-House:</strong> Diane built the complete web platform and mobile app herself, saving what a software agency would have charged: over $450,000.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
            <span><strong>Real Market Understanding:</strong> Diane founded the first all-vegan pizzeria in the Philippines. She knows firsthand what ethical business owners actually need, and she has been a conscious consumer herself for over a decade.</span>
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
        <h3 className="font-headline-md text-xl text-[var(--color-secondary)] mb-2">Ready Partners</h3>
        <p className="flex-grow">Close personal connections with ethical business owners and sanctuary leaders who are excited to be our first partner venues and beneficiaries immediately upon launch.</p>
      </div>
      <div className="glass-surface p-6 rounded-xl border border-white/40 flex flex-col">
        <h3 className="font-headline-md text-xl text-[var(--color-secondary)] mb-2">Organic Word-of-Mouth</h3>
        <p className="flex-grow">Our network of advocate friends and community partners reaches thousands of dedicated animal lovers globally, attracting our initial user base without spending on paid ads.</p>
      </div>
      <div className="glass-surface p-6 rounded-xl border border-white/40 flex flex-col">
        <h3 className="font-headline-md text-xl text-[var(--color-secondary)] mb-2">Capturing Displaced Users</h3>
        <p className="flex-grow">The major ethical review platform abillion recently closed down, leaving a massive community of active daily users searching for a trusted new platform upon our launch.</p>
      </div>
      <div className="glass-surface p-6 rounded-xl border border-white/40 flex flex-col">
        <h3 className="font-headline-md text-xl text-[var(--color-secondary)] mb-2">Self-Reinforcing Sanctuary Network</h3>
        <p className="flex-grow">Because 5% of every transaction funds animal sanctuaries, sanctuary leaders and their passionate supporters naturally become active ambassadors, driving continuous user growth.</p>
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
            <li className="flex items-start gap-2"><span className="text-[var(--color-primary)] font-bold w-20 shrink-0">Jul 2026:</span> <span>App launch and onboarding our waitlisted partner businesses and early community members.</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--color-primary)] font-bold w-20 shrink-0">Q3 2026:</span> <span>Rapid welcome and migration of displaced active community members from abillion.</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--color-primary)] font-bold w-20 shrink-0">Dec 2026:</span> <span>Hit <strong>1,000 active monthly users</strong>, the business fully pays for itself.</span></li>
          </ul>
        </div>
        <div className="mt-4 pt-3 border-t border-[var(--color-primary)]/10 flex justify-between items-center text-xs font-bold text-[var(--color-primary)]">
          <span>Cash needed to cover: 6 months</span>
          <span>Self-sustaining: Month 6</span>
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
            <li className="flex items-start gap-2"><span className="text-[var(--color-secondary)] font-bold w-20 shrink-0">Q3 2026:</span> <span>Steady, organic onboarding across our initial local partner venues and community networks.</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--color-secondary)] font-bold w-20 shrink-0">Q4 2026:</span> <span>Gradual word-of-mouth expansion and adoption across regional ethical communities.</span></li>
            <li className="flex items-start gap-2"><span className="text-[var(--color-secondary)] font-bold w-20 shrink-0">Jun 2027:</span> <span>Hit <strong>1,000 active monthly users</strong>, comfortably within our 12-month cash reserve.</span></li>
          </ul>
        </div>
        <div className="mt-4 pt-3 border-t border-[var(--color-secondary)]/10 flex justify-between items-center text-xs font-bold text-[var(--color-secondary)]">
          <span>Cash reserve covered: 12+ months</span>
          <span>Self-sustaining: Month 12</span>
        </div>
      </div>
    </div>
  </div>,

  // Slide 8.5: The 5% Math
  <div key="slide-5-percent-math" className="glass-surface p-12 rounded-3xl flex flex-col justify-center h-full">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-8">The 5% Math: Highly Profitable</h2>
    
    <div className="grid grid-cols-2 gap-12 items-center">
      <div className="space-y-3 font-body-md">
        <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl border border-white/20 shadow-sm">
          <span className="text-[var(--color-secondary)]">Merchant Monthly Volume</span>
          <span className="font-bold text-2xl text-[var(--color-secondary)]">$10,000</span>
        </div>
        
        <div className="flex justify-between items-center p-4 bg-[var(--color-primary)]/10 rounded-xl border border-[var(--color-primary)]/30 shadow-sm">
          <span className="text-[var(--color-primary)] font-bold">DIANA 5% Cut (Revenue)</span>
          <span className="font-bold text-2xl text-[var(--color-primary)]">$500</span>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10 ml-8 shadow-sm">
          <span className="text-[var(--color-text-subtle)] text-sm">Donation to Sanctuaries (5% of Revenue)</span>
          <span className="font-bold text-[var(--color-text-subtle)]">-$25</span>
        </div>
        
        <div className="flex justify-between items-center p-4 bg-[var(--color-secondary)]/10 rounded-xl border border-[var(--color-secondary)]/30 ml-8 shadow-sm">
          <span className="text-[var(--color-secondary)] font-bold text-sm">Gross Margin Before Fees</span>
          <span className="font-bold text-lg text-[var(--color-secondary)]">$475</span>
        </div>

        <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10 ml-16 shadow-sm">
          <span className="text-[var(--color-text-subtle)] text-sm">Payment Processing &amp; Transfers</span>
          <span className="font-bold text-[var(--color-text-subtle)]">-$225</span>
        </div>

        <div className="flex justify-between items-center p-5 bg-[var(--color-primary)] rounded-xl text-[var(--color-background)] shadow-lg shadow-[var(--color-primary)]/30 mt-6 transform hover:scale-[1.02] transition-transform">
          <span className="font-bold text-lg">Net Profit Margin (~50%)</span>
          <span className="font-headline-lg text-3xl">$250</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-6 font-body-sm text-[var(--color-text-subtle)] mt-4">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg mt-0.5">•</span>
            <span className="leading-relaxed"><strong>Why $10,000?</strong> A conservative monthly volume for an average mid-sized ethical café using DIANA daily.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg mt-0.5">•</span>
            <span className="leading-relaxed"><strong>Why $225 in Fees?</strong> Adding money to wallets and sending combined bank payments out to merchants costs just ~2.25% in total payment processing fees.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg mt-0.5">•</span>
            <span className="leading-relaxed"><strong>High Net Yield:</strong> The remaining 2.5% ($250) is pure profit to cover fixed overhead, salaries, and eventual dividends.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg mt-0.5">•</span>
            <span className="leading-relaxed"><strong>Massive Scaling:</strong> With our fixed infrastructure, multiplying this $250 net yield across thousands of global merchants unlocks exponential revenue.</span>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Slide 8.75: Why 1,000 Active Users?
  <div key="slide-1000-users" className="glass-surface p-12 rounded-3xl flex flex-col justify-center h-full space-y-8">
    <div>
      <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-2">Why 1,000 Active Users?</h2>
      <p className="font-body-md text-[var(--color-text-subtle)]">Here is the exact logic behind that number, in plain terms.</p>
    </div>

    {/* Step-by-step math */}
    <div className="grid grid-cols-2 gap-8">
      {/* Left: The Math */}
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 bg-white/40 rounded-2xl border border-white/30 shadow-sm">
          <span className="w-9 h-9 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 flex items-center justify-center font-bold text-[var(--color-primary)] text-sm shrink-0">1</span>
          <div>
            <p className="font-label-caps text-xs text-[var(--color-text-subtle)] tracking-widest mb-0.5">Average User Spends Per Month</p>
            <p className="font-body-md text-[var(--color-text)]">A typical active user pays for coffees, meals, and ethical products through DIANA regularly, averaging around <strong>$200/month</strong> across our partner businesses.</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-white/40 rounded-2xl border border-white/30 shadow-sm">
          <span className="w-9 h-9 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 flex items-center justify-center font-bold text-[var(--color-primary)] text-sm shrink-0">2</span>
          <div>
            <p className="font-label-caps text-xs text-[var(--color-text-subtle)] tracking-widest mb-0.5">Total Monthly Volume at 1,000 Users</p>
            <p className="font-body-md text-[var(--color-text)]">1,000 users × $200 = <strong>$200,000 processed</strong> through DIANA in a single month.</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-white/40 rounded-2xl border border-white/30 shadow-sm">
          <span className="w-9 h-9 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 flex items-center justify-center font-bold text-[var(--color-primary)] text-sm shrink-0">3</span>
          <div>
            <p className="font-label-caps text-xs text-[var(--color-text-subtle)] tracking-widest mb-0.5">Our Net Profit From That Volume</p>
            <p className="font-body-md text-[var(--color-text)]">At our 2.5% net margin (proven on the previous slide), that is <strong>$5,000 per month</strong> in clear profit.</p>
          </div>
        </div>
      </div>

      {/* Right: What we do with it */}
      <div className="flex flex-col gap-4">
        <div className="p-6 bg-[var(--color-primary)]/10 rounded-2xl border-2 border-[var(--color-primary)]/30 flex-1">
          <p className="font-label-caps text-xs text-[var(--color-primary)] tracking-widest mb-3">The $5,000/Month Plan</p>
          <p className="font-body-md text-[var(--color-text)] mb-4">$5,000 per month comfortably covers all of DIANA&apos;s fixed monthly costs: servers, software licenses, and admin. <strong>The business pays for itself.</strong></p>
          <div className="space-y-2 text-sm text-[var(--color-text-subtle)]">
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-primary)] font-bold mt-0.5">•</span>
              <span><strong>Month 1 onwards:</strong> Profit stays in the business bank account. No payouts yet.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-primary)] font-bold mt-0.5">•</span>
              <span><strong>Once 6 months of expenses are saved:</strong> The business has a full safety net and can weather any slow period.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-primary)] font-bold mt-0.5">•</span>
              <span><strong>After the safety net is built:</strong> Monthly profits are distributed as cash dividends to you and the founder.</span>
            </div>
          </div>
        </div>
        <div className="p-4 bg-[var(--color-secondary)]/10 rounded-2xl border border-[var(--color-secondary)]/30 text-center">
          <p className="font-label-caps text-xs text-[var(--color-secondary)] tracking-widest mb-1">The Core Promise</p>
          <p className="font-body-md text-[var(--color-text)] font-semibold">Your money is protected first. Payouts only begin once the business has proven it can sustain itself independently.</p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 9: How We Easily Protect Our 5% Profit
  <div key="slide-unit-economics-protect" className="glass-surface p-12 rounded-3xl space-y-6 h-full flex flex-col justify-center">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-1">How We Protect Our Profit Margin</h2>
    <p className="font-body-md text-[var(--color-secondary)]">Most apps lose half their revenue to credit card processing fees. Here is how DIANA keeps our operating costs near zero so we become profitable fast.</p>
    
    <div className="grid grid-cols-3 gap-6 mt-4">
      {/* Pillar 1 */}
      <div className="bg-white/40 p-6 rounded-2xl border-t-4 border-[var(--color-primary)] flex flex-col justify-between shadow-sm">
        <div>
          <span className="font-label-caps text-xs text-[var(--color-primary)] tracking-widest block mb-2">1. $0 Cost App Transactions</span>
          <h3 className="font-headline-md text-xl text-[var(--color-secondary)] mb-3">No Card Swipes Inside</h3>
          <p className="font-body-xs text-[var(--color-text-subtle)] leading-relaxed text-xs">
            When users shop at ethical businesses, watch ad double-ups, or send gifts to sanctuaries inside the app, we don&apos;t swipe a credit card every time. We simply adjust digital balances inside our system, which means our daily transaction cost is $0.00.
          </p>
        </div>
      </div>

      {/* Pillar 2 */}
      <div className="bg-white/40 p-6 rounded-2xl border-t-4 border-[var(--color-secondary)] flex flex-col justify-between shadow-sm">
        <div>
          <span className="font-label-caps text-xs text-[var(--color-secondary)] tracking-widest block mb-2">2. Cheap Wallet Loading</span>
          <h3 className="font-headline-md text-xl text-[var(--color-primary)] mb-3">Simple Bank Transfers</h3>
          <p className="font-body-xs text-[var(--color-text-subtle)] leading-relaxed text-xs">
            Instead of paying expensive 3% credit card fees when users load money into their wallet, we encourage simple local bank transfers (like PayID in Australia or GCash in Asia). Loading $50 only costs us a tiny ~10¢–20¢ flat rate.
          </p>
        </div>
      </div>

      {/* Pillar 3 */}
      <div className="bg-[var(--color-primary)]/10 p-6 rounded-2xl border-2 border-[var(--color-primary)] flex flex-col justify-between shadow-md">
        <div>
          <span className="font-label-caps text-xs text-[var(--color-primary)] tracking-widest block mb-2">3. Combined Monthly Payouts</span>
          <h3 className="font-headline-md text-xl text-[var(--color-primary)] mb-3">Pure Profit Margin</h3>
          <p className="font-body-xs text-[var(--color-text-subtle)] leading-relaxed text-xs">
            Instead of sending thousands of tiny bank transfers every day, we send one combined bank payout to merchants and sanctuaries every two weeks or monthly. A $1 bank fee on a $500 payout is practically nothing, leaving our revenue intact as pure profit!
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
            A complete, finished digital product covering both the web platform and the mobile app. It took over 1,800 hours of dedicated work to build from scratch, covering everything from the user experience to the payment system underneath. Hiring an outside software agency to build this from scratch would cost at least $450,000.
          </p>
        </div>
        <div className="bg-white/40 p-12 rounded-2xl border-t-4 border-[var(--color-secondary)] flex flex-col justify-between min-h-[280px] shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col mb-8">
            <h4 className="font-label-caps text-2xl text-[var(--color-secondary)] mb-4">Community Pipeline Value</h4>
            <span className="font-impact-stat text-5xl text-[var(--color-secondary)]">$185,000</span>
          </div>
          <p className="font-body-lg text-[var(--color-text-subtle)] leading-relaxed">
            We come to launch with an established social media presence across brand and personal accounts, genuine relationships with vegan business owners across multiple markets, and a wide network of well-known advocates in the space. Building all of this from scratch through paid ads and outreach would cost well over $185,000.
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 8: Valuation Methodology & Independent Validation
  <div key="slide-8-math" className="glass-surface p-12 rounded-3xl space-y-6">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-2">Valuation Check</h2>
    <p className="font-body-md text-[var(--color-secondary)]">How did we make sure our $635,000 AUD valuation is fair? We checked it against two widely used ways of valuing early-stage businesses.</p>
    
    <div className="grid grid-cols-3 gap-6 mt-4">
      {/* Our Valuation */}
      <div className="bg-[var(--color-primary)]/10 p-6 rounded-2xl border-2 border-[var(--color-primary)] flex flex-col justify-between shadow-md transform scale-[1.02]">
        <div>
          <span className="font-label-caps text-xs text-[var(--color-primary)] tracking-widest block mb-1">Our Agreed Baseline</span>
          <span className="font-impact-stat text-4xl text-[var(--color-primary)] block mb-3">$635,000</span>
          <p className="font-body-xs text-[var(--color-text-subtle)] leading-relaxed text-xs">
            Based on two real, concrete things: what it would cost someone else to build the same software ($450K), plus the value of our community assets, social following, and advocate network ($185K).
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
            This method estimates early value by looking at how much you have reduced key startup risks. It awards value for having a clear idea, a fully working product ready to launch, strong industry relationships, and an experienced founder.
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
            Similar businesses in Australia are typically valued at around $1.8M at this stage. We discounted that average by more than half because we do not have paying customers yet, but kept a solid baseline since the product is fully built and ready to go.
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
      Growth Target: <strong>AUD $925,000.</strong> This higher figure is what DIANA becomes worth once it reaches 1,000 active paying users. It is calculated from the $5,000 monthly net profit at that milestone, valued at 12 months of earnings, plus the base asset value.
    </p>
  </div>,

  // Slide 10: Seed Capital Allocation (6 Items)
  <div key="slide-8" className="glass-surface p-12 rounded-3xl space-y-6 flex flex-col justify-center h-full">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-1">Seed Capital Allocation</h2>
    <p className="font-body-sm text-[var(--color-secondary)]">Because the software is fully built, your money goes directly into getting the product in front of people and making sure the business is set up properly and legally protected.</p>
    
    <div className="grid grid-cols-3 gap-5 mt-4">
      {/* Category 1 */}
      <div className="bg-white/50 p-5 rounded-xl border-t-4 border-[var(--color-primary)] flex flex-col shadow-sm transform hover:-translate-y-1 transition-transform">
        <div className="flex justify-between items-center mb-3 border-b border-[var(--color-primary)]/20 pb-2">
          <h3 className="font-label-caps text-xs text-[var(--color-primary)] font-bold">1. Marketing &amp; Launch Events</h3>
          <span className="font-impact-stat text-lg text-[var(--color-primary)]">25%</span>
        </div>
        <p className="font-body-xs text-xs text-[var(--color-text-subtle)] leading-relaxed">
          Launch events and creator partnerships across our initial markets to ignite global buzz and early consumer adoption.
        </p>
      </div>

      {/* Category 2 */}
      <div className="bg-white/50 p-5 rounded-xl border-t-4 border-[var(--color-secondary)] flex flex-col shadow-sm transform hover:-translate-y-1 transition-transform">
        <div className="flex justify-between items-center mb-3 border-b border-[var(--color-secondary)]/20 pb-2">
          <h3 className="font-label-caps text-xs text-[var(--color-secondary)] font-bold">2. Partner Activation</h3>
          <span className="font-impact-stat text-lg text-[var(--color-secondary)]">20%</span>
        </div>
        <p className="font-body-xs text-xs text-[var(--color-text-subtle)] leading-relaxed">
          Physical tap-to-pay kits, standees, and window decals to onboard and equip our first 200 partner businesses.
        </p>
      </div>

      {/* Category 3 */}
      <div className="bg-white/50 p-5 rounded-xl border-t-4 border-[var(--color-primary)]/60 flex flex-col shadow-sm transform hover:-translate-y-1 transition-transform">
        <div className="flex justify-between items-center mb-3 border-b border-gray-300 pb-2">
          <h3 className="font-label-caps text-xs text-[var(--color-text)] font-bold">3. Legal &amp; Brand Protection</h3>
          <span className="font-impact-stat text-lg text-[var(--color-text)]">15%</span>
        </div>
        <p className="font-body-xs text-xs text-[var(--color-text-subtle)] leading-relaxed">
          Trademark registration across key global markets, shareholder agreement, and app legal documentation.
        </p>
      </div>

      {/* Category 4 */}
      <div className="bg-white/50 p-5 rounded-xl border-t-4 border-[var(--color-secondary)] flex flex-col shadow-sm transform hover:-translate-y-1 transition-transform">
        <div className="flex justify-between items-center mb-3 border-b border-[var(--color-secondary)]/20 pb-2">
          <h3 className="font-label-caps text-xs text-[var(--color-secondary)] font-bold">4. Tech Infrastructure</h3>
          <span className="font-impact-stat text-lg text-[var(--color-secondary)]">10%</span>
        </div>
        <p className="font-body-xs text-xs text-[var(--color-text-subtle)] leading-relaxed">
          12 months of secure cloud hosting, automated redundancy backups, and essential platform subscriptions.
        </p>
      </div>

      {/* Category 5 */}
      <div className="bg-white/50 p-5 rounded-xl border-t-4 border-[var(--color-primary)] flex flex-col shadow-sm transform hover:-translate-y-1 transition-transform">
        <div className="flex justify-between items-center mb-3 border-b border-[var(--color-primary)]/20 pb-2">
          <h3 className="font-label-caps text-xs text-[var(--color-primary)] font-bold">5. Working Capital</h3>
          <span className="font-impact-stat text-lg text-[var(--color-primary)]">20%</span>
        </div>
        <p className="font-body-xs text-xs text-[var(--color-text-subtle)] leading-relaxed">
          A safety buffer for unexpected expenses and operational costs, ensuring the business stays stable during its first year.
        </p>
      </div>

      {/* Category 6 */}
      <div className="bg-white/50 p-5 rounded-xl border-t-4 border-[var(--color-secondary)] flex flex-col shadow-sm transform hover:-translate-y-1 transition-transform">
        <div className="flex justify-between items-center mb-3 border-b border-[var(--color-secondary)]/20 pb-2">
          <h3 className="font-label-caps text-xs text-[var(--color-secondary)] font-bold">6. Initial Transaction Float</h3>
          <span className="font-impact-stat text-lg text-[var(--color-secondary)]">10%</span>
        </div>
        <p className="font-body-xs text-xs text-[var(--color-text-subtle)] leading-relaxed">
          Covers payment processing fees for early wallet top-ups before merchant transaction revenue offsets the costs.
        </p>
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
          <p className="font-label-caps text-[var(--color-primary)] mb-2">The Early Backer Discount</p>
          <p className="font-body-md text-[var(--color-text-subtle)]">Because we are seeking a strategic partner to support our immediate market launch, we are offering an early-backer discount on this initial round.</p>
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
        <p className="font-body-md text-[var(--color-secondary)]">$50,000 into the newly established entity in exchange for 10% ordinary equity, formally documented in a shareholders agreement and allocated directly to the marketing, launch, and legal setup plans.</p>
      </div>
    </div>
  </div>,
];

