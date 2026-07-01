'use client';

import TopNav from '@/components/layout/TopNav';
import { ChevronDown, AlertCircle, CheckCircle2, Network, User, Store, PawPrint, Shield, Blocks } from 'lucide-react';
import { useState } from 'react';
import { submitFAQQuestion } from '@/app/actions/submitForm';

const faqs = [
  {
    category: "The Core Model",
    icon: Network,
    items: [
      {
        q: "Is DIANA a charity or an NGO?",
        a: "DIANA is a product of DRGM Dev Pty Ltd (ACN 699 347 861), an Australian technology company. It provides payment infrastructure software that allows ethical merchants to route a percentage of their commercial revenue to animal sanctuaries automatically with every transaction. We do not solicit public donations."
      },
      {
        q: "How does DIANA's automatic impact actually work?",
        a: "When a consumer pays at a DIANA partner merchant, the transaction is processed through our licensed payment partners. From the merchant's portion, a minimum of 5% is automatically routed to the sanctuary ecosystem and a flat 5% covers platform operating costs. The consumer pays their bill as normal. Nothing extra is charged to them."
      },
      {
        q: "Why wouldn't I just donate directly to a sanctuary I like?",
        a: "In theory, you could. In practice, human behavior shows that people don't consistently open a browser, navigate to a sanctuary's donation page, enter their card details, and manually send a small amount every time they make a purchase. The friction stops most people from doing it consistently. DIANA removes that friction entirely. Your everyday spending quietly funds sanctuaries without you changing your behavior or spending a single cent extra."
      },
      {
        q: "Why does the transaction impact go to all sanctuaries instead of just my favorite?",
        a: "The transactional pool is designed to sustain the entire ecosystem, ensuring that even small, hardworking sanctuaries without large social media followings receive consistent funding. This prevents a popularity-contest model where only well-known sanctuaries benefit. If you want to heavily support one specific sanctuary, DIANA has separate One-Time Gift and Monthly Care features where 100% of your funds go directly to them."
      },
      {
        q: "What is the difference between transactional impact, One-Time Gifts, and Monthly Care?",
        a: "Transactional impact is automatic. It happens every time you pay at a DIANA merchant with no extra action from you. The merchant's pledge (minimum 5%) from that transaction is pooled and distributed across all verified sanctuaries.\n\nOne-Time Gifts are direct, voluntary contributions you choose to make to a specific sanctuary at any time.\n\nMonthly Care is a recurring subscription you set up to send a fixed amount to a specific sanctuary each month."
      },
      {
        q: "How does DIANA make money?",
        a: "From every DIANA transaction, a minimum of 10% is deducted from the merchant's revenue, not the consumer's payment. A minimum of 5% goes directly to the sanctuary ecosystem and a flat 5% goes to the DIANA platform to cover payment processing, server infrastructure, and platform development. DIANA then contributes 5% of its own platform fee back into the sanctuary ecosystem. We are a technology company and our sustainability model is built on transaction volume."
      },
    ]
  },
  {
    category: "For Advocates",
    icon: User,
    items: [
      {
        q: "Is the app free to use?",
        a: "Yes. The DIANA app is completely free for individual advocates. There are no monthly fees to maintain a basic account or access the global directory."
      },
      {
        q: "Do merchants mark up their prices on DIANA, meaning I pay the fee?",
        a: "Unlike food delivery platforms that charge merchants 25 to 30% commission and force price inflation, DIANA operates at a minimum 10% total margin, which is standard Customer Acquisition Cost for any ethical business. It is equivalent to what businesses already spend on ads, loyalty programs, or card processing fees. Merchants join DIANA to win conscious consumers, not to overcharge them. Even if a merchant adds a small markup, the consumer is still passively funding animal justice with every purchase. That has never been possible before."
      },
      {
        q: "How do I track my impact?",
        a: "Your dashboard updates in real-time. You can see exact amounts, as well as tangible metrics translated into meals provided or treatments funded."
      },
      {
        q: "Can I choose which sanctuary receives the funds from my purchases?",
        a: "The merchant pledges from your transactions go to a shared pool distributed equitably across all verified sanctuaries in your region. You can also send One-Time Gifts or set up Monthly Care subscriptions to specific sanctuaries of your choice."
      },
      {
        q: "Is my payment information safe?",
        a: "Yes. DIANA does not store your card details. All payment processing is handled by licensed, PCI-DSS compliant financial institutions. They perform identity verification, manage all compliance, and hold funds in escrow. DIANA is the software layer that instructs those institutions where to route the money."
      },
      {
        q: "How do I know my impact is real and not just a number on a screen?",
        a: "Every transaction generates a verifiable impact record showing which sanctuaries received funds and when. Sanctuaries on the platform are vetted and must report how DIANA funds are used to directly support their animal justice mission. Full public transparency on fund flows is a core pillar of our 100% Integrity Pledge."
      },
      {
        q: "What currencies does DIANA support?",
        a: "DIANA is currency agnostic. The platform is designed to work across borders and currencies without requiring users to think about conversion. We want DIANA to feel native wherever you are."
      },
      {
        q: "Is DIANA available in my country?",
        a: "Our goal is to make DIANA available globally in as many countries as possible, as quickly as possible. The more people who join the community now, the faster we can expand. Your participation in the waitlist directly helps us get there sooner."
      },
      {
        q: "When does the app launch and will it be on iOS and Android?",
        a: "DIANA is launching very soon. The app will be available on both iOS and Android. Join the waitlist to be notified the moment it goes live."
      },
    ]
  },
  {
    category: "For Merchants",
    icon: Store,
    items: [
      {
        q: "What types of businesses can join DIANA as merchants?",
        a: "We welcome businesses across 8 categories: Food & Drink, Retail, Wellness, Experiences, Travel, Professionals, Resources, and Entertainment. All must meet our ethical and cruelty-free standards. We do not onboard businesses that sell animal products, support animal exploitation, or operate in industries that conflict with our mission."
      },
      {
        q: "What are the fees for merchants?",
        a: "Listing your business is completely free with no monthly subscriptions. DIANA charges a flat 5% platform fee on successful transactions, which covers payment processing, operational costs, and global scaling. This is separate from your minimum 5% sanctuary pledge, which goes directly to the sanctuary ecosystem."
      },
      {
        q: "How is the 5% pledge tracked?",
        a: "DIANA seamlessly tracks sales and calculates your pledge automatically at the end of each cycle. You will receive a transparent breakdown before any funds are moved."
      },
      {
        q: "Can I change my pledge amount?",
        a: "Yes. While the minimum is 5%, you can adjust your pledge higher at any time through your merchant dashboard."
      },
      {
        q: "How does merchant onboarding work?",
        a: "Merchants apply through the DIANA website, go through a brief verification process to confirm they meet our ethical standards, then set up their payment account through our platform. The whole process is designed to be self-serve and fast, typically completed in under 48 hours."
      },
      {
        q: "Can merchants see the impact they are generating?",
        a: "Yes. The DIANA merchant dashboard shows real-time transaction data, total impact generated, and which sanctuaries their revenue has supported. This data is also shareable with customers, making DIANA a powerful ethical marketing tool, not just a payment system."
      },
      {
        q: "Do merchants need a special permit to run a promotion on DIANA?",
        a: "DIANA's core impact routing is a permanent feature, not a temporary promotional mechanic, so it does not require a DTI promo permit in the Philippines or an equivalent elsewhere. However, if a merchant independently runs their own limited-time promotion, the responsibility for securing that local permit belongs to the merchant, not to DIANA."
      }
    ]
  },
  {
    category: "For Sanctuaries",
    icon: PawPrint,
    items: [
      {
        q: "Is there a cost to join?",
        a: "No. DIANA is completely free for sanctuaries. The platform is funded through a separate allocation from merchant pledges, ensuring your distributions remain entirely yours."
      },
      {
        q: "Are the sanctuaries vetted before joining?",
        a: "Yes, strictly. Every sanctuary goes through a verification process to confirm they are a legitimate rescue operation providing lifelong care. We do not onboard zoos, breeders, petting farms, circuses, or any entity that profits from animal exploitation. Approval is not automatic."
      },
      {
        q: "Do we need to be a registered charity?",
        a: "Yes. To maintain the integrity of the network and comply with financial regulations, we require proof of registered non-profit or charitable status in your jurisdiction."
      },
      {
        q: "What types of sanctuaries are eligible to join?",
        a: "Any legitimate, registered animal rescue or sanctuary that provides lifelong care. This includes farm animal rescues, dog and cat rescues, wildlife rehabilitation centres, horse sanctuaries, marine rescue operations, and more."
      },
      {
        q: "How much time does it take to manage?",
        a: "Very little. Once your profile is set up and verified, funds flow automatically. We encourage occasional updates to your gallery and resident stories, but no ongoing fundraising campaigns are required."
      },
      {
        q: "When and how are funds distributed?",
        a: "Funds are aggregated in real-time as purchases are made across the network and distributed via direct bank transfer at the end of each funding cycle."
      },
    ]
  },
  {
    category: "Build With Us",
    icon: Blocks,
    items: [
      {
        q: "Do I need to be a developer to join the core team?",
        a: "Not at all. Building DIANA requires marketing, design, community management, legal, and operational expertise just as much as engineering."
      },
      {
        q: "Are these paid roles?",
        a: "Currently, DIANA is pre-funding. Core team roles are compensated via sweat equity and deferred backpay upon raising capital. Contributors are volunteer-based."
      },
      {
        q: "What is the time commitment?",
        a: "It varies entirely by role. Core team members treat this as a serious part-time or full-time endeavor. Contributors can spend as little as a few hours a month."
      },
      {
        q: "Can I invest if I am not an accredited investor?",
        a: "We are currently exploring community-led funding rounds like equity crowdfunding that would allow anyone to invest. Reach out and we will keep you updated."
      }
    ]
  },
  {
    category: "Legal & Trust",
    icon: Shield,
    items: [
      {
        q: "Why is DIANA incorporated in Australia (DRGM Dev Pty Ltd) if the founder is Filipina?",
        a: "To build a global ethical economy on world-class financial infrastructure.\n\nDIANA is designed from day one to operate globally, routing transaction percentages across borders to sanctuaries all over the world. To do this securely at scale, the platform requires deep integration with international, tier-one payment rails and cross-border settlement infrastructure.\n\nAustralia offers one of the most robust, highly regulated, and globally trusted financial technology frameworks in the world. By incorporating as an Australian Pty Ltd, DIANA can leverage licensed international payment partners to guarantee institutional-grade compliance, escrow protection, and secure cross-border routing.\n\nThis setup ensures total financial integrity for our users everywhere, while allowing our founder to build the core technology with global reach right from her laptop."
      },
      {
        q: "Where is DIANA registered?",
        a: "DIANA is a product of DRGM Dev Pty Ltd (ACN 699 347 861), an Australian proprietary company. Our financial infrastructure operates under Australian financial regulations and international standards enforced by our licensed payment partners."
      },
      {
        q: "Is DIANA a licensed financial service?",
        a: "DIANA is a technology platform, not a licensed bank or financial institution. All regulated financial activities including holding funds, executing transfers, identity verification, and anti-money laundering checks are handled by our licensed payment partners who hold the appropriate Electronic Money Issuer licenses in their respective jurisdictions."
      },
      {
        q: "Does DIANA need to comply with the Philippines' DSWD or BSP regulations?",
        a: "DIANA is not a domestic Philippine charity soliciting public donations, which would require a DSWD Public Solicitation Permit, nor is it a Philippine e-wallet holding consumer funds, which would require BSP EMI licensing. DIANA is an Australian technology company providing B2B payment routing software to merchants. Licensed payment processing is handled by globally regulated financial partners who maintain full compliance."
      },
      {
        q: "What happens to my money if DIANA shuts down?",
        a: "Because DIANA does not hold your funds directly, your money is protected by the same insolvency protections that apply to our licensed payment partners. Any pending sanctuary distributions would be processed through our standard settlement cycle before wind-down. We are committed to full transparency in any such scenario."
      },
      {
        q: "Who built DIANA?",
        a: "DIANA was conceived and built by Diane G. Mejilla, the founder of DRGM Dev Pty Ltd. Starting January 16, 2026, she designed the entire user experience and wrote the native mobile codebase herself, demonstrating that the tools for building the ethical economy are available to anyone willing to learn and build."
      }
    ]
  }
];

function AccordionItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`glass-surface rounded-2xl border transition-all duration-200 cursor-pointer ${
        isOpen ? 'border-primary/40 shadow-md' : 'border-border-main hover:border-primary/20'
      }`}
      onClick={onToggle}
    >
      <div className="flex items-start justify-between gap-4 p-6">
        <span className={`font-headline-md text-base md:text-lg leading-snug transition-colors ${isOpen ? 'text-primary' : 'text-secondary'}`}>
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 mt-0.5 transition-all duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-text-muted'}`}
        />
      </div>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-6 pb-6 text-text-muted leading-relaxed whitespace-pre-wrap text-sm md:text-base font-body-md">
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
      <div className="pt-32 pb-16 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] bg-gradient-to-b from-[#FFDDEE]/60 to-background">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-headline-lg leading-tight tracking-tight mb-6">
            <span className="text-secondary">Frequently Asked </span>
            <span style={{ color: '#ff0099' }}>Questions</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-[560px] font-body-lg">
            Answers about how the DIANA ecosystem works, and why it was built this way.
          </p>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-16">
            {faqs.map((section) => (
              <div key={section.category} className="flex flex-col gap-6">
                {/* Category label */}
                <div className="flex items-center gap-2 mb-2">
                  {section.icon && <section.icon size={16} style={{ color: '#ff0099' }} />}
                  <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[0.2em] text-xs uppercase" style={{ color: '#ff0099' }}>
                    {section.category}
                  </span>
                </div>

                {/* Items */}
                <div className="flex flex-col gap-3">
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
      </div>

      {/* Ask a Question form */}
      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] pb-32 pt-16 bg-gradient-to-t from-[#FFDDEE]/40 to-background">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-headline-lg leading-tight tracking-tight mb-3">
              <span className="text-secondary">Didn&apos;t Find </span>
              <span style={{ color: '#ff0099' }}>Your Answer?</span>
            </h2>
            <p className="text-text-muted font-body-lg max-w-2xl mx-auto">We read every question and the best ones get added to this page.</p>
          </div>

          {formStatus === 'success' ? (
            <div className="glass-surface bg-background rounded-2xl p-10 border border-primary/40 flex flex-col items-center justify-center gap-4 shadow-lg text-center min-h-[320px]">
              <CheckCircle2 className="text-primary animate-bounce" size={56} />
              <h3 className="font-headline-md text-3xl text-secondary">Question received.</h3>
              <p className="font-body-lg text-text-muted">We&apos;ll add the answer to this page if it&apos;s something the community should know.</p>
              <button
                onClick={() => setFormStatus('idle')}
                className="mt-4 text-sm font-label-caps tracking-widest text-primary hover:text-secondary transition-colors uppercase"
              >
                Ask another question
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="glass-surface bg-background rounded-2xl p-8 md:p-12 border border-border-main flex flex-col gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="flex flex-col gap-1.5">
                <input
                  type="text"
                  placeholder="Name"
                  value={formState.name}
                  onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                  className="bg-surface border border-border-main rounded-xl px-5 py-4 text-secondary font-body-lg placeholder:text-text-muted/70 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formState.email}
                  onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                  className="bg-surface border border-border-main rounded-xl px-5 py-4 text-secondary font-body-lg placeholder:text-text-muted/70 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <textarea
                  placeholder="What would you like to know?"
                  value={formState.question}
                  onChange={e => setFormState(s => ({ ...s, question: e.target.value }))}
                  rows={5}
                  className="bg-surface border border-border-main rounded-xl px-5 py-4 text-secondary font-body-lg placeholder:text-text-muted/70 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              {formStatus === 'error' && (
                <span className="flex items-center gap-1.5 text-sm text-red-500 font-body-md pl-1">
                  <AlertCircle size={16} />
                  {errorMsg}
                </span>
              )}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-5 bg-primary text-[#FFDDEE] font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] rounded-full border-2 border-primary hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase mt-4 text-sm"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Question'}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
