'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2, ChevronDown, Check, AlertCircle } from 'lucide-react';

const ROLES = [
  'Core Team (Sweat Equity)',
  'Community Contributor (Flexible / Advisory)',
  'Global Ambassador',
  'Financial Investor',
  'Aligned Sponsor (Plant-based / Vegan-aligned)',
  'Ecosystem Partner (Nonprofit / Media)',
];

export default function BuildJoinForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; role?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsRoleOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const validate = () => {
    const newErrors: { name?: string; email?: string; role?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (/\d/.test(name)) {
      newErrors.name = 'Name should not contain numbers.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address (e.g., you@example.com).';
    }

    if (!role) {
      newErrors.role = 'Please select a contribution role.';
    }

    if (!message.trim()) {
      newErrors.message = 'Please tell us how you would like to contribute.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 4000);
      }, 1200);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="glass-surface rounded-2xl p-8 md:p-10 border border-border-main flex flex-col gap-5 relative overflow-visible">
      {/* Success overlay */}
      <div
        className={`absolute inset-0 rounded-2xl bg-surface/95 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-all duration-500 ${
          isSuccess ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mb-4">
          <CheckCircle2 className="text-primary animate-bounce" size={36} />
        </div>
        <h3 className="font-headline-md text-2xl text-secondary mb-2">Message Received</h3>
        <p className="font-body-sm text-text-muted text-center max-w-xs">
          Thank you for reaching out, <strong className="text-primary">{name}</strong>! A core team member will be in touch within 48 hours.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <input
            id="name"
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
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder="Email Address (e.g., you@example.com)"
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
      </div>

      {/* Custom Solid Dropdown for Contribution Role */}
      <div className="relative flex flex-col gap-1.5" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsRoleOpen(!isRoleOpen)}
          className={`w-full bg-surface border rounded-lg px-4 py-3.5 text-left flex items-center justify-between font-body-md transition-colors ${
            errors.role ? 'border-red-500' : 'border-border-main hover:border-primary/50'
          }`}
        >
          <span className={role ? 'text-secondary' : 'text-text-muted/70'}>
            {role || 'How do you want to contribute?'}
          </span>
          <ChevronDown
            size={18}
            className={`text-text-muted transition-transform duration-300 ${isRoleOpen ? 'rotate-180 text-primary' : ''}`}
          />
        </button>

        {isRoleOpen && (
          <div className="absolute z-50 top-full left-0 w-full mt-2 bg-white border border-border-main rounded-xl shadow-2xl overflow-hidden py-2">
            {ROLES.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => {
                  setRole(r);
                  setIsRoleOpen(false);
                  if (errors.role) setErrors((prev) => ({ ...prev, role: undefined }));
                }}
                className={`w-full px-4 py-3 text-left flex items-center justify-between text-sm font-medium transition-colors ${
                  role === r ? 'bg-primary/15 text-primary font-bold' : 'text-secondary hover:bg-primary/5 hover:text-primary'
                }`}
              >
                <span>{r}</span>
                {role === r && <Check size={16} className="text-primary shrink-0" />}
              </button>
            ))}
          </div>
        )}

        {errors.role && (
          <span className="flex items-center gap-1.5 text-xs text-red-500 font-body-sm pl-1">
            <AlertCircle size={14} />
            {errors.role}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
          }}
          placeholder="Briefly describe your background, interest, or what you'd like to build with us..."
          className={`bg-surface border rounded-lg px-4 py-3.5 text-secondary font-body-md placeholder:text-text-muted/70 focus:outline-none transition-colors resize-none ${
            errors.message ? 'border-red-500 focus:border-red-500' : 'border-border-main focus:border-primary'
          }`}
        />
        {errors.message && (
          <span className="flex items-center gap-1.5 text-xs text-red-500 font-body-sm pl-1">
            <AlertCircle size={14} />
            {errors.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 mt-1 bg-primary text-[#FFDDEE] font-label-caps tracking-[0.1em] rounded-full border-2 border-primary hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] transition-all active:scale-95 uppercase flex items-center justify-center gap-2 disabled:opacity-70 disabled:active:scale-100 disabled:hover:shadow-none"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-[#FFDDEE]/30 border-t-[#FFDDEE] rounded-full animate-spin" />
        ) : (
          <>
            SEND MESSAGE
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
