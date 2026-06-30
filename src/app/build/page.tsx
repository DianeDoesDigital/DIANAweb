import type { Metadata } from 'next';
import { 
  Users, Briefcase, TrendingUp, Compass, Globe, Handshake,
  CheckCircle2, HelpCircle, Shield, Target, Zap, Sprout
} from 'lucide-react';
import TopNav from '@/components/layout/TopNav';
import PageSplash from '@/components/sections/PageSplash';
import BuildJoinForm from '@/components/forms/BuildJoinForm';
import { Suspense } from 'react';
import CoCreationAnimation from '@/components/sections/CoCreationAnimation';

export const metadata: Metadata = {
  title: 'BUILD WITH US - Get Involved with the DIANA Movement | Digital Infrastructure for Animal Networks and Advocacy',
  description: 'Get Involved with the DIANA movement to help build the Digital Infrastructure for Animal Networks and Advocacy. Join the team, be an ambassador, invest in our mission, list as a partner org, or advertise your plant-based products.',
};

const roles = [
  { icon: Users, title: 'Core Team', body: 'A serious, ongoing role. Sweat equity agreements, backpay upon funding, and early team credit. For those who want to build the foundations and grow with DIANA.' },
  { icon: Briefcase, title: 'Community Contributor', body: 'Flexible involvement. Contribute hours in design, code, writing, or strategic advisory. Get portfolio credit, references, and your name in the contributor list.' },
  { icon: Globe, title: 'Global Ambassador', body: 'Spread the word in your world. DIANA works because advocates carry it into spaces we can\'t reach alone: festivals, community events, and your local networks.' },
  { icon: TrendingUp, title: 'Financial Investor', body: 'Angel, pre-seed, or strategic funding to build the runway for an infrastructure tapping into the $500B global ethical economy. Full investment brief available.' },
  { icon: Sprout, title: 'Aligned Sponsor', body: 'For brands with plant-based products or vegan-friendly services looking to advertise directly to high-intent conscious consumers around the world.' },
  { icon: Handshake, title: 'Ecosystem Partner', body: 'Not every ally is a merchant or a sanctuary. If your organisation (vegan media, advocacy group, aligned nonprofit) wants to formally align with DIANA, this is for you.' },
];

const collaborationSteps = [
  { label: 'Express Interest', body: 'Fill out the form below and tell us exactly how you envision yourself contributing to the movement.' },
  { label: 'Alignment Call', body: 'A quick sync with our founder to discuss your background, our roadmap, and ensure perfect mission alignment.' },
  { label: 'Find Your Fit', body: 'Whether it\'s an advisory agreement, an onboarding into our dev environment, or setting up a sponsor package, we lock in the details.' },
  { label: 'Build the Future', body: 'You are officially part of the ecosystem. Start building, contributing, or advising as we scale the infrastructure of care.' },
];

const builderValues = [
  { icon: Target, title: 'Mission-Obsessed', body: 'The animals come first. Every line of code, every design decision, and every partnership is evaluated by how it serves the sanctuaries.' },
  { icon: Shield, title: 'Radical Transparency', body: 'We build in the open. Our financials, our impact metrics, and our codebase are designed to be entirely transparent to our community.' },
  { icon: Zap, title: 'Relentless Excellence', body: 'We don\'t do "good enough." The ethical economy deserves infrastructure that rivals the biggest tech companies in the world.' },
];

const faqs = [
  { q: 'Do I need to be a developer to join the core team?', a: 'Not at all! Building DIANA requires marketing, design, community management, legal, and operational expertise just as much as engineering.' },
  { q: 'Are these paid roles?', a: 'Currently, DIANA is pre-funding. Core team roles are compensated via sweat equity and deferred backpay upon raising capital. Contributors are volunteer-based.' },
  { q: 'What is the time commitment?', a: 'It varies entirely by role. Core team members treat this as a serious part-time or full-time endeavor. Contributors can spend as little as a few hours a month.' },
  { q: 'Can I invest if I am not an accredited investor?', a: 'We are currently exploring community-led funding rounds (like equity crowdfunding) that would allow anyone to invest. Reach out, and we will keep you updated.' },
];

