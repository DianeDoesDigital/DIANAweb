import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Cookie } from 'lucide-react';
import TopNav from '@/components/layout/TopNav';

export const metadata: Metadata = {
  title: 'Cookie Policy | DIANA: Digital Infrastructure for Animal Networks and Advocacy',
  description: 'How DIANA uses cookies on its website and application. We keep cookie use to the absolute minimum necessary.',
};

const cookieTypes = [
  {
    id: 'essential',
    name: 'Strictly Necessary Cookies',
    status: 'Always active',
    statusColor: 'text-primary',
    description:
      'These cookies are required for the website to function. Without them, core features like navigation, session management, and form submissions would not work. You cannot opt out of these cookies.',
    examples: [
      { name: 'Session cookie', purpose: 'Keeps you logged in while you use the platform.', duration: 'Session (deleted when you close your browser)' },
      { name: 'CSRF token', purpose: 'Protects your account from cross-site request forgery attacks.', duration: 'Session' },
    ],
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    status: 'Optional',
    statusColor: 'text-text-muted',
    description:
      'These cookies help us understand how visitors use the site so we can improve it. We use Vercel Analytics, a privacy-first tool built into our hosting infrastructure. Vercel Analytics does not collect personal data, does not build user profiles, and does not share data with third-party advertising networks. Where it uses a cookie, it is used solely for anonymous session counting.',
    examples: [
      { name: 'Vercel Analytics session', purpose: 'Counts unique visits to each page anonymously. No personal data is stored or shared.', duration: 'Up to 24 hours' },
    ],
  },
];

