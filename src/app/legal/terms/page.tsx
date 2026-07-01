import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ScrollText } from 'lucide-react';
import TopNav from '@/components/layout/TopNav';

export const metadata: Metadata = {
  title: 'Terms of Use | DIANA: Digital Infrastructure for Animal Networks and Advocacy',
  description: 'The terms governing your use of the DIANA platform, app, and website. Please read carefully before using DIANA.',
};

const sections = [
  {
    id: 'acceptance',
    heading: 'Acceptance of Terms',
    body: [
      'By accessing or using the DIANA application, website, or any related services (collectively, "the Platform"), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, you must not use the Platform.',
      'These Terms apply to all users of the Platform, including Individual Advocates, Ethical Merchants, Animal Sanctuaries, and any visitors to the website.',
    ],
  },
  {
    id: 'about-diana',
    heading: 'About DIANA',
    body: [
      'DIANA is a financial infrastructure platform operated by DRGM that connects ethical merchants, individual advocates, and animal sanctuaries. It enables automated pledge-based contributions from merchant transactions to registered animal sanctuaries.',
      'DIANA is not a charity, a donation platform, or a financial institution. It is a technology platform that facilitates and attributes contributions according to merchant and user settings.',
    ],
  },
  {
    id: 'eligibility',
    heading: 'Eligibility',
    body: [
      'You must be at least 13 years of age to use the Platform. By using DIANA, you represent that you meet this requirement.',
      'If you are registering as an Ethical Merchant or Animal Sanctuary, you confirm that you are authorised to represent that organisation and to enter into binding agreements on its behalf.',
    ],
  },
  {
    id: 'user-accounts',
    heading: 'User Accounts',
    body: [
      'You are responsible for maintaining the confidentiality of your account credentials. You agree to:',
    ],
    bullets: [
      'Provide accurate and complete information when creating your account.',
      'Keep your login credentials secure and not share them with others.',
      'Notify us immediately at support@dianafortheanimals.org if you suspect unauthorised access to your account.',
      'Accept responsibility for all activity that occurs under your account.',
    ],
  },
  {
    id: 'merchant-terms',
    heading: 'Merchant-Specific Terms',
    body: [
      'Ethical Merchants listed on DIANA agree to:',
    ],
    bullets: [
      'Commit to a minimum pledge of 5% of eligible sales facilitated through the DIANA platform to registered animal sanctuaries.',
      'Maintain accurate business information, menu or collection listings, and pricing on the Platform.',
      'Not misrepresent the ethical credentials of their business or products.',
      'Comply with all applicable consumer protection and financial regulations in their jurisdiction.',
    ],
    footer: 'DIANA reserves the right to review, suspend, or remove any merchant listing that does not meet platform standards or the Merchant Pledge commitment.',
  },
  {
    id: 'sanctuary-terms',
    heading: 'Sanctuary-Specific Terms',
    body: [
      'Animal Sanctuaries registered on DIANA agree to:',
    ],
    bullets: [
      'Provide accurate and verifiable information about their organisation, mission, and residents.',
      'Use funds received through DIANA for the direct care, welfare, and operational needs of animals in their care.',
      'Maintain transparency about their operations and fund usage as required by the Platform.',
      'Notify DIANA promptly of any material changes to their organisation status.',
    ],
  },
  {
    id: 'prohibited',
    heading: 'Prohibited Conduct',
    body: [
      'You agree not to use the Platform to:',
    ],
    bullets: [
      'Violate any applicable law or regulation.',
      'Misrepresent your identity, organisation, or the nature of your products or services.',
      'Submit false, misleading, or fraudulent information.',
      'Interfere with, disrupt, or compromise the integrity or security of the Platform.',
      'Attempt to gain unauthorised access to any part of the Platform or its underlying systems.',
      'Engage in any activity that could harm DIANA, its users, merchants, sanctuaries, or the animals it serves.',
      'Promote, advertise, or sell animal-derived products or services through the Platform.',
    ],
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual Property',
    body: [
      'All content on the Platform, including the DIANA name, logo, brand identity, interface design, copy, and functionality, is the intellectual property of DRGM and is protected by applicable copyright, trademark, and design laws.',
      'You may not copy, reproduce, distribute, modify, or create derivative works from any part of the Platform without our express written permission.',
    ],
  },
  {
    id: 'contributions',
    heading: 'Sanctuary Contributions & Financial Flow',
    body: [
      'Participating merchants pay DIANA a flat platform fee of 5% on each transaction processed through the Platform. This fee covers platform operations, payment processing infrastructure, and the attribution and distribution of sanctuary contributions. The platform fee is separate from the merchant sanctuary pledge (which is a minimum of 5%).',
      'Contributions from merchant pledge commitments are calculated and distributed by DIANA according to the merchant\'s configured pledge percentage. DIANA does not guarantee a specific contribution amount to any sanctuary.',
      'DIANA contributes 5% of its own platform fee back into the sanctuary ecosystem. This is DIANA\'s direct contribution to the mission on top of the merchant pledge.',
      'DIANA is not responsible for the actions of any merchant or sanctuary and does not guarantee that contributions will be used in any particular way by recipient sanctuaries.',
    ],
  },
  {
    id: 'disclaimers',
    heading: 'Disclaimers',
    body: [
      'The Platform is provided "as is" and "as available" without warranty of any kind, express or implied. DRGM does not warrant that the Platform will be uninterrupted, error-free, or free of harmful components.',
      'DRGM is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Platform, even if we have been advised of the possibility of such damages.',
    ],
  },
  {
    id: 'termination',
    heading: 'Termination',
    body: [
      'We may suspend or terminate your access to the Platform at any time, with or without notice, if we believe you have violated these Terms or if we are required to do so by law.',
      'You may close your account at any time by contacting us at support@dianafortheanimals.org. Upon account closure, your data will be handled in accordance with our Privacy Policy.',
    ],
  },
  {
    id: 'governing-law',
    heading: 'Governing Law',
    body: [
      'These Terms are governed by applicable law. Any disputes arising from or relating to these Terms or your use of the Platform will be handled in good faith and in accordance with the laws of the jurisdiction in which DRGM is registered at the time of the dispute.',
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to These Terms',
    body: [
      'We may update these Terms from time to time. When we do, we will update the "Last updated" date on this page. For material changes, we will notify you by email or through an in-app notice. Continued use of the Platform after changes are posted constitutes your acceptance of the updated Terms.',
    ],
  },
];

export default function TermsPage() {
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
                <ScrollText className="text-primary" size={26} />
              </div>
              <div>
                <h1 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[56px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-text-main mt-3 select-none">
                  Terms of <span className="text-primary">Use.</span>
                </h1>
                <p className="font-body-md text-[var(--text-body-md)] leading-[var(--text-body-md--line-height)] text-text-muted mt-3 select-none">
                  Last updated: June 2026
                </p>
              </div>
            </div>

            <div className="mt-10 glass-surface rounded-2xl p-6 border border-border-main max-w-2xl">
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-secondary select-none">
                These Terms govern your use of the DIANA platform. They are designed to be clear, fair, and aligned with DIANA's mission. Please read them before using the Platform.
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
                  </div>
                ))}

                {/* Related links */}
                <div className="glass-surface rounded-2xl p-8 border border-border-main flex flex-col sm:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] text-secondary mb-2 select-none">
                      Related Policies
                    </h3>
                    <p className="font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">
                      For information about how we collect and use your personal data, please read our Privacy Policy.
                    </p>
                  </div>
                  <Link
                    href="/legal/privacy"
                    className="flex-shrink-0 border-2 border-primary text-primary px-6 py-3 rounded-full font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs uppercase hover:shadow-[0_4px_20px_rgba(255,0,153,0.25)] hover:scale-[1.02] transition-all"
                  >
                    Privacy Policy
                  </Link>
                </div>

                {/* Contact block */}
                <div className="glass-surface rounded-2xl p-8 border border-border-main">
                  <h2 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] text-text-main mb-3 select-none">
                    Questions<span className="text-primary">?</span>
                  </h2>
                  <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted select-none">
                    If you have questions about these Terms, contact us at{' '}
                    <a href="mailto:legal@dianafortheanimals.org" className="text-primary hover:underline">
                      legal@dianafortheanimals.org
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
