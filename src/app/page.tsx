'use client';

import TopNav from '@/components/layout/TopNav';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import DoubleImpactEngine from '@/components/sections/DoubleImpactEngine';
import AppDemo from '@/components/sections/AppDemo';
import Activate from '@/components/sections/Activate';

export default function Home() {
  const scrollToActivate = () => {
    document.getElementById('activate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <TopNav onActivate={scrollToActivate} />
      <main>
        <Hero onActivate={scrollToActivate} />
        <HowItWorks />
        <DoubleImpactEngine />
        <AppDemo />
        <Activate />
      </main>
    </>
  );
}
