-- Allow the same email to register multiple times (e.g. re-submissions, different pages)
ALTER TABLE public.cornerstone_leads
DROP CONSTRAINT IF EXISTS cornerstone_leads_email_key;
