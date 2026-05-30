'use client';

import Link from 'next/link';

interface TopNavProps {
  onActivate: () => void;
}

export default function TopNav({ onActivate }: TopNavProps) {
  return (
    <header className="bg-background/80 backdrop-blur-md w-full top-0 sticky z-50 border-b border-border-main">
      <nav className="flex justify-between items-center w-full px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max-width)] mx-auto h-20">
        <div className="text-[var(--text-headline-lg)] font-[var(--text-headline-lg--font-weight)] font-headline-lg text-primary tracking-tight neon-glow">
          DIANA
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#directory"
            className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-text-muted hover:text-secondary transition-colors"
          >
            Explore Directory
          </Link>
          <Link
            href="#ledger"
            className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-text-muted hover:text-secondary transition-colors"
          >
            Impact Ledgers
          </Link>
          <Link
            href="#membership"
            className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-text-muted hover:text-secondary transition-colors"
          >
            Champion Membership
          </Link>
        </div>
        <button
          onClick={onActivate}
          className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-white bg-primary px-8 py-2 rounded-md hover:brightness-110 active:scale-95 transition-all duration-200 neon-border uppercase"
        >
          ACTIVATE
        </button>
      </nav>
    </header>
  );
}
