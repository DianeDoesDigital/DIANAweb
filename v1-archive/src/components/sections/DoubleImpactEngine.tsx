'use client';

import { useEffect, useState, useRef } from 'react';

export default function DoubleImpactEngine() {
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    
    // Quick delay to ensure render is complete
    const timeoutId = setTimeout(() => {
      hasAnimated.current = true;
      const targetValue = 482903.00;
      const duration = 2500;
      const startTime = performance.now();

      function updateCounter(currentTime: number) {
        const elapsedTime = currentTime - startTime;
        const currentProgress = Math.min(elapsedTime / duration, 1);

        // Ease out cubic
        const easeProgress = 1 - Math.pow(1 - currentProgress, 3);
        const currentValue = easeProgress * targetValue;

        setValue(currentValue);

        if (currentProgress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setProgress(78); // Target payout progress percentage
        }
      }

      requestAnimationFrame(updateCounter);
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="text-center mb-16">
          <span className="font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-primary/20 select-none uppercase font-label-caps">
            How DIANA Works
          </span>
          <h2 className="font-[var(--text-headline-lg--font-weight)] text-[var(--text-headline-lg)] leading-[var(--text-headline-lg--line-height)] tracking-[var(--text-headline-lg--letter-spacing)] text-secondary select-none font-headline-lg">
            Double-Impact Engine
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[var(--spacing-base)] items-center">
          {/* Flow Card 1 */}
          <div className="glass-surface p-8 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-4px]">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
              <span className="material-symbols-outlined text-primary">storefront</span>
            </div>
            <h3 className="font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] leading-[var(--text-headline-md--line-height)] text-secondary mb-2 select-none font-headline-md">
              Merchant Pledge
            </h3>
            <p className="font-[var(--text-body-sm--font-weight)] text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none font-body-sm">
              Minimum of 5% of your daily transaction value is allocated.
            </p>
          </div>
          <div className="flex justify-center py-4">
            <span className="material-symbols-outlined text-primary animate-pulse">
              arrow_forward
            </span>
          </div>
          {/* Flow Card 2 */}
          <div className="glass-surface p-8 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-4px]">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
              <span className="material-symbols-outlined text-primary">add_moderator</span>
            </div>
            <h3 className="font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] leading-[var(--text-headline-md--line-height)] text-secondary mb-2 select-none font-headline-md">
              DIANA Platform Contribution
            </h3>
            <p className="font-[var(--text-body-sm--font-weight)] text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none font-body-sm">
              We automatically add 5% of our platform fee to every contribution.
            </p>
          </div>
          <div className="flex justify-center py-4">
            <span className="material-symbols-outlined text-primary animate-pulse">
              arrow_forward
            </span>
          </div>
          {/* Flow Card 3 (Featured) */}
          <div className="md:col-span-4 mt-8 glass-surface p-12 rounded-xl text-center border border-primary/30 relative overflow-hidden transition-all duration-500 hover:border-primary/50">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
            <span className="font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary mb-4 block select-none uppercase font-label-caps">
              Final Destination
            </span>
            <div className="font-[var(--text-impact-stat--font-weight)] text-[var(--text-impact-stat)] leading-[var(--text-impact-stat--line-height)] tracking-[var(--text-impact-stat--letter-spacing)] text-primary mb-4 neon-glow select-none font-impact-stat">
              ${value.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
            <h3 className="font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] leading-[var(--text-headline-md--line-height)] text-secondary mb-6 select-none font-headline-md">
              Total Sanctuary Payout
            </h3>
            <div className="w-full bg-surface-light h-2 rounded-full max-w-md mx-auto overflow-hidden">
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-primary neon-border transition-all duration-1000 ease-out"
              ></div>
            </div>
            <p className="mt-4 font-[var(--text-body-sm--font-weight)] text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none font-body-sm">
              Towards monthly collective sanctuary goals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
