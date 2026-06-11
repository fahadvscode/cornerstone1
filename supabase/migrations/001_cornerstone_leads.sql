-- Matches production public.cornerstone_leads schema
CREATE TABLE IF NOT EXISTS cornerstone_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  is_realtor BOOLEAN DEFAULT false,
  interest TEXT DEFAULT 'townhomes',
  buyer_type TEXT,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMPTZ DEFAULT now(),
  status TEXT DEFAULT 'new',
  lead_temperature TEXT DEFAULT 'warm',
  call_history JSONB DEFAULT '[]'::jsonb,
  call_count INTEGER DEFAULT 0,
  last_note TEXT
);

CREATE INDEX IF NOT EXISTS idx_cornerstone_leads_email ON cornerstone_leads(email);
CREATE INDEX IF NOT EXISTS idx_cornerstone_leads_created_at ON cornerstone_leads(created_at);
