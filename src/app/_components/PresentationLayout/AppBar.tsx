'use client';

import MuiAppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { LoginButton } from '@/app/_components/PresentationLayout/LoginButton';
import { MeButton } from '@/app/_components/PresentationLayout/MeButton';
import { SignOutButton } from '@/app/_components/PresentationLayout/SignOutButton';
import { SignupButton } from '@/app/_components/PresentationLayout/SignupButton';
import { useMe } from '@/app/_hooks/useMe';

export function AppBar() {
  const { me } = useMe();
  const pathname = usePathname();

  if (pathname === '/signup') return null;

  return (
    <>
      <MuiAppBar elevation={0} sx={{ bgcolor: 'background.default' }}>
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
            {me ? (
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
      </MuiAppBar>
      <Toolbar />
    </>
  );
}
