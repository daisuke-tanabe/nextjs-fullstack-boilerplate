import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

import { LoginButton } from '@/app/_components/PresentationLayout/LoginButton';
import { MeButton } from '@/app/_components/PresentationLayout/MeButton';
import { SignOutButton } from '@/app/_components/PresentationLayout/SignOutButton';
import { SignupButton } from '@/app/_components/PresentationLayout/SignupButton';
import { UIModeSwitch } from '@/app/_components/PresentationLayout/UIModeSwitch';
import { serverClient } from '@/utils/supabase/serverClient';

export async function AppBarContent() {
  const supabase = await serverClient({ next: { tags: ['user'] }, cache: 'force-cache' });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <AppBar elevation={0} sx={{ bgcolor: 'background.default' }}>
        <Toolbar>
          <Typography
            component="h1"
            sx={{ color: 'text.primary', fontSize: 24, fontWeight: 'bold', flexGrow: 1, display: 'inline-flex' }}
          >
            <Link component={NextLink} href="/" underline="none" sx={{ color: 'inherit', fontSize: 20 }}>
              Lorem ipsum
            </Link>
          </Typography>

          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <UIModeSwitch />
            {user ? (
              <>
                <MeButton />
                <SignOutButton />
              </>
            ) : (
              <>
                <LoginButton />
                <SignupButton />
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
