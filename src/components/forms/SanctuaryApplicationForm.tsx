'use client';

import { useSearchParams } from 'next/navigation';

export default function SanctuaryApplicationForm() {
  const searchParams = useSearchParams();
  const prefillName = searchParams.get('name') || '';
  const prefillEmail = searchParams.get('email') || '';

  return (
    <form className="glass-surface rounded-2xl p-10 border border-border-main flex flex-col gap-6">
      {[
        { id: 'sanctuary-name', label: 'Sanctuary Name', type: 'text', placeholder: 'Your sanctuary name' },
        { id: 'sanctuary-contact', label: 'Contact Name', type: 'text', placeholder: 'Your full name', defaultValue: prefillName },
        { id: 'sanctuary-email', label: 'Email Address', type: 'email', placeholder: 'hello@yoursanctuary.org', defaultValue: prefillEmail },
        { id: 'sanctuary-website', label: 'Website (optional)', type: 'url', placeholder: 'https://yoursanctuary.org' },
        { id: 'sanctuary-location', label: 'Location (City, Country)', type: 'text', placeholder: 'e.g. Perth, Australia' },
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
        <label htmlFor="sanctuary-animals" className="font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-muted uppercase">Animals in your care (brief description)</label>
        <textarea id="sanctuary-animals" rows={3} placeholder="e.g. We care for rescued pigs, cows, and chickens..." className="bg-surface border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md text-[var(--text-body-md)] placeholder:text-text-subtle focus:outline-none focus:border-primary/50 transition-colors resize-none" />
      </div>
      <button id="sanctuary-apply-btn" type="submit" className="w-full py-4 bg-primary text-[#FFDDEE] font-label-caps font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] rounded-full border-2 border-primary hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] transition-all active:scale-95 uppercase mt-2">
        Submit
      </button>
      <p className="font-body-sm text-[var(--text-body-sm)] text-text-subtle text-center select-none">All sanctuaries are verified to be cruelty-free and genuinely rescue-focused.</p>
    </form>
  );
}
