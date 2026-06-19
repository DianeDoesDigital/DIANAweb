import type { Metadata } from 'next';
import Image from 'next/image';
import { User, Store, PawPrint, Building2 } from 'lucide-react';
import TopNav from '@/components/layout/TopNav';
import MissionHero from '@/components/sections/MissionHero';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Mission | DIANA - Digital Infrastructure for Animal Networks and Advocacy',
  description: 'DIANA is a financial ecosystem that quietly redirects daily consumer spending to fund animal sanctuaries. Learn about the mission, the founder, and the ecosystem behind DIANA.',
};

const nexusNodes = [
  {
    icon: User,
    label: 'Individual Advocates',
    body: 'Everyday people whose lifestyle choices and daily purchases form the financial backbone of the ecosystem. Advocacy happens automatically, requiring absolutely zero extra effort.',
  },
  {
    icon: Store,
    label: 'Ethical Merchants',
    body: 'Values-aligned businesses that pledge a portion of every sale to drive the mission forward. Their participation effortlessly transforms ordinary, daily commerce into continuous, highly reliable sanctuary funding.',
  },
  {
    icon: PawPrint,
    label: 'Animal Sanctuaries',
    body: 'The dedicated havens performing the vital, hands-on work of animal rescue and rehabilitation. Through our community, they receive steady, dependable financial support without ever having to ask.',
  },
];

export default function MissionPage() {
  return (
    <>
      <MissionHero playVideo={false} />
      <TopNav />

      <main className="bg-background text-secondary pt-24 md:pt-32">

        {/* An Interconnected Ecosystem */}
        <section id="ecosystem" className="pb-24 md:pb-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <h1 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[56px] leading-tight text-text-main mt-4 select-none">
                An Interconnected <span className="text-primary">Ecosystem</span>
              </h1>
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-xl mx-auto mt-4 select-none">
                DIANA works because each participant amplifies the impact of every other.<br />
                Three Groups, One Quiet Engine.
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

        {/* The Vision */}
        <section className="py-24 md:py-32 bg-[#FFDDEE]">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
              {/* Content Side */}
              <div className="lg:order-1 order-2">
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[40px] xl:text-[52px] leading-tight mb-8 select-none tracking-tight">
                  <span className="text-secondary block whitespace-nowrap">Where Compassion</span>
                  <span className="text-primary block whitespace-nowrap">is the Default</span>
                </h2>
                <div className="space-y-6 font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted">
                  <p>
                    Commerce has always shaped the world. DIANA was designed to make sure that as it does, the animals we share this world with are never left behind. Every transaction is an opportunity to protect them, and DIANA makes sure that opportunity is never wasted.
                  </p>
                  <p>
                    Named after the moon goddess protector of the wild, the platform embodies a fierce, unyielding commitment to the innocent and vulnerable. The goal is not to make advocacy feel like a sacrifice. It is to make it feel like nothing at all, because it is already happening, built invisibly into the infrastructure of daily life.
                  </p>
                  <p>
                    You shop. You eat. You move through the world. DIANA makes sure it counts.
                  </p>
                </div>
              </div>

              {/* Video Side */}
              <div className="flex justify-center lg:justify-end lg:order-2 order-1 mb-10 lg:mb-0">
                <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-t-full rounded-b-2xl overflow-hidden border-4 border-primary shadow-[0_8px_30px_rgba(255,0,153,0.25)]">
                  <video
                    src="/vision-loop.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-center">
              {/* Photo */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <div className="relative w-full h-full rounded-full border border-border-main flex items-center justify-center overflow-hidden shadow-[0_8px_30px_rgba(255,0,153,0.15)]">
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

              <div>
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[56px] leading-tight select-none text-center mb-8">
                  <span className="text-secondary">We Are</span> <span className="text-primary">DIANA</span>
                </h2>
                <div className="space-y-5 font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted text-center">
                  <p>
                    In the modern world, DIANA is every person whose daily choices embody the goddess&rsquo; same fierce mission.
                  </p>
                  <p>
                    To scale that impact, I built the infrastructure to match it. Now, DIANA is also the financial clearinghouse that will route resources directly to the animal sanctuaries on the frontlines.
                  </p>
                  <p>
                    But this technology is only as powerful as the people who use it.
                  </p>
                  <p>
                    I am DIANA. You are DIANA. We are DIANA. And together, our daily actions can change the world.
                  </p>
                  <p className="font-body-sm text-[var(--text-body-sm)] text-primary uppercase tracking-[0.1em] font-label-caps select-none pt-2">
                    &mdash; Diane G. Mejilla, Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Nexus */}
        <section className="py-24 md:py-32 bg-[#FFDDEE]">
          <div className="max-w-[800px] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] text-center">
            <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[56px] leading-tight select-none mb-6">
              <span className="text-secondary">Ready to Join</span> <span className="text-primary">the Nexus?</span>
            </h2>
            <p className="font-body-lg text-[var(--text-body-lg)] text-text-muted mb-12">
              Tell us who you are. We&rsquo;ll send you straight to where you belong in the DIANA ecosystem.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 max-w-[400px] mx-auto">
              <Link
                href="/advocates"
                className="w-full bg-primary text-[#FFDDEE] px-8 py-5 rounded-full font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                <User size={20} />
                <span>Individual Advocate</span>
              </Link>
              <Link
                href="/merchants"
                className="w-full bg-[#FFDDEE] border-2 border-primary text-primary px-8 py-5 rounded-full font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:shadow-[0_8px_30px_rgba(255,221,238,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                <Store size={20} />
                <span>Ethical Merchant</span>
              </Link>
              <Link
                href="/sanctuaries"
                className="w-full bg-[#FFDDEE] border-2 border-primary text-primary px-8 py-5 rounded-full font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:shadow-[0_8px_30px_rgba(255,221,238,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                <PawPrint size={20} />
                <span>Animal Sanctuary</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
