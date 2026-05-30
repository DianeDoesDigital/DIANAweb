'use client';

import { useState } from 'react';
import TopNav from '@/components/layout/TopNav';
import Hero from '@/components/sections/Hero';
import DoubleImpactEngine from '@/components/sections/DoubleImpactEngine';
import ImpactLedger from '@/components/sections/ImpactLedger';
import Nexus from '@/components/sections/Nexus';
import ChampionMembership from '@/components/sections/ChampionMembership';
import AdvocateModal from '@/components/modals/AdvocateModal';
import MerchantModal from '@/components/modals/MerchantModal';

export default function Home() {
  const [isAdvocateOpen, setIsAdvocateOpen] = useState(false);
  const [isMerchantOpen, setIsMerchantOpen] = useState(false);
  const [isAdvocateSuccess, setIsAdvocateSuccess] = useState(false);
  const [isMerchantSuccess, setIsMerchantSuccess] = useState(false);

  const handleAdvocateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAdvocateSuccess(true);
  };

  const handleMerchantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMerchantSuccess(true);
  };

  const handleCloseAdvocate = () => {
    setIsAdvocateOpen(false);
    // Reset state after animation
    setTimeout(() => setIsAdvocateSuccess(false), 300);
  };

  const handleCloseMerchant = () => {
    setIsMerchantOpen(false);
    setTimeout(() => setIsMerchantSuccess(false), 300);
  };

  return (
    <>
      <TopNav onActivate={() => setIsAdvocateOpen(true)} />
      <main>
        <Hero
          onActivate={() => setIsAdvocateOpen(true)}
          onActivateMerchant={() => setIsMerchantOpen(true)}
        />
        <DoubleImpactEngine />
        <ImpactLedger />
        <Nexus />
        <ChampionMembership onActivate={() => setIsAdvocateOpen(true)} />
      </main>

      <AdvocateModal
        isOpen={isAdvocateOpen}
        onClose={handleCloseAdvocate}
        onSubmit={handleAdvocateSubmit}
        isSuccess={isAdvocateSuccess}
      />
      <MerchantModal
        isOpen={isMerchantOpen}
        onClose={handleCloseMerchant}
        onSubmit={handleMerchantSubmit}
        isSuccess={isMerchantSuccess}
      />
    </>
  );
}
