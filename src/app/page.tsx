import { createClient } from '@/utils/supabase/server';

import { PageHome } from './_components/PageHome';

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <PageHome email={user?.email} />;
}
