'use client';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { User } from '@supabase/supabase-js';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { signout } from '@/app/_actions/signout';

import { UIModeSwitch } from './UIModeSwitch';

type NavigationHeaderProps = {
  user: User | null;
};

export function NavigationHeader({ user }: NavigationHeaderProps) {
  const pathname = usePathname();

  if (pathname === '/signup') return null;

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

          <Stack direction="row" spacing={2}>
            <UIModeSwitch />
            {user ? (
              <Button onClick={() => void signout()}>Signout</Button>
            ) : (
              <>
                <Button
                  component={NextLink}
                  href={`/login?from=${pathname}`}
                  variant="outlined"
                  size="small"
                  disabled={pathname === '/login'}
                >
                  Log&nbsp;In
                </Button>
                <Button component="a" href="/signup" variant="contained" size="small" disableElevation>
                  Sign&nbsp;Up
                </Button>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
