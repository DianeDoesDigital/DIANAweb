'use client';

import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { AlertCircle, CheckCircle2, ChevronDown, Check } from 'lucide-react';

const CATEGORIES = [
  'Food & Drink',
  'Retail',
  'Wellness',
  'Experiences',
  'Travel',
  'Professionals',
  'Resources',
  'Entertainment',
];

export default function MerchantApplicationForm() {
  const searchParams = useSearchParams();
  const prefillName = searchParams.get('name') || '';
  const prefillEmail = searchParams.get('email') || '';

  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState(prefillName);
  const [email, setEmail] = useState(prefillEmail);
  const [website, setWebsite] = useState('');
  const [category, setCategory] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [pledge, setPledge] = useState<number | ''>('');
  const [errors, setErrors] = useState<{ businessName?: string; contactName?: string; email?: string; category?: string; pledge?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const validate = () => {
    const newErrors: { businessName?: string; contactName?: string; email?: string; category?: string; pledge?: string } = {};

    if (!businessName.trim()) {
      newErrors.businessName = 'Please enter your business name.';
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
      newErrors.email = 'Please enter a valid email address (e.g., hello@yourbusiness.com).';
    }

    if (!category) {
      newErrors.category = 'Please select a business category.';
    }

    if (pledge === '' || pledge < 5) {
      newErrors.pledge = 'Pledge commitment must be at least 5%.';
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
          Thank you, <strong className="text-primary">{contactName}</strong>! We will review <strong className="text-secondary">{businessName}</strong> and get back to you at <span className="text-secondary">{email}</span> within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="glass-surface rounded-2xl p-10 border border-border-main flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <input
          id="merchant-name"
          type="text"
          value={businessName}
          onChange={(e) => {
            setBusinessName(e.target.value);
            if (errors.businessName) setErrors((prev) => ({ ...prev, businessName: undefined }));
          }}
          placeholder="Business Name"
          className={`bg-surface border rounded-lg px-4 py-3.5 text-secondary font-body-md placeholder:text-text-muted/70 focus:outline-none transition-colors ${
            errors.businessName ? 'border-red-500 focus:border-red-500' : 'border-border-main focus:border-primary'
          }`}
        />
        {errors.businessName && (
          <span className="flex items-center gap-1.5 text-xs text-red-500 font-body-sm pl-1">
            <AlertCircle size={14} />
            {errors.businessName}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <input
          id="merchant-contact"
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
          id="merchant-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          placeholder="Email Address (e.g., hello@yourbusiness.com)"
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
          id="merchant-website"
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Website (e.g., https://yourbusiness.com)"
          className="bg-surface border border-border-main rounded-lg px-4 py-3.5 text-secondary font-body-md placeholder:text-text-muted/70 focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Custom Sleek Dropdown for Category */}
      <div className="flex flex-col gap-1.5 relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className={`w-full bg-surface border rounded-lg px-4 py-3.5 flex items-center justify-between text-left font-body-md transition-colors ${
            errors.category ? 'border-red-500' : isCategoryOpen ? 'border-primary shadow-[0_0_15px_rgba(255,0,153,0.15)]' : 'border-border-main hover:border-primary/50'
          }`}
        >
          <span className={category ? 'text-secondary' : 'text-text-muted/70'}>
            {category || 'Select Business Category'}
          </span>
          <ChevronDown size={18} className={`text-primary transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} />
        </button>

        {isCategoryOpen && (
          <div className="absolute z-50 top-full left-0 w-full mt-2 bg-white border border-border-main rounded-xl shadow-2xl overflow-hidden py-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setCategory(c);
                  setIsCategoryOpen(false);
                  if (errors.category) setErrors((prev) => ({ ...prev, category: undefined }));
                }}
                className={`w-full px-4 py-3 text-left flex items-center justify-between text-sm font-medium transition-colors ${
                  category === c ? 'bg-primary/15 text-primary font-bold' : 'text-secondary hover:bg-primary/5 hover:text-primary'
                }`}
              >
                <span>{c}</span>
                {category === c && <Check size={16} className="text-primary shrink-0" />}
              </button>
            ))}
          </div>
        )}

        {errors.category && (
          <span className="flex items-center gap-1.5 text-xs text-red-500 font-body-sm pl-1">
            <AlertCircle size={14} />
            {errors.category}
          </span>
        )}
      </div>

      {/* Merchant Pledge Input */}
      <div className="flex flex-col gap-1.5">
        <input
          id="merchant-pledge"
          type="number"
          min={5}
          value={pledge}
          onChange={(e) => {
            setPledge(e.target.value ? Number(e.target.value) : '');
            if (errors.pledge) setErrors((prev) => ({ ...prev, pledge: undefined }));
          }}
          placeholder="Merchant Pledge % (Minimum 5)"
          className={`bg-surface border rounded-lg px-4 py-3.5 text-secondary font-body-md placeholder:text-text-muted/70 focus:outline-none transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
            errors.pledge ? 'border-red-500 focus:border-red-500' : 'border-border-main focus:border-primary'
          }`}
        />
        {errors.pledge && (
          <span className="flex items-center gap-1.5 text-xs text-red-500 font-body-sm pl-1">
            <AlertCircle size={14} />
            {errors.pledge}
          </span>
        )}
      </div>

      <button id="merchant-apply-btn" type="submit" className="w-full py-4 bg-primary text-[#FFDDEE] font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] rounded-full border-2 border-primary hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] transition-all active:scale-95 uppercase mt-1">
        Submit Application
      </button>
      <p className="font-body-sm text-[var(--text-body-sm)] text-text-subtle text-center select-none">We review every application manually. We&apos;ll get back to you within 48 hours.</p>
    </form>
  );
}
