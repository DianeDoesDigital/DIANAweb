'use client';

import { useEffect, useRef, useState } from 'react';
import { Map, QrCode, Heart } from 'lucide-react';

const pillars = [
  {
    id: 'explore',
    icon: Map,
    label: 'Explore',
    heading: 'Discover your values in action',
    body: 'Browse a curated, global network of ethical businesses, events, and services, all aligned with a world that takes animals seriously.',
    delay: 0,
  },
  {
    id: 'connect',
    icon: QrCode,
    label: 'Connect',
    heading: 'Pay with purpose, every time',
    body: 'Use a payment method where your daily transactions automatically cater to the needs of a rescued animal without you spending a single cent extra.',
    delay: 150,
  },
  {
    id: 'support',
    icon: Heart,
    label: 'Support',
    heading: 'A minimum of 5% flows automatically',
    body: 'Every purchase from an ethical merchant sends at least 5% directly to sanctuaries. This is recurring, continuous, and built into the system itself.',
    delay: 300,
  },
];

export default function HowItWorks() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) { 
          setVisible(true); 
          observer.disconnect(); 
        } 
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[52px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-text-main mb-6 mt-4 select-none">
            The Global Currency of Compassion<br /><span className="text-primary">and Celebration</span>
          </h2>
          <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-xl mx-auto mt-4 select-none">
            Compassion for the animals we share this world with. Celebration of every conscious choice we make within it. DIANA is the infrastructure that makes both happen automatically.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              id={`pillar-${pillar.id}`}
              style={{
                transitionDelay: `${pillar.delay}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
              }}
              className="glass-surface p-10 rounded-2xl flex flex-col items-start gap-6 hover:translate-y-[-4px] hover:border-primary transition-all duration-700 ease-in-out border border-border-main group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-border-main group-hover:border-primary transition-colors">
                <pillar.icon className="text-primary" size={24} />
              </div>

              {/* Label */}
              <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary uppercase select-none">
                {pillar.label}
              </span>

              {/* Heading */}
              <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] leading-[var(--text-headline-md--line-height)] text-secondary select-none">
                {pillar.heading}
              </h3>

              {/* Body */}
              <p className="font-body-sm font-[var(--text-body-sm--font-weight)] text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
