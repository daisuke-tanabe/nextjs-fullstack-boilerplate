import { createClient } from '@/utils/supabase/server';

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <div>{user?.email ? <div>Your email: {user.email}</div> : <div>Not logged in</div>}</div>;
}
