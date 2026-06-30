import { redirect } from 'next/navigation';

export default function MissionPage() {
  redirect('/?skipSplash=true');
}
