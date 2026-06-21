export default function Nexus() {
  return (
    <section id="directory" className="py-24 bg-background">
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] text-center">
        <h2 className="font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[var(--text-headline-lg)] leading-[var(--text-headline-lg--line-height)] tracking-[var(--text-headline-lg--letter-spacing)] text-text-main mb-16 select-none font-headline-lg">
          Join the <span className="text-primary">Nexus.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Consumer */}
          <div className="glass-surface p-10 rounded-xl border border-border-main hover:shadow-2xl hover:border-primary transition-all duration-300 hover:translate-y-[-4px]">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-border-main">
              <span className="material-symbols-outlined text-primary text-3xl">
                shield_person
              </span>
            </div>
            <h3 className="font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] leading-[var(--text-headline-md--line-height)] text-secondary mb-4 select-none font-headline-md">
              Individual Advocate
            </h3>
            <p className="font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary mb-6 uppercase font-label-caps">
              Consumer
            </p>
            <p className="font-[var(--text-body-sm--font-weight)] text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none font-body-sm">
              Shop with verified ethical merchants and track your personal impact on the global ledger with every purchase.
            </p>
          </div>
          {/* Merchant */}
          <div className="glass-surface p-10 rounded-xl border border-border-main hover:shadow-2xl hover:border-primary transition-all duration-300 hover:translate-y-[-4px]">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-border-main">
              <span className="material-symbols-outlined text-primary text-3xl">
                storefront
              </span>
            </div>
            <h3 className="font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] leading-[var(--text-headline-md--line-height)] text-secondary mb-4 select-none font-headline-md">
              Ethical Merchant
            </h3>
            <p className="font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary mb-6 uppercase font-label-caps">
              Merchant
            </p>
            <p className="font-[var(--text-body-sm--font-weight)] text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none font-body-sm">
              Pledge a minimum of 5% of your sales to animal protection and earn the trust of the world's most conscious consumers.
            </p>
          </div>
          {/* Sanctuary */}
          <div className="glass-surface p-10 rounded-xl border border-border-main hover:shadow-2xl hover:border-primary transition-all duration-300 hover:translate-y-[-4px]">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-border-main">
              <span className="material-symbols-outlined text-primary text-3xl">
                favorite
              </span>
            </div>
            <h3 className="font-[var(--text-headline-md--font-weight)] text-[var(--text-headline-md)] leading-[var(--text-headline-md--line-height)] text-secondary mb-4 select-none font-headline-md">
              Animal Sanctuary
            </h3>
            <p className="font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary mb-6 uppercase font-label-caps">
              Sanctuary
            </p>
            <p className="font-[var(--text-body-sm--font-weight)] text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none font-body-sm">
              Focus on care while DIANA provides stable, recurring funding through our automated advocacy network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
