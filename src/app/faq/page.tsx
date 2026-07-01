import TopNav from '@/components/layout/TopNav';
import { HelpCircle, ArrowRight, ShieldCheck, Banknote, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'FAQ - DIANA',
  description: 'Frequently Asked Questions about DIANA – the digital infrastructure for animal networks and advocacy.',
};

const faqs = [
  {
    category: "The Core Model",
    icon: Banknote,
    items: [
      {
        q: "Is DIANA a charity or an NGO?",
        a: "No. DIANA is an Australian tech company (DRGM Dev Pty Ltd) providing payment infrastructure. We do not solicit public donations. Instead, we provide the software that allows ethical merchants to seamlessly route a percentage of their commercial revenue to animal sanctuaries. This distinction means we operate under strict financial regulations (via Stripe and Airwallex) rather than traditional charity laws."
      },
      {
        q: "Why wouldn't I just donate directly to a sanctuary I like?",
        a: "In a perfect world, people would manually donate every time they bought a coffee. In reality, the friction of opening a new tab, entering credit card details, and processing a $2 transaction stops 99% of people from doing it. DIANA removes the friction entirely. Your everyday spending quietly funds sanctuaries in the background, without you having to change your behavior or spend extra money."
      },
      {
        q: "Why does the 5% transaction impact go to all sanctuaries instead of just my favorite?",
        a: "The transactional pool is designed to sustain the entire ecosystem, ensuring that even small, hardworking sanctuaries without massive marketing budgets receive funding. The rising tide lifts all boats. However, if you want to heavily favor one specific sanctuary, DIANA has separate 'Direct Gift' and 'Monthly Care' features where 100% of your funds go exactly to them."
      }
    ]
  },
  {
    category: "For Consumers",
    icon: ShieldCheck,
    items: [
      {
        q: "Do merchants mark up their prices on DIANA, making me pay the 10% fee?",
        a: "Unlike food delivery apps that charge 30% commissions and force merchants to inflate prices, DIANA operates on a much tighter 10% margin (5% to impact, 5% to the platform). This is standard Customer Acquisition Cost (CAC) for businesses—equivalent to what they already spend on ads or loyalty discounts. Merchants use DIANA to win your business ethically, not to overcharge you."
      },
      {
        q: "How does DIANA make money if the impact goes to sanctuaries?",
        a: "From every DIANA transaction, a total of 10% is deducted from the merchant's revenue. 5% goes directly to the sanctuary ecosystem, and 5% goes to DIANA to cover our payment processing fees (Stripe/Airwallex), server costs, and platform development."
      }
    ]
  },
  {
    category: "For Sanctuaries & Merchants",
    icon: HeartHandshake,
    items: [
      {
        q: "Are the sanctuaries vetted?",
        a: "Yes. Every sanctuary on the DIANA platform goes through a strict verification process. We ensure they are legitimate, ethical rescues providing lifelong care, not breeders, zoos, or exploitative petting farms. 100% of the funds they receive must be used for animal welfare."
      },
      {
        q: "Do I need a special permit to run a promo with DIANA?",
        a: "DIANA's core impact routing is a permanent feature, not a temporary sales promotion, so it operates as standard commercial revenue routing. However, if a local merchant decides to run their own independent, limited-time marketing promo ('Use DIANA this weekend for 20% off'), the merchant is responsible for securing any necessary local permits (e.g., DTI in the Philippines) for their specific promotion."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 snap-start snap-always flex flex-col">
      <TopNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] bg-gradient-to-b from-primary/10 to-background border-b border-border-main/50 snap-start snap-always">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white shadow-sm mb-6">
            <HelpCircle size={32} className="text-primary" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-headline-lg text-primary tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-secondary font-body-lg leading-relaxed">
            The hard questions, answered directly. Understand exactly how the DIANA ecosystem works, the economics behind it, and why we built it this way.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] snap-start snap-always">
        <div className="max-w-[800px] mx-auto space-y-16">
          {faqs.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={idx} className="space-y-8">
                <div className="flex items-center gap-3 pb-4 border-b border-border-main">
                  <Icon className="text-primary" size={24} />
                  <h2 className="text-2xl font-headline text-secondary tracking-tight">
                    {section.category}
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {section.items.map((faq, fIdx) => (
                    <div key={fIdx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border-main/30 hover:border-primary/20 transition-colors">
                      <h3 className="text-xl font-headline text-secondary mb-4">
                        {faq.q}
                      </h3>
                      <p className="text-text-subtle font-body-sm leading-relaxed whitespace-pre-wrap">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] bg-secondary text-white text-center snap-start snap-always">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline text-white mb-6">
            Didn't find your answer?
          </h2>
          <p className="text-white/70 font-body-lg mb-10">
            We are building this in public and want to hear your hardest questions.
          </p>
          <Link 
            href="/#waitlist"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-body-lg font-medium hover:bg-white hover:text-primary transition-all group"
          >
            Join the Waitlist
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </main>
  );
}
