import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "";

/** Prefer service role on the server — bypasses RLS for trusted API inserts */
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";

export function getSupabaseClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseKey) {
    return null;
  }
  return createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/** Matches public.cornerstone_leads */
export interface CornerstoneLead {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  is_realtor?: boolean;
  is_broker?: boolean;
  interest?: string;
  buyer_type?: string;
  source?: string;
  last_note?: string;
}
