'use client';

import MissionHero from '@/components/sections/MissionHero';
import TopNav from '@/components/layout/TopNav';
import MissionBody from '@/components/sections/MissionBody';

export default function MissionPage() {
  return (
    <>
      <MissionHero playVideo={false} />
      <TopNav />
      <MissionBody />
    </>
  );
}
