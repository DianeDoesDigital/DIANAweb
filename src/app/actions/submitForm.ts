'use server';

import { supabase } from '@/lib/supabase';

// Waitlist Roles mapping to what the app uses
type WaitlistRole = 'personal' | 'merchant' | 'sanctuary' | 'builder';

interface BaseSignup {
  name: string;
  email: string;
  role: WaitlistRole;
}

export async function submitWaitlist(data: BaseSignup) {
  const { data: insertedData, error } = await supabase
    .from('beta_waiting_list')
    .insert([{
      name: data.name,
      email: data.email,
      role: data.role
    }])
    .select('id')
    .single();
    
  if (error) {
    if (error.code === '23505') {
      return { success: false, error: 'THIS EMAIL IS ALREADY ON THE NEXUS WAITLIST!' };
    }
    console.error('Supabase Error:', error);
    return { success: false, error: 'CONNECTION FAILED. PLEASE TRY AGAIN.' };
  }
  
  return { success: true, id: insertedData.id };
}

export async function submitMerchantDetails(waitlistId: string, details: { business_name: string, website: string, business_type: string }) {
  const { error } = await supabase
    .from('merchant_details')
    .insert([{
      waitlist_id: waitlistId,
      ...details
    }]);
    
  if (error) {
    console.error('Merchant details error:', error);
    return { success: false, error: 'Failed to save merchant details' };
  }
  return { success: true };
}

export async function submitSanctuaryDetails(waitlistId: string, details: { sanctuary_name: string, location: string, website_social: string }) {
  const { error } = await supabase
    .from('sanctuary_details')
    .insert([{
      waitlist_id: waitlistId,
      ...details
    }]);
    
  if (error) {
    console.error('Sanctuary details error:', error);
    return { success: false, error: 'Failed to save sanctuary details' };
  }
  return { success: true };
}

export async function submitBuilderDetails(waitlistId: string, details: { linkedin_portfolio: string, interest_area: string, message: string }) {
  const { error } = await supabase
    .from('builder_details')
    .insert([{
      waitlist_id: waitlistId,
      ...details
    }]);
    
  if (error) {
    console.error('Builder details error:', error);
    return { success: false, error: 'Failed to save builder details' };
  }
  return { success: true };
}
