'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { submitSignature } from '@/app/actions/submitForm';

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
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

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
    setSubmitError(null);
  };

  const handleSubmit = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsSubmitting(true);
    setSubmitError(null);

    const signatureData = canvas.toDataURL('image/png');

    const result = await submitSignature({
      deck_source: 'generic',
      investor_label: 'Authorized Signatory',
      signature_data: signatureData,
      investment_amount_aud: null,
      equity_percentage: null
    });

    setIsSubmitting(false);
    if (result.success) {
      setDealClosed(true);
    } else {
      setSubmitError(result.error || 'Failed to submit signature.');
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-8 space-y-6">
      {dealClosed && <Confetti />}
      
      {!dealClosed ? (
        <div className="bg-white/10 p-6 rounded-2xl border border-[var(--color-primary)]/30 w-full max-w-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="font-label-caps text-sm text-[var(--color-text-subtle)]">Digital Signature</span>
            {hasSigned && !isSubmitting && <button onClick={clearSignature} className="text-xs text-[var(--color-primary)] hover:underline z-10 relative">Clear</button>}
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

          {submitError && (
            <p className="text-red-500 text-xs mt-3 text-center font-semibold">{submitError}</p>
          )}
          
          <button 
            disabled={!hasSigned || isSubmitting}
            onClick={handleSubmit}
            className={`w-full mt-6 py-4 rounded-xl font-headline-md text-xl transition-all ${hasSigned && !isSubmitting ? 'bg-[var(--color-primary)] text-white shadow-[0_0_20px_rgba(255,0,153,0.4)] hover:scale-[1.02] cursor-pointer' : 'bg-gray-500/20 text-gray-400 cursor-not-allowed opacity-50'}`}
          >
            {isSubmitting ? 'Securing Deal...' : 'Commit to Seed Round'}
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

function FinancialStrategySlide() {
  return (
    <div className="glass-surface p-10 md:p-12 rounded-3xl flex flex-col justify-between gap-6 h-full relative border-4 border-[var(--color-primary)]/40">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-headline-lg text-4xl text-[var(--color-primary)]">
            The Financial Engine: Reinvestment &amp; Dividends
          </h2>
          <p className="font-body-md text-[var(--color-secondary)] mt-1 max-w-4xl leading-relaxed">
            How we balance rapid global scaling with regular liquid cash returns. The exact percentage of dividends to be distributed will be agreed upon later on as we scale. To demonstrate how this wealth-building engine works, we illustrate a clean 80/20 reinvestment and dividend split across our growth tiers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 items-stretch">
        {/* Tier 1: 1,000 to 2,500 Users */}
        <div className="bg-white/40 p-6 rounded-2xl border-t-4 border-[var(--color-primary)] flex flex-col justify-between shadow-sm">
          <div>
            <span className="font-label-caps text-xs text-[var(--color-primary)] tracking-widest block mb-1">Tier 1 • 1,000 – 2,500 Users</span>
            <h3 className="font-headline-md text-2xl text-[var(--color-secondary)] leading-tight">
              $5,000 – $12,500
            </h3>
            <span className="text-[11px] font-bold text-[var(--color-text-subtle)] uppercase tracking-wider block mt-0.5 mb-3">AUD / month Net Profit</span>
            <p className="font-body-xs text-[var(--color-text-subtle)] text-xs leading-relaxed mb-4">
              With our 6-month safety net secured, we initiate our profit split—funding targeted marketing while generating our first liquid cash yield!
            </p>
          </div>
          <div className="space-y-2 pt-3 border-t border-gray-200/60 text-xs mt-auto">
            <div className="flex justify-between items-baseline gap-1">
              <span className="text-[var(--color-text-subtle)] font-medium">80% Reinvestment:</span>
              <strong className="text-[var(--color-primary)] text-right">$4,000 – $10,000</strong>
            </div>
            <div className="flex justify-between items-baseline gap-1">
              <span className="text-[var(--color-text-subtle)] font-medium">20% Dividends:</span>
              <strong className="text-[var(--color-secondary)] text-right">$1,000 – $2,500</strong>
            </div>
          </div>
        </div>

        {/* Tier 2: 2,500 to 5,000 Users */}
        <div className="bg-white/40 p-6 rounded-2xl border-t-4 border-[var(--color-secondary)] flex flex-col justify-between shadow-sm">
          <div>
            <span className="font-label-caps text-xs text-[var(--color-secondary)] tracking-widest block mb-1">Tier 2 • 2,500 – 5,000 Users</span>
            <h3 className="font-headline-md text-2xl text-[var(--color-primary)] leading-tight">
              $12,500 – $25,000
            </h3>
            <span className="text-[11px] font-bold text-[var(--color-text-subtle)] uppercase tracking-wider block mt-0.5 mb-3">AUD / month Net Profit</span>
            <p className="font-body-xs text-[var(--color-text-subtle)] text-xs leading-relaxed mb-4">
              Surging volume funds salaried team members and major festival activations like Bali Nemoralia without burning seed capital.
            </p>
          </div>
          <div className="space-y-2 pt-3 border-t border-gray-200/60 text-xs mt-auto">
            <div className="flex justify-between items-baseline gap-1">
              <span className="text-[var(--color-text-subtle)] font-medium">80% Reinvestment:</span>
              <strong className="text-[var(--color-primary)] text-right">$10,000 – $20,000</strong>
            </div>
            <div className="flex justify-between items-baseline gap-1">
              <span className="text-[var(--color-text-subtle)] font-medium">20% Dividends:</span>
              <strong className="text-[var(--color-secondary)] text-right">$2,500 – $5,000</strong>
            </div>
          </div>
        </div>

        {/* Tier 3: 10,000+ Users */}
        <div className="bg-[var(--color-primary)]/10 p-6 rounded-2xl border-2 border-[var(--color-primary)] flex flex-col justify-between shadow-md">
          <div>
            <span className="font-label-caps text-xs text-[var(--color-primary)] tracking-widest block mb-1">Tier 3 • 10,000+ Users</span>
            <h3 className="font-headline-md text-2xl text-[var(--color-primary)] leading-tight">
              $50,000+
            </h3>
            <span className="text-[11px] font-bold text-[var(--color-text-subtle)] uppercase tracking-wider block mt-0.5 mb-3">AUD / month Net Profit</span>
            <p className="font-body-xs text-[var(--color-text-subtle)] text-xs leading-relaxed mb-4">
              Fixed serverless overheads stay flat as DIANA becomes a cash-generating powerhouse and high-growth compounding machine!
            </p>
          </div>
          <div className="space-y-2 pt-3 border-t border-gray-200/60 text-xs mt-auto">
            <div className="flex justify-between items-baseline gap-1">
              <span className="text-[var(--color-text-subtle)] font-medium">80% Reinvestment:</span>
              <strong className="text-[var(--color-primary)] text-right">$40,000+</strong>
            </div>
            <div className="flex justify-between items-baseline gap-1">
              <span className="text-[var(--color-text-subtle)] font-medium">20% Dividends:</span>
              <strong className="text-[var(--color-secondary)] text-right">$10,000+</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white/50 rounded-xl border border-[var(--color-secondary)]/20 text-left">
        <p className="font-body-sm text-xs text-[var(--color-secondary)] font-bold mb-1">
          The 80/20 Growth Engine Takeaway:
        </p>
        <p className="font-body-sm text-xs text-[var(--color-text-subtle)]">
          80% goes back into growing the app to aggressively drive our total valuation toward $5,000,000+, while 20% is paid out as regular cash hitting shareholder bank accounts ASAP.
        </p>
      </div>
    </div>
  );
}

function NemoraliaCaseStudySlide() {
  const [activeCard, setActiveCard] = React.useState<'home' | 'bali' | null>(null);

  return (
    <div className="glass-surface p-10 md:p-12 rounded-3xl space-y-6 flex flex-col justify-between h-full relative border-4 border-[var(--color-secondary)]/40 overflow-hidden">
      <div className="flex justify-between items-start shrink-0">
        <div>
          <h2 className="font-headline-lg text-4xl text-[var(--color-primary)]">
            The Flagship Launch Case Study
          </h2>
          <p className="font-body-md text-[var(--color-secondary)] mt-1 max-w-4xl leading-relaxed">
            This is how we will turn real-world community events into active app users and daily transactions that quietly support animals.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 flex-1 justify-between min-h-0 overflow-y-auto">
        {activeCard === 'home' ? (
          <div
            onClick={() => setActiveCard(null)}
            className="bg-white/95 p-6 md:p-8 rounded-2xl border-t-8 border-[var(--color-secondary)] shadow-2xl flex flex-col justify-between w-full h-full text-left cursor-pointer animate-fadeIn transition-all overflow-y-auto"
          >
            <div>
              <div className="flex justify-between items-center mb-5 border-b border-gray-200 pb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">⚡</span>
                  <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-[var(--color-secondary)]">
                    Home Activation: Good Food Sundays
                  </h3>
                </div>
                <div>
                  <span className="font-impact-stat text-2xl md:text-3xl text-[var(--color-primary)]">~$100 AUD</span>
                </div>
              </div>

              <div className="space-y-4 my-3 text-xs md:text-sm text-[var(--color-text)] leading-relaxed">
                <div>
                  <strong className="text-[var(--color-secondary)]">The Venue &amp; Roots: </strong>Good Food Sundays at Mandala Park, Mandaluyong, Manila&apos;s premier 100% vegan weekend market where Diane herself used to be a merchant. On August 2nd, Diane visits as a returning peer to reconnect and pre-onboard vendors before market day.
                </div>
                <div>
                  <strong className="text-[var(--color-secondary)]">The Booth, Standees &amp; Meals: </strong>The GFS booth fee is only 800 PHP (~$20 AUD, including table, chairs, and electricity). We budget ~$80 AUD across both Sundays for transport, booth decor, printed QR standees, and eating meals directly through DIANA to support our vendor peers.
                </div>
                <div>
                  <strong className="text-[var(--color-secondary)]">The Onboarding &amp; Live Demo Day: </strong>On August 9th, we host our official booth with a live app demo and interactive Q&amp;A! When attendees visit us, they scan our QR standees, download the app, and instantly complete their first live DIANA transaction with our partner vendors, experiencing fee-free compassionate commerce in real time.
                </div>
                <div className="p-3.5 bg-[var(--color-secondary)]/10 rounded-xl border border-[var(--color-secondary)]/20 font-medium text-center text-xs md:text-sm text-[var(--color-secondary)] mt-2">
                  Manila is where our roots are. By launching at Good Food Sundays first, we prove that DIANA is built from the ground up, igniting live compassionate commerce at home before taking it to the world.
                </div>
              </div>
            </div>
          </div>
        ) : activeCard === 'bali' ? (
          <div
            onClick={() => setActiveCard(null)}
            className="bg-white/95 p-6 md:p-8 rounded-2xl border-t-8 border-[var(--color-primary)] shadow-2xl flex flex-col justify-between w-full h-full text-left cursor-pointer animate-fadeIn transition-all overflow-y-auto"
          >
            <div>
              <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">🔥</span>
                  <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
                    Launch Festival: The Nemoralia
                  </h3>
                </div>
                <div>
                  <span className="font-impact-stat text-2xl md:text-3xl text-[var(--color-secondary)]">~$2K–$4K AUD</span>
                </div>
              </div>

              <div className="space-y-3 my-1.5 text-xs text-[var(--color-text)] leading-relaxed">
                <div className="text-xs md:text-sm">
                  <strong className="text-[var(--color-primary)]">Why The Nemoralia? </strong>
                  This ancient Roman Nemoralia was held every August 13–15 to honor Diana, protector of the wild. It was a time when hunting was strictly forbidden and animals roamed under her divine protection. We revive this 3-day tradition in Asia&apos;s vegan capital through modern financial infrastructure that protects animals permanently.
                </div>
                <div>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li><strong className="text-[var(--color-primary)]">Aug 13 - The Gathering &amp; Founding Dinner: </strong>An intimate dinner with invited guests to set our shared purpose and pledge our commitments to animal protection, mirroring the ancient tradition where pilgrims lit torches and tied wishes to trees in Diana&apos;s grove, setting the tone for the market days ahead.</li>
                    <li><strong className="text-[var(--color-primary)]">Aug 14 - The Live Cashless Market: </strong>Our 100% vegan market opens to the public! Attendees pay merchants exclusively through the DIANA app. This serves as a live product demo and revenue generator, proving our 5% platform model while the real-time impact counter routes funds to animal sanctuaries.</li>
                    <li><strong className="text-[var(--color-primary)]">Aug 15 - The Celebration &amp; Impact Reveal: </strong>Our live cashless market continues in full swing all day and transitions into an all-night celebration! All food, drinks, and evening activities continue to be transacted exclusively through the DIANA app while our real-time impact counter reveals the total funding generated for animal sanctuaries.</li>
                    <li><strong className="text-[var(--color-primary)]">Aug 16 - Post-Event Villa Kitty Visit: </strong>A special visit to Bali&apos;s most famous cat sanctuary to attend their Sunday vegan lunch, honoring Diana&apos;s historical association with cats and animal rescue.</li>
                  </ul>
                </div>
                <div className="text-xs md:text-sm">
                  <strong className="text-[var(--color-primary)]">Budget Breakdown: </strong>
                  Partnered Villa ($0 hire / ~$1,500–$1,800 paid contingency), Food &amp; Bar Top-Up (~$515), Entertainment &amp; Performers (~$470), Local Photo/Video (~$610–$800), Local Flowers &amp; Decor (~$170), Contingency (~$280).
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch flex-1">
              {/* Pillar 1: Manila GFS Activation */}
              <div 
                onClick={() => setActiveCard('home')}
                className="bg-white/60 hover:bg-white/90 p-6 md:p-7 rounded-2xl border-t-8 border-[var(--color-secondary)] shadow-md hover:shadow-lg flex flex-col justify-between transition-all duration-200 cursor-pointer transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">⚡</span>
                      <h3 className="font-headline-md text-xl font-bold text-[var(--color-secondary)]">Home Activation</h3>
                    </div>
                    <span className="text-[11px] font-bold text-[var(--color-primary)] uppercase tracking-wider shrink-0">AUG 2 &amp; 9 • MANILA</span>
                  </div>
                  <p className="font-body-sm text-[var(--color-text)] leading-relaxed text-xs md:text-sm">
                    Our official home launch at Good Food Sundays, Manila&apos;s premier 100% vegan weekend market where Diane herself used to be a merchant. Leveraging our deep community roots, we pre-onboard trusted vendor peers so that on market day, attendees can download the app and instantly complete their first live DIANA transactions.
                  </p>
                </div>
              </div>

              {/* Pillar 2: Bali Nemoralia Festival */}
              <div 
                onClick={() => setActiveCard('bali')}
                className="bg-white/60 hover:bg-white/90 p-6 md:p-7 rounded-2xl border-t-8 border-[var(--color-primary)] shadow-md hover:shadow-lg flex flex-col justify-between transition-all duration-200 cursor-pointer transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🔥</span>
                      <h3 className="font-headline-md text-xl font-bold text-[var(--color-primary)]">Launch Festival</h3>
                    </div>
                    <span className="text-[11px] font-bold text-[var(--color-secondary)] uppercase tracking-wider shrink-0">AUG 13–15 • BALI</span>
                  </div>
                  <p className="font-body-sm text-[var(--color-text)] leading-relaxed text-xs md:text-sm">
                    Our official international debut in Asia&apos;s vegan capital comes to life as The Nemoralia, a 3-day gathering patterned after the ancient Roman festival honoring the goddess Diana on these exact dates. Attendees pay our curated founding merchants exclusively through DIANA, proving our 5% revenue model live while building global community momentum.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Global GTM Replication (Full Width at Bottom) */}
            <div className="bg-[var(--color-primary)]/10 p-6 md:p-7 rounded-2xl border-2 border-[var(--color-primary)] shadow-md">
              <div>
                <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🌍</span>
                    <h3 className="font-headline-md text-xl font-bold text-[var(--color-primary)]">Global Replication</h3>
                  </div>
                  <span className="text-[11px] font-bold text-[var(--color-text-subtle)] uppercase tracking-wider shrink-0">Q3 2026 ONWARDS • ASIA AND BEYOND</span>
                </div>
                <p className="font-body-sm text-[var(--color-text)] leading-relaxed text-xs md:text-sm">
                  We take this low-cost grassroots model and scale by partnering with existing vegan markets, eco-festivals, and sanctuaries worldwide. This turns established community gatherings into continuous onboarding and transaction engines, culminating in an expanding annual Nemoralia celebration every August.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function WhatWeHaveBuiltSlide() {
  const [activeCard, setActiveCard] = React.useState<'software' | 'community' | null>(null);

  return (
    <div className={`glass-surface p-10 md:p-12 rounded-3xl flex flex-col h-full relative overflow-hidden ${activeCard !== null ? 'space-y-6 justify-between' : 'gap-8 justify-center'}`}>
      <div className="shrink-0">
        <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-2">What We Have Built</h2>
        <h3 className="font-headline-md text-2xl text-[var(--color-secondary)] border-b border-[var(--color-primary)]/30 pb-2">Valuation Breakdown</h3>
      </div>

      <div className={`flex flex-col gap-6 min-h-0 overflow-y-auto ${activeCard !== null ? 'flex-1 justify-between' : 'justify-center'}`}>
        {activeCard === 'software' ? (
          <div
            onClick={() => setActiveCard(null)}
            className="bg-white/95 p-6 md:p-8 rounded-2xl border-t-8 border-[var(--color-primary)] shadow-2xl flex flex-col justify-between w-full h-full text-left cursor-pointer animate-fadeIn transition-all overflow-y-auto"
          >
            <div>
              <div className="flex justify-between items-center mb-5 border-b border-gray-200 pb-3">
                <div>
                  <h3 className="font-headline-lg text-3xl font-bold text-[var(--color-primary)]">
                    The Software Build Value
                  </h3>
                </div>
                <span className="font-impact-stat text-4xl text-[var(--color-primary)]">$450,000</span>
              </div>

              <div className="space-y-4 my-4 text-xs md:text-sm text-[var(--color-text)] leading-relaxed">
                <div>
                  <strong className="text-[var(--color-primary)]">The Scale: </strong>DIANA is a complete, production-ready universal digital ecosystem consisting of over 100,000 lines of code across the web platform and cross-platform mobile application (iOS &amp; Android).
                </div>
                <div>
                  <strong className="text-[var(--color-primary)]">The Time &amp; Labor: </strong>It required 1,800+ hours of intensive full-stack engineering, UI/UX architecture, database design, and financial software structuring to build the Multi-Impact settlement engine, live multi-currency conversion, role-based account architecture (switching between user, merchant, sanctuary, and admin profiles), and AI integrations from scratch.
                </div>
                <div className="space-y-3 pt-1">
                  <div>
                    <strong className="text-[var(--color-primary)]">The Replacement Cost: </strong>Hiring an established Australian software or FinTech agency today to architect and write 100,000 lines of production-ready code at a standard blended agency rate of $250 AUD/hour:
                  </div>
                  <div className="p-3 bg-[var(--color-primary)]/10 rounded-lg font-mono font-bold text-center my-3 text-[var(--color-primary)] text-xs md:text-sm">
                    1,800 Hours × $250/hour = $450,000 AUD
                  </div>
                  <div className="pt-1">
                    This is the direct, verifiable replacement cost of the software sitting in our hands today.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : activeCard === 'community' ? (
          <div
            onClick={() => setActiveCard(null)}
            className="bg-white/95 p-6 md:p-8 rounded-2xl border-t-8 border-[var(--color-secondary)] shadow-2xl flex flex-col justify-between w-full h-full text-left cursor-pointer animate-fadeIn transition-all overflow-y-auto"
          >
            <div>
              <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-3">
                <div>
                  <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-[var(--color-secondary)]">
                    The Community Pipeline Value
                  </h3>
                </div>
                <span className="font-impact-stat text-3xl md:text-4xl text-[var(--color-secondary)]">$185,000</span>
              </div>

              <div className="space-y-3 my-2 text-[11px] md:text-xs text-[var(--color-text)] leading-relaxed">
                <p className="font-medium text-[var(--color-secondary)] text-[10px] md:text-[11px] lg:text-xs tracking-tight">
                  Why would it cost well over $185,000 in cash to recreate the brand assets and pipeline we bring to launch day? Here are the exact industry costs:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
                  <div className="p-3 bg-white/90 rounded-xl border border-gray-200 flex flex-col justify-between">
                    <div>
                      <strong className="text-[var(--color-secondary)] block mb-1">1. Targeted Social Audience: ~$65,000</strong>
                      <span className="block mt-1"><strong>What we have: </strong>~29,000 followers across brand channels, plus peer access to ~145,000 niche network members.</span>
                      <span className="block mt-1"><strong>What it costs to buy: </strong>Running paid ad campaigns on Instagram, Facebook, and LinkedIn to acquire real, high-intent followers costs $3 to $6 per follower.</span>
                    </div>
                    <span className="block mt-2 pt-2 border-t border-gray-100 text-[var(--color-secondary)] font-medium"><strong>The Math: </strong>~20k–25k engaged followers via ads = ~$65,000.</span>
                  </div>

                  <div className="p-3 bg-white/90 rounded-xl border border-gray-200 flex flex-col justify-between">
                    <div>
                      <strong className="text-[var(--color-secondary)] block mb-1">2. PR &amp; Celebrity Access: ~$70,000</strong>
                      <span className="block mt-1"><strong>What we have: </strong>Direct relationships with celebrity advocates (~48M reach), tier-1 media editors, and peer founders.</span>
                      <span className="block mt-1"><strong>What it costs to buy: </strong>Retaining a specialized PR agency to open doors and run press outreach costs $8,000 to $10,000/month.</span>
                    </div>
                    <span className="block mt-2 pt-2 border-t border-gray-100 text-[var(--color-secondary)] font-medium"><strong>The Math: </strong>7–8 month launch retainer = ~$70,000.</span>
                  </div>

                  <div className="p-3 bg-white/90 rounded-xl border border-gray-200 flex flex-col justify-between">
                    <div>
                      <strong className="text-[var(--color-secondary)] block mb-1">3. B2B Merchant Leads: ~$50,000</strong>
                      <span className="block mt-1"><strong>What we have: </strong>Established relationships and personal friendships with numerous vegan business owners globally.</span>
                      <span className="block mt-1"><strong>What it costs to buy: </strong>Hiring lead-gen agencies or sales reps to source, pitch, and qualify merchant leads averages $200 to $250 per qualified lead.</span>
                    </div>
                    <span className="block mt-2 pt-2 border-t border-gray-100 text-[var(--color-secondary)] font-medium"><strong>The Math: </strong>Immediate warm access to ready merchants saves ~$50,000.</span>
                  </div>
                </div>

                <div className="p-3 bg-[var(--color-secondary)]/10 rounded-xl border border-[var(--color-secondary)]/20 text-center font-bold text-xs md:text-sm text-[var(--color-secondary)] mt-3">
                  Social Ads ($65K) + PR Retainer ($70K) + B2B Lead Gen ($50K) = $185,000
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-8 items-stretch">
            <div
              onClick={() => setActiveCard('software')}
              className="bg-white/40 hover:bg-white/80 p-8 rounded-2xl border-t-4 border-[var(--color-primary)] flex flex-col justify-start gap-6 shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-1"
            >
              <div className="flex flex-col">
                <h4 className="font-label-caps text-2xl text-[var(--color-primary)] mb-2">Software Build Value</h4>
                <span className="font-impact-stat text-5xl text-[var(--color-primary)]">$450,000</span>
              </div>
              <p className="font-body-lg text-[var(--color-text-subtle)] leading-relaxed">
                A complete, finished digital product covering both the web platform and the mobile app. It took over 1,800 hours of dedicated work to build from scratch, covering everything from the user experience to the payment system underneath. Hiring an outside software agency to build this from scratch would cost at least $450,000.
              </p>
            </div>
            <div
              onClick={() => setActiveCard('community')}
              className="bg-white/40 hover:bg-white/80 p-8 rounded-2xl border-t-4 border-[var(--color-secondary)] flex flex-col justify-start gap-6 shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-1"
            >
              <div className="flex flex-col">
                <h4 className="font-label-caps text-2xl text-[var(--color-secondary)] mb-2">Community Pipeline Value</h4>
                <span className="font-impact-stat text-5xl text-[var(--color-secondary)]">$185,000</span>
              </div>
              <p className="font-body-lg text-[var(--color-text-subtle)] leading-relaxed">
                We come to launch with an established social media presence across brand and personal accounts, genuine relationships with vegan business owners across multiple markets, and a wide network of well-known advocates in the space. Building all of this from scratch through paid ads and outreach would cost well over $185,000.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ValuationCheckSlide() {
  const [activeCard, setActiveCard] = React.useState<'berkus' | 'scorecard' | null>(null);

  return (
    <div className="glass-surface p-10 md:p-12 rounded-3xl flex flex-col justify-between gap-6 h-full">
      <div>
        <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-2">Valuation Check</h2>
        <p className="font-body-md text-[var(--color-secondary)]">How did we make sure our $635,000 AUD valuation is fair? We checked it against two widely used ways of valuing early-stage businesses.</p>
      </div>

      <div className={`flex flex-col gap-6 min-h-0 overflow-y-auto ${activeCard !== null ? 'flex-1 justify-between' : 'justify-center'}`}>
        {activeCard === 'berkus' ? (
          <div
            onClick={() => setActiveCard(null)}
            className="bg-white/95 p-6 md:p-8 rounded-2xl border-t-8 border-[var(--color-secondary)] shadow-2xl flex flex-col justify-between w-full h-full text-left cursor-pointer animate-fadeIn transition-all overflow-y-auto"
          >
            <div>
              <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-2">
                <div>
                  <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-[var(--color-secondary)]">
                    The Berkus Method / Risk Reduction
                  </h3>
                </div>
                <span className="font-impact-stat text-3xl md:text-4xl text-[var(--color-secondary)]">$750,000</span>
              </div>
              <div className="space-y-1.5 my-auto text-[11px] md:text-xs text-[var(--color-text)] leading-relaxed">
                <div>
                  <strong className="text-[var(--color-secondary)]">What the method is: </strong>Created by VC Dave Berkus, this formula values early-stage tech startups before commercial revenue by measuring execution risk eliminated across 5 qualitative hurdles (up to ~$750K AUD max).
                </div>
                <div>
                  <strong className="text-[var(--color-secondary)]">How DIANA scored the $750,000 ceiling:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-0.5">
                    <li><strong>Sound Idea (Commodity Risk Removed): </strong>Validated central hub stepping directly into the active user base left by abillion&apos;s closure.</li>
                    <li><strong>Working Prototype (Technology Risk Removed): </strong>100,000+ lines of finished code across web and iOS/Android ready to deploy.</li>
                    <li><strong>Quality Management Team (Execution Risk Removed): </strong>A lifetime of capability building across tech, psychology, and entrepreneurship—uniting the technical architect, community builder, and target market into one solo founder.</li>
                    <li><strong>Strategic Relationships (Market Risk Removed): </strong>Pre-wired warm access to numerous vegan business owners globally and advocacy leaders.</li>
                    <li><strong>Product Rollout Plan (Production Risk Removed): </strong>Established launch timelines with immediate access to early partner venues for regional expansion.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-[var(--color-secondary)]">The Takeaway: </strong>Because DIANA hits every risk-reduction milestone with a production-ready product, the formula awards the full pre-revenue ceiling of $750,000 AUD.
                </div>

                <div className="p-2.5 bg-[var(--color-secondary)]/10 rounded-xl border border-[var(--color-secondary)]/20 text-center font-bold text-xs md:text-sm text-[var(--color-secondary)] mt-1.5">
                  Our agreed baseline of $635,000 AUD sits $115,000 below this benchmark.
                </div>
              </div>
            </div>
          </div>
        ) : activeCard === 'scorecard' ? (
          <div
            onClick={() => setActiveCard(null)}
            className="bg-white/95 p-6 md:p-8 rounded-2xl border-t-8 border-gray-600 shadow-2xl flex flex-col justify-between w-full h-full text-left cursor-pointer animate-fadeIn transition-all overflow-y-auto"
          >
            <div>
              <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-2">
                <div>
                  <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-gray-800">
                    The Scorecard Method / Market Average
                  </h3>
                </div>
                <span className="font-impact-stat text-3xl md:text-4xl text-gray-700">$680,000</span>
              </div>
              <div className="space-y-3 my-auto text-[11px] md:text-xs text-[var(--color-text)] leading-relaxed">
                <div>
                  <strong className="text-gray-800">The Australian Startup Benchmark: </strong>In Australia right now (2025–2026 data), early-stage tech startups raising seed capital that have built a fully working software platform are valued at an average of $1.5M to $1.8M AUD.
                </div>
                <div>
                  <strong className="text-gray-800">Where the discount percentage comes from: </strong>In professional startup appraisal, when comparing a pre-revenue startup against funded seed-stage peers (who usually already have initial commercial revenue flowing), valuation analysts apply a standard Pre-Revenue Stage Discount of 50% to 65%. This standard discount exists specifically to buffer against pre-revenue commercial adoption risk.
                </div>
                <div>
                  <strong className="text-gray-800">The Exact Math: </strong>We applied a standard ~62% pre-revenue stage discount directly to the $1.8M Australian market average:
                  <div className="p-2 bg-gray-100 rounded-lg font-mono font-bold text-center my-2 text-gray-800">
                    $1,800,000 × (1 - 0.62) = $684,000 ≈ $680,000 AUD
                  </div>
                </div>
                <div>
                  <strong className="text-gray-800">The Takeaway: </strong>This proves that $680,000 is not an arbitrary number—it is the exact mathematical formula used by angel investors when taking standard market averages ($1.8M) and discounting them for pre-revenue risk (~62%).
                </div>

                <div className="p-3 bg-gray-100 rounded-xl border border-gray-300 text-center font-bold text-xs md:text-sm text-gray-700 mt-3">
                  Our agreed baseline of $635,000 AUD sits $45,000 below even this heavily discounted calculation.
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6 items-stretch">
            <div
              className="bg-[var(--color-primary)]/10 p-6 rounded-2xl border-2 border-[var(--color-primary)] flex flex-col justify-between shadow-md"
            >
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

            <div
              onClick={() => setActiveCard('berkus')}
              className="bg-white/40 hover:bg-white/80 p-6 rounded-2xl border-t-4 border-[var(--color-secondary)] flex flex-col justify-between shadow-sm transition-all cursor-pointer transform hover:-translate-y-1"
            >
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

            <div
              onClick={() => setActiveCard('scorecard')}
              className="bg-white/40 hover:bg-white/80 p-6 rounded-2xl border-t-4 border-gray-400 flex flex-col justify-between shadow-sm transition-all cursor-pointer transform hover:-translate-y-1"
            >
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
        )}
      </div>
    </div>
  );
}

function FinalValuationSlide() {
  const [showExplainer, setShowExplainer] = React.useState(false);

  return (
    <div className="glass-surface p-12 rounded-3xl space-y-8 flex flex-col items-center justify-center text-center h-full">
      {showExplainer ? (
        <div
          onClick={() => setShowExplainer(false)}
          className="bg-white/95 p-8 rounded-2xl border-t-8 border-[var(--color-primary)] shadow-2xl flex flex-col justify-between flex-1 w-full text-left cursor-pointer animate-fadeIn transition-all"
        >
          <div>
            <div className="mb-5 border-b border-gray-200 pb-3">
              <span className="text-xs font-label-caps text-[var(--color-text-subtle)] block mb-0.5">Valuation Math Explainer</span>
              <h3 className="font-headline-lg text-3xl font-bold text-[var(--color-primary)]">
                How the $925,000 Growth Target is Calculated
              </h3>
            </div>

            <div className="space-y-4 my-4">
              <div className="flex items-start gap-3.5 text-sm md:text-base text-[var(--color-text)] leading-relaxed">
                <span className="w-7 h-7 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-[var(--color-primary)]">Base Asset Value ($635,000 AUD):</strong> The starting valuation of DIANA today—covering our fully built web and mobile platform, proprietary code, brand IP, and market setup before paying users arrive.
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm md:text-base text-[var(--color-text)] leading-relaxed">
                <span className="w-7 h-7 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-[var(--color-primary)]">1,000 Users Net Profit ($60,000 AUD/Yr):</strong> At our 1,000 active user break-even milestone (~$200/mo spend per user), DIANA generates $5,000 AUD per month ($60,000 AUD per year) in proven recurring net profit.
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm md:text-base text-[var(--color-text)] leading-relaxed">
                <span className="w-7 h-7 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-[var(--color-primary)]">The Growth Multiplier (+$290,000 AUD):</strong> In business valuation, proven recurring annual net profit ($60,000) is valued at a standard ~4.8x earnings multiplier, adding $290,000 in earning power to our assets.
                </div>
              </div>

              <div className="p-4 bg-[var(--color-primary)]/10 rounded-xl border border-[var(--color-primary)]/20 mt-4 text-center font-bold text-base text-[var(--color-primary)]">
                $635,000 Base Assets + $290,000 Earning Power = AUD $925,000 Total Valuation
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-4">The Final Valuation</h2>
          <div className="w-full max-w-2xl text-center p-12 bg-[var(--color-primary)]/10 rounded-3xl border-2 border-[var(--color-primary)]/30 transform hover:scale-105 transition-transform shadow-sm">
            <span className="font-label-caps block mb-4 text-[var(--color-text-subtle)] tracking-widest">Total Platform &amp; Brand Value</span>
            <span className="font-impact-stat text-7xl text-[var(--color-primary)]">AUD $635,000</span>
            <span className="block mt-4 font-body-lg text-[var(--color-secondary)] font-bold">Base Case Total</span>
          </div>
          <div
            onClick={() => setShowExplainer(true)}
            className="mt-6 bg-white/60 hover:bg-white p-5 rounded-2xl max-w-lg cursor-pointer border border-white/40 shadow-sm transition-all duration-200 transform hover:-translate-y-1"
          >
            <p className="font-body-md text-[var(--color-text)] font-bold text-lg">
              Growth Target: <span className="text-[var(--color-primary)]">AUD $925,000</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

function SeedAllocationSlide() {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const categories = [
    {
      title: "1. Partner Activation",
      percent: "35%",
      borderColor: "border-[var(--color-primary)]",
      headerColor: "text-[var(--color-primary)]",
      shortDesc: "Physical display kits, ethical vetting, and hands-on onboarding to activate our first 1,000+ partner merchants.",
      items: [
        "Custom acrylic QR table stands, tabletop cards, and welcome flyers so customers can scan, learn, and pay instantly at the counter.",
        "Eye-catching storefront window stickers advertising that at least 5% of purchases go directly to animal sanctuaries.",
        "International shipping and delivery of physical display materials to partner merchants in multiple countries.",
        "Dedicated ethical vetting, verification systems, and hands-on setup assistance to activate new partner merchants."
      ]
    },
    {
      title: "2. Marketing & Launch Events",
      percent: "20%",
      borderColor: "border-[var(--color-secondary)]",
      headerColor: "text-[var(--color-secondary)]",
      shortDesc: "Launch events and creator partnerships across our initial markets to ignite global buzz and early consumer adoption.",
      items: [
        "Flagship launch event sponsorship: The 2026 Bali Nemoralia Festival (August 13-15), creating global visibility and immediate transaction volume.",
        "Collaborations and co-marketing campaigns with well-known vegan creators, animal advocates, and sanctuary leaders.",
        "Grassroots community activation, local pop-up markets, and street-team ambassador programs.",
        "Targeted digital campaigns to drive initial user downloads and active daily usage."
      ]
    },
    {
      title: "3. Working Capital",
      percent: "25%",
      borderColor: "border-[var(--color-primary)]",
      headerColor: "text-[var(--color-primary)]",
      shortDesc: "A safety buffer for unexpected expenses and operational costs, ensuring the business stays stable during its first year.",
      items: [
        "Operational Contingency Reserve: Dedicated emergency reserve buffer to absorb unexpected operational or launch costs without financial stress.",
        "Accounting & Statutory Compliance: Professional annual corporate bookkeeping, tax preparation, and statutory compliance.",
        "On-Demand Specialist Contractors: Flexible budget to engage freelance specialists and project contractors for specific tasks as needed without adding permanent fixed payroll.",
        "Modest founder stipend supporting full-time platform management across all possible roles during the pre-profit launch sprint."
      ]
    },
    {
      title: "4. Legal & Brand Protection",
      percent: "10%",
      borderColor: "border-[var(--color-secondary)]",
      headerColor: "text-[var(--color-secondary)]",
      shortDesc: "Trademark registration across key global markets and essential platform legal documentation.",
      items: [
        "International trademark registrations to legally lock in the DIANA name across multiple global markets at once.",
        "Official company share certificates and simple corporate paperwork setting up ownership properly.",
        "Standard legal terms for partner merchants joining the platform to keep both the business and our partners protected.",
        "Clear privacy policies and user terms inside the app that meet international consumer protection laws."
      ]
    },
    {
      title: "5. Initial Transaction Float",
      percent: "5%",
      borderColor: "border-[var(--color-primary)]",
      headerColor: "text-[var(--color-primary)]",
      shortDesc: "Covers payment processing fees for early wallet top-ups before merchant transaction revenue offsets the costs.",
      items: [
        "Paying the small bank processing charge when users add money using local bank transfers.",
        "Making sure users can load funds quickly without getting hit by surprise deposit fees.",
        "Bridging the short timeline between when a user loads money into their wallet and when a merchant receives a payout.",
        "Operating a self-sustaining pool that naturally refills itself as regular merchant transaction fees roll in."
      ]
    },
    {
      title: "6. Tech Infrastructure",
      percent: "5%",
      borderColor: "border-[var(--color-secondary)]",
      headerColor: "text-[var(--color-secondary)]",
      shortDesc: "12 months of secure cloud hosting, operational software tools, and essential platform subscriptions.",
      items: [
        "Commercial cloud hosting so our web platform and mobile app load instantly from anywhere.",
        "Official annual developer licenses to keep our app live on the Apple App Store and Google Play Store.",
        "AI subscriptions and automated smart-search tools powering our in-app discovery engine.",
        "Essential communication suites, helpdesk infrastructure, and automated backups ensuring secure daily operations."
      ]
    }
  ];

  return (
    <div className="glass-surface p-10 rounded-3xl space-y-4 flex flex-col justify-center h-full">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-1">Seed Capital Allocation</h2>
          <p className="font-body-md text-[var(--color-secondary)]">Because the software is fully built, your money goes directly into getting the product in front of people and making sure the business is set up properly and legally protected.</p>
        </div>
      </div>

      {expandedIndex !== null ? (
        <div
          onClick={() => setExpandedIndex(null)}
          className={`bg-white/95 p-8 rounded-2xl border-t-8 ${categories[expandedIndex].borderColor} shadow-2xl flex flex-col justify-between flex-1 cursor-pointer animate-fadeIn transition-all mt-2`}
        >
          <div>
            <div className="flex justify-between items-center mb-5 border-b border-gray-200 pb-3">
              <div>
                <span className="text-xs font-label-caps text-[var(--color-text-subtle)] block mb-0.5">Itemized Allocation Breakdown</span>
                <h3 className={`font-headline-lg text-3xl font-bold ${categories[expandedIndex].headerColor}`}>
                  {categories[expandedIndex].title}
                </h3>
              </div>
              <span className={`font-impact-stat text-5xl ${categories[expandedIndex].headerColor}`}>
                {categories[expandedIndex].percent}
              </span>
            </div>

            <div className="space-y-3.5 my-4">
              {categories[expandedIndex].items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-start gap-3 text-sm md:text-base text-[var(--color-text)] leading-relaxed font-medium">
                  <span className="text-[var(--color-primary)] font-bold text-lg mt-0.5 shrink-0">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4 mt-2">
          <div className="grid grid-cols-3 gap-4">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => setExpandedIndex(idx)}
                className={`bg-white/60 p-4 rounded-xl border-t-4 ${cat.borderColor} flex flex-col shadow-sm cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:bg-white/90 hover:shadow-md`}
              >
                <div className="flex justify-between items-center mb-2 border-b border-gray-200 pb-1.5">
                  <h3 className={`font-label-caps text-xs font-bold ${cat.headerColor}`}>{cat.title}</h3>
                  <span className={`font-impact-stat text-lg ${cat.headerColor}`}>{cat.percent}</span>
                </div>
                <p className="font-body-xs text-xs text-[var(--color-text-subtle)] leading-relaxed">
                  {cat.shortDesc}
                </p>
              </div>
            ))}
          </div>

          {/* Lifecycle Budget Shift Banner */}
          <div className="p-4 bg-gradient-to-r from-[var(--color-primary)]/15 to-[var(--color-secondary)]/15 rounded-2xl border-2 border-[var(--color-primary)]/40 shadow-sm animate-fadeIn">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-lg">🚀</span>
              <h4 className="font-headline-md text-sm text-[var(--color-primary)] font-bold">The Lifecycle Budget Shift: From Rocket Fuel to Dividend Engine</h4>
            </div>
            <p className="font-body-sm text-xs text-[var(--color-text)] leading-relaxed">
              Your seed investment acts as upfront rocket fuel. Once we cross 1,000 users, early startup costs naturally drop to near-zero—shifting all freed-up cash flow directly into scaling marketing adoption and paying shareholder dividends.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function CapitalStrategySlide() {
  return (
    <div className="glass-surface p-10 md:p-12 rounded-3xl flex flex-col justify-between gap-8 h-full">
      <h2 className="font-headline-lg text-4xl text-[var(--color-primary)]">Your Investment, Protected</h2>
      <div className="grid grid-cols-2 gap-8 items-stretch">
        <div className="flex flex-col gap-4 h-full">
          <div className="bg-white/40 p-8 rounded-xl border-t-4 border-[var(--color-primary)] flex flex-col flex-1">
            <h3 className="font-label-caps text-xl text-[var(--color-secondary)] mb-4 border-b border-[var(--color-primary)]/20 pb-4">Government Grants Won&apos;t Dilute You</h3>
            <p className="font-body-md text-[var(--color-text-subtle)]">
              We are actively applying for government grants and innovation funding. If we receive any, that money goes directly into the business. It does <strong>not</strong> come with new shareholders attached. Your ownership percentage stays exactly the same.
            </p>
          </div>
          <div className="bg-[var(--color-secondary)]/10 p-4 rounded-xl border border-[var(--color-secondary)]/20 min-h-[80px] flex items-center justify-center">
            <p className="text-base md:text-lg font-bold text-[var(--color-text)] italic text-center">
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
            <p className="text-base md:text-lg font-bold text-[var(--color-text)] italic text-center">
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
    <p className="font-body-lg text-[var(--color-text-subtle)]">Prepared June 2026</p>
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
  <div key="slide-6" className="glass-surface p-10 md:p-12 rounded-3xl flex flex-col justify-between gap-8 h-full">
    <div>
      <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-2">Path to Profitability &amp; Timelines</h2>
      <p className="font-body-md text-[var(--color-secondary)]">To provide complete transparency and show how safe your investment is, we mapped out both an optimistic growth plan and a conservative baseline plan to reach our 1,000 active user break-even goal.</p>
    </div>
    
    <div className="grid grid-cols-2 gap-6 items-stretch">
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
          <span className="text-[var(--color-text-subtle)] text-sm">Skin in the Game Sanctuary Pledge (5% of DIANA&apos;s $500 cut)</span>
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
  <WhatWeHaveBuiltSlide key="slide-7" />,

  // Slide 8: Valuation Methodology & Independent Validation
  <ValuationCheckSlide key="slide-8-math" />,

  // Slide 9: Total Valuation (Interactive Growth Target)
  <FinalValuationSlide key="slide-8-total" />,

  // Slide 10: Seed Capital Allocation (Interactive Expandable Cards)
  <SeedAllocationSlide key="slide-10-alloc" />,

  // Slide 11: Flagship Launch Case Study (The 2026 Bali Nemoralia)
  <NemoraliaCaseStudySlide key="slide-nemoralia" />,

  // Slide 12: The Financial Engine (Reinvestment & Dividends)
  <FinancialStrategySlide key="slide-financial-engine" />,

  // Slide 13: Your Investment, Protected
  <CapitalStrategySlide key="slide-12-capital" />,

  // Slide 14: The Seed Round
  <div key="slide-round" className="glass-surface p-12 rounded-3xl space-y-6 flex flex-col justify-center h-full">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-1">The Seed Round</h2>
    <p className="font-body-md text-[var(--color-secondary)]">DIANA is raising a total of $365,000 AUD to reach a post-money valuation of $1,000,000 AUD. Tranche 1 is already committed, leaving $315,000 AUD open to qualified backers.</p>
    <div className="bg-white/40 rounded-2xl p-6 border border-white/60">
      <div className="flex justify-between items-center mb-3">
        <span className="font-label-caps text-xs text-[var(--color-text-subtle)]">Pre-Money Valuation</span>
        <span className="font-impact-stat text-xl text-[var(--color-secondary)]">AUD $635,000</span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <span className="font-label-caps text-xs text-[var(--color-primary)]">Tranche 1 — Committed</span>
        <span className="font-impact-stat text-xl text-[var(--color-primary)]">+ AUD $50,000</span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <span className="font-label-caps text-xs text-[var(--color-secondary)]">Open Allocation</span>
        <span className="font-impact-stat text-xl text-[var(--color-secondary)]">+ AUD $315,000</span>
      </div>
      <div className="h-px bg-[var(--color-primary)]/20 my-4" />
      <div className="flex justify-between items-center">
        <span className="font-label-caps text-sm text-[var(--color-primary)] font-bold">Post-Money Target</span>
        <span className="font-impact-stat text-3xl text-[#ff0099]">AUD $1,000,000</span>
      </div>
    </div>
    <p className="font-body-sm text-[var(--color-text-subtle)] text-center">At the $1M post-money valuation, every $10,000 AUD invested secures exactly <strong>1%</strong> ordinary equity.</p>
  </div>,

  // Slide 14: Investment Tiers
  <div key="slide-tiers" className="glass-surface p-12 rounded-3xl space-y-6 flex flex-col justify-center h-full">
    <h2 className="font-headline-lg text-4xl text-[var(--color-primary)] mb-1">Seed Round Tiers</h2>
    <p className="font-body-md text-[var(--color-secondary)]">The $315,000 AUD open allocation is available across three entry points. All investors receive ordinary equity, proportional to the $1,000,000 AUD post-money valuation.</p>
    <div className="grid grid-cols-3 gap-5 mt-2">
      <div className="bg-white/50 p-6 rounded-2xl border-t-4 border-[var(--color-text-subtle)] flex flex-col shadow-sm">
        <span className="font-label-caps text-xs text-[var(--color-text-subtle)] tracking-widest mb-2">Tier 1</span>
        <h3 className="font-headline-md text-xl text-[var(--color-secondary)] mb-1">Aligned Angel</h3>
        <p className="font-impact-stat text-3xl text-[var(--color-secondary)] mb-3">1% – 2.5%</p>
        <p className="font-body-xs text-xs text-[var(--color-text-subtle)] leading-relaxed flex-grow">For $10,000 – $25,000 AUD. Funds localized launch marketing and community activation events in target markets.</p>
      </div>
      <div className="bg-white/50 p-6 rounded-2xl border-t-4 border-[var(--color-primary)] flex flex-col shadow-md transform hover:-translate-y-1 transition-transform">
        <span className="font-label-caps text-xs text-[var(--color-primary)] tracking-widest mb-2">Tier 2</span>
        <h3 className="font-headline-md text-xl text-[var(--color-primary)] mb-1">Strategic Builder</h3>
        <p className="font-impact-stat text-3xl text-[var(--color-primary)] mb-3">2.5% – 5%</p>
        <p className="font-body-xs text-xs text-[var(--color-text-subtle)] leading-relaxed flex-grow">For $25,000 – $50,000 AUD. Funds partner merchant activation materials, tech infrastructure, and early operational runway.</p>
      </div>
      <div className="bg-[var(--color-primary)]/10 p-6 rounded-2xl border-2 border-[var(--color-primary)] flex flex-col shadow-lg">
        <span className="font-label-caps text-xs text-[var(--color-primary)] tracking-widest mb-2">Tier 3</span>
        <h3 className="font-headline-md text-xl text-[var(--color-primary)] mb-1">Lead Syndicate</h3>
        <p className="font-impact-stat text-3xl text-[#ff0099] mb-3">5% – 31.5%</p>
        <p className="font-body-xs text-xs text-[var(--color-text-subtle)] leading-relaxed flex-grow">For $50,000 – $315,000 AUD. Funds the full seed plan including regional legal setup, compliance, and a full-year operational buffer.</p>
      </div>
    </div>
  </div>,
];

