'use client';

import Image from 'next/image';

interface HeroProps {
  onActivate: () => void;
  onActivateMerchant: () => void;
}

export default function Hero({ onActivate, onActivateMerchant }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-32 pb-48 md:pt-48 md:pb-64 border-b border-border-main">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Majestic Elephant Sanctuary"
          className="w-full h-full object-cover opacity-40 grayscale animate-[pulse_8s_infinite]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIBfmCdpoFCzbdrPFZXE10k5PqwQYKpQdDcJbvtY5s1jUvJi2GGobavMnAowtRk3_r_BaDctQm3rosHpeI_yZuqOZxAQY9wuAl0ngC04LjYZn8UqxMPt2E1et0T2JJ9JY-D2wt2XmnbZ7n2BmGmxWZrQyL4Re2KhIvtiEMAC6WBq-30o3mE8-XM9NDLptNqC_wjCVdgWZrcBslmlgTIM0RzGq-LP33HqqkDMGMLOs_CZCjCObSQp4CulJ6K-anzgXZ7JMiOF27vuA"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
      </div>
      <div className="relative z-10 max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="max-w-3xl">
          <span className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary mb-4 block select-none uppercase">
            Digital Infrastructure for Animal Networks and Advocacy
          </span>
          <h1 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[64px] leading-[1.1] tracking-[var(--text-headline-lg--letter-spacing)] text-secondary mb-6 select-none">
            Quietly fund animal protection with every daily action.
          </h1>
          <p className="text-[var(--text-body-lg)] font-[var(--text-body-lg--font-weight)] font-body-lg text-text-muted mb-10 max-w-xl select-none leading-[var(--text-body-lg--line-height)]">
            The financial ecosystem bridging conscious consumers, ethical merchants, and animal sanctuaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onActivate}
              className="bg-primary text-white px-8 py-4 rounded-md text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all neon-border"
            >
              ACTIVATE
            </button>
            <button
              onClick={onActivateMerchant}
              className="border border-border-main text-secondary px-8 py-4 rounded-md text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:bg-surface-light hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              ACTIVATE AS MERCHANT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
