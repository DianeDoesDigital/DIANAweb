import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border-main text-secondary py-12">
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="text-[var(--text-headline-md)] font-[var(--text-headline-md--font-weight)] font-headline-md text-primary neon-glow select-none">
            DIANA
          </div>
          <div className="flex flex-wrap gap-8">
            <Link
              className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-muted hover:text-primary transition-colors uppercase"
              href="#"
            >
              Mission Statement
            </Link>
            <Link
              className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-muted hover:text-primary transition-colors uppercase"
              href="#"
            >
              Transparency Reports
            </Link>
            <Link
              className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-muted hover:text-primary transition-colors uppercase"
              href="#"
            >
              Legal
            </Link>
            <Link
              className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-muted hover:text-primary transition-colors uppercase"
              href="#"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="pt-8 border-t border-border-main/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[var(--text-body-sm)] font-[var(--text-body-sm--font-weight)] font-body-sm text-xs text-text-subtle">
            © 2026 DIANA - Digital Infrastructure for Animal Networks and
            Advocacy. DRGM DEV PTY LTD.
          </p>
          <div className="flex items-center gap-4 select-none">
            <span className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary uppercase">
              Integrity Pledge
            </span>
            <span className="material-symbols-outlined text-primary">
              verified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
