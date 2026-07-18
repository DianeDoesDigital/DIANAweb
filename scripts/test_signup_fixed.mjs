import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fztvythrrzhkywmzhbjr.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_-HSagPEq9zs1GOMVSH7mTQ_-hnOGwDS';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testSignupFixed() {
  console.log('1. Signing up test user (FIXED)...');
  const email = `test_fixed_${Date.now()}@drgm.dev`;
  
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: email,
    password: 'Password123!',
    options: {
      data: {
        name: 'Test Fixed User',
        role: 'personal',
        username: `test_fixed_${Date.now()}`,
        referred_by: 'diane'
      }
    }
  });

  if (authError) {
    console.error('Signup failed:', authError);
    return;
  }

  const userId = authData.user.id;

  console.log('2. Upserting into profiles (without email column)...');
  const { data: profileData, error: profileError } = await supabase.from('profiles').upsert({
    id: userId,
    name: 'Test Fixed User',
    username: `test_fixed_${Date.now()}`,
    type: 'personal',
    preferred_currency: 'PHP',
    referred_by: 'diane'
  });

  if (profileError) {
    console.error('PROFILES UPSERT FAILED:', JSON.stringify(profileError, null, 2));
  } else {
    console.log('Profiles upsert SUCCESS!');
  }
}

testSignupFixed();
