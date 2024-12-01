'use server';

import { createClient } from '@/utils/supabase/server';

export async function signup(prevState: unknown, formData: FormData) {
  const supabase = await createClient();

  const { data } = await supabase.auth.signUp({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  if (!data.user) return null;

  return {
    id: data.user.id,
    email: data.user.email,
  };
}
