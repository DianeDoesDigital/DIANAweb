import type { Metadata } from 'next';
import { 
  HandHeart, HeartPulse, Gift, Image as ImageIcon, Network, UserPlus, 
  Store, MoonStar, Cat, Heart, BanknoteArrowUp, ArrowRight, 
  Shield, CheckCircle2, HelpCircle 
} from 'lucide-react';
import TopNav from '@/components/layout/TopNav';
import PageSplash from '@/components/sections/PageSplash';
import SanctuaryApplicationForm from '@/components/forms/SanctuaryApplicationForm';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'ANIMAL SANCTUARIES - Receive Continuous Funding through DIANA | Digital Infrastructure for Animal Networks and Advocacy',
  description: 'Register your animal sanctuary with DIANA. Receive continuous, automatic funding from our community of conscious consumers and ethical merchants without lifting a finger.',
};

const fundFlow = [
  { icon: Store, label: 'Merchant Pledge', body: 'At least 5% of every ethical purchase flows into the network.' },
  { icon: Cat, label: 'Platform Contribution', body: 'DIANA boosts every payout with a contribution from its own platform fee.' },
  { icon: Heart, label: 'Direct Support', body: 'One-time gifts and monthly care from dedicated advocates.' },
  { icon: BanknoteArrowUp, label: 'Sanctuary Disbursal', body: 'Funds distributed to your registered sanctuary for every cycle.' },
];

const benefits = [
  { icon: HandHeart, title: 'Passive Recurring Funding', body: 'Every purchase made at any DIANA merchant automatically allocates a portion to you continuously, every cycle, without fundraising.' },
  { icon: Gift, title: 'One-Time Gifts', body: 'Advocates can make spontaneous one-time funding gifts directly to your sanctuary in a few taps.' },
  { icon: HeartPulse, title: 'Monthly Care Subscriptions', body: 'Individual advocates can assign you as their chosen sanctuary for recurring monthly support for stable, predictable funding.' },
  { icon: ImageIcon, title: 'Rich Sanctuary Profile', body: 'Showcase your residents with video, gallery, resident profiles, visitor quotes, and a transparent fund breakdown.' },
  { icon: Network, title: 'Supporter Network Visibility', body: 'Your sanctuary appears across the Global Nexus and in individual advocate impact reports for authentic, earned visibility.' },
  { icon: UserPlus, title: 'Sanctuary Recruitment Tools', body: 'Attract volunteers, mentors, and long-term advocates directly through your DIANA profile.' },
];

const standards = [
  { icon: Shield, title: 'No Exploitation', body: 'A haven for rescues where they are always treated with respect and never as commodities for commercial use.' },
  { icon: Heart, title: 'Lifetime Care', body: 'Commitment to the lifelong well-being of every resident, providing necessary veterinary care, space, and enrichment.' },
  { icon: CheckCircle2, title: 'Transparency', body: 'Clear, verifiable accounting of how funds are used to directly support the animals and sanctuary operations.' },
];

const faqs = [
  { q: 'Is there a cost to join?', a: 'No. DIANA is completely free for sanctuaries. The platform is funded through a separate allocation from merchant pledges, ensuring your distributions remain yours.' },
  { q: 'How much time does it take to manage?', a: 'Very little. Once your profile is set up and verified, funds flow automatically. We encourage occasional updates to your gallery and resident stories, but no ongoing fundraising campaigns are required.' },
  { q: 'When and how are funds distributed?', a: 'Funds are aggregated in real-time as purchases are made across the network, and distributed via direct bank transfer at the end of each funding cycle.' },
  { q: 'Do we need to be a registered charity?', a: 'Yes. To maintain the integrity of the network and comply with financial regulations, we require proof of registered non-profit or charitable status in your jurisdiction.' },
];

const checklist = [
  'Proof of non-profit or charitable status',
  '3-5 high-quality photos of your sanctuary and residents',
  'A brief breakdown of your monthly operating costs',
  'A clear description of your sanctuary\'s mission and standard of care'
];

