CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TABLE public.audit_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  platform TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  business_name TEXT NOT NULL,
  url TEXT NOT NULL,
  message TEXT,
  analysis JSONB,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.audit_requests TO authenticated;
GRANT INSERT ON public.audit_requests TO anon;
GRANT ALL ON public.audit_requests TO service_role;

ALTER TABLE public.audit_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit audit requests"
  ON public.audit_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can view audit requests"
  ON public.audit_requests FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update audit requests"
  ON public.audit_requests FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete audit requests"
  ON public.audit_requests FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE INDEX idx_audit_requests_created_at ON public.audit_requests (created_at DESC);
CREATE INDEX idx_audit_requests_platform ON public.audit_requests (platform);

CREATE TRIGGER set_audit_requests_updated_at
  BEFORE UPDATE ON public.audit_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();