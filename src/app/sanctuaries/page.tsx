import type { Metadata } from 'next';
import { HandHeart, HeartPulse, Gift, Image as ImageIcon, Network, UserPlus, Store, MoonStar, Heart, Banknote, ArrowRight } from 'lucide-react';
import TopNav from '@/components/layout/TopNav';

export const metadata: Metadata = {
  title: 'For Animal Sanctuaries | DIANA',
  description: 'Register your animal sanctuary with DIANA. Receive continuous, automatic funding from ethical merchant purchases without lifting a finger.',
};

const benefits = [
  { icon: HandHeart, title: 'Passive Recurring Funding', body: 'Every purchase made at any DIANA merchant automatically allocates a portion to you continuously, every cycle, without fundraising.' },
  { icon: HeartPulse, title: 'Monthly Care Supporters', body: 'Individual advocates can assign you as their chosen sanctuary for recurring monthly support for stable, predictable funding.' },
  { icon: Gift, title: 'One-Time Gifts', body: 'Advocates can make spontaneous one-time donations directly to your sanctuary from the Support tab.' },
  { icon: ImageIcon, title: 'Rich Sanctuary Profile', body: 'Showcase your residents with video, gallery, resident profiles, visitor quotes, and a transparent fund breakdown.' },
  { icon: Network, title: 'Supporter Network Visibility', body: 'Your sanctuary appears across the Global Nexus and in individual advocate impact reports for authentic, earned visibility.' },
  { icon: UserPlus, title: 'Sanctuary Recruitment Tools', body: 'Attract volunteers, mentors, and long-term advocates directly through your DIANA profile.' },
];

const fundFlow = [
  { icon: Store, label: 'Merchant Pledge', body: 'at least 5% of every ethical purchase flows into the network.' },
  { icon: MoonStar, label: 'Platform Contribution', body: 'DIANA boosts every payout with a contribution from its own platform fee.' },
  { icon: Heart, label: 'Direct Support', body: 'One-time gifts and monthly care from dedicated advocates.' },
  { icon: Banknote, label: 'Sanctuary Payout', body: 'Funds distributed to your registered sanctuary each cycle. It is transparent and traceable.' },
];

const navLinks = [['/', 'Home'], ['/merchants', 'Merchants'], ['/sanctuaries', 'Sanctuaries'], ['/about', 'About'], ['/get-involved', 'Get Involved']];

export default function SanctuariesPage() {
  return (
    <>
      <TopNav />

      <main className="bg-background text-secondary">
        {/* Hero */}
        <section className="relative py-32 md:py-48 border-b border-border-main overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/6 blur-[120px] rounded-full" />
          </div>
          <div className="relative z-10 max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-3xl">
            <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6 inline-block border border-primary/20 uppercase select-none">
              For Animal Sanctuaries
            </span>
            <h1 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[48px] md:text-[72px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-secondary mb-6 select-none">
              A continuous stream of care,<br />
              <span className="text-primary neon-glow">built into everyday life.</span>
            </h1>
            <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mb-10 max-w-xl select-none">
              DIANA creates a financial infrastructure where the daily choices of thousands of advocates quietly fund the animals in your care automatically, every single cycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#apply" id="sanctuary-hero-cta" className="bg-primary text-white px-10 py-4 rounded-md font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all neon-border text-center">
                Register Your Sanctuary
              </a>
              <a href="#fund-flow" className="border border-border-main text-secondary px-10 py-4 rounded-md font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:bg-surface-hover hover:scale-[1.02] transition-all text-center">
                How Funds Flow
              </a>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 md:py-32 border-b border-border-main">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-primary/20 uppercase select-none">What You Receive</span>
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-secondary mt-4 select-none">Focus on care. DIANA handles the rest.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => {
                const BenefitIcon = b.icon;
                return (
                  <div key={b.title} className="glass-surface p-8 rounded-2xl border border-border-main hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
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
        <section id="fund-flow" className="py-24 md:py-32 border-b border-border-main">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-primary/20 uppercase select-none">The Pipeline</span>
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-secondary mt-4 select-none">How funds flow to you</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {fundFlow.map((step, i) => {
                const FlowIcon = step.icon;
                return (
                  <div key={step.label} className="relative">
                    <div className="glass-surface p-8 rounded-2xl flex flex-col items-center text-center border border-border-main hover:border-primary/30 transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                        <FlowIcon className="text-primary" size={20} />
                      </div>
                      <span className="font-label-caps text-xs text-primary uppercase tracking-[0.1em] mb-2 select-none">0{i + 1}</span>
                      <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] text-secondary mb-2 select-none">{step.label}</h3>
                      <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{step.body}</p>
                    </div>
                    {i < fundFlow.length - 1 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-background border border-primary/30 items-center justify-center">
                        <ArrowRight className="text-primary" size={12} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Registration form */}
        <section id="apply" className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-primary/20 uppercase select-none">Register</span>
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-secondary mt-4 select-none">Register your sanctuary</h2>
                <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mt-4 select-none">We review all sanctuaries manually to ensure quality and alignment. We'll be in touch within 48 hours.</p>
              </div>
              <form className="glass-surface rounded-2xl p-10 border border-border-main flex flex-col gap-6">
                {[
                  { id: 'sanctuary-name', label: 'Sanctuary Name', type: 'text', placeholder: 'Your sanctuary name' },
                  { id: 'sanctuary-contact', label: 'Contact Name', type: 'text', placeholder: 'Your full name' },
                  { id: 'sanctuary-email', label: 'Email Address', type: 'email', placeholder: 'hello@yoursanctuary.org' },
                  { id: 'sanctuary-website', label: 'Website (optional)', type: 'url', placeholder: 'https://yoursanctuary.org' },
                  { id: 'sanctuary-location', label: 'Location (City, Country)', type: 'text', placeholder: 'e.g. Perth, Australia' },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label htmlFor={field.id} className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-muted uppercase">{field.label}</label>
                    <input id={field.id} type={field.type} placeholder={field.placeholder} className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] placeholder:text-text-subtle focus:outline-none focus:border-primary/50 transition-colors" />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label htmlFor="sanctuary-animals" className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-muted uppercase">Animals in your care (brief description)</label>
                  <textarea id="sanctuary-animals" rows={3} placeholder="e.g. We care for rescued pigs, cows, and chickens..." className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] placeholder:text-text-subtle focus:outline-none focus:border-primary/50 transition-colors resize-none" />
                </div>
                <button id="sanctuary-apply-btn" type="submit" className="w-full py-4 bg-primary text-white font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] rounded-md hover:brightness-110 transition-all neon-border active:scale-95 uppercase mt-2">
                  Submit Registration
                </button>
                <p className="font-body-sm text-[var(--text-body-sm)] text-text-subtle text-center select-none">All sanctuaries are verified to be cruelty-free and genuinely rescue-focused.</p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
