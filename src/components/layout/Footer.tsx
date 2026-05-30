import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/merchants', label: 'Merchants' },
  { href: '/sanctuaries', label: 'Sanctuaries' },
  { href: '/about', label: 'Mission' },
  { href: '/get-involved', label: 'Build' },
];

const legalLinks = [
  { href: '/legal/privacy', label: 'Privacy Policy' },
  { href: '/legal/terms', label: 'Terms of Use' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border-main text-secondary py-16">
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] flex flex-col gap-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Link href="/" className="flex items-center gap-3 select-none">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/diana-logo.png"
                  alt="DIANA"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-[var(--text-headline-md)] font-[var(--text-headline-md--font-weight)] font-headline-md text-secondary neon-glow text-3xl">
                DIANA
              </div>
            </Link>
            <p className="text-[var(--text-body-sm)] font-[var(--text-body-sm--font-weight)] font-body-sm text-primary leading-[var(--text-body-sm--line-height)]">
              Digital Infrastructure for Animal Networks and Advocacy
            </p>
            <p className="text-[var(--text-body-sm)] font-[var(--text-body-sm--font-weight)] font-body-sm text-text-subtle leading-[var(--text-body-sm--line-height)]">
              A DRGM Pty Ltd product
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary uppercase">
                Navigate
              </span>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className="text-[var(--text-body-sm)] font-[var(--text-body-sm--font-weight)] font-body-sm text-text-muted hover:text-primary transition-colors"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary uppercase">
                Join
              </span>
              <Link
                href="/merchants"
                className="text-[var(--text-body-sm)] font-[var(--text-body-sm--font-weight)] font-body-sm text-text-muted hover:text-primary transition-colors"
              >
                List as Merchant
              </Link>
              <Link
                href="/sanctuaries"
                className="text-[var(--text-body-sm)] font-[var(--text-body-sm--font-weight)] font-body-sm text-text-muted hover:text-primary transition-colors"
              >
                Register as Sanctuary
              </Link>
              <Link
                href="/get-involved"
                className="text-[var(--text-body-sm)] font-[var(--text-body-sm--font-weight)] font-body-sm text-text-muted hover:text-primary transition-colors"
              >
                Build
              </Link>
              <Link
                href="/get-involved#sponsor"
                className="text-[var(--text-body-sm)] font-[var(--text-body-sm--font-weight)] font-body-sm text-text-muted hover:text-primary transition-colors"
              >
                Sponsor / Advertise
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-border-main/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[var(--text-body-sm)] font-[var(--text-body-sm--font-weight)] font-body-sm text-xs text-text-subtle">
            © 2026 DIANA: Digital Infrastructure for Animal Networks and Advocacy. DRGM Pty Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-subtle hover:text-primary transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}
            <span className="flex items-center gap-2 text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary uppercase select-none">
              Integrity Pledge
              <BadgeCheck className="text-primary" size={16} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
