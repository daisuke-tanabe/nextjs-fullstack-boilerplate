'use client';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useActionState } from 'react';

import { login } from '@/app/_actions/login';
import { Login } from '@/app/_components/Login/Login';

export default function Page() {
  const [formState, formAction, isFormLoading] = useActionState(login, null);

  return (
    <Container
      sx={{
        pt: 6,
        pb: 3,
        maxWidth: {
          xs: '100%',
          sm: 375,
        },
      }}
    >
      <Stack spacing={3}>
        {formState && 'id' in formState && 'email' in formState ? (
          <Stack spacing={0.5}>
            <Typography sx={{ fontSize: 'h5.fontSize', fontWeight: 'bold', textAlign: 'center' }}>
              Log&nbsp;In&nbsp;Successful
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>You have successfully signed into your account</Typography>
          </Stack>
        ) : (
          <>
            <Stack spacing={0.5}>
              <Typography sx={{ fontSize: 'h5.fontSize', fontWeight: 'bold', textAlign: 'center' }}>
                Welcome Back
              </Typography>
              <Typography sx={{ textAlign: 'center' }}>Log in to your account to continue</Typography>
            </Stack>
            <Login formState={formState} formAction={formAction} isFormLoading={isFormLoading} />
          </>
        )}
      </Stack>
    </Container>
  );
}
