'use server';

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

type ServerClientProps = Pick<RequestInit, 'next' | 'cache'>;

const fetcher = (options: Pick<RequestInit, 'next' | 'cache'>) => (url: RequestInfo | URL, init?: RequestInit) => {
  return fetch(url, {
    ...init,
    ...options,
  });
};

export async function serverClient({ next, cache }: ServerClientProps = {}) {
  const cookieStore = await cookies();

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    global: {
      fetch: fetcher({ next, cache }),
    },
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
}
