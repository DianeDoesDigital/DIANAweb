'use client';

import { useState, useEffect, useRef } from 'react';

const DEFAULT_IMAGES = [
  '/images/carousel/pay-01.jpg',
  '/images/carousel/pay-02.jpg',
  '/images/carousel/pay-03.jpg',
  '/images/carousel/pay-04.jpg',
  '/images/carousel/pay-05.jpg',
  '/images/carousel/pay-06.jpg',
  '/images/carousel/pay-07.jpg',
  '/images/carousel/pay-08.jpg',
  '/images/carousel/pay-09.jpg',
  '/images/carousel/pay-10.jpg',
];

interface PaymentCarouselProps {
  images?: string[];
}

export default function PaymentCarousel({ images = DEFAULT_IMAGES }: PaymentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Start when at least 50% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500); // 2.5 seconds per slide
    
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <div ref={containerRef} className="relative w-full aspect-[3/4] bg-surface rounded-2xl overflow-hidden border border-border-main glass-surface shadow-lg group">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`Payment step ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:scale-[1.02] ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
