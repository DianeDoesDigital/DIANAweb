import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fztvythrrzhkywmzhbjr.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_-HSagPEq9zs1GOMVSH7mTQ_-hnOGwDS';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