const sections = [
  {
    id: 'what-are-cookies',
    heading: 'What Are Cookies?',
    body: [
      'Cookies are small text files that a website stores on your device when you visit. They serve different purposes: some are essential for the site to work, others remember your preferences, and some help the site owner understand how the site is being used.',
      'DIANA keeps cookie use to the absolute minimum. We do not use advertising cookies, retargeting pixels, or any third-party tracking scripts that share your data with external advertising networks.',
    ],
  },
  {
    id: 'how-we-use-cookies',
    heading: 'How We Use Cookies',
    body: [
      'The table below describes the categories of cookies we use, their purpose, and how long they last.',
    ],
  },
  {
    id: 'third-party-cookies',
    heading: 'Third-Party Cookies',
    body: [
      'We use Vercel Analytics to understand site traffic. Vercel Analytics is built into our hosting infrastructure and is designed with privacy in mind. It does not track individuals, does not sell data, and does not share data with advertisers. Where it stores a cookie, it is anonymous and short-lived.',
      'Beyond Vercel Analytics, we do not load any third-party scripts, pixels, or tracking tools on the DIANA website. This means no Google Analytics, no Facebook Pixel, no advertising network scripts of any kind.',
    ],
  },
  {
    id: 'managing-cookies',
    heading: 'Managing Your Cookies',
    body: [
      'You can manage or delete cookies at any time through your browser settings. Most browsers allow you to block all cookies, accept only certain cookies, or delete existing cookies. Note that blocking strictly necessary cookies will affect the functionality of the site.',
      'Vercel Analytics does not rely on persistent personal cookies for its core function, so opting out of all cookies will not meaningfully affect your experience on the DIANA website.',
    ],
  },
  {
    id: 'no-advertising',
    heading: 'No Advertising or Retargeting',
    body: [
      'DIANA does not use advertising cookies or retargeting pixels on the website. We will not track your visit to DIANA in order to show you ads elsewhere on the internet.',
      'If we ever introduce advertising or retargeting in the future, this policy will be updated with clear notice before any such cookies are set, and we will seek your consent where required by law.',
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to This Policy',
    body: [
      'We may update this Cookie Policy when we change the tools or scripts we use on the site. When we do, we will update the date below and notify you of any material changes through the site or by email.',
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <TopNav />

      <main className="bg-background text-secondary">
        {/* Hero */}
        <section className="relative py-24 md:py-36 border-b border-border-main overflow-hidden">
          <div className="relative z-10 max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-subtle hover:text-primary uppercase transition-colors mb-8 select-none"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 mt-1">
                <Cookie className="text-primary" size={26} />
              </div>
              <div>
                <h1 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[56px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-text-main mt-3 select-none">
                  Cookie <span className="text-primary">Policy.</span>
                </h1>
                <p className="font-body-md text-[var(--text-body-md)] leading-[var(--text-body-md--line-height)] text-text-muted mt-3 select-none">
                  Last updated: June 2026
                </p>
              </div>
            </div>

            <div className="mt-10 glass-surface rounded-2xl p-6 border border-border-main max-w-2xl">
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-secondary select-none">
                DIANA uses cookies only where necessary. We do not track you for advertising, we do not sell your data, and we do not load third-party scripts from advertising networks.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-16">

              {/* Sidebar TOC */}
              <aside className="hidden lg:block">
                <div className="sticky top-28 flex flex-col gap-3">
                  <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary uppercase select-none mb-2">
                    Contents
                  </span>
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="font-body-sm text-[var(--text-body-sm)] text-text-muted hover:text-primary transition-colors select-none leading-snug"
                    >
                      {s.heading}
                    </a>
                  ))}
                </div>
              </aside>

              {/* Body */}
              <div className="flex flex-col gap-14">

                {sections.map((s) => (
                  <div key={s.id} id={s.id} className="scroll-mt-28">
                    <h2 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] leading-[var(--text-headline-md--line-height)] text-text-main mb-4 select-none">
                      {s.heading}<span className="text-primary">.</span>
                    </h2>
                    {s.body.map((para, i) => (
                      <p key={i} className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mb-4 select-none">
                        {para}
                      </p>
                    ))}

                    {/* Cookie type cards inline after "How We Use Cookies" section */}
                    {s.id === 'how-we-use-cookies' && (
                      <div className="flex flex-col gap-6 mt-2">
                        {cookieTypes.map((type) => (
                          <div key={type.id} className="glass-surface rounded-2xl border border-border-main overflow-hidden">
                            {/* Card header */}
                            <div className="flex items-center justify-between px-8 py-5 border-b border-border-main">
                              <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[18px] text-secondary select-none">
                                {type.name}
                              </h3>
                              <span className={`font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs uppercase select-none ${type.statusColor}`}>
                                {type.status}
                              </span>
                            </div>
                            {/* Description */}
                            <div className="px-8 py-5 border-b border-border-main">
                              <p className="font-body-md text-[var(--text-body-md)] leading-[var(--text-body-md--line-height)] text-text-muted select-none">
                                {type.description}
                              </p>
                            </div>
                            {/* Examples */}
                            <div className="px-8 py-5">
                              <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary uppercase select-none block mb-4">
                                Cookies in this category
                              </span>
                              <div className="flex flex-col gap-4">
                                {type.examples.map((ex) => (
                                  <div key={ex.name} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    <div>
                                      <div className="font-label-caps font-[var(--text-label-caps--font-weight)] text-xs text-text-muted uppercase tracking-[0.08em] mb-1 select-none">Name</div>
                                      <div className="font-body-sm text-[var(--text-body-sm)] text-secondary select-none">{ex.name}</div>
                                    </div>
                                    <div>
                                      <div className="font-label-caps font-[var(--text-label-caps--font-weight)] text-xs text-text-muted uppercase tracking-[0.08em] mb-1 select-none">Purpose</div>
                                      <div className="font-body-sm text-[var(--text-body-sm)] text-text-muted select-none">{ex.purpose}</div>
                                    </div>
                                    <div>
                                      <div className="font-label-caps font-[var(--text-label-caps--font-weight)] text-xs text-text-muted uppercase tracking-[0.08em] mb-1 select-none">Duration</div>
                                      <div className="font-body-sm text-[var(--text-body-sm)] text-text-muted select-none">{ex.duration}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Related policies */}
                <div className="glass-surface rounded-2xl p-8 border border-border-main flex flex-col sm:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] text-secondary mb-2 select-none">
                      Related Policies
                    </h3>
                    <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">
                      Cookie use is also covered in our Privacy Policy, along with how we handle all other personal data.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 flex-shrink-0">
                    <Link
                      href="/legal/privacy"
                      className="border-2 border-primary text-primary px-6 py-3 rounded-full font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs uppercase hover:shadow-[0_4px_20px_rgba(255,0,153,0.25)] hover:scale-[1.02] transition-all text-center"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/legal/terms"
                      className="border border-border-main text-text-muted px-6 py-3 rounded-full font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs uppercase hover:text-primary hover:border-primary/40 transition-all text-center"
                    >
                      Terms of Use
                    </Link>
                  </div>
                </div>

                {/* Contact */}
                <div className="glass-surface rounded-2xl p-8 border border-border-main">
                  <h2 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] text-text-main mb-3 select-none">
                    Questions<span className="text-primary">?</span>
                  </h2>
                  <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted select-none">
                    If you have questions about how we use cookies, contact us at{' '}
                    <a href="mailto:privacy@dianafortheanimals.org" className="text-primary hover:underline">
                      privacy@dianafortheanimals.org
                    </a>
                    . DRGM DEV PTY LTD (ACN 699 347 861).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
