'use client';

import { useState } from 'react';
import { User, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function AdvocateJoinForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};

    // Validate name: non-empty and no numbers/digits
    if (!name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (/\d/.test(name)) {
      newErrors.name = 'Name should not contain numbers.';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address (e.g., diana@example.com).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError('');
      
      const { submitWaitlist } = await import('@/app/actions/submitForm');
      const result = await submitWaitlist({ name, email, role: 'personal' });
      
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(result.error || 'An error occurred.');
        setIsSubmitting(false);
      }
    }
  };

  if (submitted) {
    return (
      <div className="glass-surface bg-background rounded-2xl p-10 border border-primary/40 flex flex-col items-center justify-center gap-4 shadow-lg text-center my-auto min-h-[350px]">
        <CheckCircle2 className="text-primary animate-bounce" size={48} />
        <h3 className="font-headline-md text-2xl text-secondary">Welcome to the Nexus</h3>
        <p className="font-body-md text-text-muted">
          Thank you, <strong className="text-primary">{name}</strong>! Keep an eye on <span className="text-secondary">{email}</span> for next steps to download the app.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="glass-surface bg-background rounded-2xl p-10 border border-border-main flex flex-col gap-6 shadow-lg">
      <div className="flex flex-col gap-1.5">
        <input
          id="advocate-name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
          }}
          placeholder="Name"
          className={`bg-surface border rounded-lg px-4 py-3.5 text-secondary font-body-md placeholder:text-text-muted/70 focus:outline-none transition-colors ${
            errors.name ? 'border-red-500 focus:border-red-500' : 'border-border-main focus:border-primary'
          }`}
        />
        {errors.name && (
          <span className="flex items-center gap-1.5 text-xs text-red-500 font-body-sm pl-1">
            <AlertCircle size={14} />
            {errors.name}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <input
          id="advocate-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          placeholder="Email Address (e.g., diana@example.com)"
          className={`bg-surface border rounded-lg px-4 py-3.5 text-secondary font-body-md placeholder:text-text-muted/70 focus:outline-none transition-colors ${
            errors.email ? 'border-red-500 focus:border-red-500' : 'border-border-main focus:border-primary'
          }`}
        />
        {errors.email && (
          <span className="flex items-center gap-1.5 text-xs text-red-500 font-body-sm pl-1">
            <AlertCircle size={14} />
            {errors.email}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 bg-surface border border-border-main rounded-lg px-4 py-4 mt-1">
        <User className="text-primary" size={18} />
        <span className="font-body-md text-[var(--text-body-md)] text-text-muted select-none">
          Joining as: <strong className="text-secondary font-headline-md">Individual Advocate</strong>
        </span>
      </div>

      <button disabled={isSubmitting} type="submit" className="w-full py-4 bg-primary text-[#FFDDEE] font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] rounded-full border-2 border-primary hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase mt-1">
        {isSubmitting ? 'Submitting...' : 'Join the Nexus'}
      </button>
      {submitError && (
        <p className="text-[#FF0099] text-sm text-center font-bold uppercase">{submitError}</p>
      )}
      <p className="font-body-sm text-[var(--text-body-sm)] text-text-subtle text-center select-none">No spam. Full onboarding happens in the app.</p>
    </form>
  );
}
