import { createClient } from "@supabase/supabase-js";

// Server-only credentials — never expose service keys to the browser
const supabaseUrl =
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey =
  process.env.SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";

export function getSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export interface LeadSubmission {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  working_with_realtor?: boolean;
  buyer_type?: string;
  unit_interest?: string[];
  message?: string;
  source?: string;
  page?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}
