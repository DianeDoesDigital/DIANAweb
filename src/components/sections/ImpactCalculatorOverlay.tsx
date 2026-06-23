'use client';

import { useState } from 'react';

export default function ImpactCalculatorOverlay() {
  const [spend, setSpend] = useState(500);

  const merchantPledge = spend * 0.05;
  const dianaMatch = merchantPledge * 0.05;
  const total = merchantPledge + dianaMatch;

  return (
    <div className="absolute inset-4 md:inset-8 flex flex-col justify-end">
      {/* Background glass panel */}
      <div className="glass-surface p-6 md:p-8 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl bg-background/80 relative z-10 overflow-hidden">
        <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-xl text-secondary mb-1 select-none">
          Your Impact Calculator
        </h3>
        <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted mb-6 select-none">
          See how much flows to sanctuaries based on your monthly spend.
        </p>

        <label className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary uppercase mb-2 block select-none">
          Monthly spend at DIANA merchants
        </label>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-impact-stat font-[var(--text-impact-stat--font-weight)] text-3xl text-secondary select-none">
            ${spend.toLocaleString()}
          </span>
          <span className="font-body-sm text-text-subtle text-sm select-none">/month</span>
        </div>
        <input
          id="impact-slider"
          type="range"
          min={50}
          max={5000}
          step={50}
          value={spend}
          onChange={(e) => setSpend(Number(e.target.value))}
          className="w-full accent-primary cursor-pointer h-2 rounded-full mb-6"
        />

        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center py-2 border-b border-border-main/50">
            <span className="font-label-caps text-[10px] md:text-xs text-text-muted uppercase tracking-[0.1em] select-none">Merchant Pledge (5%)</span>
            <div className="font-impact-stat font-[var(--text-impact-stat--font-weight)] text-lg text-secondary select-none">
              ${merchantPledge.toFixed(2)}
            </div>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border-main/50">
            <span className="font-label-caps text-[10px] md:text-xs text-text-muted uppercase tracking-[0.1em] select-none">Platform Contribution</span>
            <div className="font-impact-stat font-[var(--text-impact-stat--font-weight)] text-lg text-secondary select-none">
              +${dianaMatch.toFixed(2)}
            </div>
          </div>
          <div className="flex justify-between items-center pt-3 mt-1">
            <span className="font-label-caps text-xs text-primary uppercase tracking-[0.1em] select-none">Total Generated</span>
            <div className="font-impact-stat font-[var(--text-impact-stat--font-weight)] text-2xl text-primary select-none flex items-baseline gap-1">
              ${total.toFixed(2)}<span className="text-xs text-text-muted font-body-sm font-normal">/mo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
