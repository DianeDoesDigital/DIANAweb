'use client';

import { useState } from 'react';
import { Smartphone, Compass, QrCode, Heart, User } from 'lucide-react';

export default function AppDemo() {
  const [showExplainer, setShowExplainer] = useState(true);

  return (
    <section id="demo" className="py-24 md:py-32 bg-background">
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[52px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-text-main select-none mt-4">
            try the <span className="text-primary">DIANA app</span>
          </h2>
        </div>

        {/* Device mockup + iframe */}
        <div className="relative flex justify-center">
          {/* Outer glow removed */}

          {/* Phone frame */}
          <div className="relative w-[375px] md:w-[420px] rounded-[48px] border-2 border-border-main bg-surface shadow-2xl overflow-hidden"
            style={{ height: '780px' }}>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-background rounded-b-2xl z-20 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-border-main" />
              <div className="w-16 h-1.5 rounded-full bg-border-main" />
            </div>

            {/* Explainer Overlay */}
            {showExplainer && (
              <div className="absolute inset-0 z-20 bg-[#FFDDEE] flex flex-col items-center justify-center p-6 text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-[32px] p-8 w-full max-w-[320px] flex flex-col items-center shadow-sm border border-white/50">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <img src="/diana-logo.png" alt="DIANA" className="w-full h-full object-contain drop-shadow-md" />
                  </div>
                  
                  <h3 className="font-headline-lg text-[32px] text-primary mb-6" style={{ fontFamily: 'Playfair Display' }}>App Demo</h3>
                  
                  <p className="font-body-sm text-secondary font-medium leading-relaxed mb-6">
                    you are about to enter the demo version of the DIANA app where you can try any feature first-hand without entering any of your personal or payment details
                  </p>
                  
                  <p className="font-body-sm text-secondary italic font-bold mb-8">
                    experience the nexus, simulate payments, and see our impact flow in real-time
                  </p>
                  
                  <button
                    onClick={() => setShowExplainer(false)}
                    className="w-full py-4 bg-primary text-white rounded-full font-label-caps tracking-[0.2em] text-sm uppercase hover:scale-105 transition-transform shadow-[0_4px_14px_rgba(255,0,153,0.39)]"
                  >
                    LET'S GO!
                  </button>
                  
                  <p className="text-[9px] text-text-muted mt-8 leading-relaxed font-body-sm px-2">
                    All current data and transactions are strictly for demo purposes only. Explore everything entirely risk-free. When you're ready to ACTIVATE, just tap DIANA.
                  </p>
                </div>
              </div>
            )}

            {/* Iframe */}
            <iframe
              id="diana-app-demo-iframe"
              src="https://appdemo.dianafortheanimals.org/nexus"
              title="DIANA App Demo"
              className="w-full h-full border-none relative z-10 bg-background"
              style={{ paddingTop: '32px' }}
              allow="camera; microphone"
            />
          </div>

          {/* Feature callouts */}
          <div className="hidden lg:flex flex-col gap-4 absolute left-0 top-1/2 -translate-y-1/2 max-w-[200px]">
            {[
              { icon: Compass, label: 'Browse the Nexus', sub: 'Global ethical merchant directory' },
              { icon: QrCode, label: 'Connect & Pay', sub: 'Scan or select from Explore' },
            ].map((c) => (
              <div key={c.label} className="glass-surface rounded-xl p-4 border border-border-main flex items-start gap-3">
                <c.icon className="text-primary mt-0.5" size={18} />
                <div>
                  <div className="font-label-caps font-[var(--text-label-caps--font-weight)] text-[11px] text-secondary tracking-[0.08em] uppercase">{c.label}</div>
                  <div className="font-body-sm text-[11px] text-text-muted mt-0.5">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex flex-col gap-4 absolute right-0 top-1/2 -translate-y-1/2 max-w-[200px]">
            {[
              { icon: Heart, label: 'Support Sanctuaries', sub: 'Real-time fund flow to 11 sanctuaries' },
              { icon: User, label: 'Your Impact Profile', sub: 'Personal pulse & ledger' },
            ].map((c) => (
              <div key={c.label} className="glass-surface rounded-xl p-4 border border-border-main flex items-start gap-3">
                <c.icon className="text-primary mt-0.5" size={18} />
                <div>
                  <div className="font-label-caps font-[var(--text-label-caps--font-weight)] text-[11px] text-secondary tracking-[0.08em] uppercase">{c.label}</div>
                  <div className="font-body-sm text-[11px] text-text-muted mt-0.5">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
