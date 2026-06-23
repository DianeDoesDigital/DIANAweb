'use client';

import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

const AVATARS = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
];

const PEOPLE = ['Sarah', 'Marcus', 'Elena', 'Tom', 'Robert', 'David', 'Jessica', 'Nina', 'Carlos', 'James'];

const MERCHANTS = [
    { name: 'Indulge', location: 'PH', country: 'the Philippines', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=150&h=150&fit=crop', pledge: '10%', action: 'enjoyed a meal' },
    { name: 'Green Sprout Cafe', location: 'US', country: 'the USA', image: 'https://images.unsplash.com/photo-1559925393-8be0ec41b513?w=150&h=150&fit=crop', pledge: '5%', action: 'enjoyed a meal' },
    { name: 'Ethical Threads NYC', location: 'US', country: 'the USA', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=150&h=150&fit=crop', pledge: '8%', action: 'shopped for sustainable fashion' },
    { name: 'Green Curry House', location: 'TH', country: 'Thailand', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=150&h=150&fit=crop', pledge: '7%', action: 'enjoyed a meal' },
    { name: 'Berlin Eco Moda', location: 'DE', country: 'Germany', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop', pledge: '5%', action: 'shopped for sustainable fashion' }
];

const SANCTUARIES = [
    { name: 'A Better Life', image: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=150&h=150&fit=crop' },
    { name: 'Villa Kitty', image: 'https://images.unsplash.com/photo-1514888286872-4045c68418ff?w=150&h=150&fit=crop' },
    { name: 'PART', image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=150&h=150&fit=crop' },
    { name: 'Phangan Sanctuary', image: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?w=150&h=150&fit=crop' },
    { name: 'London Fox Initiative', image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=150&h=150&fit=crop' }
];

let eventIdCounter = 0;

function generateRandomEvent() {
    const seed = Math.random();
    let type = 'person';
    if (seed > 0.75) type = 'merchant_join';
    if (seed > 0.85) type = 'merchant_increase';
    if (seed > 0.92) type = 'sanctuary';

    const merchant = MERCHANTS[Math.floor(Math.random() * MERCHANTS.length)];
    const sanctuary = SANCTUARIES[Math.floor(Math.random() * SANCTUARIES.length)];
    const randomMinutes = Math.floor(Math.random() * 59) + 1;
    eventIdCounter++;

    if (type === 'person') {
        const pSeed = Math.random();
        if (pSeed > 0.6) {
            return {
                id: eventIdCounter,
                avatar: AVATARS[Math.floor(Math.random() * AVATARS.length)],
                user: PEOPLE[Math.floor(Math.random() * PEOPLE.length)],
                actionPrefix: `${merchant.action} and helped`,
                target: `the rescued animals of ${merchant.country}`,
                isEntity: false,
                time: `at ${merchant.name} • from ${merchant.location} • ${randomMinutes}m`
            };
        } else if (pSeed > 0.3) {
            return {
                id: eventIdCounter,
                avatar: AVATARS[Math.floor(Math.random() * AVATARS.length)],
                user: PEOPLE[Math.floor(Math.random() * PEOPLE.length)],
                actionPrefix: 'sent a gift to',
                target: sanctuary.name,
                isEntity: true,
                time: `from US • ${randomMinutes}m`
            };
        } else {
            return {
                id: eventIdCounter,
                avatar: AVATARS[Math.floor(Math.random() * AVATARS.length)],
                user: PEOPLE[Math.floor(Math.random() * PEOPLE.length)],
                actionPrefix: 'sent monthly care to',
                target: sanctuary.name,
                isEntity: true,
                time: `from AU • ${randomMinutes}m`
            };
        }
    } else if (type === 'merchant_join') {
        return {
            id: eventIdCounter,
            avatar: merchant.image,
            user: merchant.name,
            actionPrefix: `is now pledging ${merchant.pledge} of every sale to help`,
            target: `the rescued animals of ${merchant.country}`,
            isEntity: true,
            time: `from ${merchant.location} • ${randomMinutes}m`
        };
    } else if (type === 'merchant_increase') {
        const oldPledge = parseInt(merchant.pledge);
        return {
            id: eventIdCounter,
            avatar: merchant.image,
            user: merchant.name,
            actionPrefix: `has increased their pledge from ${merchant.pledge} to ${oldPledge + 3}% to help`,
            target: `the rescued animals of ${merchant.country} even more`,
            isEntity: true,
            time: `from ${merchant.location} • ${randomMinutes}m`
        };
    } else {
        const milestone = [50, 100, 250, 500, 1000][Math.floor(Math.random() * 5)];
        return {
            id: eventIdCounter,
            avatar: sanctuary.image,
            user: sanctuary.name,
            actionPrefix: 'reached a milestone of',
            target: `${milestone} global supporters!`,
            isEntity: true,
            time: `from ${merchant.location} • ${randomMinutes}m`
        };
    }
}
export default function NexusFeedSimulator() {
  // Initialize with 5 random events
  const [items, setItems] = useState(() => Array.from({ length: 5 }, generateRandomEvent));
  const [incomingItem, setIncomingItem] = useState(() => generateRandomEvent());
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setItems(prev => {
          const newItems = [incomingItem, ...prev].slice(0, 5);
          return newItems;
        });
        setIncomingItem(generateRandomEvent());
        setIsAnimating(false);
      }, 500); // Wait for transition to complete before updating array
    }, 4000); // Trigger every 4 seconds

    return () => clearInterval(interval);
  }, [incomingItem]);

  return (
    <div className="relative rounded-[20px] overflow-hidden border border-border-main glass-surface shadow-lg h-[450px] md:h-[550px] bg-[#FFDDEE]/30">
      
      {/* Feed Container */}
      <div className="absolute inset-0 pt-4 pb-4 px-4 overflow-hidden mask-image-fade-y z-20">
        <div 
            className="flex flex-col gap-4 relative"
            style={{
                transform: isAnimating ? 'translateY(116px)' : 'translateY(0)', // 116px is roughly the height of one card + gap
                transition: isAnimating ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
            }}
        >
          {/* Incoming item (hidden above, slides down during animation) */}
          {isAnimating && (
            <div className="absolute -top-[116px] left-0 right-0 flex flex-row items-start rounded-2xl p-4 border border-white/60 bg-white/45 backdrop-blur-sm opacity-0 animate-fade-in-down">
                <div className="mr-3 pt-1">
                    <img src={incomingItem.avatar} alt="" className="w-9 h-9 rounded-full border border-black/10 object-cover" />
                </div>
                <div className="flex-1">
                    <div className="mb-0.5">
                        <div className="text-primary font-body-md font-semibold text-[15px] mb-0">{incomingItem.user}</div>
                        <div className="text-[#0A0507] font-body-sm text-[13.5px] leading-[18px] opacity-80">
                            <span className={incomingItem.actionPrefix === 'From DIANA' ? 'font-semibold' : ''}>
                                {incomingItem.actionPrefix ? `${incomingItem.actionPrefix} ` : ''}
                            </span>
                            <span className={`text-[#0A0507] font-body-sm ${incomingItem.isEntity ? 'font-semibold' : ''}`}>
                                {incomingItem.target}
                            </span>
                        </div>
                    </div>
                    <div className="text-black/45 text-[11px] font-body-sm mt-1">{incomingItem.time}</div>
                </div>
                <div className="flex flex-col items-center gap-1 pl-2.5 pt-1.5 opacity-50">
                    <Heart size={16} color="rgba(10, 5, 7, 0.25)" fill="transparent" />
                    <span className="text-black/60 text-[10px] font-label-caps">{Math.floor(Math.random() * 50) + 5}</span>
                </div>
            </div>
          )}

          {items.map((item, i) => (
            <div 
              key={`${item.id}-${i}`} 
              className={`flex flex-row items-start rounded-2xl p-4 border border-white/60 bg-white/45 backdrop-blur-sm ${i === 4 && isAnimating ? 'opacity-0 transition-opacity duration-500' : ''}`}
            >
                {/* Avatar */}
                <div className="mr-3 pt-1">
                    <img
                        src={item.avatar}
                        alt={item.user}
                        className="w-9 h-9 rounded-full border border-black/10 object-cover"
                    />
                </div>

                {/* Content */}
                <div className="flex-1">
                    <div className="mb-0.5">
                        <div className="text-primary font-body-md font-semibold text-[15px] mb-0">{item.user}</div>
                        <div className="text-[#0A0507] font-body-sm text-[13.5px] leading-[18px] opacity-80">
                            <span className={item.actionPrefix === 'From DIANA' ? 'font-semibold' : ''}>
                                {item.actionPrefix ? `${item.actionPrefix} ` : ''}
                            </span>
                            <span className={`text-[#0A0507] font-body-sm ${item.isEntity ? 'font-semibold' : ''}`}>
                                {item.target}
                            </span>
                        </div>
                    </div>
                    <div className="text-black/45 text-[11px] font-body-sm mt-1">
                        {item.time}
                    </div>
                </div>

                {/* Like Button */}
                <div className="flex flex-col items-center gap-1 pl-2.5 pt-1.5 cursor-pointer hover:opacity-80 transition-opacity">
                    <Heart size={16} color="rgba(10, 5, 7, 0.25)" fill="transparent" />
                    <span className="text-black/60 text-[10px] font-label-caps">{Math.floor(Math.random() * 50) + 5}</span>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FFDDEE] to-transparent z-30 pointer-events-none" />
    </div>
  );
}
