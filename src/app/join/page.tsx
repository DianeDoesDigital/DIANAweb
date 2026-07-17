'use client';

import React, { useState, useEffect } from 'react';
import TopNav from '@/components/layout/TopNav';
import Link from 'next/link';
import { Heart, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function JoinPage() {
  const [referrer, setReferrer] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const refParam = params.get('ref') || '';
      if (refParam) {
        setReferrer(refParam.trim().replace(/^@/, '').toLowerCase());
      }
    }
  }, []);

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
    <main className="snap-start min-h-screen bg-[#FFF0F7] text-[#0A0507] pt-24 pb-20 px-6 sm:px-12 flex flex-col items-center justify-center">
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
            <div className="bg-[#FFF0F8] border border-[#FF0099]/30 rounded-2xl p-6 sm:p-8 w-full max-w-md flex flex-col items-center gap-4 animate-fade-in">
              <div className="w-12 h-12 bg-[#FF0099]/10 rounded-full flex items-center justify-center text-[#FF0099]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-['Outfit'] text-xl font-bold text-[#0A0507]">Handle Reserved!</h3>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#0A0507]/80 text-center leading-relaxed">
                You are on the priority entry list as <span className="font-bold text-[#FF0099]">@{handle || name.toLowerCase().replace(/\s+/g, '')}</span>. We will notify <span className="font-semibold text-[#0A0507]">{email}</span> the instant your portal unlocks.
              </p>
              <div className="mt-4 pt-4 border-t border-[#FF0099]/10 w-full flex flex-col items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#FF0099]">Next Step</span>
                <Link
                  href="https://expo.dev/artifacts/eas/jY6Yd8zV1aGZ2K4Vb6uD8k.apk"
                  target="_blank"
                  className="w-full bg-[#FF0099] hover:bg-[#D4007D] text-white font-['Outfit'] font-bold text-sm py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Download DIANA Android APK</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4 text-left">
              <div>
                <label className="block font-['Outfit'] text-xs font-bold uppercase tracking-wider text-[#0A0507]/70 mb-1.5">
                  Full Name or Organisation Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Diane Rose"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-[#0A0507]/15 rounded-xl px-4 py-3 font-['Inter'] text-sm focus:outline-none focus:border-[#FF0099] focus:ring-2 focus:ring-[#FF0099]/10 transition-all text-[#0A0507]"
                />
              </div>

              <div>
                <label className="block font-['Outfit'] text-xs font-bold uppercase tracking-wider text-[#0A0507]/70 mb-1.5">
                  Desired Handle (@username)
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-[#0A0507]/40 font-bold">@</span>
                  <input
                    type="text"
                    placeholder="diane"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                    className="w-full bg-white border border-[#0A0507]/15 rounded-xl pl-8 pr-4 py-3 font-['Inter'] text-sm focus:outline-none focus:border-[#FF0099] focus:ring-2 focus:ring-[#FF0099]/10 transition-all text-[#0A0507]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-['Outfit'] text-xs font-bold uppercase tracking-wider text-[#0A0507]/70 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="diane@dianafortheanimals.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-[#0A0507]/15 rounded-xl px-4 py-3 font-['Inter'] text-sm focus:outline-none focus:border-[#FF0099] focus:ring-2 focus:ring-[#FF0099]/10 transition-all text-[#0A0507]"
                />
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
