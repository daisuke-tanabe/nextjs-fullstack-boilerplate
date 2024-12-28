'use client';

import Stack from '@mui/material/Stack';

import { signup } from '@/app/_actions/signup';
import { Signup } from '@/app/signup/_components/Signup';
import { useActionState } from 'react';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function Presentational() {
  const [formState, formAction, isFormLoading] = useActionState(signup, null);

  return (
    <Stack sx={{ position: 'relative', minHeight: '100dvh' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          sx={{
            alignItems: 'center',
            backgroundImage: 'url(https://picsum.photos/1920/1080?grayscale)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            height: '100vh',
            justifyContent: 'end',
            maxWidth: '100%',
            overflow: 'hidden',
            width: '100vw',
          }}
        >
          <Box sx={{ position: 'absolute', left: 32, top: 32 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link
                component={NextLink}
                href="/"
                color="common.white"
                underline="none"
                sx={{ fontSize: 'h6.fontSize' }}
              >
                Lorem ipsum
              </Link>
            </Box>
          </Box>

          <Stack
            spacing={4}
            sx={{
              bgcolor: 'background.paper',
              justifyContent: 'center',
              px: 15,
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              maxWidth: 567,
              width: '100%',
            }}
          >
            <Stack spacing={0.5} sx={{ alignItems: 'center' }}>
              <Typography sx={{ fontSize: 'h5.fontSize', fontWeight: 'bold', textAlign: 'center' }}>
                Create Account
              </Typography>
              <Typography>Sign up for a new account to get started</Typography>
            </Stack>
            <Signup formState={formState} formAction={formAction} isFormLoading={isFormLoading} />
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}
