'use client';

import { User, Store, PawPrint } from 'lucide-react';
import ScrollReveal from '@/components/layout/ScrollReveal';

const nexusNodes = [
  {
    icon: User,
    label: 'Individual Advocates',
    body: 'Everyday people whose lifestyle choices and daily purchases form the financial backbone of the ecosystem. Advocacy happens automatically, requiring absolutely zero extra effort.',
  },
  {
    icon: Store,
    label: 'Ethical Merchants',
    body: 'Values-aligned businesses that pledge a portion of every sale to drive the mission forward. Their participation effortlessly transforms ordinary, daily commerce into continuous sanctuary funding.',
  },
  {
    icon: PawPrint,
    label: 'Animal Sanctuaries',
    body: 'The dedicated havens performing the vital, hands-on work of animal rescue and rehabilitation. Through our community, they receive steady, dependable financial support without ever having to ask.',
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="pb-24 md:pb-32">
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] sm:text-[40px] md:text-[56px] leading-tight text-text-main mt-4 select-none">
            An Interconnected <span className="text-primary">Ecosystem</span>
          </h2>
          <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-xl mx-auto mt-4 select-none">
            DIANA works because each participant amplifies the impact of every other.<br />
            Three Groups, One Quiet Engine.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {nexusNodes.map((node, index) => {
            const NodeIcon = node.icon;
            return (
              <ScrollReveal key={node.label} delay={index * 150}>
                <div className="glass-surface p-8 md:p-10 rounded-2xl border border-border-main hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300 text-center h-full">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-primary/10 rounded-full">
                    <NodeIcon className="text-primary" size={32} />
                  </div>
                  <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] text-secondary mb-4 select-none">{node.label}</h3>
                  <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{node.body}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
