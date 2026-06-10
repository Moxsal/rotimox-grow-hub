
CREATE POLICY "Public read testimonials" ON storage.objects FOR SELECT TO anon, authenticated USING (bucket_id = 'testimonials');
CREATE POLICY "Admins upload testimonials" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'testimonials' AND public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins update testimonials" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'testimonials' AND public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins delete testimonials" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'testimonials' AND public.has_role(auth.uid(),'admin'));
