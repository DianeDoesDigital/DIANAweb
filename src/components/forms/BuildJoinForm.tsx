'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function BuildJoinForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-surface rounded-2xl p-8 md:p-10 border border-border-main flex flex-col gap-6 relative overflow-hidden">
      {/* Success overlay */}
      <div 
        className={`absolute inset-0 bg-surface/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center transition-all duration-500 ${
          isSuccess ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <CheckCircle2 className="text-primary" size={32} />
        </div>
        <h3 className="font-headline-md text-2xl text-secondary mb-2">Message Received</h3>
        <p className="font-body-sm text-text-muted text-center max-w-xs">
          Thank you for reaching out. A core team member will be in touch within 48 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-label-caps tracking-[0.1em] text-xs text-text-subtle uppercase">Full Name</label>
          <input 
            id="name" 
            type="text" 
            required
            placeholder="Your name" 
            className="bg-background border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md placeholder:text-text-subtle focus:outline-none focus:border-primary/50 transition-colors" 
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-label-caps tracking-[0.1em] text-xs text-text-subtle uppercase">Email</label>
          <input 
            id="email" 
            type="email" 
            required
            placeholder="you@example.com" 
            className="bg-background border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md placeholder:text-text-subtle focus:outline-none focus:border-primary/50 transition-colors" 
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="role" className="font-label-caps tracking-[0.1em] text-xs text-text-subtle uppercase">How do you want to contribute?</label>
        <select 
          id="role" 
          required
          className="bg-background border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md focus:outline-none focus:border-primary/50 transition-colors appearance-none"
        >
          <option value="" disabled selected>Select a role...</option>
          <option value="core-team">Core Team (Sweat Equity)</option>
          <option value="community-contributor">Community Contributor (Flexible)</option>
          <option value="financial-investor">Financial Investor</option>
          <option value="strategic-advisor">Strategic Advisor</option>
          <option value="global-ambassador">Global Ambassador</option>
          <option value="ecosystem-partner">Ecosystem Partner / Sponsor</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-label-caps tracking-[0.1em] text-xs text-text-subtle uppercase">Tell us more</label>
        <textarea 
          id="message" 
          rows={4}
          required
          placeholder="Briefly describe your background, interest, or what you'd like to build with us." 
          className="bg-background border border-border-main rounded-lg px-4 py-3 text-secondary font-body-md placeholder:text-text-subtle focus:outline-none focus:border-primary/50 transition-colors resize-none" 
        />
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full py-4 mt-2 bg-primary text-[#FFDDEE] font-label-caps tracking-[0.1em] rounded-full border-2 border-primary hover:shadow-[0_8px_30px_rgba(255,0,153,0.45)] transition-all active:scale-95 uppercase flex items-center justify-center gap-2 disabled:opacity-70 disabled:active:scale-100 disabled:hover:shadow-none"
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
