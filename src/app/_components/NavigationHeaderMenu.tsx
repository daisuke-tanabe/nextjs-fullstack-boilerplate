import { createClient } from '@/utils/supabase/server';
import { Signout } from '@/app/_components/Signout';
import { Auth } from '@/app/_components/Auth';

export async function NavigationHeaderMenu() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? <Signout /> : <Auth />;
}
