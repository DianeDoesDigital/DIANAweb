'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function SanctuaryApplicationForm() {
  const searchParams = useSearchParams();
  const prefillName = searchParams.get('name') || '';
  const prefillEmail = searchParams.get('email') || '';

  const [sanctuaryName, setSanctuaryName] = useState('');
  const [contactName, setContactName] = useState(prefillName);
  const [email, setEmail] = useState(prefillEmail);
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [animals, setAnimals] = useState('');
  const [errors, setErrors] = useState<{ sanctuaryName?: string; contactName?: string; email?: string; location?: string; animals?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { sanctuaryName?: string; contactName?: string; email?: string; location?: string; animals?: string } = {};

    if (!sanctuaryName.trim()) {
      newErrors.sanctuaryName = 'Please enter your sanctuary name.';
    }

    if (!contactName.trim()) {
      newErrors.contactName = 'Please enter your contact name.';
    } else if (/\d/.test(contactName)) {
      newErrors.contactName = 'Contact name should not contain numbers.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address (e.g., hello@yoursanctuary.org).';
    }

    if (!location.trim()) {
      newErrors.location = 'Please enter your sanctuary location.';
    }

    if (!animals.trim()) {
      newErrors.animals = 'Please provide a brief description of the animals in your care.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="glass-surface bg-background rounded-2xl p-10 border border-primary/40 flex flex-col items-center justify-center gap-4 shadow-lg text-center my-auto min-h-[400px]">
        <CheckCircle2 className="text-primary animate-bounce" size={48} />
        <h3 className="font-headline-md text-2xl text-secondary">Application Submitted</h3>
        <p className="font-body-md text-text-muted">
          Thank you, <strong className="text-primary">{contactName}</strong>! We will review <strong className="text-secondary">{sanctuaryName}</strong> and get back to you at <span className="text-secondary">{email}</span> within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="glass-surface rounded-2xl p-10 border border-border-main flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <input
          id="sanctuary-name"
          type="text"
          value={sanctuaryName}
          onChange={(e) => {
            setSanctuaryName(e.target.value);
            if (errors.sanctuaryName) setErrors((prev) => ({ ...prev, sanctuaryName: undefined }));
          }}
          placeholder="Sanctuary Name"
          className={`bg-surface border rounded-lg px-4 py-3.5 text-secondary font-body-md placeholder:text-text-muted/70 focus:outline-none transition-colors ${
            errors.sanctuaryName ? 'border-red-500 focus:border-red-500' : 'border-border-main focus:border-primary'
          }`}
        />
        {errors.sanctuaryName && (
          <span className="flex items-center gap-1.5 text-xs text-red-500 font-body-sm pl-1">
            <AlertCircle size={14} />
            {errors.sanctuaryName}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <input
          id="sanctuary-contact"
          type="text"
          value={contactName}
          onChange={(e) => {
            setContactName(e.target.value);
            if (errors.contactName) setErrors((prev) => ({ ...prev, contactName: undefined }));
          }}
          placeholder="Contact Name"
          className={`bg-surface border rounded-lg px-4 py-3.5 text-secondary font-body-md placeholder:text-text-muted/70 focus:outline-none transition-colors ${
            errors.contactName ? 'border-red-500 focus:border-red-500' : 'border-border-main focus:border-primary'
          }`}
        />
        {errors.contactName && (
          <span className="flex items-center gap-1.5 text-xs text-red-500 font-body-sm pl-1">
            <AlertCircle size={14} />
            {errors.contactName}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <input
          id="sanctuary-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          placeholder="Email Address (e.g., hello@yoursanctuary.org)"
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

      <div className="flex flex-col">
        <input
          id="sanctuary-website"
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Website (e.g., https://yoursanctuary.org)"
          className="bg-surface border border-border-main rounded-lg px-4 py-3.5 text-secondary font-body-md placeholder:text-text-muted/70 focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <input
          id="sanctuary-location"
          type="text"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            if (errors.location) setErrors((prev) => ({ ...prev, location: undefined }));
          }}
          placeholder="Location (City, Country — e.g., Perth, Australia)"
          className={`bg-surface border rounded-lg px-4 py-3.5 text-secondary font-body-md placeholder:text-text-muted/70 focus:outline-none transition-colors ${
            errors.location ? 'border-red-500 focus:border-red-500' : 'border-border-main focus:border-primary'
          }`}
        />
        {errors.location && (
          <span className="flex items-center gap-1.5 text-xs text-red-500 font-body-sm pl-1">
            <AlertCircle size={14} />
            {errors.location}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <textarea
          id="sanctuary-animals"
          rows={3}
          value={animals}
          onChange={(e) => {
            setAnimals(e.target.value);
            if (errors.animals) setErrors((prev) => ({ ...prev, animals: undefined }));
          }}
          placeholder="Animals in your care (brief description — e.g., We rescue farmed animals...)"
          className={`bg-surface border rounded-lg px-4 py-3.5 text-secondary font-body-md placeholder:text-text-muted/70 focus:outline-none transition-colors resize-none ${
            errors.animals ? 'border-red-500 focus:border-red-500' : 'border-border-main focus:border-primary'
          }`}
        />
        {errors.animals && (
          <span className="flex items-center gap-1.5 text-xs text-red-500 font-body-sm pl-1">
            <AlertCircle size={14} />
            {errors.animals}
          </span>
        )}
      </div>

      <button id="sanctuary-apply-btn" type="submit" className="w-full py-4 bg-primary text-[#FFDDEE] font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] rounded-full border-2 border-primary hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] transition-all active:scale-95 uppercase mt-1">
        Submit Application
      </button>
      <p className="font-body-sm text-[var(--text-body-sm)] text-text-subtle text-center select-none">All sanctuaries are verified to be cruelty-free and genuinely rescue-focused.</p>
    </form>
  );
}
