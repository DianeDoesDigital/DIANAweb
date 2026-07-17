'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import TopNav from '@/components/layout/TopNav';
import Link from 'next/link';
import { Heart, ShieldCheck, Sparkles, ArrowRight, CheckCircle2, Copy } from 'lucide-react';

function JoinContent() {
  const searchParams = useSearchParams();
  const refParam = searchParams?.get('ref') || '';
  const referrer = refParam.trim().replace(/^@/, '').toLowerCase();

  const [handle, setHandle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setLoading(true);

    // Simulate saving to early access queue / attribution tracking
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#FFF0F7] text-[#0A0507] pt-24 pb-20 px-6 sm:px-12 flex flex-col items-center justify-center">
      <TopNav />
      
      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-xl border border-[#FF0099]/20 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-[#FF0099]/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF0099]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FF0099]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col items-center text-center z-10 relative">
          {referrer ? (
            <div className="inline-flex items-center gap-2 bg-[#FF0099]/10 border border-[#FF0099]/30 px-4 py-1.5 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[#FF0099] fill-[#FF0099]" />
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#FF0099] uppercase">
                Invited by @{referrer}
              </span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 bg-[#FF0099]/10 border border-[#FF0099]/30 px-4 py-1.5 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-[#FF0099]" />
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#FF0099] uppercase">
                Early Access Portal
              </span>
            </div>
          )}

          <h1 className="font-['Outfit'] text-3xl sm:text-5xl font-bold tracking-tight text-[#0A0507] mb-4">
            Join the Compassionate Network
          </h1>

          {referrer ? (
            <p className="font-['Inter'] text-sm sm:text-base text-[#0A0507]/80 max-w-lg mb-8 leading-relaxed">
              You have been personally invited by <span className="font-bold text-[#FF0099]">@{referrer}</span> to claim your identity on DIANA — our global digital infrastructure supporting verified animal sanctuaries and 100% vegan ethical businesses.
            </p>
          ) : (
            <p className="font-['Inter'] text-sm sm:text-base text-[#0A0507]/80 max-w-lg mb-8 leading-relaxed">
              Reserve your unique <span className="font-bold text-[#FF0099]">@handle</span> today. Connect with conscious consumers, ethical merchants, and animal sanctuaries worldwide.
            </p>
          )}

          {submitted ? (
            <div className="w-full bg-[#FFF0F8] border border-[#FF0099]/30 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center">
              <CheckCircle2 className="w-12 h-12 text-[#FF0099] mb-4" />
              <h3 className="font-['Outfit'] text-xl font-bold text-[#0A0507] mb-2">
                Welcome to DIANA, {name}!
              </h3>
              <p className="font-['Inter'] text-sm text-[#0A0507]/70 max-w-md mb-6 leading-relaxed">
                Your handle <span className="font-bold text-[#FF0099]">@{handle || name.toLowerCase().replace(/\s+/g, '')}</span> has been reserved under our Early Access protocol{referrer ? ` and attributed to @${referrer}` : ''}.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <Link
                  href="/sanctuaries"
                  className="bg-[#FF0099] text-white font-['Outfit'] font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-[#D4007D] transition-colors flex items-center justify-center gap-2"
                >
                  Explore Sanctuaries <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/merchants"
                  className="bg-white text-[#0A0507] border border-[#FF0099]/30 font-['Outfit'] font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-[#FFF0F8] transition-colors flex items-center justify-center"
                >
                  Discover 100% Vegan Merchants
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4 text-left">
              <div>
                <label className="block font-['Outfit'] text-xs font-bold uppercase tracking-wider text-[#0A0507]/70 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Diane"
                  className="w-full bg-white border border-[#FF0099]/20 rounded-xl px-4 py-3 font-['Inter'] text-sm text-[#0A0507] placeholder-[#0A0507]/30 focus:outline-none focus:border-[#FF0099] transition-colors"
                />
              </div>

              <div>
                <label className="block font-['Outfit'] text-xs font-bold uppercase tracking-wider text-[#0A0507]/70 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="diane@dianafortheanimals.org"
                  className="w-full bg-white border border-[#FF0099]/20 rounded-xl px-4 py-3 font-['Inter'] text-sm text-[#0A0507] placeholder-[#0A0507]/30 focus:outline-none focus:border-[#FF0099] transition-colors"
                />
              </div>

              <div>
                <label className="block font-['Outfit'] text-xs font-bold uppercase tracking-wider text-[#0A0507]/70 mb-1.5">
                  Desired Handle (@username)
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 font-['Outfit'] font-bold text-sm text-[#FF0099]">@</span>
                  <input
                    type="text"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value.replace(/\s+/g, '').toLowerCase())}
                    placeholder="diane"
                    className="w-full bg-white border border-[#FF0099]/20 rounded-xl pl-8 pr-4 py-3 font-['Inter'] text-sm text-[#0A0507] placeholder-[#0A0507]/30 focus:outline-none focus:border-[#FF0099] transition-colors"
                  />
                </div>
              </div>

              {referrer && (
                <div className="bg-[#FFF0F8] border border-[#FF0099]/20 rounded-xl px-4 py-2.5 flex items-center justify-between">
                  <span className="font-['Inter'] text-xs text-[#0A0507]/70">Attributing connection to:</span>
                  <span className="font-['Outfit'] font-bold text-xs text-[#FF0099]">@{referrer}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-[#FF0099] hover:bg-[#D4007D] disabled:opacity-50 text-white font-['Outfit'] font-bold text-sm sm:text-base py-4 rounded-xl shadow-lg shadow-[#FF0099]/25 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {loading ? 'Reserving Identity...' : 'Reserve Handle & Join Early Access'}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

export default function JoinPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FFF0F7] flex items-center justify-center text-[#FF0099] font-['Outfit'] font-bold">Loading DIANA Network...</div>}>
      <JoinContent />
    </Suspense>
  );
}
