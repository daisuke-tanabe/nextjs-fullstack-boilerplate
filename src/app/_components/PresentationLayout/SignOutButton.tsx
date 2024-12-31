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

  const handleSignout = async () => {
    await supabase.auth.signOut();
    setMe(null);
    // 自身のユーザーページでサインアウトした際はホームに戻す
    if (pathname === `/users/${me?.id ?? ''}`) router.push('/');
  };

  return <Button onClick={() => void handleSignout()}>Signout</Button>;
}
