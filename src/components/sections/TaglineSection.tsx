'use client';

export default function TaglineSection() {
  return (
    <section className="py-24 md:py-32 bg-ambient-glow">
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] text-center">
        <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[48px] md:text-[64px] leading-tight text-text-main select-none mb-6">
          The Global Currency of Compassion<br />
          <span className="text-primary">and Celebration</span>
        </h2>
        <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted max-w-2xl mx-auto select-none">
          Compassion for the animals we share this world with. Celebration of every conscious choice we make within it. DIANA is the infrastructure that makes both happen automatically.
        </p>
      </div>
    </section>
  );
}
