'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Cat, X } from 'lucide-react';

export default function GlobalAppDemo() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showExplainer, setShowExplainer] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openAppDemo', handleOpen);
    return () => window.removeEventListener('openAppDemo', handleOpen);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset explainer state when closed so it shows again next time
      setTimeout(() => setShowExplainer(true), 300);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isMounted) return null;

  return (
    <>
      {/* Modal Overlay */}
      <div 
        className={`fixed inset-0 z-[200] flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[#0A0507]/80 backdrop-blur-sm cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        {/* Modal Container */}
        <div 
          className={`relative z-10 transition-all duration-500 transform ${
            isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
          } w-full h-full md:w-auto md:h-auto flex items-center justify-center`}
        >
          {/* Close button - visible mostly on desktop, but absolute top-right */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 md:-top-12 md:-right-12 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors z-50"
          >
            <X size={24} />
          </button>

          {/* Phone Frame */}
          <div className="relative w-full h-full md:w-[320px] md:h-[640px] md:rounded-[40px] md:border-[8px] border-[#0A0507] bg-[#0A0507] shadow-2xl overflow-hidden flex flex-col">
            
            {/* Explainer Overlay & Notch */}
            {showExplainer && (
              <>
                {/* Notch (desktop only) */}
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0A0507] rounded-b-2xl z-40"></div>
                
                <div className="absolute inset-0 z-30 bg-[#FFDDEE] flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                  <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-5 w-[90%] flex flex-col items-center shadow-sm border border-white/50">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      <img src="/diana-logo.png" alt="DIANA" className="w-full h-full object-contain drop-shadow-md" />
                    </div>
                    <h3 className="font-headline-lg text-[22px] text-primary mb-3">App Demo</h3>
                    <p className="font-body-sm text-secondary font-medium leading-tight mb-4 text-xs">
                      Try any feature first-hand without entering personal or payment details.
                    </p>
                    <button
                      onClick={() => setShowExplainer(false)}
                      className="w-full py-3 bg-primary text-white rounded-full font-label-caps tracking-[0.2em] text-xs uppercase hover:scale-105 transition-transform shadow-[0_4px_14px_rgba(255,0,153,0.39)]"
                    >
                      LET'S GO!
                    </button>
                    <p className="text-[8px] text-text-muted mt-4 leading-tight px-1 font-body-sm">
                      Data is for demo purposes only. Risk-free exploration.
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Iframe */}
            {isOpen && (
              <div className="relative flex-1 w-full h-full overflow-hidden bg-background">
                {/* On mobile, we don't scale it down because it fills screen. On desktop, we scale it to fit the 320x640 frame if the iframe assumes a larger viewport, but since the iframe is responsive, we might just let it be 100%. The previous AppDemo used a transform: scale(0.7) because the frame was 260x520. Let's make it responsive. */}
                <iframe
                  id="diana-global-app-demo-iframe"
                  src="https://appdemo.dianafortheanimals.org/nexus"
                  title="DIANA App Demo"
                  allow="camera; microphone"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 'calc(100% / 0.8)',
                    height: 'calc(100% / 0.8)',
                    transform: 'scale(0.8)',
                    transformOrigin: 'top left',
                    border: 'none',
                  }}
                  className="bg-background z-10"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
