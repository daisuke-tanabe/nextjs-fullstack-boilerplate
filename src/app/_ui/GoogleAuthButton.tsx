'use client';

import { Icon } from '@iconify/react';
import IconButton from '@mui/material/IconButton';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { browserClient } from '@/utils/supabase/browserClient';

export function GoogleAuthButton() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const supabase = browserClient();

  const fromParam = searchParams.get('from');

  const handleClick = async () => {
    setIsLoading(true);
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_URL}/api/auth/callback${fromParam ? `?redirect_to=${fromParam}` : ''}`,
      },
    });
  };

  return (
    <IconButton
      sx={{ alignSelf: 'center', borderStyle: 'solid', borderRadius: 2, borderWidth: 2, borderColor: 'grey.400' }}
      onClick={() => void handleClick()}
      disabled={isLoading}
    >
      <Icon icon={isLoading ? 'line-md:loading-twotone-loop' : 'devicon:google'} width={24} stroke="6" />
    </IconButton>
  );
}
