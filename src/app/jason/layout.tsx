import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DIANA | Seed Investment Proposal',
  description: 'A private investment presentation for DIANA — Digital Infrastructure for Animal Networks and Advocacy.',
};

export default function JasonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
