import type { Metadata } from 'next';
import { 
  Map, QrCode, Heart, Target, HeartPulse, Users,
  Wallet, Globe, ArrowDownUp, 
  HeartHandshake, Coins, SquarePlay, Cat, ArrowRight,
  HelpCircle 
} from 'lucide-react';
import TopNav from '@/components/layout/TopNav';
import PageSplash from '@/components/sections/PageSplash';
import { Suspense } from 'react';
import AdvocatesClient from './AdvocatesClient';

export const metadata: Metadata = {
  title: 'ADVOCATES - Turn Everyday Choices into Sanctuary Support | DIANA',
  description: 'Join the DIANA ecosystem as an advocate. Link your payment method, shop at ethical merchants, and automatically fund animal sanctuaries with every purchase.',
};

const pillars = [
  {
    icon: Map,
    label: 'Explore',
    title: 'Discover your values in action',
    body: 'Browse a curated, global network of ethical businesses, events, and services, all aligned with a world that takes animals seriously.',
  },
  {
    icon: QrCode,
    label: 'Connect',
    title: 'Pay with purpose, every time',
    body: 'Use a payment method where your daily transactions automatically cater to the needs of a rescued animal without you spending a single cent extra.',
  },
  {
    icon: Heart,
    label: 'Support',
    title: 'A minimum of 5% flows automatically',
    body: 'Every purchase from an ethical merchant sends at least 5% directly to sanctuaries. This is recurring, continuous, and built into the system itself.',
  },
  {
    icon: Target,
    label: 'Track',
    title: 'Personal Impact Dashboard',
    body: 'Watch your real-time impact grow. See exactly how many meals, medical treatments, and sanctuary days your daily choices have funded.',
  },
  {
    icon: HeartPulse,
    label: 'Monthly Care',
    title: 'Adopt a Sanctuary',
    body: 'Go beyond daily spending. Commit to a monthly subscription directly to your favorite sanctuary to provide predictable, stable care.',
  },
  {
    icon: Users,
    label: 'Community',
    title: 'Join the Nexus',
    body: 'Connect with thousands of other values-driven advocates globally. See the collective power of the community moving the needle for animals.',
  },
];

const appFeatures = [
  {
    icon: Wallet,
    title: 'Zero-Friction Top-Ups',
    body: 'Load your DIANA wallet in your home currency instantly. No conversion at the point of deposit, no surprises at the point of sale.',
  },
  {
    icon: Globe,
    title: 'Borderless Payments',
    body: 'Pay any DIANA merchant, anywhere in the world, directly from the app. Your wallet works the same in Manila as it does in Melbourne.',
  },
  {
    icon: ArrowDownUp,
    title: 'No Exchange Fees',
    body: 'Bypass traditional bank conversion spreads and international transaction fees entirely. Your money stays yours.',
  },
];

const engineSteps = [
  {
    icon: HeartHandshake,
    label: 'Merchant Pledge',
    description: 'Participating ethical merchants commit a minimum 5% of every purchase directly to registered animal sanctuaries. This creates a reliable baseline of funding.',
  },
  {
    icon: Coins,
    label: 'Consumer Extra',
    description: 'Advocates can easily add an optional extra donation to their transaction at checkout, giving conscious consumers the power to amplify their impact entirely effortlessly.',
  },
  {
    icon: SquarePlay,
    label: 'Sponsor Doubler',
    description: 'Brands with purely plant-based product lines can advertise on the platform. Their sponsorship automatically doubles the sanctuary contribution from your transaction.',
  },
  {
    icon: Cat,
    label: 'Platform Contribution',
    description: 'DIANA automatically channels 5% of every platform fee to partner sanctuaries, creating a steady, compounding, additional funding stream for the animals.',
  },
];

const faqs = [
  { q: 'Is the app free to use?', a: 'Yes, the DIANA app is completely free for individual advocates. There are no monthly fees to maintain a basic account or access the global directory.' },
  { q: 'How do I track my impact?', a: 'Your dashboard updates in real-time. You can see exact dollar amounts, as well as tangible metrics translated into meals provided or medical treatments funded.' },
  { q: 'Which merchants are included?', a: 'We have a rapidly growing global directory of fully vetted, ethical, and cruelty-free businesses spanning food, retail, wellness, travel, and more.' },
  { q: 'Can I choose which sanctuary receives my funds?', a: 'Your 5% transaction pledge goes to a shared pool distributed equitably across all verified sanctuaries. However, you can use the \'Monthly Care\' feature to direct additional funds to a specific sanctuary of your choice.' },
];

