'use client';

import { useState } from 'react';
import { HeartHandshake, Coins, SquarePlay, Cat, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: HeartHandshake,
    label: 'Merchant Pledge',
    description: 'Participating ethical merchants commit a minimum 5% of every purchase directly to registered animal sanctuaries. This creates a reliable baseline of funding built right into daily commerce.',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: Coins,
    label: 'Consumer Extra',
    description: 'Advocates can easily add an optional extra donation to their transaction at checkout. This gives conscious consumers the power to amplify their personal sanctuary impact entirely effortlessly.',
    color: 'from-primary/10 to-transparent',
  },
  {
    icon: SquarePlay,
    label: 'Sponsor Doubler',
    description: 'Brands with purely plant-based product lines or vegan-aligned services can advertise on the platform. Their sponsorship automatically doubles the sanctuary contribution from your transaction at no extra cost to you.',
    color: 'from-primary/20 to-transparent',
  },
  {
    icon: Cat,
    label: 'Platform Contribution',
    description: 'DIANA automatically channels 5% of every platform fee to partner sanctuaries. Across thousands of daily transactions, this creates a steady, compounding, additional funding stream for the animals.',
    color: 'from-primary/15 to-transparent',
  },
];

export default function MultiImpactEngine() {
  const [spend, setSpend] = useState(500);

  const merchantPledge = spend * 0.05;
  const dianaMatch = merchantPledge * 0.05;
  const total = merchantPledge + dianaMatch;

  return (
    <section id="double-impact" className="py-24 md:py-32 bg-background">
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[52px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-text-main select-none mt-4">
            Multi-Impact <span className="text-primary">Engine</span>
          </h2>
          <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-xl mx-auto mt-4 select-none">
            Every transaction through DIANA activates multiple compounding streams of sanctuary support, automatically.
          </p>
        </div>

        {/* Flow steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          {steps.map((step, i) => (
            <div key={step.label} className="relative">
              <div className="glass-surface p-8 rounded-2xl flex flex-col items-center text-center h-full border border-border-main hover:border-primary transition-all duration-300 hover:translate-y-[-4px]">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border border-border-main">
                  <step.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] leading-[var(--text-headline-md--line-height)] text-secondary mb-3 select-none">
                  {step.label}
                </h3>
                <p className="font-body-sm font-[var(--text-body-sm--font-weight)] text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">
                  {step.description}
                </p>
              </div>
              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-background border border-border-main items-center justify-center">
                  <ArrowRight className="text-primary" size={12} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Calculator */}
        <div className="glass-surface rounded-2xl p-10 md:p-14 border border-border-main relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Slider */}
              <div className="flex-1 w-full">
                <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] leading-[var(--text-headline-md--line-height)] text-secondary mb-2 select-none">
                  Your Impact Calculator
                </h3>
                <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted mb-8 select-none">
                  See how much flows to sanctuaries based on your monthly spend at ethical merchants.
                </p>

                <label className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary uppercase mb-3 block select-none">
                  Monthly spend at ethical merchants
                </label>
                <div className="flex items-center gap-4 mb-2">
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
                  className="w-full accent-primary cursor-pointer h-2 rounded-full"
                />
                <div className="flex justify-between mt-2 font-body-sm text-xs text-text-subtle select-none">
                  <span>$50</span>
                  <span>$5,000</span>
                </div>
              </div>

              {/* Results */}
              <div className="flex-1 w-full flex flex-col gap-4">
                <div className="glass-surface rounded-xl p-6 border border-border-main">
                  <span className="font-label-caps text-xs text-text-muted uppercase tracking-[0.1em] select-none">Merchant Pledge (5%)</span>
                  <div className="font-impact-stat font-[var(--text-impact-stat--font-weight)] text-3xl text-secondary mt-1 select-none">
                    ${merchantPledge.toFixed(2)}
                  </div>
                </div>
                <div className="glass-surface rounded-xl p-6 border border-border-main">
                  <span className="font-label-caps text-xs text-text-muted uppercase tracking-[0.1em] select-none">Platform Contribution</span>
                  <div className="font-impact-stat font-[var(--text-impact-stat--font-weight)] text-3xl text-secondary mt-1 select-none">
                    +${dianaMatch.toFixed(2)}
                  </div>
                </div>
                <div className="rounded-xl p-6 border border-primary">
                  <span className="font-label-caps text-xs text-primary uppercase tracking-[0.1em] select-none">Total to Sanctuaries</span>
                  <div className="font-impact-stat font-[var(--text-impact-stat--font-weight)] text-4xl text-primary mt-1 select-none">
                    ${total.toFixed(2)}<span className="text-sm text-text-muted font-body-sm font-normal">/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
