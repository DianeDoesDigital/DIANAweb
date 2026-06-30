import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DIANA | Seed Investment Proposition',
  description: 'An investment presentation for DIANA - Digital Infrastructure for Animal Networks and Advocacy.',
};

export default function InvestmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