export default function AdvocatesPage() {
  return (
    <>
      <PageSplash 
        title={<>Your lifestyle. Their <span className="text-primary">lifeline.</span></>}
        subtitle="Turn your everyday choices into a continuous stream of support for animal sanctuaries."
        images={[
          'https://images.unsplash.com/photo-1548263594-a71ea65a8598?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1920&q=80'
        ]}
        align="left"
        actionButtons={[
          { label: 'DOWNLOAD APP', targetId: 'download', primary: true },
          { label: 'HOW IT WORKS', targetId: 'benefits', primary: false }
        ]}
      />
      <TopNav />

      <main className="bg-[#FFDDEE] text-secondary pt-24 md:pt-32">
        
        {/* Benefits Grid */}
        <section id="benefits" className="pb-24 md:pb-32 pt-8 md:pt-12">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main mt-4 select-none">
                Advocate for Animals, <span className="text-primary">Effortlessly</span>
              </h2>
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-2xl mx-auto mt-4 select-none">
                DIANA turns the way you already live into a continuous source of care for animals across the globe.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="glass-surface bg-background p-8 rounded-2xl border border-border-main hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300">
                    <div className="w-12 h-12 flex items-center justify-center mb-6">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary uppercase select-none block mb-2">
                      {p.label}
                    </span>
                    <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] leading-[var(--text-headline-md--line-height)] text-secondary mb-3 select-none">{p.title}</h3>
                    <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{p.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The DIANA App */}
        <section className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left - Features */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main select-none w-full text-center lg:text-left">
                  The DIANA <span className="text-primary">App</span>
                </h2>
                <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted select-none text-center lg:text-left">
                  A borderless financial ecosystem designed for the conscious consumer who moves through the world and wants every transaction to mean something wherever they are.
                </p>
                <div className="flex flex-col gap-6 w-full mt-4">
                  {appFeatures.map((f, i) => (
                    <div key={f.title} className="flex items-start gap-5">
                      <div className="w-11 h-11 shrink-0 rounded-2xl border border-border-main glass-surface bg-background flex items-center justify-center">
                        <f.icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-lg text-secondary mb-1 select-none">{f.title}</h3>
                        <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{f.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Mockup */}
              <div className="lg:col-span-5 flex justify-center items-center mt-12 lg:mt-0">
                <div className="relative w-full max-w-sm">
                  <div className="glass-surface bg-background rounded-3xl p-10 border border-border-main text-center space-y-6 shadow-lg">
                    <span className="font-label-caps text-xs text-text-muted uppercase tracking-[0.15em] select-none">Pay anywhere. In any currency.</span>
                    <div className="grid grid-cols-3 gap-4 text-center py-4">
                      <div className="glass-surface bg-surface rounded-2xl p-4 border border-border-main">
                        <span className="font-impact-stat text-2xl text-secondary block select-none">AUD</span>
                        <span className="font-body-sm text-xs text-text-muted select-none">Australia</span>
                      </div>
                      <div className="glass-surface bg-surface rounded-2xl p-4 border border-primary/40">
                        <span className="font-impact-stat text-2xl text-primary block select-none">PHP</span>
                        <span className="font-body-sm text-xs text-text-muted select-none">Philippines</span>
                      </div>
                      <div className="glass-surface bg-surface rounded-2xl p-4 border border-border-main">
                        <span className="font-impact-stat text-2xl text-secondary block select-none">USD</span>
                        <span className="font-body-sm text-xs text-text-muted select-none">Global</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-text-muted font-body-sm text-sm select-none">
                      <span>and every other currency in between</span>
                    </div>
                    <div className="bg-primary/10 rounded-xl px-4 py-3 border border-primary/20">
                      <span className="font-body-sm text-sm text-primary select-none font-medium">Zero conversion fees. Always.</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-2xl -z-10 scale-110" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Impact Engine (Client Component for State) */}
        <AdvocatesClient engineSteps={engineSteps} />

        {/* FAQ Section */}
        <section className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left - Photo */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden border border-border-main glass-surface aspect-[3/4] shadow-md group">
                  <img 
                    src="https://images.unsplash.com/photo-1548263594-a71ea65a8598?auto=format&fit=crop&w=1920&q=80" 
                    alt="Advocate impact"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
                </div>
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

        {/* Download App */}
        <section id="download" className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main mt-4 select-none">
                  Download and Make an <span className="text-primary">Impact</span>
                </h2>
                <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mt-4 select-none">
                  Join the global network of conscious consumers turning everyday spending into a lifeline for animals.
                </p>
              </div>

              <div className="glass-surface bg-background rounded-2xl p-12 border border-border-main text-center shadow-lg">
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href="#"
                    className="w-full sm:w-auto bg-primary text-[#FFDDEE] px-10 py-5 rounded-full border-2 border-primary font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] hover:scale-[1.02] active:scale-95 transition-all text-center flex justify-center items-center gap-3"
                  >
                    <span>App Store</span>
                  </a>
                  <a
                    href="#"
                    className="w-full sm:w-auto border-2 border-primary text-primary px-10 py-5 rounded-full font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:shadow-[0_4px_20px_rgba(255,0,153,0.25)] hover:bg-primary/5 hover:scale-[1.02] active:scale-95 transition-all text-center flex justify-center items-center gap-3"
                  >
                    <span>Google Play</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
