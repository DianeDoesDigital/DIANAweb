import type { Metadata } from 'next';
import { 
  Map, QrCode, Heart, ChartColumn, Sparkles, AudioWaveform,
  Wallet, Globe, ArrowDownUp, HandHeart,
  HelpCircle 
} from 'lucide-react';
import TopNav from '@/components/layout/TopNav';
import Footer from '@/components/layout/Footer';
import MultiImpactEngine from '@/components/sections/MultiImpactEngine';
import ImpactCalculatorOverlay from '@/components/sections/ImpactCalculatorOverlay';
import PageSplash from '@/components/sections/PageSplash';
import AdvocateJoinForm from '@/components/forms/AdvocateJoinForm';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'ADVOCATES - Turn Everyday Choices into Sanctuary Support | DIANA',
  description: 'Join the DIANA ecosystem as an advocate. Link your payment method, shop at ethical merchants, and automatically fund animal sanctuaries with every purchase.',
};

const pillars = [
  {
    icon: Map,
    title: 'Your Values in Action',
    body: 'Browse a curated, global network of ethical businesses, events, and services, all aligned with a world that takes animals seriously.',
  },
  {
    icon: QrCode,
    title: 'Purpose Driven Payments',
    body: 'Use a payment method where your daily transactions automatically support rescued animals without spending a single cent extra.',
  },
  {
    icon: Heart,
    title: 'Automated Funding',
    body: 'Every purchase from a DIANA merchant sends at least 5% directly to sanctuaries. This is recurring, continuous, and built into our system.',
  },
  {
    icon: HandHeart,
    title: 'Direct Support',
    body: 'For those who want to give even more, send one-time gifts or set up reliable monthly care subscriptions to your favourite sanctuaries.',
  },
  {
    icon: AudioWaveform,
    title: 'The Global Nexus',
    body: 'Watch as impact happens in real time. The global Nexus feed shows how everyday choices around the world are funding animal rescue in real time.',
  },
  {
    icon: ChartColumn,
    title: 'Personal Impact Dashboard',
    body: 'See exactly how much your daily actions have raised and get a transparent breakdown of the animal sanctuaries you are supporting.',
  },
];

const appFeatures = [
  {
    icon: Wallet,
    title: 'Zero-Friction Top-Ups',
    body: 'Load your DIANA wallet in your home currency instantly. No conversion at the point of deposit, no surprises at the point of sale.',
  },
  {
    icon: ArrowDownUp,
    title: 'No Exchange Fees',
    body: 'Bypass traditional bank conversion spreads and international transaction fees entirely. Your money stays yours.',
  },
  {
    icon: Globe,
    title: 'Borderless Payments',
    body: 'Pay any DIANA merchant, anywhere in the world, directly from the app. Your wallet works the same in Manila as it does in Melbourne.',
  },
];



const faqs = [
  { q: 'Is the app free to use?', a: 'Yes, the DIANA app is completely free for individual advocates. There are no monthly fees to maintain a basic account or access the global directory.' },
  { q: 'How do I track my impact?', a: 'Your dashboard updates in real-time. You can see exact dollar amounts, as well as tangible metrics translated into meals provided or medical treatments funded.' },
  { q: 'Which merchants are included?', a: 'We have a rapidly growing global directory of fully vetted, ethical, and cruelty-free businesses spanning food, retail, wellness, travel, and more.' },
  { q: 'Can I choose which sanctuary receives the funds from my purchases?', a: 'The merchant pledges contributed from your transactions go to a shared pool distributed equitably across all verified sanctuaries in your region, but you may also send one-time gifts or set up monthly care subscriptions to specific sanctuaries of your choice.' },
];

export default function AdvocatesPage() {
  return (
    <>
      <PageSplash 
        title={<>Your Lifestyle, <span className="text-primary">Their Lifeline</span></>}
        subtitle="Join the global network of conscious consumers turning everyday choices into a continuous stream of support for animal sanctuaries."
        images={['/hero-bg.jpg']}
        align="left"
        actionButtons={[
          { label: 'JOIN THE NEXUS', targetId: 'join', primary: true },
          { label: 'HOW IT WORKS', primary: false }
        ]}
      />
      <TopNav />

      <main className="snap-start bg-[#FFDDEE] text-secondary pt-24 md:pt-32">
        
        {/* Benefits Grid */}
        <section id="benefits" className="pb-24 md:pb-32 pt-8 md:pt-12">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main mt-4 select-none">
                Advocate for Animals <span className="text-primary">Effortlessly</span>
              </h2>
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-2xl mx-auto mt-4 select-none">
                DIANA turns the way you already live into a continuous source of care for animals across the globe.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar) => (
              <div key={pillar.title} className="glass-surface p-8 rounded-2xl flex flex-col h-full border border-border-main hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-background border border-border-main flex items-center justify-center mb-6">
                  <pillar.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] leading-[var(--text-headline-md--line-height)] text-secondary mb-3 select-none">
                  {pillar.title}
                </h3>
                <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">
                  {pillar.body}
                </p>
              </div>))}
            </div>
          </div>
        </section>

        {/* Multi-Impact Engine */}
        <MultiImpactEngine />

        {/* Global App Standards / Features */}
        <section className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main mt-4 select-none">
                Shop Consciously, <span className="text-primary">Anywhere in the World</span>
              </h2>
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-2xl mx-auto mt-4 select-none">
                A borderless financial ecosystem designed for conscious consumers who move through the world and want every transaction to mean something.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {appFeatures.map((f) => {
                const FeatureIcon = f.icon;
                return (
                  <div key={f.title} className="glass-surface bg-background p-8 rounded-2xl border border-border-main hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center mb-4">
                      <FeatureIcon className="text-primary" size={28} />
                    </div>
                    <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] text-secondary mb-3 select-none">{f.title}</h3>
                    <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{f.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left - Interactive Impact Calculator */}
              <div className="lg:col-span-5 order-2 lg:order-1 relative min-h-[400px]">
                <ImpactCalculatorOverlay />
              </div>

              {/* Right - FAQs */}
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-center gap-6">
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main text-center select-none w-full">
                  Advocate <span className="text-primary">Questions</span>
                </h2>
                <div className="flex flex-col gap-3 w-full">
                  {faqs.map((faq, i) => (
                    <div key={i} className="glass-surface bg-background py-4 px-5 rounded-2xl border border-border-main hover:border-primary/30 transition-all shadow-sm w-full flex items-start gap-4">
                      <HelpCircle className="text-primary shrink-0 mt-0.5" size={18} />
                      <div className="text-left">
                        <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-base text-secondary mb-0.5 select-none">{faq.q}</h3>
                        <p className="text-[13px] leading-relaxed text-text-muted select-none">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="join" className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="w-full mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main mt-4 select-none md:whitespace-nowrap">
                  Your Daily Life, <span className="text-primary">Quietly Doing More</span>
                </h2>
                <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mt-4 select-none max-w-2xl mx-auto">
                  Every person who joins adds another layer of protection for animals worldwide. Let your daily choices be part of it.
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <AdvocateJoinForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
