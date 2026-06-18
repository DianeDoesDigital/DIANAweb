'use client';

import { useSearchParams } from 'next/navigation';

export default function MerchantApplicationForm() {
  const searchParams = useSearchParams();
  const prefillName = searchParams.get('name') || '';
  const prefillEmail = searchParams.get('email') || '';

  return (
    <form className="glass-surface rounded-2xl p-10 border border-border-main flex flex-col gap-6">
      {[
        { id: 'merchant-name', label: 'Business Name', type: 'text', placeholder: 'Your business name' },
        { id: 'merchant-contact', label: 'Contact Name', type: 'text', placeholder: 'Your full name', defaultValue: prefillName },
        { id: 'merchant-email', label: 'Email Address', type: 'email', placeholder: 'hello@yourbusiness.com', defaultValue: prefillEmail },
        { id: 'merchant-website', label: 'Website (optional)', type: 'url', placeholder: 'https://yourbusiness.com' },
      ].map((field) => (
        <div key={field.id} className="flex flex-col gap-2">
          <label htmlFor={field.id} className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-muted uppercase">
            {field.label}
          </label>
          <input
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            defaultValue={field.defaultValue}
            className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] placeholder:text-text-subtle focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <label htmlFor="merchant-category" className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-muted uppercase">Business Category</label>
        <select id="merchant-category" className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] focus:outline-none focus:border-primary/50 transition-colors">
          <option value="">Select a category</option>
          {['Food & Drink', 'Retail', 'Wellness', 'Experiences', 'Travel', 'Professionals', 'Resources', 'Entertainment'].map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="merchant-pledge" className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-muted uppercase">Pledge Commitment</label>
        <select id="merchant-pledge" className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] focus:outline-none focus:border-primary/50 transition-colors">
          <option value="5">5% (minimum)</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
          <option value="20">20%+</option>
        </select>
      </div>
      <button id="merchant-apply-btn" type="submit" className="w-full py-4 bg-primary text-[#FFDDEE] font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] rounded-full border-2 border-primary hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] transition-all active:scale-95 uppercase mt-2">
        Submit Application
      </button>
      <p className="font-body-sm text-[var(--text-body-sm)] text-text-subtle text-center select-none">We review every application manually. We'll get back to you within 48 hours.</p>
    </form>
  );
}
