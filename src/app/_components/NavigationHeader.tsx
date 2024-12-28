'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { User } from '@supabase/supabase-js';
import { signout } from '@/app/_actions/signout';

type NavigationHeaderProps = {
  user: User | null;
};

export function NavigationHeader({ user }: NavigationHeaderProps) {
  const pathname = usePathname();
  const isLoginPath = pathname === '/login';

  if (pathname === '/signup') return null;

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
          <Link component={NextLink} href="/" color="inherit" underline="none">
            Lorem ipsum
          </Link>
        </Typography>
        {user ? (
          <Button color="inherit" onClick={() => void signout()}>
            Signout
          </Button>
        ) : (
          <>
            <Button component={NextLink} href={`/login?from=${pathname}`} color="inherit" disabled={isLoginPath}>
              Log&nbsp;In
            </Button>
            <Button component="a" href="/signup" color="inherit">
              Sign&nbsp;Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
