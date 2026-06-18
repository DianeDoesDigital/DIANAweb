'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/merchants', label: 'Merchants' },
  { href: '/sanctuaries', label: 'Sanctuaries' },
  { href: '/mission', label: 'Mission' },
  { href: '/build', label: 'Build' },
];

interface TopNavProps {
  onActivate?: () => void;
}

export default function TopNav({ onActivate }: TopNavProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    if (pathname === '/home') {
      setMenuOpen(false);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const footer = document.getElementById('global-footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        // Hide the nav the moment the footer enters the viewport
        setHideNav(rect.top < window.innerHeight - 10);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <header className={`w-full top-0 fixed z-50 transition-all duration-700 ${hideNav ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'} bg-white`}>
      <nav className="flex justify-between items-center w-full px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max-width)] mx-auto h-20">
        {/* Logo + Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-3 select-none transition-all duration-500 opacity-100 translate-y-0"
        >
          <div className="relative w-[42px] h-[42px] flex-shrink-0">
            <Image
              src="/diana-logo.png"
              alt="DIANA"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-[30px] font-headline-lg text-primary tracking-[0.12em]">
            DIANA
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 transition-all duration-500 opacity-100 translate-y-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] uppercase transition-colors ${
                pathname === link.href
                  ? 'text-primary'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 transition-all duration-500 opacity-100 translate-y-0">
          {onActivate ? (
            <button
              id="nav-activate-btn"
              onClick={onActivate}
              className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] bg-primary px-8 py-2 rounded-full border-2 border-primary hover:shadow-[0_4px_20px_rgba(255,0,153,0.45)] hover:scale-[1.03] active:scale-95 transition-all duration-200 uppercase"
              style={{ color: '#FFDDEE' }}
            >
              ACTIVATE
            </button>
          ) : (
            <Link
              href="/home#activate"
              id="nav-activate-link"
              className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] bg-primary px-8 py-2 rounded-full border-2 border-primary hover:shadow-[0_4px_20px_rgba(255,0,153,0.45)] hover:scale-[1.03] active:scale-95 transition-all duration-200 uppercase"
              style={{ color: '#FFDDEE' }}
            >
              ACTIVATE
            </Link>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          id="nav-mobile-menu-btn"
          className="md:hidden text-secondary cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden nav-blur border-t border-border-main px-[var(--spacing-margin-mobile)] py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] uppercase transition-colors ${
                pathname === link.href ? 'text-primary' : 'text-secondary hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {onActivate ? (
            <button
              onClick={() => { setMenuOpen(false); onActivate(); }}
              className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] bg-primary px-8 py-3 rounded-full border-2 border-primary hover:shadow-[0_4px_20px_rgba(255,0,153,0.45)] active:scale-95 transition-all duration-200 uppercase w-full"
              style={{ color: '#FFDDEE' }}
            >
              ACTIVATE
            </button>
          ) : (
            <Link
              href="/home#activate"
              onClick={() => setMenuOpen(false)}
              className="text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] bg-primary px-8 py-3 rounded-full border-2 border-primary hover:shadow-[0_4px_20px_rgba(255,0,153,0.45)] active:scale-95 transition-all duration-200 uppercase text-center"
              style={{ color: '#FFDDEE' }}
            >
              ACTIVATE
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
