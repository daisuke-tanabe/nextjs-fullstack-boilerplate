'use client';

import Button from '@mui/material/Button';
import { usePathname, useRouter } from 'next/navigation';

import { useMe } from '@/app/_hooks/useMe';
import { browserClient } from '@/utils/supabase/browserClient';

export function SignOutButton() {
  const pathname = usePathname();
  const router = useRouter();
  const { me, setMe } = useMe();

  const supabase = browserClient();

  if (!me) return null;

  const handleSignout = async () => {
    await supabase.auth.signOut();
    setMe(null);
    // 自身のユーザーページでサインアウトした際はホームに戻す
    if (pathname.includes(`/users/${me.id}`)) router.push('/');
  };

  return (
    <Button size="large" variant="outlined" onClick={() => void handleSignout()}>
      Signout
    </Button>
  );
}
