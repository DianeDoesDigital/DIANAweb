'use client';

import { ShieldCheck, RefreshCw, Bubbles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const impactSteps = [
  {
    icon: Bubbles,
    label: 'Eliminating Friction',
    body: 'By embedding advocacy into the purchases you already make, you generate consistent, reliable funding for animal sanctuaries without having to consciously set aside a donation.',
  },
  {
    icon: ShieldCheck,
    label: 'Strict Clearinghouse',
    body: 'The flow of capital is entirely transparent. Every pledge generated through the network is tracked from the ethical merchant\'s point of sale directly to the sanctuary on the frontlines.',
  },
  {
    icon: RefreshCw,
    label: 'Self-Sustaining Scale',
    body: 'We aren\'t relying on traditional charity; we are rewiring commerce. By capturing a fraction of daily consumer spending, we create a limitless, self-sustaining financial engine for animal rescue.',
  },
];

export default function ImpactFlow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);

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
          <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[56px] leading-tight select-none tracking-tight">
            <span className="text-secondary">and Impact is</span> <span className="text-primary">Undeniable</span>
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {impactSteps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div 
                key={step.label}
                className="glass-surface p-8 md:p-10 rounded-2xl w-full hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center animate-on-scroll opacity-0 translate-y-12 ease-out" 
                style={{ transitionDuration: '700ms', transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                  <StepIcon className="text-primary" size={32} />
                </div>
                <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] text-secondary mb-4 select-none">{step.label}</h3>
                <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          <div className="grid grid-cols-3 gap-3 items-start mb-6">
            {impactSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = activeNode === index;
              const labelParts = step.label.split(' ');
              
              // Hide other cards if one is active
              if (activeNode !== null && !isActive) {
                return null;
              }

              return (
                <button
                  key={step.label}
                  onClick={() => setActiveNode(isActive ? null : index)}
                  className={`glass-surface rounded-2xl transition-all duration-300 flex flex-col items-center text-center focus:outline-none ${
                    isActive
                      ? 'col-span-3 border-primary bg-primary/5 shadow-[0_8px_30px_rgba(255,0,153,0.15)] p-6'
                      : 'col-span-1 border-border-main hover:border-primary/20 aspect-square justify-center p-3'
                  }`}
                >
                  <div className={`flex items-center justify-center transition-all duration-300 ${
                    isActive ? 'w-16 h-16 bg-primary/20' : 'w-12 h-12 bg-primary/10'
                  }`}>
                    <StepIcon className="text-primary" size={isActive ? 32 : 20} />
                  </div>
                  
                  <div className={`font-headline-sm leading-tight text-secondary select-none font-semibold transition-all duration-300 ${
                    isActive ? 'text-base mb-2' : 'text-[10px]'
                  }`}>
                    {isActive ? (
                      step.label
                    ) : (
                      labelParts.map((word, wIdx) => (
                        <span key={wIdx} className="block">{word}</span>
                      ))
                    )}
                  </div>

                  {isActive && (
                    <p className="font-body-sm text-xs leading-relaxed text-text-muted select-none animate-fadeIn max-w-sm">
                      {step.body}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
