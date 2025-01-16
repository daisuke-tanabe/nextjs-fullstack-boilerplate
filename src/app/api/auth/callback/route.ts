import { NextResponse } from 'next/server';

// The client you created from the Server-Side Auth instructions
import { serverClient } from '@/utils/supabase/serverClient';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');

  if (code) {
    const supabase = await serverClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    // if "next" is in param, use it as the redirect URL
    const redirectTo = searchParams.get('redirect_to') ?? '/';
    const replacedRedirectTo = redirectTo.replace('__user__', data.user?.id ? `users/${data.user.id}` : '');

    if (!error) {
      const forwardedHost = request.headers.get('x-forwarded-host'); // original origin before load balancer
      const isLocalEnv = process.env.NODE_ENV === 'development';
      if (isLocalEnv) {
        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
        return NextResponse.redirect(`${origin}${replacedRedirectTo}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${replacedRedirectTo}`);
      } else {
        return NextResponse.redirect(`${origin}${replacedRedirectTo}`);
      }
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
