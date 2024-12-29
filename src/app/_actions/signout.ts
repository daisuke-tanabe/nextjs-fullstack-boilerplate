'use server';

import { redirect } from 'next/navigation';

import { serverClient } from '@/utils/supabase/serverClient';

export async function signout() {
  const supabase = await serverClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect('/error');
  }

  redirect('/');
}