export default function SanctuariesPage() {
  return (
    <>
      <PageSplash 
        title={<>A Continuous Stream of Care, <span className="text-primary">Built into Everyday Life</span></>}
        subtitle="DIANA creates a financial infrastructure where the daily choices of thousands of advocates quietly fund the animals in your care automatically, every single cycle."
        images={[
          'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1534043464124-3be32fe000cb?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=1920&q=80'
        ]}
        align="left"
        actionButtons={[
          { label: 'REGISTER SANCTUARY', targetId: 'apply', primary: true },
          { label: 'WHAT WE OFFER', primary: false }
        ]}
      />
      <TopNav />

      <main className="bg-[#FFDDEE] text-secondary pt-24 md:pt-32">
        
        {/* Benefits */}
        <section id="benefits" className="pb-24 md:pb-32 pt-8 md:pt-12">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[40px] leading-tight text-text-main mt-4 select-none">
                Focus on Care, <span className="text-primary">DIANA Handles the Rest</span>
              </h2>
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-2xl mx-auto mt-4 select-none">
                A suite of tools and automated income streams designed to let you spend less time fundraising and more time with the animals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => {
                const BenefitIcon = b.icon;
                return (
                  <div key={b.title} className="glass-surface bg-background p-8 rounded-2xl border border-border-main hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300">
                    <div className="w-12 h-12 flex items-center justify-center mb-6">
                      <BenefitIcon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] leading-[var(--text-headline-md--line-height)] text-secondary mb-3 select-none">{b.title}</h3>
                    <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{b.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Fund flow */}
        <section id="fund-flow" className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left - Title and Vertical Stack of Steps */}
              <div className="lg:col-span-7 flex flex-col items-center gap-8">
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[40px] leading-tight text-text-main text-center select-none w-full">
                  How Funds <span className="text-primary">Flow to You</span>
                </h2>
                <div className="flex flex-col gap-4 w-full">
                  {fundFlow.map((step, i) => (
                    <div key={step.label} className="glass-surface p-6 rounded-2xl flex items-center gap-6 border border-border-main hover:border-primary/30 transition-all duration-300 w-full">
                      <div className="font-label-caps tracking-[0.1em] text-[28px] md:text-[36px] leading-none text-primary select-none shrink-0 w-12 text-center">
                        0{i + 1}
                      </div>
                      <div className="text-left">
                        <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-lg text-secondary mb-1 select-none">{step.label}</h3>
                        <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Video */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-border-main glass-surface aspect-[4/5] shadow-lg group">
                  <video 
                    src="/fund-flow.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sanctuary Standards */}
        <section className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[40px] leading-tight text-text-main mt-4 select-none">
                Sanctuary <span className="text-primary">Standards</span>
              </h2>
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-2xl mx-auto mt-4 select-none">
                To maintain the integrity of the ecosystem and ensure the highest quality of life for residents, we only support sanctuaries that meet these core commitments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {standards.map((s) => {
                const StandardIcon = s.icon;
                return (
                  <div key={s.title} className="glass-surface bg-background p-8 rounded-2xl border border-border-main hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center mb-4">
                      <StandardIcon className="text-primary" size={28} />
                    </div>
                    <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] text-secondary mb-3 select-none">{s.title}</h3>
                    <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{s.body}</p>
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
              {/* Left - Photo (on mobile it goes after the FAQs) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden border border-border-main glass-surface aspect-[3/4] shadow-md group">
                  <img 
                    src="/diane-at-vk.jpg" 
                    alt="Diane caring for a cat at sanctuary"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Right - Title and FAQs Stack (on mobile it goes first) */}
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-center gap-8">
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[40px] leading-tight text-text-main text-center select-none w-full">
                  No Fine <span className="text-primary">Print</span>
                </h2>
                <div className="flex flex-col gap-4 w-full">
                  {faqs.map((faq, i) => (
                    <div key={i} className="glass-surface bg-background p-6 rounded-2xl border border-border-main hover:border-primary/30 transition-all shadow-sm w-full flex items-start gap-4">
                      <HelpCircle className="text-primary shrink-0 mt-1" size={20} />
                      <div className="text-left">
                        <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-lg text-secondary mb-1 select-none">{faq.q}</h3>
                        <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration form */}
        <section id="apply" className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[40px] leading-tight text-text-main mt-4 select-none">
                  Register <span className="text-primary">Sanctuary</span>
                </h2>
                <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mt-4 select-none">We review all sanctuaries manually to ensure quality and alignment. We'll be in touch within 48 hours.</p>
              </div>

              {/* Checklist */}
              <div className="mb-10 bg-surface rounded-2xl p-8 border border-border-main shadow-sm">
                <h3 className="font-label-caps tracking-[0.1em] text-xs text-primary uppercase mb-4">Before you start, please prepare:</h3>
                <ul className="space-y-3">
                  {checklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                      <span className="font-body-sm text-[var(--text-body-sm)] text-text-muted select-none">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Suspense fallback={<div className="h-64 glass-surface rounded-2xl flex items-center justify-center"><div className="animate-pulse w-8 h-8 rounded-full border-2 border-primary border-t-transparent" /></div>}>
                <SanctuaryApplicationForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
