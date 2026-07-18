'use client';

import Image from 'next/image';
import { User, Store, PawPrint, ArrowRight } from 'lucide-react';
import ImpactFlow from '@/components/sections/ImpactFlow';
import Ecosystem from '@/components/sections/Ecosystem';
import ScrollReveal from '@/components/layout/ScrollReveal';
import Link from 'next/link';

export default function MissionBody() {
  return (
    <main className="snap-start snap-always bg-background text-secondary pt-24 md:pt-32">
      {/* An Interconnected Ecosystem */}
      <Ecosystem />

      {/* The Vision */}
      <section className="py-24 md:py-32 bg-[#FFDDEE]">
        <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
            {/* Content Side */}
            <ScrollReveal>
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight mb-8 select-none tracking-tight text-center lg:text-left">
                <span className="text-secondary block whitespace-nowrap">Where Compassion </span>
                <span className="text-primary block whitespace-nowrap">is the Default</span>
              </h2>
              <div className="space-y-6 font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted">
                <p>
                  Commerce has always shaped the world. DIANA was designed to make sure that as it does, the animals we share this world with are never left behind. Every transaction is an opportunity to protect them, and DIANA makes sure that opportunity is never wasted.
                </p>
                <p>
                  Named after the moon goddess protector of the wild, the platform embodies a fierce, unyielding commitment to the innocent and vulnerable. The goal is not to make advocacy feel like a sacrifice. It is to make it feel like nothing at all, because it already is.
                </p>

                {/* Video (Mobile Only) */}
                <div className="flex lg:hidden justify-center my-8">
                  <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-t-full rounded-b-2xl overflow-hidden border-4 border-primary shadow-[0_8px_30px_rgba(255,0,153,0.25)]">
                    <video
                      src="/vision-loop.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <p>
                  You shop. You eat. You move through the world. DIANA makes sure it counts.
                </p>
              </div>
            </ScrollReveal>

            {/* Video (Desktop Only) */}
            <ScrollReveal className="hidden lg:flex justify-center lg:justify-end" delay={200}>
              <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-t-full rounded-b-2xl overflow-hidden border-4 border-primary shadow-[0_8px_30px_rgba(255,0,153,0.25)]">
                <video
                  src="/vision-loop.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <ImpactFlow />

      {/* Founder */}
      <section className="py-24 md:py-32">
        <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-center">
            {/* Photo (Desktop Only) */}
            <ScrollReveal className="hidden lg:flex justify-center lg:justify-start">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="relative w-full h-full rounded-full border border-border-main flex items-center justify-center overflow-hidden shadow-[0_8px_30px_rgba(255,0,153,0.15)]">
                  <Image
                    src="/diane-founder.jpg"
                    alt="Diane Mejilla, Founder of DIANA"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 288px, 384px"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight select-none text-center mb-8">
                <span className="text-secondary">We are</span> <span className="text-primary">DIANA</span>
              </h2>
              <div className="space-y-5 font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted text-center flex flex-col items-center">
                <p>
                  In the modern world, DIANA is every person whose daily choices embody the goddess&rsquo; same fierce mission.
                </p>
                <p>
                  To scale that impact, I built the infrastructure to match it. DIANA is the financial clearinghouse built to route resources directly to the animal sanctuaries on the frontlines.
                </p>
                <p>
                  But this technology is only as powerful as the people who use it.
                </p>
                <p>
                  I am DIANA. You are DIANA. We are DIANA. And together, our daily actions can change the world.
                </p>

                {/* Photo (Mobile Only) */}
                <div className="flex lg:hidden justify-center my-6">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                    <div className="relative w-full h-full rounded-full border border-border-main flex items-center justify-center overflow-hidden shadow-[0_8px_30px_rgba(255,0,153,0.15)]">
                      <Image
                        src="/diane-founder.jpg"
                        alt="Diane Mejilla, Founder of DIANA"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 256px, 320px"
                      />
                    </div>
                  </div>
                </div>

                {/* Desktop Signature */}
                <p className="hidden lg:block font-body-sm text-[var(--text-body-sm)] text-primary uppercase tracking-[0.1em] font-label-caps select-none pt-2">
                  &mdash; DIANE G. MEJILLA, FOUNDER
                </p>

                {/* Mobile Signature */}
                <p className="block lg:hidden font-body-sm text-[var(--text-body-sm)] text-primary uppercase tracking-[0.1em] font-label-caps select-none pt-2 leading-relaxed">
                  &mdash; DIANE G. MEJILLA,<br />FOUNDER
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Join the Nexus */}
      <section className="py-24 md:py-32 bg-[#FFDDEE]">
        <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[56px] leading-tight select-none mb-6">
              <span className="text-secondary">Join the</span> <span className="text-primary">Nexus</span>
            </h2>
            <p className="font-body-lg text-[var(--text-body-lg)] text-text-muted">
              Find your place in the DIANA ecosystem.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {/* Sanctuary Bar */}
            <ScrollReveal className="w-full" delay={0}>
              <Link
                href="/sanctuaries"
                className="group relative w-full bg-background overflow-hidden border border-border-main p-4 md:p-6 rounded-2xl hover:border-primary/30 transition-all duration-500 flex items-center justify-between shadow-sm hover:shadow-[0_8px_30px_rgba(255,0,153,0.15)] hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                <div className="relative flex items-center gap-4 md:gap-6 z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex shrink-0 items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    <PawPrint className="text-primary group-hover:text-white transition-colors duration-500 w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[15px] sm:text-base md:text-2xl text-secondary mb-0.5 md:mb-1">I represent an Animal Sanctuary</h3>
                    <p className="font-body-sm text-[12px] sm:text-[13px] leading-snug md:text-[var(--text-body-sm)] text-text-muted mt-0.5 md:mt-1">Receive steady, dependable financial support without asking.</p>
                  </div>
                </div>
                <div className="relative w-10 h-10 shrink-0 rounded-full border border-border-main flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 z-10 ml-4">
                  <ArrowRight className="text-secondary group-hover:text-white transition-colors duration-500 group-hover:translate-x-1 w-5 h-5 md:w-6 md:h-6" />
                </div>
              </Link>
            </ScrollReveal>

            {/* Advocate Bar */}
            <ScrollReveal className="w-full" delay={150}>
              <Link
                href="/advocates"
                className="group relative w-full bg-background overflow-hidden border border-border-main p-4 md:p-6 rounded-2xl hover:border-primary/30 transition-all duration-500 flex items-center justify-between shadow-sm hover:shadow-[0_8px_30px_rgba(255,0,153,0.15)] hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                <div className="relative flex items-center gap-4 md:gap-6 z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex shrink-0 items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    <User className="text-primary group-hover:text-white transition-colors duration-500 w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[15px] sm:text-base md:text-2xl text-secondary mb-0.5 md:mb-1">I am an Individual Advocate</h3>
                    <p className="font-body-sm text-[12px] sm:text-[13px] leading-snug md:text-[var(--text-body-sm)] text-text-muted mt-0.5 md:mt-1">Fuel sanctuary rescues effortlessly through your daily purchases.</p>
                  </div>
                </div>
                <div className="relative w-10 h-10 shrink-0 rounded-full border border-border-main flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 z-10 ml-4">
                  <ArrowRight className="text-secondary group-hover:text-white transition-colors duration-500 group-hover:translate-x-1 w-5 h-5 md:w-6 md:h-6" />
                </div>
              </Link>
            </ScrollReveal>

            {/* Merchant Bar */}
            <ScrollReveal className="w-full" delay={300}>
              <Link
                href="/merchants"
                className="group relative w-full bg-background overflow-hidden border border-border-main p-4 md:p-6 rounded-2xl hover:border-primary/30 transition-all duration-500 flex items-center justify-between shadow-sm hover:shadow-[0_8px_30px_rgba(255,0,153,0.15)] hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                <div className="relative flex items-center gap-4 md:gap-6 z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex shrink-0 items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    <Store className="text-primary group-hover:text-white transition-colors duration-500 w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-headline-md font-[var(--text-headline-md--font-weight)] text-[15px] sm:text-base md:text-2xl text-secondary mb-0.5 md:mb-1">I am an Ethical Merchant</h3>
                    <p className="font-body-sm text-[12px] sm:text-[13px] leading-snug md:text-[var(--text-body-sm)] text-text-muted mt-0.5 md:mt-1">Transform your commerce into continuous impact and consumer trust.</p>
                  </div>
                </div>
                <div className="relative w-10 h-10 shrink-0 rounded-full border border-border-main flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 z-10 ml-4">
                  <ArrowRight className="text-secondary group-hover:text-white transition-colors duration-500 group-hover:translate-x-1 w-5 h-5 md:w-6 md:h-6" />
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