export default function BuildPage() {
  return (
    <>
      <PageSplash 
        title={<><span className="block text-secondary md:whitespace-nowrap">Help Us Build the</span><span className="block text-primary md:whitespace-nowrap">Infrastructure of Care</span></>}
        subtitle="DIANA is a global movement redefining the ethical economy, building the critical financial layer that connects conscious consumers, ethical merchants, and animal sanctuaries. Join us from the ground up."
        images={['/hero-bg.jpg']}
        align="left"
        actionButtons={[
          { label: 'BUILD WITH US', targetId: 'join', primary: true },
          { label: 'HOW CAN I HELP?', targetId: 'roles', primary: false }
        ]}
      />

      <TopNav />
      <main className="snap-start snap-always bg-[#FFDDEE] text-secondary pt-24 md:pt-32">

        {/* Roles grid */}
        <section id="roles" className="pb-24 md:pb-32 pt-8 md:pt-12 scroll-mt-28 md:scroll-mt-36">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main mt-4 select-none">
                Ways to <span className="text-primary">Build</span>
              </h2>
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-3xl mx-auto mt-4 select-none">
                The global vegan economy is valued at $500 billion, yet the animal sanctuaries on the frontlines are surviving on goodwill. Here are 6 ways you can help us build the infrastructure to fix it.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((r) => {
                const RoleIcon = r.icon;
                return (
                  <div key={r.title} className="glass-surface p-8 rounded-2xl border border-border-main hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300">
                    <div className="w-12 h-12 flex items-center justify-center mb-6">
                      <RoleIcon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] leading-[var(--text-headline-md--line-height)] text-secondary mb-3 select-none">{r.title}</h3>
                    <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{r.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How We Collaborate */}
        <section className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left - Title and Vertical Stack of Steps */}
              <div className="lg:col-span-7 flex flex-col items-center gap-8">
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main text-center select-none w-full">
                  The Co-Creation <span className="text-primary">Process</span>
                </h2>
                <div className="flex flex-col gap-4 w-full">
                  {collaborationSteps.map((step, i) => (
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

              {/* Right - Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-border-main glass-surface aspect-[3/4] shadow-md group">
                  <img 
                    src="/grassroots-activism.png" 
                    alt="Grassroots activism and co-builders"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Builder Standards */}
        <section className="py-24 md:py-32">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main mt-4 select-none">
                Builder Core <span className="text-primary">Values</span>
              </h2>
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-3xl mx-auto mt-4 select-none">
                Consumers want to support animal welfare. Businesses want to give back meaningfully. Sanctuaries need consistent funding. We adhere to these principles while building the transparent financial plumbing to connect all three.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {builderValues.map((val) => {
                const IconComponent = val.icon;
                return (
                  <div key={val.title} className="glass-surface bg-background p-8 rounded-2xl border border-border-main hover:border-primary/30 hover:translate-y-[-4px] transition-all duration-300 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center mb-4">
                      <IconComponent className="text-primary" size={28} />
                    </div>
                    <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] text-secondary mb-3 select-none">{val.title}</h3>
                    <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">{val.body}</p>
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
              {/* Left - Animation */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <CoCreationAnimation />
              </div>

              {/* Right - Title and FAQs */}
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-center gap-6">
                <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight text-text-main text-center select-none w-full">
                  Collaboration <span className="text-primary">Questions</span>
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
        <section id="join" className="py-24 md:py-32 scroll-mt-28 md:scroll-mt-36">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="w-full text-center mb-12">
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight mt-4 select-none">
                <span className="block text-secondary">The Desire Was Always There</span>
                <span className="block text-primary">Now We Have the Infrastructure</span>
              </h2>
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mt-4 select-none max-w-2xl mx-auto">
                Join us in building the financial layer of the ethical economy. Let us know how you want to contribute.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Suspense fallback={<div className="h-64 glass-surface rounded-2xl flex items-center justify-center"><div className="animate-pulse w-8 h-8 rounded-full border-2 border-primary border-t-transparent" /></div>}>
                <BuildJoinForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
