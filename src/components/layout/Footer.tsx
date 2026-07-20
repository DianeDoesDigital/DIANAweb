'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, User, Store, PawPrint, HandFist, Blocks } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/mission', label: 'Mission', icon: HandFist },
  { href: '/sanctuaries', label: 'Sanctuaries', icon: PawPrint },
  { href: '/advocates', label: 'Advocates', icon: User },
  { href: '/merchants', label: 'Merchants', icon: Store },
  { href: '/build', label: 'Build', icon: Blocks },
];

const legalLinks = [
  { href: '/legal/privacy', label: 'Privacy', fullLabel: 'Privacy' },
  { href: '/legal/terms', label: 'Terms', fullLabel: 'Terms' },
  { href: '/legal/cookies', label: 'Cookies', fullLabel: 'Cookies' },
  { href: '/faq', label: 'FAQ', fullLabel: 'FAQ' },
];

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith('/pitch') || pathname?.startsWith('/jason') || pathname?.startsWith('/investment-proposition')) {
    return null;
  }

  return (
    <footer id="global-footer" className="snap-start snap-always bg-white text-secondary py-16 min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] flex flex-col gap-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 w-full">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-xs mx-auto md:mx-0 w-full">
            <Link href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }} className="flex flex-col md:flex-row items-center gap-3 select-none">
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
              A DRGM DEV PTY LTD (ACN 699 347 861) product
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
                      <span className="hidden md:inline text-[var(--text-body-sm)] font-[var(--text-body-sm--font-weight)] font-body-sm uppercase tracking-wider">{link.label}</span>
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
              <a href="https://wa.me/61414207849" target="_blank" rel="noopener noreferrer" className="text-text-subtle hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
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
              <a href="https://wa.me/61414207849" target="_blank" rel="noopener noreferrer" className="text-text-subtle hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
