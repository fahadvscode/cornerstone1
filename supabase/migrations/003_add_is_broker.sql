ALTER TABLE public.cornerstone_leads
ADD COLUMN IF NOT EXISTS is_broker BOOLEAN DEFAULT false;
