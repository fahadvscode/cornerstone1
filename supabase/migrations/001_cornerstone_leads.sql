CREATE TABLE IF NOT EXISTS cornerstone_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  working_with_realtor BOOLEAN DEFAULT false,
  buyer_type TEXT,
  unit_interest TEXT[],
  message TEXT,
  source TEXT DEFAULT 'cornerstonetownsbrampton.ca',
  page TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_cornerstone_leads_email ON cornerstone_leads(email);
CREATE INDEX IF NOT EXISTS idx_cornerstone_leads_created_at ON cornerstone_leads(created_at);
