-- Enable Row Level Security on leads table
ALTER TABLE cornerstone_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts only (used by server API route)
CREATE POLICY "Allow anonymous insert" ON cornerstone_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Block all reads/updates/deletes from anonymous users
CREATE POLICY "Deny anonymous select" ON cornerstone_leads
  FOR SELECT
  TO anon
  USING (false);

CREATE POLICY "Deny anonymous update" ON cornerstone_leads
  FOR UPDATE
  TO anon
  USING (false);

CREATE POLICY "Deny anonymous delete" ON cornerstone_leads
  FOR DELETE
  TO anon
  USING (false);
