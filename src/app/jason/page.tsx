import PitchDeck from './PitchDeck';
import PinGate from '@/components/PinGate';

export default function PitchPage() {
  return (
    <main className="w-full h-screen overflow-hidden bg-background">
      <PinGate>
        <PitchDeck />
      </PinGate>
    </main>
  );
}
