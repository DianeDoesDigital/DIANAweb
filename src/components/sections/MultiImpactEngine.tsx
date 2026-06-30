'use client';

import { HeartHandshake, Coins, SquarePlay, Cat } from 'lucide-react';
import PaymentCarousel from './PaymentCarousel';

const steps = [
  {
    icon: HeartHandshake,
    label: 'Merchant Pledge',
    description: 'Participating ethical merchants commit at least 5% of every purchase directly to animal sanctuaries.',
  },
  {
    icon: Coins,
    label: 'Consumer Extra',
    description: 'Advocates can add an optional contribution at checkout to amplify their personal impact effortlessly.',
  },
  {
    icon: SquarePlay,
    label: 'Sponsor Doubler',
    description: 'Brands with purely plant-based products or vegan-aligned services advertising on DIANA double the sanctuary contribution from your transaction.',
  },
  {
    icon: Cat,
    label: 'Platform Contribution',
    description: 'DIANA automatically channels 5% of every platform fee to partner sanctuaries, compounding the impact.',
  },
];

export default function MultiImpactEngine() {
  return (
    <section id="double-impact" className="py-24 md:py-32 bg-[#FFDDEE]">
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left - Title and Vertical Stack of Steps */}
          <div className="lg:col-span-7 flex flex-col items-center gap-8">
            <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main text-center select-none w-full">
              Multi-Impact <span className="text-primary">Engine</span>
            </h2>
            
            <div className="flex flex-col gap-4 w-full">
              {steps.map((step) => (
                <div key={step.label} className="glass-surface p-6 rounded-2xl flex items-center gap-6 border border-border-main hover:border-primary/30 transition-all duration-300 w-full bg-background/50">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0 bg-background shadow-sm">
                    <step.icon className="text-primary" size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-lg text-secondary mb-1 select-none">{step.label}</h3>
                    <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Payment Carousel */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <PaymentCarousel />
          </div>

        </div>
      </div>
    </section>
  );
}
