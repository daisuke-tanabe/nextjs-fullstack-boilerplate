'use client';

import Button from '@mui/material/Button';

import { useMe } from '@/app/_hooks/useMe';
import { browserClient } from '@/utils/supabase/browserClient';

export function SignOutButton() {
  const { setMe } = useMe();

  const supabase = browserClient();

  const handleSignout = async () => {
    await supabase.auth.signOut();
    setMe(null);
  };

  return <Button onClick={() => void handleSignout()}>Signout</Button>;
}
