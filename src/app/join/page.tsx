'use client';

import React, { useState, useEffect } from 'react';
import TopNav from '@/components/layout/TopNav';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, CheckCircle2, Eye, EyeClosed, Cat } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function JoinPage() {
  const [referrer, setReferrer] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const refParam = params.get('ref');
      const emailParam = params.get('email') || params.get('e');
      const nameParam = params.get('name') || params.get('n');

      if (refParam) {
        setReferrer(refParam.trim().toLowerCase().replace(/^@/, ''));
      } else if (emailParam) {
        // All waitlist blast subscribers were invited by Diane
        setReferrer('diane');
      }

      if (emailParam) {
        setEmail(emailParam.trim().toLowerCase());
      }
      if (nameParam) {
        setName(nameParam.trim());
      }
    }
  }, []);

  const [handle, setHandle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !password) return;
    if (password.length < 6 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>\-_+=\/\\[\]~']/.test(password)) {
      setErrorMessage('Password must be at least 6 characters long and contain at least 1 uppercase letter, 1 number, and 1 special character.');
      return;
    }
    setLoading(true);
    setErrorMessage('');

    try {
      const cleanHandle = handle && handle.trim().length > 0
        ? handle.trim().toLowerCase().replace(/[^a-z0-9_]/g, '')
        : name.toLowerCase().replace(/[^a-z0-9_]/g, '') || `user_${Math.floor(1000 + Math.random() * 9000)}`;

      const forbiddenHandles = ['diana', 'd1ana', 'admin', 'system', 'root', 'support', 'official', 'help', 'drgm', 'moderator', 'staff', 'security'];
      if (forbiddenHandles.includes(cleanHandle) || cleanHandle.includes('diana') || cleanHandle.includes('d1ana')) {
        setErrorMessage(`The handle "@${cleanHandle}" is reserved for official DIANA system identity and cannot be registered. Please choose another handle.`);
        setLoading(false);
        return;
      }

      // 1. Create real Supabase Auth user
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password,
        options: {
          data: {
            name: name.trim(),
            role: 'personal',
          },
        },
      });

      if (error && !error.message.toLowerCase().includes('already registered')) {
        throw error;
      }

      const userId = data?.user?.id;
      if (userId) {
        // 2. Insert real Advocate Profile with referral attribution
        await supabase.from('profiles').upsert({
          id: userId,
          email: email.trim().toLowerCase(),
          name: name.trim(),
          username: cleanHandle,
          type: 'personal',
          preferred_currency: 'PHP',
          referred_by: referrer || null,
        });

        // 3. Trigger Welcome Email asynchronously
        try {
          await supabase.functions.invoke('welcome-email', {
            body: {
              record: {
                email: email.trim(),
                name: name.trim() || 'Advocate',
                role: 'personal',
              },
            },
          });
        } catch (invErr) {
          console.warn('Welcome email trigger warning:', invErr);
        }
      }

      setLoading(false);
      setSubmitted(true);
    } catch (err: any) {
      setLoading(false);
      setErrorMessage(err?.message || 'Something went wrong while creating your profile. Please try again.');
    }
  };

  return (
    <main className="snap-start min-h-screen bg-[#ffddee] text-[#0A0507] pt-24 pb-20 px-6 sm:px-12 flex flex-col items-center justify-center">
      <TopNav />
      
      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-xl border border-[#FF0099]/20 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-[#FF0099]/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF0099]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FF0099]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col items-center text-center z-10 relative">
          {referrer ? (
            <div className="inline-flex items-center justify-center bg-[#FF0099]/10 border border-[#FF0099]/30 px-4 py-1.5 rounded-full mb-6">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#FF0099] uppercase">
                Invited by @{referrer}
              </span>
            </div>
          ) : null}

          <h1 className="font-['Outfit'] text-3xl sm:text-5xl font-bold tracking-tight text-[#0A0507] mb-4">
            Join the Compassionate Network
          </h1>

          {referrer ? (
            <p className="font-['Inter'] text-sm sm:text-base text-[#0A0507]/80 max-w-lg mb-4 leading-relaxed">
              You have been personally invited by <span className="font-bold text-[#FF0099]">@{referrer}</span> to claim your identity on DIANA — our global digital infrastructure supporting verified animal sanctuaries and 100% vegan ethical businesses.
            </p>
          ) : (
            <p className="font-['Inter'] text-sm sm:text-base text-[#0A0507]/80 max-w-lg mb-4 leading-relaxed">
              Reserve your unique <span className="font-bold text-[#FF0099]">@handle</span> today. Connect with animal sanctuaries, conscious consumers, and ethical merchants worldwide.
            </p>
          )}

          <div className="bg-[#FF0099]/10 border border-[#FF0099]/25 rounded-2xl p-4 max-w-lg mb-8 text-center shadow-sm">
            <p className="font-['Inter'] text-xs sm:text-sm text-[#0A0507]/90 leading-relaxed font-medium">
              All users must start with an individual Advocate account. Representing a Sanctuary or Business? You can list and verify your organisation directly from your Profile once inside the app.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#FFF0F8] border border-[#FF0099]/30 rounded-2xl p-6 sm:p-8 w-full max-w-md flex flex-col items-center gap-4 animate-fade-in">
              <div className="w-12 h-12 bg-[#FF0099]/10 rounded-full flex items-center justify-center text-[#FF0099]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-['Outfit'] text-xl font-bold text-[#0A0507]">Account Created & Handle Reserved!</h3>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#0A0507]/80 text-center leading-relaxed">
                You are officially registered on the DIANA network as <span className="font-bold text-[#FF0099]">@{handle || name.toLowerCase().replace(/\s+/g, '')}</span> with your email <span className="font-semibold text-[#0A0507]">{email}</span>.
              </p>
              <div className="mt-4 pt-4 border-t border-[#FF0099]/10 w-full flex flex-col items-center gap-3">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#FF0099] bg-[#FF0099]/10 px-3 py-1 rounded-full">
                  You&apos;re All Set! 🎉
                </span>
                <p className="font-['Inter'] text-xs text-[#0A0507]/80 text-center leading-relaxed">
                  Your profile credentials and unique handle <strong className="text-[#FF0099]">@{handle || name.toLowerCase().replace(/\s+/g, '')}</strong> are securely locked into the DIANA cloud.
                </p>
                <p className="font-['Inter'] text-xs text-[#0A0507]/65 text-center leading-relaxed">
                  Keep an eye on your inbox—we will notify you the moment our iOS and Android mobile releases are ready for download. See you inside the Nexus soon! 😻
                </p>
                <Link
                  href="/"
                  className="w-full bg-[#FF0099] hover:bg-[#D4007D] text-white font-['Outfit'] font-bold text-sm py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-2"
                >
                  <span>Explore DIANA Ecosystem</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4 text-left">
              {errorMessage ? (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl font-['Inter'] text-xs font-semibold">
                  {errorMessage}
                </div>
              ) : null}

              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-[#0A0507]/15 rounded-xl px-4 py-3.5 font-['Inter'] text-sm focus:outline-none focus:border-[#FF0099] focus:ring-2 focus:ring-[#FF0099]/10 transition-all text-[#0A0507] placeholder:text-[#0A0507]/45"
                />
              </div>

              <div>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-[#0A0507]/45 font-bold font-['Inter'] text-sm">@</span>
                  <input
                    type="text"
                    placeholder="yourhandle"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                    className="w-full bg-white border border-[#0A0507]/15 rounded-xl pl-8 pr-4 py-3.5 font-['Inter'] text-sm focus:outline-none focus:border-[#FF0099] focus:ring-2 focus:ring-[#FF0099]/10 transition-all text-[#0A0507] placeholder:text-[#0A0507]/45"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Email address (example@d1ana.app)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-[#0A0507]/15 rounded-xl px-4 py-3.5 font-['Inter'] text-sm focus:outline-none focus:border-[#FF0099] focus:ring-2 focus:ring-[#FF0099]/10 transition-all text-[#0A0507] placeholder:text-[#0A0507]/45"
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  className="w-full bg-white border border-[#0A0507]/15 rounded-xl px-4 pr-12 py-3.5 font-['Inter'] text-sm focus:outline-none focus:border-[#FF0099] focus:ring-2 focus:ring-[#FF0099]/10 transition-all text-[#0A0507] placeholder:text-[#0A0507]/45"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-[#0A0507]/45 hover:text-[#FF0099] transition-colors focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeClosed className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                {(passwordFocused || (password.length > 0 && (password.length < 6 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>\-_+=\/\\[\]~']/.test(password)))) && (
                  <div className="absolute bottom-full left-0 right-0 mb-3 bg-white/95 backdrop-blur-xl border border-[#FF0099]/30 rounded-2xl p-4 flex flex-col gap-2.5 shadow-2xl shadow-[#FF0099]/10 z-50 transition-all animate-fade-in text-left text-[#0A0507]">
                    {/* Tooltip arrow pointing down to the input */}
                    <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white/95 border-b border-r border-[#FF0099]/30 transform rotate-45 pointer-events-none" />

                    <div className="flex items-center justify-between border-b border-[#0A0507]/10 pb-1.5 z-10 relative">
                      <span className="font-['Outfit'] text-[11px] uppercase tracking-wider font-bold text-[#0A0507]/70">
                        Password Requirements
                      </span>
                      <span className="font-['Outfit'] text-[10px] uppercase font-bold text-[#FF0099]">
                        Required for Security
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5 z-10 relative">
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${password.length >= 6 ? 'bg-[#FF0099] text-white' : 'bg-[#0A0507]/10 text-[#0A0507]/40'}`}>
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <span className={`font-['Inter'] text-xs font-medium transition-colors ${password.length >= 6 ? 'text-[#0A0507] font-bold' : 'text-[#0A0507]/65'}`}>
                          At least 6 characters
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${/[A-Z]/.test(password) ? 'bg-[#FF0099] text-white' : 'bg-[#0A0507]/10 text-[#0A0507]/40'}`}>
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <span className={`font-['Inter'] text-xs font-medium transition-colors ${/[A-Z]/.test(password) ? 'text-[#0A0507] font-bold' : 'text-[#0A0507]/65'}`}>
                          At least 1 uppercase letter (A-Z)
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${/\d/.test(password) ? 'bg-[#FF0099] text-white' : 'bg-[#0A0507]/10 text-[#0A0507]/40'}`}>
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <span className={`font-['Inter'] text-xs font-medium transition-colors ${/\d/.test(password) ? 'text-[#0A0507] font-bold' : 'text-[#0A0507]/65'}`}>
                          At least 1 number (0-9)
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${/[!@#$%^&*(),.?":{}|<>\-_+=\/\\[\]~']/.test(password) ? 'bg-[#FF0099] text-white' : 'bg-[#0A0507]/10 text-[#0A0507]/40'}`}>
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <span className={`font-['Inter'] text-xs font-medium transition-colors ${/[!@#$%^&*(),.?":{}|<>\-_+=\/\\[\]~']/.test(password) ? 'text-[#0A0507] font-bold' : 'text-[#0A0507]/65'}`}>
                          At least 1 special character (!, @, #, $, %, etc.)
                        </span>
                      </div>
                    </div>

                    {password.length >= 6 && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>\-_+=\/\\[\]~']/.test(password) && (
                      <div className="mt-1 pt-2 border-t border-[#0A0507]/10 flex items-center justify-between animate-fade-in z-10 relative">
                        <span className="font-['Inter'] text-xs text-[#0A0507]/80 font-bold">Secure Password Ready</span>
                        <span className="font-['Outfit'] text-[10px] uppercase font-bold bg-[#FF0099] text-white px-2.5 py-1 rounded-full tracking-wider shadow-sm">
                          Valid & Strong
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-[#FF0099] hover:bg-[#D4007D] disabled:opacity-50 text-white font-['Outfit'] font-bold text-sm sm:text-base py-4 rounded-xl shadow-lg shadow-[#FF0099]/25 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {loading ? 'Creating Account & Reserving Handle...' : 'Create Advocate Account & Reserve Handle'}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
