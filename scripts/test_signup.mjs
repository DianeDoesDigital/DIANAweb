import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fztvythrrzhkywmzhbjr.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_-HSagPEq9zs1GOMVSH7mTQ_-hnOGwDS';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testSignup() {
  console.log('1. Signing up test user...');
  const email = `test_${Date.now()}@drgm.dev`;
  
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: email,
    password: 'Password123!',
    options: {
      data: {
        name: 'Test User',
        role: 'personal',
        username: `test_${Date.now()}`,
        referred_by: 'diane'
      }
    }
  });

  if (authError) {
    console.error('Signup failed:', authError);
    return;
  }

  console.log('Signup successful. Session exists?', !!authData.session);
  const userId = authData.user.id;

  console.log('2. Upserting into profiles...');
  const { data: profileData, error: profileError } = await supabase.from('profiles').upsert({
    id: userId,
    email: email,
    name: 'Test User',
    username: `test_${Date.now()}`,
    type: 'personal',
    preferred_currency: 'PHP',
    referred_by: 'diane'
  });

  if (profileError) {
    console.error('PROFILES UPSERT FAILED WITH EXACT ERROR:', JSON.stringify(profileError, null, 2));
  } else {
    console.log('Profiles upsert SUCCESS!', profileData);
  }
}

testSignup();
