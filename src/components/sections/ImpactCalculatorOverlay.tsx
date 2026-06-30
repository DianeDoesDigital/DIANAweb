'use client';

import { useState } from 'react';
import { Heart, Calculator } from 'lucide-react';

export default function ImpactCalculatorOverlay() {
  const [spend, setSpend] = useState(500);

  const merchantPledge = spend * 0.05;
  const dianaMatch = merchantPledge * 0.05;
  const total = merchantPledge + dianaMatch;

  return (
    <div className="relative w-full md:aspect-[3/4] rounded-3xl overflow-hidden bg-[#0F0D15] border border-primary/30 p-6 md:p-8 shadow-2xl text-[#ffddee] group flex flex-col justify-between">
      {/* Decorative gradient glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between h-full gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#ff0099]/15 border border-[#ff0099]/40 flex items-center justify-center shrink-0 shadow-md">
              <Calculator className="text-[#ff0099]" size={20} />
            </div>
            <h3 className="font-impact-stat font-bold text-xl md:text-2xl text-[#ff0099] uppercase tracking-wider select-none">
              IMPACT CALCULATOR
            </h3>
          </div>
          <p className="font-body-sm text-xs md:text-sm text-[#ffddee]/70 leading-relaxed select-none">
            Slide to estimate continuous monthly funding generated for animal sanctuaries by redirecting your everyday purchases.
          </p>
        </div>

        <div className="bg-[#181522] rounded-2xl p-6 md:p-7 border border-[#ffddee]/10 shadow-inner my-auto">
          <label htmlFor="impact-slider" className="font-label-caps tracking-[0.1em] text-xs text-primary uppercase mb-3 block select-none text-center">
            Monthly spend at DIANA merchants
          </label>
          <div className="flex justify-center mb-5">
            <span className="font-impact-stat font-[var(--text-impact-stat--font-weight)] text-5xl md:text-6xl text-[#ffddee] select-none">
              ${spend.toLocaleString()}
            </span>
          </div>
          <input
            id="impact-slider"
            type="range"
            min={50}
            max={5000}
            step={50}
            value={spend}
            onChange={(e) => setSpend(Number(e.target.value))}
            className="w-full accent-primary cursor-pointer h-2.5 bg-[#ffddee]/20 rounded-full appearance-none transition-all"
          />
          <div className="w-full flex justify-between text-xs text-[#ffddee]/50 font-body-sm mt-3 select-none">
            <span>$50</span>
            <span>$2,500</span>
            <span>$5,000</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center py-1.5 border-b border-[#ffddee]/10">
            <span className="font-label-caps text-[10px] md:text-xs text-[#ffddee]/70 uppercase tracking-[0.1em] select-none">Merchant Pledge (At least 5%)</span>
            <div className="font-impact-stat font-[var(--text-impact-stat--font-weight)] text-base md:text-lg text-[#ffddee] select-none">
              ${merchantPledge.toFixed(2)}
            </div>
          </div>
          <div className="flex justify-between items-center py-1.5 border-b border-[#ffddee]/10">
            <span className="font-label-caps text-[10px] md:text-xs text-[#ffddee]/70 uppercase tracking-[0.1em] select-none">Platform Compounding Match</span>
            <div className="font-impact-stat font-[var(--text-impact-stat--font-weight)] text-base md:text-lg text-[#ffddee] select-none">
              +${dianaMatch.toFixed(2)}
            </div>
          </div>
          <div className="flex justify-between items-center py-2.5 px-4 bg-primary/15 rounded-xl border border-primary/40 shadow-lg">
            <div className="flex items-center gap-2">
              <Heart className="text-[#ff0099] fill-[#ff0099]" size={16} />
              <span className="font-label-caps text-xs md:text-sm text-primary uppercase tracking-[0.1em] font-bold select-none">Total Generated</span>
            </div>
            <div className="font-impact-stat font-[var(--text-impact-stat--font-weight)] text-xl md:text-2xl text-primary select-none">
              ${total.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
