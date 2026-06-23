'use client';

import { User } from 'lucide-react';

export default function AdvocateJoinForm() {
  return (
    <form className="glass-surface bg-background rounded-2xl p-10 border border-border-main flex flex-col gap-6 shadow-lg">
      {[
        { id: 'advocate-name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
        { id: 'advocate-email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
      ].map((field) => (
        <div key={field.id} className="flex flex-col gap-2">
          <label htmlFor={field.id} className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-muted uppercase">
            {field.label}
          </label>
          <input
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] placeholder:text-text-subtle focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
      ))}
      <div className="flex items-center gap-3 bg-surface border border-border-main rounded-lg px-4 py-4 mt-2">
        <User className="text-primary" size={18} />
        <span className="font-body-md text-[var(--text-body-md)] text-text-muted select-none">
          Joining as: <strong className="text-secondary font-headline-md">Individual Advocate</strong>
        </span>
      </div>
      <button type="submit" className="w-full py-4 bg-primary text-[#FFDDEE] font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] rounded-full border-2 border-primary hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] transition-all active:scale-95 uppercase mt-2">
        Join the Nexus
      </button>
      <p className="font-body-sm text-[var(--text-body-sm)] text-text-subtle text-center select-none">No spam. Full onboarding happens in the app.</p>
    </form>
  );
}
