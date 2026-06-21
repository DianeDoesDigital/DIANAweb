'use client';

import { useState } from 'react';
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
    body: 'Values-aligned businesses that pledge a portion of every sale to drive the mission forward. Their participation effortlessly transforms ordinary, daily commerce into continuous, highly reliable sanctuary funding.',
  },
  {
    icon: PawPrint,
    label: 'Animal Sanctuaries',
    body: 'The dedicated havens performing the vital, hands-on work of animal rescue and rehabilitation. Through our community, they receive steady, dependable financial support without ever having to ask.',
  },
];

export default function Ecosystem() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

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

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {nexusNodes.map((node, index) => {
            const NodeIcon = node.icon;
            return (
              <ScrollReveal key={node.label} delay={index * 150}>
                <div className="glass-surface p-10 rounded-2xl border border-border-main hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300 text-center h-full">
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

        {/* Mobile View */}
        <div className="block md:hidden">
          <div className="grid grid-cols-3 gap-3 items-start mb-6">
            {nexusNodes.map((node, index) => {
              const NodeIcon = node.icon;
              const isActive = activeNode === index;
              const labelParts = node.label.split(' ');
              
              // Hide other cards if one is active
              if (activeNode !== null && !isActive) {
                return null;
              }

              return (
                <button
                  key={node.label}
                  onClick={() => setActiveNode(isActive ? null : index)}
                  className={`glass-surface rounded-2xl transition-all duration-300 flex flex-col items-center text-center focus:outline-none ${
                    isActive
                      ? 'col-span-3 border-primary bg-primary/5 shadow-[0_8px_30px_rgba(255,0,153,0.15)] p-6'
                      : 'col-span-1 border-border-main hover:border-primary/20 aspect-square justify-center p-3'
                  }`}
                >
                  <div className={`flex items-center justify-center transition-all duration-300 ${
                    isActive ? 'w-16 h-16 bg-primary/20 rounded-full mb-3' : 'mb-2'
                  }`}>
                    <NodeIcon className="text-primary" size={isActive ? 32 : 20} />
                  </div>
                  
                  <div className={`font-headline-sm leading-tight text-secondary select-none font-semibold transition-all duration-300 ${
                    isActive ? 'text-base mb-2' : 'text-[10px]'
                  }`}>
                    {isActive ? (
                      node.label
                    ) : (
                      labelParts.map((word, wIdx) => (
                        <span key={wIdx} className="block">{word}</span>
                      ))
                    )}
                  </div>

                  {isActive && (
                    <p className="font-body-sm text-xs leading-relaxed text-text-muted select-none animate-fadeIn max-w-sm">
                      {node.body}
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
