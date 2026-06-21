'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('advocate');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const hasData = name.trim() && email.trim();
    
    // Always submit the data to our theoretical waitlist backend first if provided
    if (hasData) {
      onAdvocateSubmit?.({ name, email, role });
    }
    
    if (role === 'merchant') {
      const query = hasData ? `?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}` : '';
      router.push(`/merchants${query}`);
      return;
    }
    if (role === 'sanctuary') {
      const query = hasData ? `?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}` : '';
      router.push(`/sanctuaries${query}`);
      return;
    }
    
    // For advocates, data is strictly required
    if (!hasData) return;
    
    setSubmitted(true);
  };

  return (
    <section id="activate" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background glow removed */}

      <div className="relative z-10 max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        {submitted ? (
          <div className="text-center max-w-lg mx-auto">
            <div className="w-20 h-20 rounded-full border border-border-main flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="text-primary animate-pulse" size={40} />
            </div>
            <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[40px] leading-tight text-text-main mb-4 select-none text-center">
              Welcome to DIANA, <span className="text-primary">{name.split(' ')[0]}.</span>
            </h2>
            <p className="font-body-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-text-muted mb-8 select-none">
              Your daily actions are about to mean so much more. Download the app to complete your onboarding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                id="activate-app-store-link"
                className="bg-primary text-[#FFDDEE] px-8 py-4 rounded-full border-2 border-primary font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] hover:scale-[1.02] active:scale-95 transition-all text-center"
              >
                App Store
              </a>
              <a
                href="#"
                id="activate-play-store-link"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] uppercase hover:shadow-[0_4px_20px_rgba(255,0,153,0.25)] hover:scale-[1.02] active:scale-95 transition-all text-center"
              >
                Google Play
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div>
              <h2 className="font-headline-lg font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[52px] text-center md:text-left leading-tight tracking-[var(--text-headline-lg--letter-spacing)] text-text-main mb-6 select-none mt-4">
                Your Daily Life,<br />
                <span className="text-primary">Quietly Doing More</span>
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
                          ? 'border-primary bg-surface shadow-[inset_0_0_0_1px_var(--color-primary)]'
                          : 'border-border-main bg-surface hover:border-text-muted hover:bg-surface-hover'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border transition-colors ${role === r.id ? 'border-primary' : 'bg-surface border-border-main'}`}>
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
                    required={role === 'advocate'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] placeholder:text-text-subtle focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="activate-email" className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-subtle uppercase">
                    Email Address
                  </label>
                  <input
                    id="activate-email"
                    type="email"
                    required={role === 'advocate'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] placeholder:text-text-subtle focus:outline-none focus:border-primary transition-colors"
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
                  className="w-full py-4 bg-primary text-[#FFDDEE] font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] rounded-full border-2 border-primary hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] hover:scale-[1.01] transition-all active:scale-95 uppercase mt-2"
                >
                  JOIN THE NEXUS
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
