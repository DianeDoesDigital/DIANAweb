'use client';

import TopNav from '@/components/layout/TopNav';
import HowItWorks from '@/components/sections/HowItWorks';
import MultiImpactEngine from '@/components/sections/MultiImpactEngine';
import GlobalTravelWallet from '@/components/sections/GlobalTravelWallet';
import PageSplash from '@/components/sections/PageSplash';
import Activate from '@/components/sections/Activate';

export default function AdvocatesPage() {
  const scrollToActivate = () => {
    document.getElementById('activate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <PageSplash 
        title={<>Your lifestyle. Their <span className="text-primary">lifeline.</span></>}
        subtitle="Turn your everyday choices into a continuous stream of support for animal sanctuaries."
        images={[
          'https://images.unsplash.com/photo-1548263594-a71ea65a8598?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1920&q=80'
        ]}
        enterText="BECOME AN ADVOCATE"
      />
      <TopNav onActivate={scrollToActivate} />
      <main className="bg-background text-secondary">
        <HowItWorks />
        <GlobalTravelWallet />
        <MultiImpactEngine />
        <Activate />
      </main>
    </>
  );
}


