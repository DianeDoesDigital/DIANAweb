import type { Metadata } from 'next';
import { LayoutGrid, BarChart3, Store, Megaphone, Users, BadgeCheck } from 'lucide-react';
import TopNav from '@/components/layout/TopNav';

export const metadata: Metadata = {
  title: 'For Ethical Merchants | DIANA',
  description: 'List your ethical business on DIANA. Pledge 5%+ of every sale to animal sanctuaries and connect with the world\'s most conscious consumers.',
};

const benefits = [
  { icon: LayoutGrid, title: 'Free Ethical Listing', body: 'Your business is listed in the DIANA Explore directory, a curated, searchable network trusted by values-driven advocates globally.' },
  { icon: BarChart3, title: 'Automatic Impact Attribution', body: 'Every purchase is traced. Customers see exactly how their spend at your business helped an animal, building deep brand loyalty.' },
  { icon: Store, title: 'Storefront Management', body: 'Control your merchant profile, menu/collection, pricing, and promotions all from within the DIANA platform.' },
  { icon: Megaphone, title: 'Promotions System', body: 'Run time-limited offers or exclusive deals visible to your advocate network and across the Nexus global pulse.' },
  { icon: Users, title: 'Supporter Feed Visibility', body: 'Your business appears in advocate supporter feeds every time a purchase supports a sanctuary for organic, authentic reach.' },
  { icon: BadgeCheck, title: 'Verified Ethical Badge', body: 'The DIANA Ethical Merchant badge signals your commitment. Displayed on your profile, in receipts, and in advocate impact reports.' },
];

const pledgeSteps = [
  { num: '01', label: 'Set your pledge', body: 'Choose your commitment: minimum 5% of every sale. You can go higher. Many of our partners choose 10–20%.' },
  { num: '02', label: 'Sell as you already do', body: 'No change to your existing checkout flow. DIANA integrates with QR payment and direct item selection.' },
  { num: '03', label: 'Funds flow automatically', body: 'Your pledge is calculated and distributed to sanctuaries each cycle. It is transparent, traceable, and automatic.' },
];

export default function MerchantsPage() {
  return (
    <>
      <TopNav />

      <main className="bg-background text-secondary">
        {/* Hero */}
        <section className="relative py-32 md:py-48 border-b border-border-main overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/6 blur-[120px] rounded-full" />
          </div>
          <div className="relative z-10 max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-3xl">
            <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6 inline-block border border-primary/20 uppercase select-none">
              For Ethical Merchants
            </span>
            <h1 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[48px] md:text-[72px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-secondary mb-6 select-none">
              Your business already makes a difference.<br />
              <span className="text-primary neon-glow">Let DIANA elevate it.</span>
            </h1>
            <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mb-10 max-w-xl select-none">
              Join a curated network of ethical businesses whose every transaction quietly funds animal protection automatically, transparently, and at no extra cost to your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#apply" id="merchant-hero-cta" className="bg-primary text-white px-10 py-4 rounded-md font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all neon-border text-center">
                Apply as Merchant
              </a>
              <a href="#pledge" className="border border-border-main text-secondary px-10 py-4 rounded-md font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:bg-surface-hover hover:scale-[1.02] transition-all text-center">
                How the Pledge Works
              </a>
            </div>
          </div>
        </section>

        {/* Benefits grid */}
        <section className="py-24 md:py-32 border-b border-border-main">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-primary/20 uppercase select-none">
                What You Get
              </span>
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-secondary mt-4 select-none">
                Built for ethical businesses
              </h2>
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

        {/* The Pledge */}
        <section id="pledge" className="py-24 md:py-32 border-b border-border-main">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-primary/20 uppercase select-none">
                The Pledge
              </span>
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-secondary mt-4 select-none">
                Simple. Automatic. Meaningful.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pledgeSteps.map((s) => (
                <div key={s.num} className="flex flex-col gap-4">
                  <div className="font-impact-stat font-[var(--text-impact-stat--font-weight)] text-5xl text-primary/20 neon-glow select-none">{s.num}</div>
                  <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] text-secondary select-none">{s.label}</h3>
                  <p className="font-body-md text-[var(--text-body-md)] leading-[var(--text-body-md--line-height)] text-text-muted select-none">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application form */}
        <section id="apply" className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-primary/20 uppercase select-none">
                  Apply
                </span>
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-secondary mt-4 select-none">
                  Ready to join?
                </h2>
                <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mt-4 select-none">
                  Tell us about your business. We'll reach out within 48 hours.
                </p>
              </div>

              <form className="glass-surface rounded-2xl p-10 border border-border-main flex flex-col gap-6">
                {[
                  { id: 'merchant-name', label: 'Business Name', type: 'text', placeholder: 'Your business name' },
                  { id: 'merchant-contact', label: 'Contact Name', type: 'text', placeholder: 'Your full name' },
                  { id: 'merchant-email', label: 'Email Address', type: 'email', placeholder: 'hello@yourbusiness.com' },
                  { id: 'merchant-website', label: 'Website (optional)', type: 'url', placeholder: 'https://yourbusiness.com' },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label htmlFor={field.id} className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-muted uppercase">{field.label}</label>
                    <input id={field.id} type={field.type} placeholder={field.placeholder} className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] placeholder:text-text-subtle focus:outline-none focus:border-primary/50 transition-colors" />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label htmlFor="merchant-category" className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-muted uppercase">Business Category</label>
                  <select id="merchant-category" className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] focus:outline-none focus:border-primary/50 transition-colors">
                    <option value="">Select a category</option>
                    {['Food & Drink', 'Retail', 'Wellness', 'Experiences', 'Travel', 'Professionals', 'Resources', 'Entertainment'].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="merchant-pledge" className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-muted uppercase">Pledge Commitment</label>
                  <select id="merchant-pledge" className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] focus:outline-none focus:border-primary/50 transition-colors">
                    <option value="5">5% (minimum)</option>
                    <option value="10">10%</option>
                    <option value="15">15%</option>
                    <option value="20">20%+</option>
                  </select>
                </div>
                <button id="merchant-apply-btn" type="submit" className="w-full py-4 bg-primary text-white font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] rounded-md hover:brightness-110 transition-all neon-border active:scale-95 uppercase mt-2">
                  Submit Application
                </button>
                <p className="font-body-sm text-[var(--text-body-sm)] text-text-subtle text-center select-none">We review every application manually. We'll get back to you within 48 hours.</p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
