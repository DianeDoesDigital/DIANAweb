import type { Metadata } from 'next';
import { Users, Globe, TrendingUp, Handshake, Play } from 'lucide-react';
import TopNav from '@/components/layout/TopNav';
import PageSplash from '@/components/sections/PageSplash';

export const metadata: Metadata = {
  title: 'BUILD WITH US - Get Involved with the DIANA Movement | Digital Infrastructure for Animal Networks and Advocacy',
  description: 'Get Involved with the DIANA movement to help build the Digital Infrastructure for Animal Networks and Advocacy. Join the team, be an ambassador, invest in our mission, list as a partner org, or advertise your plant-based products.',
};

const categories = [
  {
    id: 'team',
    anchor: 'join-the-team',
    icon: Users,
    label: 'Join the Team',
    tagline: 'Build DIANA with us.',
    body: 'DIANA is pre-funding but not pre-momentum. We\'re looking for people who want to be part of something from the ground up.',
    tiers: [
      { name: 'Contributor', desc: 'Flexible, task-based involvement. A few hours a week. You get experience, portfolio credit, a reference, and your name in the contributor list.' },
      { name: 'Core Team', desc: 'A serious, ongoing role. Sweat equity agreement, backpay when funded, and early team credit. This is for people who want to grow with DIANA.' },
    ],
    cta: 'Express Interest',
    fields: [
      { id: 'team-name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
      { id: 'team-email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
      { id: 'team-role', label: 'What can you bring?', type: 'text', placeholder: 'e.g. iOS development, brand design, community management' },
    ],
    selectField: { id: 'team-tier', label: 'Tier', options: ['Contributor', 'Core Team'] },
  },
  {
    id: 'ambassador',
    anchor: 'ambassador',
    icon: Globe,
    label: 'Ambassador',
    tagline: 'Spread the word in your world.',
    body: 'DIANA works because advocates like you carry it into spaces we can\'t reach alone: vegan festivals, community events, social platforms, and local networks.',
    tiers: null,
    cta: 'Become an Ambassador',
    fields: [
      { id: 'amb-name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
      { id: 'amb-email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
      { id: 'amb-location', label: 'City / Region', type: 'text', placeholder: 'e.g. Melbourne, Australia' },
      { id: 'amb-reach', label: 'Where do you have reach?', type: 'text', placeholder: 'e.g. Instagram 10k, vegan festival organiser, local meetup host' },
    ],
    selectField: null,
  },
  {
    id: 'invest',
    anchor: 'invest',
    icon: TrendingUp,
    label: 'Invest / Advise',
    tagline: 'Fund the infrastructure. Guide the mission.',
    body: 'DIANA is building the financial layer beneath the ethical economy. We\'re open to both financial investment and strategic advisory. The conversations are the same.',
    tiers: [
      { name: 'Financial Investment', desc: 'Angel, pre-seed, or strategic investment. Full platform overview, market innovation analysis, and competitive moat documentation available on request.' },
      { name: 'Advisory / Mentorship', desc: 'Industry expertise in exchange for advisory equity. Strategy, connections, and experience. It\'s the kind you only get from having been there before.' },
    ],
    cta: 'Start the Conversation',
    fields: [
      { id: 'invest-name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
      { id: 'invest-email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
      { id: 'invest-org', label: 'Organisation (optional)', type: 'text', placeholder: 'Your firm or company' },
    ],
    selectField: { id: 'invest-type', label: 'Interest Type', options: ['Financial Investment', 'Advisory / Mentorship', 'Both'] },
  },
  {
    id: 'partner',
    anchor: 'partner',
    icon: Handshake,
    label: 'Partner',
    tagline: 'Align your organisation.',
    body: 'Not every ally is a merchant or a sanctuary. If your organisation (vegan media, advocacy group, event company, aligned nonprofit) wants to formally align with DIANA, this is for you.',
    tiers: null,
    cta: 'Explore Partnership',
    fields: [
      { id: 'partner-org', label: 'Organisation Name', type: 'text', placeholder: 'Your organisation' },
      { id: 'partner-contact', label: 'Contact Name', type: 'text', placeholder: 'Your full name' },
      { id: 'partner-email', label: 'Email', type: 'email', placeholder: 'hello@yourorg.com' },
      { id: 'partner-desc', label: 'What does your organisation do?', type: 'text', placeholder: 'Brief description' },
    ],
    selectField: null,
  },
  {
    id: 'sponsor',
    anchor: 'sponsor',
    icon: Play,
    label: 'Sponsor / Advertise',
    tagline: 'Reach a values-driven audience while funding sanctuaries.',
    body: 'The DIANA Double Impact ad system lets non-vegan companies with fully plant-based product lines advertise within the app. When users watch your ad, the sanctuary contribution doubles at no extra cost to them.',
    tiers: [
      { name: 'You qualify if:', desc: 'Your company has one or more fully plant-based product lines. You don\'t need to be a fully vegan brand. Just the products you advertise through DIANA must be 100% plant-based.' },
      { name: 'You don\'t qualify as a merchant:', desc: 'Sponsor/Advertise is separate from merchant listing. Your brand reaches DIANA\'s audience through the ad ecosystem, not the Explore directory.' },
    ],
    cta: 'Enquire About Advertising',
    fields: [
      { id: 'sponsor-brand', label: 'Brand / Company Name', type: 'text', placeholder: 'Your brand name' },
      { id: 'sponsor-contact', label: 'Contact Name', type: 'text', placeholder: 'Your full name' },
      { id: 'sponsor-email', label: 'Email', type: 'email', placeholder: 'hello@yourbrand.com' },
      { id: 'sponsor-product', label: 'Plant-based product / product line', type: 'text', placeholder: 'What are you looking to advertise?' },
    ],
    selectField: null,
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageSplash 
        title={<>Build with <span className="text-primary">Us.</span></>}
        subtitle="Help build the infrastructure of care. We're looking for people who want to be part of a movement."
        images={[
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80'
        ]}
        enterText="GET INVOLVED"
      />
      <TopNav />

      <main className="bg-background text-secondary">
        {/* Hero */}
        <section className="relative py-32 md:py-48 border-b border-border-main overflow-hidden">
          <div className="relative z-10 max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] text-center">
            <h1 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[48px] md:text-[72px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-text-main mb-6 select-none">
              Help build the<br />
              infrastructure of <span className="text-primary">care.</span>
            </h1>
            <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-xl mx-auto mb-12 select-none">
              DIANA is more than an app. It's a movement. There are five ways to be part of it.
            </p>

            {/* Category quick-jump */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.anchor}`}
                  id={`gi-jump-${cat.id}`}
                  className="glass-surface border border-border-main hover:border-primary/40 px-5 py-2 rounded-full font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs uppercase text-text-muted hover:text-primary transition-all flex items-center gap-2"
                >
                  {(() => {
                    const CatIcon = cat.icon;
                    return <CatIcon size={14} />;
                  })()}
                  {cat.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-24 md:py-32 border-b border-border-main bg-surface">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[36px] md:text-[48px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-text-main mt-4 mb-8 select-none">
                A $500B economy with a broken <span className="text-primary">heart.</span>
              </h2>
              <div className="space-y-6 font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted">
                <p>
                  The global vegan economy is valued at over <strong className="text-secondary">$500 billion</strong>. Yet the animal sanctuaries that form its ethical heart are surviving on goodwill and GoFundMe.
                </p>
                <p>
                  Consumers want to support animal welfare. Businesses want to give back meaningfully. Sanctuaries need consistent, reliable funding to survive. But there has never been transparent financial plumbing connecting all three.
                </p>
                <p>
                  The desire exists. The infrastructure did not. Until DIANA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category sections */}
        {categories.map((cat, i) => (
          <section
            key={cat.id}
            id={cat.anchor}
            className={`py-24 md:py-32 border-b border-border-main ${i % 2 === 1 ? 'bg-surface' : 'bg-background'}`}
          >
            <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <cat.icon className="text-primary" size={24} />
                    </div>
                    <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary uppercase select-none">0{i + 1}</span>
                  </div>
                  <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-text-main mb-3 select-none">
                    {cat.label}<span className="text-primary">.</span>
                  </h2>
                  <p className="font-body-md text-[var(--text-body-md)] text-primary italic mb-6 select-none">{cat.tagline}</p>
                  <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mb-8 select-none">{cat.body}</p>

                  {cat.tiers && (
                    <div className="flex flex-col gap-4">
                      {cat.tiers.map((tier) => (
                        <div key={tier.name} className="glass-surface rounded-xl p-6 border border-border-main">
                          <div className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary uppercase mb-2 select-none">{tier.name}</div>
                          <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{tier.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Form */}
                <div>
                  <form className="glass-surface rounded-2xl p-10 border border-border-main flex flex-col gap-6">
                    <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] text-secondary select-none">{cat.cta}</h3>
                    {cat.fields.map((field) => (
                      <div key={field.id} className="flex flex-col gap-2">
                        <label htmlFor={field.id} className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-subtle uppercase">{field.label}</label>
                        <input id={field.id} type={field.type} placeholder={field.placeholder} className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] placeholder:text-text-subtle focus:outline-none focus:border-primary/50 transition-colors" />
                      </div>
                    ))}
                    {cat.selectField && (
                      <div className="flex flex-col gap-2">
                        <label htmlFor={cat.selectField.id} className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-subtle uppercase">{cat.selectField.label}</label>
                        <select id={cat.selectField.id} className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] focus:outline-none focus:border-primary/50 transition-colors">
                          {cat.selectField.options.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    )}
                    <button id={`gi-${cat.id}-submit`} type="submit" className="w-full py-4 bg-primary text-[#FFDDEE] font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] rounded-full border-2 border-primary hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] transition-all active:scale-95 uppercase mt-2">
                      {cat.cta}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
