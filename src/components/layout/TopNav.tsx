'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Cat } from 'lucide-react';

const navLinks = [
  { href: '/mission', label: 'Mission', isMission: true },
  { href: '/sanctuaries', label: 'Sanctuaries' },
  { href: '/advocates', label: 'Advocates' },
  { href: '/merchants', label: 'Merchants' },
  { href: '/build', label: 'Build' },
];

interface TopNavProps {
  onActivate?: () => void;
}

export default function TopNav({ onActivate }: TopNavProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(true);

  const isHeroPage = pathname === '/' || pathname === '/mission' || pathname === '/sanctuaries' || pathname === '/advocates' || pathname === '/merchants' || pathname === '/build';

  useEffect(() => {
    if (!isHeroPage) {
      setHideNav(false);
    }
  }, [isHeroPage]);

  useEffect(() => {
    if (pathname === '/home') {
      setMenuOpen(false);
    }

    const handleScroll = () => {
      const isAtBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;

      if (!isHeroPage) {
        setHideNav(isAtBottom);
        setScrolled(window.scrollY > 50);
        return;
      }

      const heroSplash = document.getElementById('hero-splash');
      if (!heroSplash) {
        setHideNav(isAtBottom);
        setScrolled(window.scrollY > 50);
        return;
      }

      const isHeroVisible = heroSplash.getBoundingClientRect().bottom > 80 || window.scrollY < (window.innerHeight - 80);
      if (isHeroVisible) {
        setHideNav(true);
        setScrolled(false);
        return;
      }

      setScrolled(window.scrollY > 50);
      const isAtBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;
      setHideNav(isAtBottom);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 50);
    setTimeout(handleScroll, 150);
    
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
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/';
          }}
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
          {navLinks.map((link) => {
            const isActive = link.isMission ? (pathname === '/' || pathname === '/mission') : (pathname === link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.isMission && pathname === '/') {
                    e.preventDefault();
                    document.getElementById('hero-splash')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] uppercase transition-colors ${
                  isActive
                    ? 'text-primary font-bold'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4 transition-all duration-500 opacity-100 translate-y-0">
          <button
            id="nav-try-demo-btn"
            onClick={() => window.dispatchEvent(new Event('openAppDemo'))}
            className="flex items-center gap-2 text-[#FFDDEE] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[0.1em] text-xs bg-primary px-6 h-10 rounded-full border-2 border-primary hover:shadow-[0_4px_20px_rgba(255,0,153,0.45)] hover:scale-[1.03] active:scale-95 transition-all duration-200 uppercase"
          >
            <span>TRY THE APP</span>
            <Cat size={16} />
          </button>
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
          {navLinks.map((link) => {
            const isActive = link.isMission ? (pathname === '/' || pathname === '/mission') : (pathname === link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setMenuOpen(false);
                  if (link.isMission && pathname === '/') {
                    e.preventDefault();
                    document.getElementById('hero-splash')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`text-[var(--text-label-caps)] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] uppercase transition-colors ${
                  isActive ? 'text-primary font-bold' : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            onClick={() => { setMenuOpen(false); window.dispatchEvent(new Event('openAppDemo')); }}
            className="flex items-center justify-center gap-2 text-[#FFDDEE] font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[0.1em] text-xs bg-primary px-6 h-12 rounded-full border-2 border-primary hover:shadow-[0_4px_20px_rgba(255,0,153,0.45)] active:scale-95 transition-all duration-200 uppercase w-full"
          >
            <span>TRY THE APP</span>
            <Cat size={18} />
          </button>
        </div>
      )}
    </header>
  );
}
