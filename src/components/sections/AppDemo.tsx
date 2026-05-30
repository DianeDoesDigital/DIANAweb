'use client';

import { Smartphone, Compass, QrCode, Heart, User } from 'lucide-react';

export default function AppDemo() {
  return (
    <section id="demo" className="py-24 md:py-32 bg-background border-t border-border-main">
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-primary/20 uppercase select-none">
            Live Demo
          </span>
          <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[52px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-secondary select-none mt-4">
            Try the DIANA app
          </h2>
          <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-xl mx-auto mt-4 select-none">
            Browse merchants, simulate a purchase, explore sanctuaries to experience the full flow.
          </p>
        </div>

        {/* Device mockup + iframe */}
        <div className="relative flex justify-center">
          {/* Outer glow */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[400px] h-[600px] rounded-full bg-primary/10 blur-[80px]" />
          </div>

          {/* Phone frame */}
          <div className="relative w-[375px] md:w-[420px] rounded-[48px] border-2 border-border-main bg-surface shadow-2xl shadow-primary/10 overflow-hidden"
            style={{ height: '780px' }}>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-background rounded-b-2xl z-20 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-border-main" />
              <div className="w-16 h-1.5 rounded-full bg-border-main" />
            </div>

            {/* Iframe */}
            <iframe
              id="diana-app-demo-iframe"
              src="about:blank"
              title="DIANA App Demo"
              className="w-full h-full border-none"
              style={{ paddingTop: '32px' }}
              allow="camera; microphone"
            />

            {/* Placeholder overlay (shown while iframe is blank / not yet connected) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-background/90 pointer-events-none"
              style={{ paddingTop: '32px' }}>
              <div className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-4xl text-primary neon-glow select-none">
                DIANA
              </div>
              <Smartphone className="text-primary animate-pulse" size={48} />
              <p className="font-body-sm text-[var(--text-body-sm)] text-text-muted text-center px-8 select-none">
                App demo loading. Connect your Expo web build to see the live experience here.
              </p>
            </div>
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
