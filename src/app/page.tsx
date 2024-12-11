import { createClient } from '@/utils/supabase/server';
import { Link } from '@nextui-org/react';
import NextLink from 'next/link';

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      {user?.email ? <div>Your email: {user.email}</div> : <div>Not logged in</div>}
      <div>
        <Link as={NextLink} href="/posts/1" size="sm">
          /posts/1
        </Link>
      </div>
      <div>
        <Link as={NextLink} href="/posts/2" size="sm">
          /posts/2
        </Link>
      </div>
    </div>
  );
}
