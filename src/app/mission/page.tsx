import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { User, Store, PawPrint, Building2, ArrowRight } from 'lucide-react';
import TopNav from '@/components/layout/TopNav';
import PageSplash from '@/components/sections/PageSplash';

export const metadata: Metadata = {
  title: 'Our Mission | DIANA - Digital Infrastructure for Animal Networks and Advocacy',
  description: 'DIANA is a financial ecosystem that quietly redirects daily consumer spending to fund animal sanctuaries. Learn about the name, the mission, the founder, and the ecosystem behind DIANA.',
};

const meanings = [
  {
    number: '01',
    full: 'Digital Infrastructure for Animal Networks and Advocacy',
    description: `The platform's technical identity. A financial clearinghouse built to route daily consumer actions into sanctuary survival.`,
  },
  {
    number: '02',
    full: 'Direct Impact Activism Nexus Accelerator',
    description: `The movement's strategic identity. Accelerating real-world animal outcomes through infrastructure, not noise.`,
  },
  {
    number: '03',
    full: 'Goddess of the Moon, the Wild, and Protector of the Innocent',
    description: 'The mythological identity. Diana, huntress turned protector, guardian of creatures who cannot speak for themselves.',
  },
  {
    number: '04',
    full: 'A name',
    description: `And the founder's name. The logo of DIANA is the goddess Diana — but it came from a photo of Diane herself.`,
  },
];

const nexusNodes = [
  {
    icon: User,
    label: 'Individual Advocates',
    body: 'Everyday people whose purchases, subscriptions, and choices form the financial backbone of DIANA. No extra effort. No donation fatigue.',
  },
  {
    icon: Store,
    label: 'Ethical Merchants',
    body: 'Businesses that pledge a portion of every sale are the engine. Their participation turns ordinary commerce into continuous sanctuary funding.',
  },
  {
    icon: PawPrint,
    label: 'Animal Sanctuaries',
    body: 'The reason everything exists. Safe, funded, visible — without having to beg for it.',
  },
];

