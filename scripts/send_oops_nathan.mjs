import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fztvythrrzhkywmzhbjr.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_-HSagPEq9zs1GOMVSH7mTQ_-hnOGwDS';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const users = [
  { email: 'wyntreva@gmail.com', name: 'Nathan Valverde', role: 'oops' }
];

async function sendOopsEmails() {
  console.log('Starting Oops email blast for Nathan...');
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

sendOopsEmails();
