import Link from 'next/link';

export default function WelcomeIntro() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] relative z-10">
        <div className="max-w-4xl">
        <h1 
          className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[52px] leading-tight mb-8 select-none"
          style={{ letterSpacing: '0.02em' }}
        >
          <span className="text-text-main">Digital Infrastructure for Animal Networks</span>{' '}
          <span className="text-primary">and Advocacy.</span>
        </h1>
        <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-2xl mb-12 select-none">
          DIANA is the financial clearinghouse connecting animal sanctuaries to conscious consumers and ethical merchants. By merging daily commerce with continuous advocacy, we've built an ecosystem where your ordinary actions quietly support the extraordinary work of saving animals.
        </p>

        <div className="flex flex-col sm:flex-row items-start justify-start gap-6">
          <Link
            href="#activate"
            className="w-full sm:w-auto px-8 min-w-[240px] h-[60px] flex items-center justify-center bg-primary text-[#FFDDEE] rounded-full border-2 border-primary font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[0.25em] uppercase text-[15px] hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] hover:scale-[1.03] active:scale-[0.97] transition-all"
          >
            JOIN THE NEXUS
          </Link>
          <Link
            href="#how-it-works"
            className="w-full sm:w-auto px-8 min-w-[240px] h-[60px] flex items-center justify-center bg-transparent text-primary rounded-full border-2 border-primary font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[0.25em] uppercase text-[15px] hover:bg-primary/5 hover:scale-[1.03] active:scale-[0.97] transition-all"
          >
            LEARN HOW IT WORKS
          </Link>
        </div>
        </div>
      </div>
      
      {/* Decorative glow removed */}
    </section>
  );
}
