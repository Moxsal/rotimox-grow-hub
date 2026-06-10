
DROP POLICY IF EXISTS "Anyone can update own chat by session" ON public.chats;
CREATE POLICY "Admins update chats" ON public.chats FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
REVOKE UPDATE ON public.chats FROM anon;
