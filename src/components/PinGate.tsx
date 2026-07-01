'use client';

import React, { useState, useEffect, useRef } from 'react';

const CORRECT_PIN = '81315';
const SESSION_KEY = 'diana_deck_unlocked';

export default function PinGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      setUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (pin.length === CORRECT_PIN.length) {
      if (pin === CORRECT_PIN) {
        sessionStorage.setItem(SESSION_KEY, 'true');
        setError(false);
        setTimeout(() => setUnlocked(true), 300);
      } else {
        setError(true);
        setTimeout(() => {
          setPin('');
          setError(false);
          inputRef.current?.focus();
        }, 600);
      }
    }
  }, [pin]);

  if (!mounted) return null;
  if (unlocked) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff0099]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-8 text-center">
        {/* Logo */}
        <img src="/diana-logo.png" alt="DIANA" className="h-16 w-auto drop-shadow-lg opacity-90" />

        <div className="space-y-2">
          <h1 className="text-white font-semibold text-2xl tracking-tight">Private Access</h1>
          <p className="text-white/40 text-sm">Enter your PIN to continue</p>
        </div>

        {/* PIN dots */}
        <div className="flex gap-4" onClick={() => inputRef.current?.focus()}>
          {Array.from({ length: CORRECT_PIN.length }).map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                error
                  ? 'border-red-500 bg-red-500'
                  : pin.length > i
                  ? 'border-[#ff0099] bg-[#ff0099] scale-110'
                  : 'border-white/20 bg-transparent'
              }`}
            />
          ))}
        </div>

        {/* Hidden real input */}
        <input
          ref={inputRef}
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={CORRECT_PIN.length}
          value={pin}
          onChange={(e) => {
            const val = e.target.value.replace(/\D/g, '');
            if (val.length <= CORRECT_PIN.length) setPin(val);
          }}
          autoFocus
          className="absolute opacity-0 w-0 h-0 pointer-events-none"
          aria-label="PIN entry"
        />

        {/* Numpad for mobile */}
        <div className="grid grid-cols-3 gap-3 mt-2">
          {[1,2,3,4,5,6,7,8,9,'',0,'⌫'].map((key, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (key === '⌫') {
                  setPin(p => p.slice(0, -1));
                } else if (key !== '') {
                  const next = pin + String(key);
                  if (next.length <= CORRECT_PIN.length) setPin(next);
                }
              }}
              disabled={key === ''}
              className={`w-16 h-16 rounded-2xl text-xl font-semibold transition-all duration-150 
                ${key === '' 
                  ? 'opacity-0 pointer-events-none' 
                  : 'bg-white/5 border border-white/10 text-white hover:bg-[#ff0099]/20 hover:border-[#ff0099]/40 active:scale-95'
                }`}
            >
              {key}
            </button>
          ))}
        </div>

        {error && (
          <p className="text-red-400 text-xs font-semibold animate-in fade-in duration-200">
            Incorrect PIN. Try again.
          </p>
        )}
      </div>
    </div>
  );
}
