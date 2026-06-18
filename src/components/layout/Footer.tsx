'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, House, Store, PawPrint, HandFist, Wrench } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home', icon: House },
  { href: '/merchants', label: 'Merchants', icon: Store },
  { href: '/sanctuaries', label: 'Sanctuaries', icon: PawPrint },
  { href: '/mission', label: 'Mission', icon: HandFist },
  { href: '/build', label: 'Build', icon: Wrench },
];

const legalLinks = [
  { href: '/legal/privacy', label: 'Privacy', fullLabel: 'Privacy Policy' },
  { href: '/legal/terms', label: 'Terms', fullLabel: 'Terms of Use' },
  { href: '/legal/cookies', label: 'Cookies', fullLabel: 'Cookie Policy' },
];

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/pitch' || pathname === '/') {
    return null;
  }

  return (
    <footer id="global-footer" className="bg-white text-secondary py-16 min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] flex flex-col gap-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 w-full">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-xs mx-auto md:mx-0 w-full">
            <Link href="/" className="flex flex-col md:flex-row items-center gap-3 select-none">
              <div className="relative w-24 h-24 md:w-16 md:h-16 flex-shrink-0">
                <Image
                  src="/diana-logo.png"
                  alt="DIANA"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[40px] md:text-[28px] font-headline-lg text-primary tracking-[0.12em] mt-2 md:mt-0">
                DIANA
              </span>
            </Link>

            <p className="text-[var(--text-body-sm)] font-[var(--text-body-sm--font-weight)] font-body-sm text-secondary leading-[var(--text-body-sm--line-height)]">
              Digital Infrastructure for Animal Networks and Advocacy
            </p>
            <a 
              href="https://drgm.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-body-sm)] font-[var(--text-body-sm--font-weight)] font-body-sm text-primary leading-[var(--text-body-sm--line-height)] hover:text-secondary transition-colors"
            >
              A DRGM Pty Ltd product
            </a>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap justify-center gap-12 w-full md:w-auto mt-4 md:mt-0">
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="hidden md:block text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary uppercase">
                Navigate
              </span>
              <div className="flex flex-row md:flex-col gap-8 md:gap-4 items-center md:items-start">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      className="text-text-muted hover:text-primary transition-colors flex items-center gap-2"
                      href={link.href}
                      title={link.label}
                    >
                      <Icon className="md:hidden" size={28} strokeWidth={1.5} />
                      <span className="hidden md:inline text-[var(--text-body-sm)] font-[var(--text-body-sm--font-weight)] font-body-sm">{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-border-main/50 flex flex-col justify-center md:flex-row md:justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[var(--text-body-sm)] font-[var(--text-body-sm--font-weight)] font-body-sm text-xs text-primary w-full md:w-auto">
            © {new Date().getFullYear()} DIANA. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-text-subtle hover:text-primary transition-colors group"
              >
                <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-[10px] md:text-xs uppercase">
                  <span className="md:hidden">{link.label}</span>
                  <span className="hidden md:inline">{link.fullLabel}</span>
                </span>
              </Link>
            ))}
            <span className="flex items-center gap-2 text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary uppercase select-none md:mr-4 whitespace-nowrap">
              100% Integrity Pledge
              <BadgeCheck className="text-primary" size={16} />
            </span>
            <div className="flex items-center gap-4 border-l border-border-main/50 pl-6 hidden md:flex">
              <a href="https://facebook.com/diyosadiana" target="_blank" rel="noopener noreferrer" className="text-text-subtle hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com/diyosadiana" target="_blank" rel="noopener noreferrer" className="text-text-subtle hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/112173072/" target="_blank" rel="noopener noreferrer" className="text-text-subtle hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
            {/* Mobile socials - showing below the pledge */}
            <div className="flex md:hidden items-center gap-6 w-full justify-center mt-2">
              <a href="https://facebook.com/diyosadiana" target="_blank" rel="noopener noreferrer" className="text-text-subtle hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com/diyosadiana" target="_blank" rel="noopener noreferrer" className="text-text-subtle hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/112173072/" target="_blank" rel="noopener noreferrer" className="text-text-subtle hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
