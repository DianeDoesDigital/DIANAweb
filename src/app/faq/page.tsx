'use client';

import TopNav from '@/components/layout/TopNav';
import { ChevronDown, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { submitFAQQuestion } from '@/app/actions/submitForm';

const faqs = [
  {
    category: "The Core Model",
    items: [
      {
        q: "Is DIANA a charity or an NGO?",
        a: "No. DIANA is an Australian tech company (DRGM Dev Pty Ltd) providing payment infrastructure software. We do not solicit public donations. Instead, we provide the technology that allows ethical merchants to seamlessly route a percentage of their commercial revenue to animal sanctuaries — automatically, every transaction."
      },
      {
        q: "How does DIANA's automatic impact actually work?",
        a: "When a consumer pays at a DIANA partner merchant, the transaction is processed normally through our payment partners (Stripe/Airwallex). From the merchant's portion, 5% is automatically routed to the sanctuary ecosystem and 5% goes to DIANA to cover platform and processing costs. The consumer pays their bill as normal. Nothing extra is charged to them."
      },
      {
        q: "Why wouldn't I just donate directly to a sanctuary I like?",
        a: "In theory, you could. In practice, human behavior shows that people don't consistently open a browser, navigate to a sanctuary's donation page, enter their card details, and manually send a small amount every time they make a purchase. The friction stops 99% of people from doing it consistently. DIANA removes that friction entirely. Your everyday spending quietly funds sanctuaries without you changing your behavior or spending extra money."
      },
      {
        q: "Why does the 5% transaction impact go to all sanctuaries instead of just my favorite?",
        a: "The transactional pool is designed to sustain the entire ecosystem — ensuring that even small, hardworking sanctuaries without large social media followings receive consistent funding. This prevents a popularity-contest model where only well-known sanctuaries benefit. If you want to heavily support one specific sanctuary, DIANA has separate 'One-Time Gift' and 'Monthly Care' features where 100% of your funds go directly to them."
      },
      {
        q: "What is the difference between transactional impact, One-Time Gifts, and Monthly Care?",
        a: "Transactional impact is automatic — it happens every time you pay at a DIANA merchant with no extra action from you. The 5% from that transaction is pooled and distributed across all vetted sanctuaries.\n\nOne-Time Gifts are direct, voluntary contributions you choose to make to a specific sanctuary at any time.\n\nMonthly Care is a recurring subscription you set up to send a fixed amount to a specific sanctuary each month."
      },
      {
        q: "How does DIANA make money?",
        a: "From every DIANA transaction, 10% is deducted from the merchant's revenue — not the consumer's payment. 5% goes directly to the sanctuary ecosystem and 5% goes to DIANA to cover payment processing fees (Stripe/Airwallex), server infrastructure, and platform development. We are a tech company, not a charity, and our sustainability model is built on transaction volume."
      },
    ]
  },
  {
    category: "For Consumers",
    items: [
      {
        q: "Do merchants mark up their prices on DIANA, meaning I'm actually paying the fee?",
        a: "Unlike food delivery platforms that charge merchants 25–30% commission (forcing price inflation to survive), DIANA operates at a 10% total margin — which is standard Customer Acquisition Cost (CAC) for any ethical business, equivalent to what they already spend on Instagram ads, loyalty programs, or credit card processing fees. Merchants join DIANA to win conscious consumers, not to overcharge them. Even in a worst-case scenario where a merchant adds a small markup, the consumer is still passively funding animal sanctuaries with every purchase — which is something that has literally never been possible before."
      },
      {
        q: "Is my payment information safe?",
        a: "Yes. DIANA does not store your card details. All payment processing is handled by Stripe and Airwallex — two of the most heavily regulated and PCI-DSS compliant financial institutions in the world. They hold the EMI (Electronic Money Issuer) licenses, perform KYC (Know Your Customer) verification, and manage all funds in escrow. DIANA is the software layer that tells those institutions where to route the money."
      },
      {
        q: "How do I know my impact is real and not just a number on a screen?",
        a: "Every transaction on DIANA generates a verifiable impact record showing which sanctuaries received funds and when. Sanctuaries on the platform are vetted and must report how DIANA funds are used for animal welfare. We are building towards full public transparency on fund flows — a core pillar of our 100% Integrity Pledge."
      },
      {
        q: "What currencies does DIANA support?",
        a: "DIANA uses a USD-settled system via Stripe/Airwallex to maintain consistency across borders, with in-app currency conversion to display your local currency. At launch, we are focused on AUD, PHP, USD, and SGD markets."
      },
      {
        q: "Is DIANA available in my country?",
        a: "At soft launch, DIANA will be focused on the Philippines and Australia, with rapid expansion to Indonesia (Bali), Thailand (Chiang Mai), and Singapore. The waitlist is open globally, and your location helps us prioritize where to onboard merchants next."
      },
      {
        q: "When does the app launch and will it be on iOS and Android?",
        a: "DIANA is launching very soon. The app will be available on both iOS (App Store) and Android (Google Play). Join the waitlist at dianafortheanimals.org to be notified the moment it goes live."
      },
    ]
  },
  {
    category: "For Merchants",
    items: [
      {
        q: "What types of businesses can join DIANA as merchants?",
        a: "Any ethical, conscious business that aligns with DIANA's values. This includes vegan cafés and restaurants, plant-based food brands, eco-friendly product shops, cruelty-free beauty brands, sustainable fashion labels, ethical wellness studios, and more. We do not onboard businesses that sell animal products, support animal exploitation, or operate in industries that conflict with our mission."
      },
      {
        q: "What are the fees for merchants?",
        a: "Merchants contribute 10% of each DIANA transaction — 5% to the sanctuary ecosystem and 5% to the DIANA platform. There are no upfront sign-up fees, no monthly subscriptions, and no lock-in contracts during the beta period."
      },
      {
        q: "How does onboarding work for merchants?",
        a: "Merchants apply through the DIANA website, go through a brief verification process to confirm they meet our ethical standards, then set up their Stripe/Airwallex payment account through our platform. The whole process is designed to be self-serve and fast — typically completed in under 48 hours."
      },
      {
        q: "Can merchants see the impact they are generating?",
        a: "Yes. The DIANA merchant dashboard shows real-time transaction data, total impact generated, and which sanctuaries their revenue has supported. This data is also shareable with customers, making DIANA a powerful ethical marketing tool — not just a payment system."
      },
      {
        q: "Do merchants need a special permit to run a promotion on DIANA?",
        a: "DIANA's core impact routing is a permanent feature, not a temporary promotional mechanic, so it does not require a DTI promo permit (in the Philippines) or equivalent. However, if a merchant independently runs their own limited-time promotion ('Use DIANA this weekend and get 20% off!'), the responsibility for securing that local promotional permit belongs to the merchant, not to DIANA."
      }
    ]
  },
  {
    category: "For Sanctuaries",
    items: [
      {
        q: "Are the sanctuaries vetted before joining the platform?",
        a: "Yes, strictly. Every sanctuary goes through a verification process to confirm they are a legitimate rescue operation providing lifelong ethical care for animals. We do not onboard zoos, breeders, petting farms, circuses, or any entity that profits from animal exploitation. Approval is not automatic."
      },
      {
        q: "What types of sanctuaries are eligible to join?",
        a: "Any legitimate, registered animal rescue or sanctuary that provides lifelong care — farm animal rescues, dog and cat rescues, wildlife rehabilitation centres, horse sanctuaries, marine rescue operations, and more. Both small grassroots operations and larger registered NGOs are welcome to apply, provided they meet our ethical standards."
      },
      {
        q: "How and how often do sanctuaries receive their funds?",
        a: "Funds are settled and distributed to sanctuaries on a regular cycle (monthly at launch, moving towards weekly as volume scales) directly to their registered bank account or Stripe/Airwallex account. Sanctuaries receive a full breakdown of every transaction that contributed to their payout."
      },
      {
        q: "Can a small grassroots rescue group that is not a registered NGO join?",
        a: "Yes. Formal NGO registration is not a requirement. What matters is that you are a legitimate, transparent operation genuinely dedicated to animal welfare. Smaller rescues are exactly who DIANA was built to support — they are often the ones doing the most critical work with the least funding and the least access to traditional donation channels."
      }
    ]
  },
  {
    category: "Legal & Trust",
    items: [
      {
        q: "Where is DIANA registered?",
        a: "DIANA is a product of DRGM Dev Pty Ltd, an Australian proprietary company. Our financial infrastructure operates under Australian financial regulations and international standards enforced by Stripe and Airwallex."
      },
      {
        q: "Is DIANA a licensed financial service?",
        a: "DIANA is a technology platform, not a licensed bank or financial institution. All regulated financial activities — holding funds, executing transfers, KYC compliance, and anti-money laundering checks — are handled by our licensed payment partners Stripe and Airwallex, who hold the appropriate EMI (Electronic Money Issuer) licenses in their respective jurisdictions."
      },
      {
        q: "Does DIANA need to comply with the Philippines' DSWD or BSP regulations?",
        a: "DIANA is not a domestic Philippine charity soliciting public donations (which would require a DSWD Public Solicitation Permit), nor is it a Philippine e-wallet holding consumer funds (which would require BSP EMI licensing). DIANA is an Australian technology company providing a B2B payment routing software service to merchants. The licensed payment processing is handled by Stripe/Airwallex, who maintain full regulatory compliance."
      },
      {
        q: "What happens to my money if DIANA shuts down?",
        a: "Because DIANA does not hold your funds (Stripe and Airwallex do), your money is protected by the same insolvency protections that apply to those platforms. Any pending sanctuary distributions would be processed through our standard settlement cycle before wind-down. We are committed to full transparency in any such scenario."
      },
      {
        q: "Who built DIANA?",
        a: "DIANA was conceived and built by Diane Rose Mejilla, the founder of DRGM Dev Pty Ltd. Starting on January 16, 2026, she designed the entire user experience and wrote the native mobile codebase herself — demonstrating that the tools for building the ethical economy are available to anyone willing to learn and build."
      }
    ]
  }
];

function AccordionItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border-main/20 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-medium text-secondary group-hover:text-primary transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-text-subtle leading-relaxed whitespace-pre-wrap text-sm md:text-base">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', question: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.question) return;
    setFormStatus('submitting');
    const res = await submitFAQQuestion(formState);
    if (res.success) {
      setFormStatus('success');
      setFormState({ name: '', email: '', question: '' });
    } else {
      setFormStatus('error');
      setErrorMsg(res.error || 'Something went wrong.');
    }
  };

  return (
    <main className="min-h-screen bg-background snap-start snap-always">
      <TopNav />

      {/* Page header */}
      <div className="pt-32 pb-12 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-headline-lg leading-tight tracking-tight mb-4">
            <span className="text-secondary">Frequently Asked </span>
            <span style={{ color: '#ff0099' }}>Questions</span>
          </h1>
          <p className="text-text-subtle text-lg leading-relaxed max-w-[600px]">
            Everything you need to know about how the DIANA ecosystem works, and why.
          </p>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] pb-24">
        <div className="max-w-[800px] mx-auto space-y-14">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-xs font-label-caps font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: '#ff0099' }}>
                {section.category}
              </h2>
              <div>
                {section.items.map((item, idx) => {
                  const key = `${section.category}-${idx}`;
                  return (
                    <AccordionItem
                      key={key}
                      q={item.q}
                      a={item.a}
                      isOpen={openItem === key}
                      onToggle={() => toggle(key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ask a Question form */}
      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] pb-24">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-headline text-secondary mb-2">Didn&apos;t find your answer?</h2>
          <p className="text-text-subtle mb-8 text-sm md:text-base">Ask us directly. We read every question and the best ones get added to this page.</p>

          {formStatus === 'success' ? (
            <div className="glass-surface bg-background rounded-2xl p-10 border border-primary/40 flex flex-col items-center justify-center gap-4 shadow-lg text-center min-h-[280px]">
              <CheckCircle2 className="text-primary animate-bounce" size={48} />
              <h3 className="font-headline-md text-2xl text-secondary">Question received.</h3>
              <p className="font-body-md text-text-muted">We&apos;ll add the answer to this page if it&apos;s something the community should know.</p>
              <button
                onClick={() => setFormStatus('idle')}
                className="mt-2 text-sm text-primary underline underline-offset-4 hover:text-secondary transition-colors"
              >
                Ask another question
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="glass-surface bg-background rounded-2xl p-10 border border-border-main flex flex-col gap-6 shadow-lg">
              <div className="flex flex-col gap-1.5">
                <input
                  type="text"
                  placeholder="Name"
                  value={formState.name}
                  onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                  className="bg-surface border border-border-main rounded-lg px-4 py-3.5 text-secondary font-body-md placeholder:text-text-muted/70 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formState.email}
                  onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                  className="bg-surface border border-border-main rounded-lg px-4 py-3.5 text-secondary font-body-md placeholder:text-text-muted/70 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <textarea
                  placeholder="What would you like to know?"
                  value={formState.question}
                  onChange={e => setFormState(s => ({ ...s, question: e.target.value }))}
                  rows={4}
                  className="bg-surface border border-border-main rounded-lg px-4 py-3.5 text-secondary font-body-md placeholder:text-text-muted/70 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              {formStatus === 'error' && (
                <span className="flex items-center gap-1.5 text-xs text-red-500 font-body-sm pl-1">
                  <AlertCircle size={14} />
                  {errorMsg}
                </span>
              )}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-4 bg-primary text-[#FFDDEE] font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] rounded-full border-2 border-primary hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase mt-1"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Question'}
              </button>
              <p className="font-body-sm text-[var(--text-body-sm)] text-text-subtle text-center select-none">We read every question and the best ones get added to this page.</p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
