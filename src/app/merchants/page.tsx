import type { Metadata } from 'next';
import { LayoutGrid, BarChart3, Store, Globe, Users, FileText } from 'lucide-react';
import TopNav from '@/components/layout/TopNav';
import PageSplash from '@/components/sections/PageSplash';
import MerchantCategories from '@/components/sections/MerchantCategories';

export const metadata: Metadata = {
  title: 'ETHICAL MERCHANTS - Pledge & Grow through DIANA | Digital Infrastructure for Animal Networks and Advocacy',
  description: 'List your ethical business or services on DIANA. Pledge a minimum of 5% to animal sanctuaries and connect directly with the world\'s most conscious consumers.',
};

const benefits = [
  { icon: LayoutGrid, title: 'Free Listing', body: 'Your business is listed in DIANA\'s ethical directory, a curated and searchable network, trusted by values-driven advocates globally.' },
  { icon: BarChart3, title: 'Automatic Impact Attribution', body: 'Every purchase is tracked. Customers see exactly how their spend at your business helped animals, building deep brand loyalty.' },
  { icon: Store, title: 'Storefront Management', body: 'Control your merchant profile, products, services, pricing, and promotions all from within the DIANA platform.' },
  { icon: Globe, title: 'Borderless, No-Fee Payments', body: 'Keep 100% of your sales revenue. DIANA charges absolutely zero platform or transaction fees, maximizing your margins globally.' },
  { icon: Users, title: 'Nexus Feed Visibility', body: 'Your business appears in advocate home feeds every time a purchase supports sanctuaries for organic, authentic reach.' },
  { icon: FileText, title: 'Transparent Transaction Reporting', body: 'Track all your transactions and see the cumulative impact generated through your storefront with detailed reporting.' },
];

const pledgeSteps = [
  { num: '01', label: 'Set your pledge', body: 'Choose your commitment. The minimum is 5% of every sale. You can opt to go higher if you are able to give more.' },
  { num: '02', label: 'Sell as you already do', body: 'No change to your existing checkout flow. DIANA integrates with QR payment and direct item selection.' },
  { num: '03', label: 'Funds flow automatically', body: 'Your pledge is calculated and distributed to sanctuaries each cycle. It is transparent, traceable, and automatic.' },
];

export default function MerchantsPage() {
  return (
    <>
      <PageSplash 
        title={<>Your business already makes a difference. <span className="text-primary">Let DIANA elevate it.</span></>}
        subtitle="Join a curated network of ethical businesses whose every transaction quietly funds animal protection automatically, transparently, and at no extra cost to your customers."
        images={[
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80'
        ]}
        align="left"
        actionButtons={[
          { label: 'LIST AS MERCHANT', targetId: 'apply', primary: true },
          { label: 'LEARN MORE', primary: false }
        ]}
      />

      <TopNav />
      <main className="bg-background text-secondary pt-24 md:pt-32">

        {/* Benefits grid */}
        <section className="pb-24 md:pb-32 pt-8 md:pt-12">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-text-main mt-4 select-none">
                Built for <span className="text-primary">Ethical Businesses</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => {
                const BenefitIcon = b.icon;
                return (
                  <div key={b.title} className="glass-surface p-8 rounded-2xl border border-border-main hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300">
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

        {/* Categories */}
        <MerchantCategories />

        {/* The Pledge */}
        <section id="pledge" className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-text-main mt-4 select-none">
                Simple, Economic, <span className="text-primary">Meaningful</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pledgeSteps.map((s) => (
                <div key={s.num} className="flex flex-col gap-4">
                  <div className="font-impact-stat font-[var(--text-impact-stat--font-weight)] text-5xl text-text-muted select-none">{s.num}</div>
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
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-text-main mt-4 select-none">
                  Ready <span className="text-primary">to join?</span>
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
                <button id="merchant-apply-btn" type="submit" className="w-full py-4 bg-primary text-[#FFDDEE] font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] rounded-full border-2 border-primary hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] transition-all active:scale-95 uppercase mt-2">
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
