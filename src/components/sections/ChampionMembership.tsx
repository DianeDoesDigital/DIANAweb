'use client';

interface ChampionMembershipProps {
  onActivate: () => void;
}

export default function ChampionMembership({ onActivate }: ChampionMembershipProps) {
  return (
    <section id="membership" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"></div>
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-[var(--text-headline-lg--font-weight)] font-headline-lg text-[48px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-text-main mb-8 select-none">
              Champion Status <span className="text-primary">Required.</span>
            </h2>
            <p className="font-[var(--text-body-lg--font-weight)] font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mb-8 select-none">
              Monthly life-lines are exclusive to our Champions. By becoming a member, you shield your impact from bank tolls and ensure 100% of your support reaches the mission.
            </p>
            <div className="flex items-start gap-4 mb-6">
              <span className="material-symbols-outlined text-primary mt-1">
                verified_user
              </span>
              <div>
                <h4 className="font-[var(--text-headline-md--font-weight)] font-headline-md text-lg leading-[var(--text-headline-md--line-height)] mb-2 select-none">
                  Zero Friction
                </h4>
                <p className="font-[var(--text-body-sm--font-weight)] font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted select-none">
                  Your flat monthly fee covers processing overhead so that every cent you give elsewhere in the network has maximum impact.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {/* Monthly Tier (Only one) */}
            <div className="glass-surface p-10 rounded-xl border-2 border-primary relative transition-all duration-300 hover:scale-[1.02] max-w-sm w-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 text-[10px] font-bold rounded-full neon-border text-center whitespace-nowrap">
                CHAMPION STATUS
              </div>
              <h3 className="font-[var(--text-headline-md--font-weight)] font-headline-md text-xl leading-[var(--text-headline-md--line-height)] mb-2 select-none text-center">
                Monthly Membership
              </h3>
              <div className="font-[var(--text-impact-stat--font-weight)] font-impact-stat text-4xl tracking-[var(--text-impact-stat--letter-spacing)] text-primary mb-6 text-center">
                $20<span className="text-sm text-text-subtle">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 font-[var(--text-body-sm--font-weight)] font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  Shield your impact
                </li>
                <li className="flex items-center gap-2 font-[var(--text-body-sm--font-weight)] font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>{' '}
                  Access to Personal Impact Ledger
                </li>
                <li className="flex items-center gap-2 font-[var(--text-body-sm--font-weight)] font-body-sm text-[var(--text-body-sm)] leading-[var(--text-body-sm--line-height)] text-text-muted">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  Cancel anytime
                </li>
              </ul>
              <button
                onClick={onActivate}
                className="w-full py-4 bg-primary text-white font-[var(--text-label-caps--font-weight)] font-label-caps tracking-[var(--text-label-caps--letter-spacing)] rounded-md hover:brightness-110 transition-all neon-border active:scale-95 uppercase"
              >
                ACTIVATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
