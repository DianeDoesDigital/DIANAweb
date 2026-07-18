import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fztvythrrzhkywmzhbjr.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_-HSagPEq9zs1GOMVSH7mTQ_-hnOGwDS';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const users = [
  { email: 'dianedoesdigital@gmail.com', name: 'Diane', role: 'personal' }
];

async function sendTestEmail() {
  console.log('Sending test welcome email to Diane...');
  for (const user of users) {
    try {
      console.log(`Sending to ${user.email}...`);
      const { data, error } = await supabase.functions.invoke('welcome-email', {
        body: { record: user }
      });
      
      if (error) {
        console.error(`Failed for ${user.email}:`, error);
      } else {
        console.log(`Success for ${user.email}!`);
      }
    } catch (e) {
      console.error(`Exception for ${user.email}:`, e);
    }
  }
}

sendTestEmail();
