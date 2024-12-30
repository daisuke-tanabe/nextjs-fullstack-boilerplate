'use client';

import { Icon } from '@iconify/react';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

import { browserClient } from '@/utils/supabase/browserClient';

export function GoogleAuthButton() {
  const [isLoading, setIsLoading] = useState(false);
  const supabase = browserClient();

  const handleClick = async () => {
    setIsLoading(true);
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_URL}/api/auth/callback`,
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
