'use client';

import { ShieldCheck, RefreshCw, Bubbles } from 'lucide-react';
import { useEffect, useRef } from 'react';

const impactSteps = [
  {
    icon: RefreshCw,
    label: 'Self-Sustaining Scale',
    body: 'We aren\'t relying on traditional charity; we are rewiring commerce. By capturing a fraction of daily consumer spending, we create a limitless, self-sustaining financial engine for animal rescue.',
  },
  {
    icon: Bubbles,
    label: 'Eliminating Friction',
    body: 'By embedding advocacy into the purchases you already make, you generate consistent, reliable funding for animal sanctuaries without setting aside a single cent.',
  },
  {
    icon: ShieldCheck,
    label: 'Strict Clearinghouse',
    body: 'The flow of capital is entirely transparent. Every pledge generated through the network is tracked from the ethical merchant\'s point of sale directly to the sanctuary on the frontlines.',
  },
];

export default function ImpactFlow() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] relative">
        <div className="text-center mb-16 md:mb-24 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
          <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] sm:text-[40px] md:text-[56px] leading-tight select-none tracking-tight">
            <span className="text-secondary">and Impact</span> <span className="text-primary">is Undeniable</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactSteps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div 
                key={step.label}
                className="glass-surface bg-background p-8 rounded-2xl border border-border-main hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300 flex flex-col items-center text-center animate-on-scroll opacity-0 translate-y-12 ease-out" 
                style={{ transitionDuration: '700ms', transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center mb-4">
                  <StepIcon className="text-primary" size={28} />
                </div>
                <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] text-secondary mb-3 select-none">{step.label}</h3>
                <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
