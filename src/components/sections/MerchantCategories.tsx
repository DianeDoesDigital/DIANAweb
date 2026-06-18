'use client';

import { Utensils, ShoppingBag, Zap, Ticket, Plane, Briefcase, Library, Drama } from 'lucide-react';

const categories = [
  { icon: Utensils, label: 'Food & Drink', desc: 'Restaurants, cafes, bakeries, and grocers.' },
  { icon: ShoppingBag, label: 'Retail', desc: 'Clothing, homewares, cosmetics, and lifestyle.' },
  { icon: Zap, label: 'Wellness', desc: 'Salons, spas, fitness, and holistic health.' },
  { icon: Ticket, label: 'Experiences', desc: 'Tours, workshops, classes, and retreats.' },
  { icon: Plane, label: 'Travel', desc: 'Hotels, transport, and travel agencies.' },
  { icon: Briefcase, label: 'Professionals', desc: 'Services, agencies, consultants, and trades.' },
  { icon: Library, label: 'Resources', desc: 'Education, platforms, and advocacy tools.' },
  { icon: Drama, label: 'Entertainment', desc: 'Events, venues, ticketing, and media.' },
];

export default function MerchantCategories() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border-main/50">
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-text-main mt-4 select-none">
            Where do you <span className="text-primary">fit in?</span>
          </h2>
          <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-2xl mx-auto mt-4 select-none">
            We organize ethical businesses so advocates can find exactly what they're looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.label} className="glass-surface p-6 rounded-2xl border border-border-main hover:border-primary/30 hover:bg-surface-elevated transition-all group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-background border border-border-main flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                  <Icon className="text-text-main group-hover:text-primary transition-colors" size={18} />
                </div>
                <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-secondary mb-1 select-none">{c.label}</h3>
                <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
