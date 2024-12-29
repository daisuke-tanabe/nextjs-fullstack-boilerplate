'use client';

import PersonIcon from '@mui/icons-material/Person';
import { Avatar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { signout } from '@/app/_actions/signout';
import { useMe } from '@/app/_hooks/useMe';

import { UIModeSwitch } from './UIModeSwitch';

export function NavigationHeader() {
  const pathname = usePathname();
  const { me } = useMe();

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

          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <UIModeSwitch />
            {me ? (
              <>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                  <IconButton component={NextLink} href={`/users/${me.id}`} sx={{ p: 0 }}>
                    <Avatar sx={{ width: 32, height: 32 }}>
                      <PersonIcon />
                    </Avatar>
                  </IconButton>
                  <Typography color="text.primary">{me.email}</Typography>
                </Stack>
                <Button onClick={() => void signout()}>Signout</Button>
              </>
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
