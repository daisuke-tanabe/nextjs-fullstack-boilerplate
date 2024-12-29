import { Icon } from '@iconify/react';
import IconButton from '@mui/material/IconButton';

import { browserClient } from '@/utils/supabase/browserClient';

export function SocialButtons() {
  const supabase = browserClient();

  const handleClick = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/api/auth/callback',
      },
    });
  };

  return (
    <IconButton
      sx={{ alignSelf: 'center', borderStyle: 'solid', borderRadius: 2, borderWidth: 2, borderColor: 'grey.400' }}
      onClick={() => void handleClick()}
    >
      <Icon icon="devicon:google" width={24} />
    </IconButton>
  );
}