export default function MissionPage() {
  return (
    <>
      <PageSplash 
        title={<><em>where daily actions quietly<br /><span className="text-primary">support animals</span></em></>}
        subtitle="DIANA is a financial clearinghouse connecting individual advocates with ethical merchants to route a portion of daily transactions directly into consistent, reliable funding for animal sanctuaries."
        images={[
          'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1920&q=80',
        ]}
        align="left"
        actionButtons={[
          { label: 'ACTIVATE', primary: true },
          { label: 'OUR MISSION', primary: false }
        ]}
      />
      <TopNav />

      <main className="bg-background text-secondary pt-24 md:pt-32">

        {/* The Nexus — first section */}
        <section className="pb-24 md:pb-32 pt-8 md:pt-12">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-text-main mt-4 select-none">
                An Interconnected <span className="text-primary">Ecosystem</span>
              </h2>
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-xl mx-auto mt-4 select-none">
                DIANA works because every participant amplifies the impact of every other. Three groups. One quiet engine.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nexusNodes.map((node) => {
                const NodeIcon = node.icon;
                return (
                  <div key={node.label} className="glass-surface p-10 rounded-2xl border border-border-main hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300 text-center">
                    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
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

        {/* The Problem */}
        <section className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[36px] md:text-[48px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-text-main mt-4 mb-8 select-none">
                A $500B economy with a broken <span className="text-primary">heart.</span>
              </h2>
              <div className="space-y-6 font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted">
                <p>
                  The global vegan economy is valued at over <strong className="text-secondary">$500 billion</strong>. Yet the animal sanctuaries that form its ethical heart are surviving on goodwill and GoFundMe.
                </p>
                <p>
                  Consumers want to support animal welfare. Businesses want to give back meaningfully. Sanctuaries need consistent, reliable funding to survive. But there has never been transparent financial plumbing connecting all three.
                </p>
                <p>
                  The desire exists. The infrastructure did not. Until DIANA.
                </p>
              </div>

              {/* Pull quote */}
              <div className="mt-12 glass-surface rounded-2xl p-8 border border-border-main relative">
                <div className="absolute -top-3 left-8 bg-primary text-secondary text-2xl font-headline-lg px-3 py-0 rounded leading-none select-none">&ldquo;</div>
                <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-secondary italic select-none">
                  There is no transparent financial plumbing connecting daily purchases to sanctuary survival. DIANA is my life&rsquo;s work to bridge that gap.
                </p>
                <p className="mt-4 font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary uppercase select-none">
                  — Diane, Founder
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Vision */}
        <section className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-text-main mb-6 select-none">
                A world where protection is the <span className="text-primary">default.</span>
              </h2>
              <div className="space-y-6 font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted">
                <p>
                  Every system in the world was designed by someone. DIANA was designed with animals as the silent beneficiary of every ethical transaction that flows through it.
                </p>
                <p>
                  The goal is not to make advocacy feel like a sacrifice. It is to make it feel like nothing at all — because it is already happening, built invisibly into the infrastructure of daily life.
                </p>
                <p>
                  You shop. You eat. You move through the world. DIANA makes sure it quietly counts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Name */}
        <section className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[36px] md:text-[48px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-text-main mt-4 select-none">
                One name. Many <span className="text-primary">meanings.</span>
              </h2>
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-xl mx-auto mt-4 select-none">
                DIANA was chosen because it holds multiple truths at once — technical, strategic, mythological, and deeply personal.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {meanings.map((m) => (
                <div key={m.number} className="glass-surface p-8 rounded-2xl border border-border-main hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300">
                  <div className="w-10 h-10 flex items-center justify-center mb-5">
                    <span className="font-impact-stat font-[var(--text-impact-stat--font-weight)] text-primary text-sm">{m.number}</span>
                  </div>
                  <p className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-muted uppercase mb-4 select-none leading-relaxed">
                    {m.full}
                  </p>
                  <p className="font-body-sm font-[var(--text-body-sm--font-weight)] text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Photo */}
              <div className="flex justify-center lg:order-2">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <div className="relative w-full h-full rounded-full border border-border-main flex items-center justify-center overflow-hidden">
                    <Image
                      src="/diane-founder.jpg"
                      alt="Diane Mejilla, Founder of DIANA"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 288px, 384px"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:order-1">
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-text-main mb-2 select-none">Diane<span className="text-primary">.</span></h2>
                <p className="font-body-sm text-[var(--text-body-sm)] text-primary mb-6 uppercase tracking-[0.1em] font-label-caps select-none">Diana Rose G. Mejilla · Founder</p>
                <div className="space-y-5 font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted">
                  <p>
                    Diane is a vegan, a traveller, and the founder of the <strong className="text-secondary">first all-vegan pizzeria in the Philippines</strong>. She has lived both sides of this problem — a business owner who wanted to give back, and an advocate who couldn&rsquo;t find proof that her choices mattered.
                  </p>
                  <p>
                    DIANA was built from that frustration. Not as a campaign. Not as a cause. As a system — one where doing more for animals doesn&rsquo;t cost you anything extra, because it is already woven into how you shop, eat, and move through the world.
                  </p>
                </div>
                <div className="mt-8 glass-surface rounded-xl px-6 py-4 border border-border-main inline-flex items-center gap-3">
                  <Building2 className="text-primary" size={20} />
                  <span className="font-body-sm text-[var(--text-body-sm)] text-text-muted select-none">A <strong className="text-secondary">DRGM Pty Ltd</strong> product</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] text-center">
            <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[52px] leading-tight text-text-main mb-6 select-none">
              Ready to be part of <span className="text-primary">it?</span>
            </h2>
            <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mb-10 max-w-lg mx-auto select-none">
              Your daily life is already powerful. DIANA just makes sure it quietly counts.
            </p>
            <Link
              href="/#activate"
              id="mission-cta-btn"
              className="inline-flex items-center gap-3 bg-primary text-[#FFDDEE] px-10 py-4 rounded-full border-2 border-primary font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] hover:scale-[1.03] active:scale-[0.97] transition-all"
            >
              JOIN THE NEXUS
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
