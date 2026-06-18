'use client';

import TopNav from '@/components/layout/TopNav';
import HowItWorks from '@/components/sections/HowItWorks';
import MultiImpactEngine from '@/components/sections/MultiImpactEngine';
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
        <HowItWorks />
        <MultiImpactEngine />
        <AppDemo />
        <Activate />
      </main>
    </>
  );
}
