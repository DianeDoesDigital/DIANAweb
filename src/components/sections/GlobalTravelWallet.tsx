'use client';

import { Wallet, Globe, ArrowDownUp } from 'lucide-react';

const features = [
  {
    icon: Wallet,
    title: 'Zero-Friction Top-Ups',
    body: 'Load your DIANA wallet in your home currency instantly. No conversion at the point of deposit, no surprises at the point of sale.',
  },
  {
    icon: Globe,
    title: 'Borderless Payments',
    body: 'Pay any DIANA merchant, anywhere in the world, directly from the app. Your wallet works the same in Manila as it does in Melbourne.',
  },
  {
    icon: ArrowDownUp,
    title: 'No Exchange Fees',
    body: 'Bypass traditional bank conversion spreads and international transaction fees entirely. Your money stays yours.',
  },
];

export default function GlobalTravelWallet() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <div>
            <span className="font-label-caps text-xs text-primary uppercase tracking-[0.2em] select-none">The Global Travel Wallet</span>
            <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[52px] leading-tight text-text-main mt-3 mb-4 select-none">
              One Wallet.<br /><span className="text-primary">The Whole World.</span>
            </h2>
            <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mb-10 select-none">
              A borderless financial ecosystem designed for the conscious consumer who moves through the world and wants every transaction to mean something wherever they are.
            </p>
            <div className="space-y-6">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-5">
                    <div className="w-11 h-11 shrink-0 rounded-2xl border border-border-main flex items-center justify-center">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-secondary mb-1 select-none">{f.title}</h3>
                      <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{f.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual side */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              <div className="glass-surface rounded-3xl p-10 border border-border-main text-center">
                <span className="font-label-caps text-xs text-text-muted uppercase tracking-[0.15em] select-none">Your DIANA Wallet</span>
                <div className="font-impact-stat text-6xl text-primary mt-4 mb-2 select-none">$439,402</div>
                <span className="font-body-sm text-text-muted text-sm select-none">Total sanctuary impact globally</span>
                <div className="mt-8 pt-6 border-t border-border-main grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="font-impact-stat text-xl text-secondary block select-none">AUD</span>
                    <span className="font-body-sm text-xs text-text-muted select-none">Australia</span>
                  </div>
                  <div>
                    <span className="font-impact-stat text-xl text-primary block select-none">PHP</span>
                    <span className="font-body-sm text-xs text-text-muted select-none">Philippines</span>
                  </div>
                  <div>
                    <span className="font-impact-stat text-xl text-secondary block select-none">USD</span>
                    <span className="font-body-sm text-xs text-text-muted select-none">Global</span>
                  </div>
                </div>
                <div className="mt-6 bg-primary/10 rounded-xl px-4 py-3 border border-primary/20">
                  <span className="font-body-sm text-sm text-primary select-none font-medium">Zero conversion fees. Always.</span>
                </div>
              </div>
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-2xl -z-10 scale-110" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
