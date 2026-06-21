'use client';

import { useEffect, useState, useCallback } from 'react';

const sanctuaries = [
  'PART (Camarines Norte, Philippines)',
  'Villa Kitty (Ubud, Bali)',
  'Phangan Sanctuary (Koh Phangan, Thailand)',
  'A Better Life (Perth, Australia)',
  'Empire State Haven (New York, USA)',
  'Jersey Equine Rescue (New Jersey, USA)',
  'Wildwood Sanctuary (Oregon, USA)',
  'Somerset Sanctuary (Glastonbury, UK)',
  'London Fox Initiative (London, UK)',
  'Bavarian Animal Retreat (Bavaria, Germany)',
  'Berlin Paws (Berlin, Germany)',
];

const activities = [
  { text: 'Enjoyed a plant-based meal and helped', icon: 'restaurant' },
  { text: 'Took an ethical yoga class and helped', icon: 'spa' },
  { text: 'Booked a sustainable travel stay and helped', icon: 'flight_takeoff' },
  { text: 'Bought cruelty-free apparel and helped', icon: 'shopping_bag' },
  { text: 'Shared organic espresso and helped', icon: 'local_cafe' },
];

interface LedgerRow {
  id: string;
  sanctuary: string;
  activity: typeof activities[0];
  pledge: string;
}

export default function ImpactLedger() {
  const [rows, setRows] = useState<LedgerRow[]>([]);

  const addRow = useCallback(() => {
    const randomSanctuary = sanctuaries[Math.floor(Math.random() * sanctuaries.length)];
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    const randomPledge = (Math.random() * 0.9 + 0.1).toFixed(2);
    const newId = Math.random().toString(36).substr(2, 9);

    const newRow: LedgerRow = {
      id: newId,
      sanctuary: randomSanctuary,
      activity: randomActivity,
      pledge: randomPledge,
    };

    setRows((prev) => [newRow, ...prev].slice(0, 5));
  }, []);

  useEffect(() => {
    // Initial row
    addRow();

    const intervalId = setInterval(() => {
      addRow();
    }, Math.random() * 2000 + 5000); // Between 5 and 7 seconds

    return () => clearInterval(intervalId);
  }, [addRow]);

  return (
    <section id="ledger" className="py-24 bg-background">
      <div className="max-w-[var(--spacing-container-max-width)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 md:gap-0 text-center md:text-left">
          <div>
            <h2 className="font-[var(--text-headline-lg--font-weight)] text-[28px] md:text-[var(--text-headline-lg)] leading-[var(--text-headline-lg--line-height)] tracking-[var(--text-headline-lg--letter-spacing)] text-text-main select-none font-headline-lg">
              Global Impact <span className="text-primary">Ledger.</span>
            </h2>
            <p className="font-[var(--text-body-md--font-weight)] text-[var(--text-body-md)] leading-[var(--text-body-md--line-height)] text-text-muted select-none font-body-md">
              Every action has an echo in the sanctuary.
            </p>
          </div>
          <span className="flex items-center gap-2 font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-primary select-none uppercase font-label-caps">
            Live Stream <span className="w-2.5 h-2.5 rounded-full bg-success inline-block animate-ping"></span>
          </span>
        </div>
        <div className="bg-surface rounded-xl overflow-hidden border border-border-main transition-all duration-300">
          <div className="min-h-[420px]">
            {rows.map((row) => (
              <div
                key={row.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-border-main hover:bg-surface-hover transition-colors animate-in slide-in-from-top-4 fade-in duration-500"
              >
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-border-main">
                    <span className="material-symbols-outlined text-primary">
                      {row.activity.icon}
                    </span>
                  </div>
                  <p className="font-[var(--text-body-md--font-weight)] text-[var(--text-body-md)] leading-[var(--text-body-md--line-height)] font-body-md">
                    {row.activity.text} <strong className="text-secondary">{row.sanctuary}</strong>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-[var(--text-label-caps--font-weight)] tracking-[var(--text-label-caps--letter-spacing)] text-xs text-text-subtle uppercase font-label-caps">
                    Just now
                  </span>
                  <div className="text-primary px-3 py-1 rounded text-[11px] font-bold border border-primary bg-surface">
                    From DIANA +${row.pledge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
