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

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left: Device mockup + iframe */}
          <div className="flex justify-center">
            <div className="relative w-[260px] h-[520px] rounded-[40px] border-2 border-border-main bg-surface shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-b-2xl z-20 flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-border-main" />
                <div className="w-12 h-1 rounded-full bg-border-main" />
              </div>

              {/* Explainer Overlay */}
              {showExplainer && (
                <div className="absolute inset-0 z-30 bg-[#FFDDEE] flex flex-col items-center justify-center p-4 text-center">
                  <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-6 w-[90%] flex flex-col items-center shadow-sm border border-white/50">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <img src="/diana-logo.png" alt="DIANA" className="w-full h-full object-contain drop-shadow-md" />
                    </div>
                    
                    <h3 className="font-headline-lg text-[24px] text-primary mb-4" style={{ fontFamily: 'Playfair Display' }}>App Demo</h3>
                    
                    <p className="font-body-sm text-secondary font-medium leading-relaxed mb-4 text-xs">
                      you are about to enter the demo version of the DIANA app where you can try any feature first-hand without entering any of your personal or payment details
                    </p>
                    
                    <p className="font-body-sm text-secondary italic font-bold mb-6 text-xs">
                      experience the nexus, simulate payments, and see our impact flow in real-time
                    </p>
                    
                    <button
                      onClick={() => setShowExplainer(false)}
                      className="w-full py-3 bg-primary text-white rounded-full font-label-caps tracking-[0.2em] text-xs uppercase hover:scale-105 transition-transform shadow-[0_4px_14px_rgba(255,0,153,0.39)]"
                    >
                      LET'S GO!
                    </button>
                    
                    <p className="text-[8px] text-text-muted mt-6 leading-relaxed font-body-sm px-1">
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
                allow="camera; microphone"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 'calc(100% / 0.7)',
                  height: 'calc(100% / 0.7)',
                  transform: 'scale(0.7)',
                  transformOrigin: 'top left',
                  border: 'none',
                  paddingTop: '24px',
                  backgroundColor: 'var(--color-background)',
                  zIndex: 10
                }}
              />
            </div>
          </div>

          {/* Right: Feature callouts */}
          <div className="flex flex-col gap-6 lg:pl-8">
            <h3 className="font-headline-md text-3xl text-[var(--color-secondary)] mb-2 select-none">
              Explore the Ecosystem
            </h3>
            <p className="font-body-lg text-[var(--color-text-subtle)] mb-4 select-none">
              Get hands-on with the features that power the global currency of compassion and celebration.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {[
                { icon: Compass, label: 'Browse the Nexus', sub: 'Global ethical merchant directory' },
                { icon: QrCode, label: 'Connect & Pay', sub: 'Scan or select from Explore' },
                { icon: Heart, label: 'Support Sanctuaries', sub: 'Real-time fund flow to 11 sanctuaries' },
                { icon: User, label: 'Your Impact Profile', sub: 'Personal pulse & ledger' },
              ].map((c) => (
                <div key={c.label} className="glass-surface rounded-xl p-5 border border-border-main flex items-start gap-4 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex flex-shrink-0 items-center justify-center">
                    <c.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-label-caps font-[var(--text-label-caps--font-weight)] text-[12px] text-secondary tracking-[0.08em] uppercase mb-1">{c.label}</div>
                    <div className="font-body-sm text-[12px] text-text-muted leading-tight">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
