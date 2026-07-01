import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import TopNav from '@/components/layout/TopNav';

export const metadata: Metadata = {
  title: 'Privacy Policy | DIANA: Digital Infrastructure for Animal Networks and Advocacy',
  description: 'How DIANA collects, uses, and protects your personal data. We are committed to transparency, data minimisation, and your right to privacy.',
};

const sections = [
  {
    id: 'who-we-are',
    heading: 'Who We Are',
    body: [
      'DIANA (Digital Infrastructure for Animal Networks and Advocacy) is a product of DRGM. We operate the DIANA mobile application and website at dianafortheanimals.org.',
      'If you have any questions about this policy or how we handle your data, you can reach us at privacy@dianafortheanimals.org.',
    ],
  },
  {
    id: 'what-we-collect',
    heading: 'What We Collect',
    body: [
      'We collect only the data necessary to operate the DIANA platform. This includes:',
    ],
    bullets: [
      'Account data: your name, email address, and role (Advocate, Merchant, or Sanctuary).',
      'Transaction data: payment records, merchant interactions, and sanctuary contribution logs processed through our platform.',
      'Usage data: app interactions, feature usage, and performance diagnostics to improve the platform.',
      'Device data: device type, operating system version, and app version for compatibility purposes.',
      'Communications: messages you send to us directly, including support requests and application forms.',
    ],
  },
  {
    id: 'how-we-use-it',
    heading: 'How We Use Your Data',
    body: [
      'Your data is used to:',
    ],
    bullets: [
      'Operate, maintain, and improve the DIANA platform and its features.',
      'Process and attribute sanctuary contributions from merchant transactions.',
      'Communicate with you about your account, transactions, and platform updates.',
      'Generate your personal Impact Profile and public impact ledger contributions.',
      'Maintain the security and integrity of the platform.',
      'Comply with legal obligations.',
    ],
    footer: 'We do not sell your personal data. We do not use it for behavioural advertising. We do not share it with third parties except as described below.',
  },
  {
    id: 'third-parties',
    heading: 'Third Parties',
    body: [
      'We share data with third parties only where necessary to operate the platform:',
    ],
    bullets: [
      'Payment processors: to securely process transactions. These processors are bound by their own compliance obligations.',
      'Analytics providers: anonymised, aggregated usage data only (no personally identifiable information).',
      'Infrastructure providers: hosting and database services that store data on our behalf under data processing agreements.',
    ],
    footer: 'All third-party processors are contractually required to handle your data in accordance with applicable privacy law and not to use it for any other purpose.',
  },
  {
    id: 'data-retention',
    heading: 'Data Retention',
    body: [
      'We retain your personal data for as long as your account is active or as required to provide you with services. If you close your account, we will delete or anonymise your data within 90 days, except where we are required to retain it for legal, regulatory, or financial compliance purposes.',
    ],
  },
  {
    id: 'your-rights',
    heading: 'Your Rights',
    body: [
      'Depending on your jurisdiction, you may have the right to:',
    ],
    bullets: [
      'Access the personal data we hold about you.',
      'Correct inaccurate or incomplete data.',
      'Request deletion of your data ("right to be forgotten").',
      'Object to or restrict certain processing activities.',
      'Receive your data in a portable format.',
      'Withdraw consent where processing is based on consent.',
    ],
    footer: 'To exercise any of these rights, contact us at privacy@dianafortheanimals.org. We will respond within 30 days.',
  },
  {
    id: 'cookies',
    heading: 'Cookies',
    body: [
      'The DIANA website uses cookies only where necessary. Strictly necessary cookies keep the site and your session working. We also use Plausible Analytics, a privacy-first tool that collects no personal data and does not share data with advertising networks.',
      'For a full breakdown of which cookies we set, their purpose, and how long they last, please read our Cookie Policy.',
    ],
    cookieLink: true,
  },
  {
    id: 'security',
    heading: 'Security',
    body: [
      'We implement industry-standard security measures including encryption in transit (TLS), encrypted storage, and access controls. No method of transmission over the internet is 100% secure. We will notify you promptly if we become aware of a breach that affects your personal data.',
    ],
  },
  {
    id: 'children',
    heading: 'Children',
    body: [
      'DIANA is not directed at children under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us and we will promptly delete it.',
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page and, where the changes are material, notify you by email or through the app. Continued use of DIANA after changes are posted constitutes acceptance of the updated policy.',
    ],
  },
];

export default function PrivacyPage() {
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
                <ShieldCheck className="text-primary" size={26} />
              </div>
              <div>
                <h1 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[56px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-text-main mt-3 select-none">
                  Privacy <span className="text-primary">Policy.</span>
                </h1>
                <p className="font-body-md text-[var(--text-body-md)] leading-[var(--text-body-md--line-height)] text-text-muted mt-3 select-none">
                  Last updated: June 2026
                </p>
              </div>
            </div>

            <div className="mt-10 glass-surface rounded-2xl p-6 border border-border-main max-w-2xl">
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-secondary select-none">
                DIANA is built on trust. We collect only what we need, use it only to serve you, and never sell it. This page explains exactly how we handle your data.
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
                    {s.bullets && (
                      <ul className="flex flex-col gap-2 mb-4 ml-4">
                        {s.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="font-body-md text-[var(--text-body-md)] leading-[var(--text-body-md--line-height)] text-text-muted select-none">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.footer && (
                      <p className="font-body-md text-[var(--text-body-md)] leading-[var(--text-body-md--line-height)] text-secondary/80 italic select-none mt-2">
                        {s.footer}
                      </p>
                    )}
                    {(s as { cookieLink?: boolean }).cookieLink && (
                      <Link
                        href="/legal/cookies"
                        className="inline-flex items-center gap-2 mt-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs uppercase hover:shadow-[0_4px_20px_rgba(255,0,153,0.25)] hover:scale-[1.02] transition-all"
                      >
                        Read Cookie Policy
                      </Link>
                    )}
                  </div>
                ))}

                {/* Contact block */}
                <div className="glass-surface rounded-2xl p-8 border border-border-main">
                  <h2 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] text-text-main mb-3 select-none">
                    Contact Us<span className="text-primary">.</span>
                  </h2>
                  <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted select-none">
                    For any privacy-related enquiries or to exercise your rights, contact us at{' '}
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
