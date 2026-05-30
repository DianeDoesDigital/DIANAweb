'use client';

import { useState } from 'react';
import { User, Store, PawPrint, CheckCircle2 } from 'lucide-react';

const roles = [
  { id: 'advocate', label: 'Individual Advocate', icon: User, description: 'Shop ethically and track your impact' },
  { id: 'merchant', label: 'Ethical Merchant', icon: Store, description: 'List your business and pledge 5%+' },
  { id: 'sanctuary', label: 'Animal Sanctuary', icon: PawPrint, description: 'Receive continuous, automated funding' },
];

interface ActivateProps {
  onAdvocateSubmit?: (data: { name: string; email: string; role: string }) => void;
}

export default function Activate({ onAdvocateSubmit }: ActivateProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('advocate');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    onAdvocateSubmit?.({ name, email, role });
    setSubmitted(true);
  };

  return (
    <section id="activate" className="py-24 md:py-32 bg-background border-t border-border-main relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/6 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        {submitted ? (
          <div className="text-center max-w-lg mx-auto">
            <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="text-primary animate-pulse" size={40} />
            </div>
            <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] leading-tight text-secondary mb-4 select-none">
              Welcome to DIANA, {name.split(' ')[0]}.
            </h2>
            <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mb-8 select-none">
              Your daily actions are about to mean so much more. Download the app to complete your onboarding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                id="activate-app-store-link"
                className="bg-primary text-white px-8 py-4 rounded-md font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:brightness-110 transition-all neon-border text-center"
              >
                App Store
              </a>
              <a
                href="#"
                id="activate-play-store-link"
                className="border border-border-main text-secondary px-8 py-4 rounded-md font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:bg-surface-hover transition-all text-center"
              >
                Google Play
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div>
              <span className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6 inline-block border border-primary/20 uppercase select-none">
                Activate
              </span>
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[40px] md:text-[52px] leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-secondary mb-6 select-none">
                Your daily life,<br />quietly doing more.
              </h2>
              <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mb-8 select-none">
                Tell us who you are. We'll send you straight to where you belong in the DIANA ecosystem. Then the app handles the rest.
              </p>

              {/* Role cards */}
              <div className="flex flex-col gap-3">
                {roles.map((r) => {
                  const RoleIcon = r.icon;
                  return (
                    <button
                      key={r.id}
                      id={`activate-role-${r.id}`}
                      type="button"
                      onClick={() => setRole(r.id)}
                      className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 ${
                        role === r.id
                          ? 'border-primary/50 bg-primary/8'
                          : 'border-border-main hover:bg-surface-hover'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border transition-colors ${role === r.id ? 'bg-primary/20 border-primary/30' : 'bg-surface border-border-main'}`}>
                        <RoleIcon className={`${role === r.id ? 'text-primary' : 'text-text-muted'}`} size={18} />
                      </div>
                      <div>
                        <div className={`font-label-caps font-[var(--text-label-caps--font-weight)] text-xs tracking-[0.1em] uppercase ${role === r.id ? 'text-primary' : 'text-secondary'}`}>{r.label}</div>
                        <div className="font-body-sm text-[var(--text-body-sm)] text-text-muted mt-0.5">{r.description}</div>
                      </div>
                      {role === r.id && (
                        <CheckCircle2 className="text-primary ml-auto" size={18} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: form */}
            <div>
              <form onSubmit={handleSubmit} className="glass-surface rounded-2xl p-10 border border-border-main flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="activate-name" className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-subtle uppercase">
                    Full Name
                  </label>
                  <input
                    id="activate-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] placeholder:text-text-subtle focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="activate-email" className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-subtle uppercase">
                    Email Address
                  </label>
                  <input
                    id="activate-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] placeholder:text-text-subtle focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                {/* Hidden role field shows selected */}
                <div className="glass-surface rounded-lg px-4 py-3 border border-border-main flex items-center gap-3">
                  {(() => {
                    const RoleIcon = roles.find((r) => r.id === role)?.icon;
                    return RoleIcon ? <RoleIcon className="text-primary" size={18} /> : null;
                  })()}
                  <span className="font-body-sm text-[var(--text-body-sm)] text-text-subtle select-none">
                    Joining as: <strong className="text-secondary">{roles.find((r) => r.id === role)?.label}</strong>
                  </span>
                </div>

                <button
                  id="activate-submit-btn"
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] rounded-md hover:brightness-110 transition-all neon-border active:scale-95 uppercase mt-2"
                >
                  ACTIVATE
                </button>
                <p className="font-body-sm text-[var(--text-body-sm)] text-text-subtle text-center select-none">
                  No spam. Full onboarding happens in the app.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
