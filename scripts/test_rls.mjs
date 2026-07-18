import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fztvythrrzhkywmzhbjr.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_-HSagPEq9zs1GOMVSH7mTQ_-hnOGwDS';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkRLS() {
  console.log('1. Signing up test user...');
  const email = `test_rls_${Date.now()}@drgm.dev`;
  
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: email,
    password: 'Password123!',
    options: {
      data: {
        name: 'Test RLS User',
        role: 'personal',
        username: `test_rls_${Date.now()}`,
        referred_by: null
      }
    }
  });

  if (authError) {
    console.error('Signup failed:', authError);
    return;
  }

  const userId = authData.user.id;
  const session = authData.session;
  console.log('Session returned?', !!session);

  // We explicitly create a new client WITH the access token to perfectly simulate a browser request
  const supabaseAuthClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: {
      headers: {
        Authorization: `Bearer ${session.access_token}`
      }
    }
  });

  console.log('2. Upserting into profiles...');
  const { data: profileData, error: profileError } = await supabaseAuthClient.from('profiles').upsert({
    id: userId,
    name: 'Test RLS User',
    username: `test_rls_${Date.now()}`,
    type: 'personal',
    preferred_currency: 'PHP',
    referred_by: null
  });

  if (profileError) {
    console.error('PROFILES UPSERT FAILED:', JSON.stringify(profileError, null, 2));
  } else {
    console.log('Profiles upsert SUCCESS!');
  }
}

checkRLS();
