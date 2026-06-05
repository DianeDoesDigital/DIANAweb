import type { Metadata } from 'next';
import Image from 'next/image';
import { User, Store, PawPrint, Building2 } from 'lucide-react';
import TopNav from '@/components/layout/TopNav';

export const metadata: Metadata = {
  title: 'OUR MISSION - This is Why DIANA Exists | Digital Infrastructure for Animal Networks and Advocacy',
  description: 'Learn about the mission behind the Digital Infrastructure for Animal Networks and Advocacy. Discover why DIANA was built and how our ecosystem silently redirects resources to animal protection.',
};

const nexusNodes = [
  { icon: User, label: 'Individual Advocates', body: 'Everyday people whose purchases, subscriptions, and choices form the financial backbone of DIANA.' },
  { icon: Store, label: 'Ethical Merchants', body: 'Businesses that pledge a portion of every sale are the engine that makes automatic sanctuary funding possible.' },
  { icon: PawPrint, label: 'Animal Sanctuaries', body: 'The mission. The reason everything exists. Safe, funded, visible.' },
];

export default function AboutPage() {
  return (
    <>
      <TopNav />

      <main className="bg-background text-secondary">
        {/* Hero */}
        <section className="relative py-32 md:py-48 border-b border-border-main overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/6 blur-[120px] rounded-full" />
          </div>
          <div className="relative z-10 max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] text-center max-w-3xl">
            <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6 inline-block border border-primary/20 uppercase select-none">
              About DIANA
            </span>
            <h1 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[48px] md:text-[72px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-secondary mb-6 select-none">
              Digital Infrastructure for<br />
              <span className="text-primary neon-glow">Animal Networks and Advocacy</span>
            </h1>
            <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-2xl mx-auto select-none">
              DIANA is a financial ecosystem. It's not a charity or a donation platform. It's an infrastructure designed so that the way the world already works quietly redirects resources to the animals who need them most.
            </p>
          </div>
        </section>

        {/* The Vision */}
        <section className="py-24 md:py-32 border-b border-border-main">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6 inline-block border border-primary/20 uppercase select-none">The Vision</span>
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-secondary mb-6 select-none">
                  A world where protection is the default
                </h2>
                <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mb-6 select-none">
                  Every system in the world was designed by someone. DIANA was designed with animals in mind as silent beneficiaries of every ethical transaction that flows through it.
                </p>
                <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted select-none">
                  The goal is not to make advocacy feel like a burden. It is to make it feel like nothing at all because it's already happening, built into the infrastructure of daily life.
                </p>
              </div>
              <div className="glass-surface rounded-2xl p-10 border border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/3 pointer-events-none" />
                <blockquote className="relative z-10">
                  <p className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[28px] leading-snug text-secondary mb-6 italic select-none">
                    "where daily actions quietly support animals"
                  </p>
                  <p className="font-body-md text-[var(--text-body-md)] leading-[var(--text-body-md--line-height)] text-text-muted select-none">
                    Not loudly. Not performatively. Quietly and continuously.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-24 md:py-32 border-b border-border-main">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Photo placeholder */}
              <div className="flex justify-center lg:order-2">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <div className="absolute inset-0 rounded-full bg-primary/10 blur-[40px]" />
                  <div className="relative w-full h-full rounded-full border border-primary/30 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/diane-founder.jpg"
                      alt="Diane Mejilla - Founder of DIANA"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 288px, 384px"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:order-1">
                <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6 inline-block border border-primary/20 uppercase select-none">The Founder</span>
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-secondary mb-2 select-none">Diane</h2>
                <p className="font-body-sm text-[var(--text-body-sm)] text-primary mb-6 uppercase tracking-[0.1em] font-label-caps select-none">Diana Rose G. Mejilla</p>
                <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mb-6 select-none">
                  DIANA was built because the systems that exist either demand too much of advocates or deliver too little to animals. Diane set out to change the infrastructure, not the people.
                </p>
                <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mb-8 select-none">
                  Every design decision in DIANA (every flow, every feature, every token) was made in service of one question: does this make life better for animals?
                </p>
                <div className="glass-surface rounded-xl px-6 py-4 border border-border-main inline-flex items-center gap-3">
                  <Building2 className="text-primary" size={20} />
                  <span className="font-body-sm text-[var(--text-body-sm)] text-text-muted select-none">A <strong className="text-secondary">DRGM Pty Ltd</strong> product</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Nexus */}
        <section className="py-24 md:py-32 border-b border-border-main">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-primary/20 uppercase select-none">The Nexus</span>
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-secondary mt-4 select-none">An interconnected ecosystem</h2>
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-xl mx-auto mt-4 select-none">
                DIANA works because every participant in the network amplifies the impact of every other participant.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nexusNodes.map((node) => {
                const NodeIcon = node.icon;
                return (
                  <div key={node.label} className="glass-surface p-10 rounded-2xl border border-border-main hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                      <NodeIcon className="text-primary" size={32} />
                    </div>
                    <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] text-secondary mb-4 select-none">{node.label}</h3>
                    <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{node.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] text-center">
            <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[52px] leading-tight text-secondary mb-6 select-none">
              Ready to be part of it?
            </h2>
            <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mb-10 max-w-lg mx-auto select-none">
              Your daily life is already powerful. DIANA just makes sure it quietly counts.
            </p>
            <a href="/#activate" id="about-cta-btn" className="bg-primary text-white px-12 py-4 rounded-md font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all neon-border inline-block">
              JOIN THE NEXUS
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
