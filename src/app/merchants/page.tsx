import type { Metadata } from 'next';
import { 
  LayoutGrid, BarChart3, Store, Globe, Users, FileText,
  Shield, Leaf, CheckCircle2, HelpCircle 
} from 'lucide-react';
import TopNav from '@/components/layout/TopNav';
import PageSplash from '@/components/sections/PageSplash';
import MerchantApplicationForm from '@/components/forms/MerchantApplicationForm';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'ETHICAL MERCHANTS - Pledge & Grow through DIANA | Digital Infrastructure for Animal Networks and Advocacy',
  description: 'List your ethical business or services on DIANA. Pledge a minimum of 5% to animal sanctuaries and connect directly with the world\'s most conscious consumers.',
};

const benefits = [
  { icon: LayoutGrid, title: 'Free Listing', body: 'Your business is listed in DIANA\'s ethical directory, a curated and searchable network, trusted by values-driven advocates globally.' },
  { icon: BarChart3, title: 'Automatic Impact Attribution', body: 'Every purchase is tracked. Customers see exactly how their spend at your business helped animals, building deep brand loyalty.' },
  { icon: Store, title: 'Storefront Management', body: 'Control your merchant profile, products, services, pricing, and promotions all from within the DIANA platform.' },
  { icon: Globe, title: 'Borderless Commerce', body: 'Connect with a global network of conscious consumers without geographical limits, expanding your reach across the entire DIANA ecosystem.' },
  { icon: Users, title: 'Nexus Feed Visibility', body: 'Your business appears in advocate home feeds every time a purchase supports sanctuaries for organic, authentic reach.' },
  { icon: FileText, title: 'Transparent Transaction Reporting', body: 'Track all your transactions and see the cumulative impact generated through your storefront with detailed reporting.' },
];

const pledgeSteps = [
  { label: 'Set your pledge', body: 'Choose your commitment. The minimum is 5% of every sale. You can opt to go higher if you are able to give more.' },
  { label: 'Sell as you already do', body: 'No change to your existing checkout flow. DIANA integrates with QR payment and direct item selection.' },
  { label: 'Funds flow automatically', body: 'Your pledge is calculated and distributed to sanctuaries each cycle. It is transparent, traceable, and automatic.' },
  { label: 'Watch your impact grow', body: 'Track your contributions on the merchant dashboard. Customers see exactly how their spend helped animals, building deep brand loyalty.' },
];

const standards = [
  { icon: Leaf, title: 'Cruelty-Free', body: 'All products and services must be completely free of animal products and by-products.' },
  { icon: CheckCircle2, title: 'Ethical Operations', body: 'A commitment to fair labor practices and sustainable, environmentally conscious sourcing.' },
  { icon: Shield, title: 'Transparent Impact', body: 'Willingness to proudly display how customer purchases directly support the sanctuary network.' },
];

const faqs = [
  { q: 'What types of businesses can join?', a: 'We welcome businesses across 8 categories: Food & Drink, Retail, Wellness, Experiences, Travel, Professionals, Resources, and Entertainment. All must align with our ethical and cruelty-free standards.' },
  { q: 'Are there any platform fees?', a: 'Yes. DIANA charges a flat 5% platform fee on all transactions. This covers payment processing, operational costs, and global scaling.' },
  { q: 'How is the 5% pledge tracked?', a: 'DIANA seamlessly tracks sales and calculates your pledge automatically at the end of each cycle. You\'ll receive a transparent breakdown before any funds are moved.' },
  { q: 'Can I change my pledge amount?', a: 'Yes! While the minimum is 5%, you can adjust your pledge higher at any time through your merchant dashboard.' },
];

const checklist = [
  'Basic details about your business and operations',
  '3-5 high-quality photos of your products, services, or storefront',
  'Confirmation of your chosen pledge amount (minimum 5%)',
  'A clear description of how your business aligns with our cruelty-free standards'
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
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main mt-4 select-none">
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

        {/* How Your Pledge Works */}
        <section id="pledge" className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left - Title and Vertical Stack of Steps */}
              <div className="lg:col-span-7 flex flex-col items-center gap-8">
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main text-center select-none w-full">
                  How Your <span className="text-primary">Pledge Works</span>
                </h2>
                <div className="flex flex-col gap-4 w-full">
                  {pledgeSteps.map((step, i) => (
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
                <div className="relative rounded-2xl overflow-hidden border border-border-main glass-surface shadow-lg group">
                  <video 
                    src="/merchant-pledge.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Merchant Standards */}
        <section className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main mt-4 select-none">
                Merchant <span className="text-primary">Standards</span>
              </h2>
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-2xl mx-auto mt-4 select-none">
                To maintain the integrity of the ecosystem and build genuine trust with advocates, we only list businesses that align with these core commitments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {standards.map((s) => {
                const StandardIcon = s.icon;
                return (
                  <div key={s.title} className="glass-surface p-8 rounded-2xl border border-border-main hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300 flex flex-col items-center text-center">
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
        <section className="py-24 md:py-32 bg-[#FFDDEE]">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left - Photo */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden border border-border-main glass-surface aspect-[3/4] shadow-md group">
                  <img 
                    src="/merchant-partnership.jpg" 
                    alt="Handshake signifying a partnership"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Right - Title and FAQs */}
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-center gap-6">
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main text-center select-none w-full">
                  Our Partnership <span className="text-primary">Details</span>
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

        {/* Application form */}
        <section id="apply" className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main mt-4 select-none">
                  Join Our Curated <span className="text-primary">Global Directory</span>
                </h2>
                <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mt-4 select-none">
                  Tell us about your business. We'll reach out within 48 hours.
                </p>
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
                <MerchantApplicationForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
