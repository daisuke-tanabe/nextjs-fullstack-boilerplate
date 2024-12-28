'use client';

import { login } from '@/app/_actions/login';

import { Login } from '@/app/_components/Login/Login';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useActionState } from 'react';
import { Icon } from '@iconify/react';
import Stack from '@mui/material/Stack';

export default function Page() {
  const [formState, formAction, isFormLoading] = useActionState(login, null);

  return (
    <Container maxWidth="sm" sx={{ pt: 6, pb: 4 }}>
      <Box>
        {formState && 'id' in formState && 'email' in formState ? (
          <>
            <Box>
              <Icon icon="qlementine-icons:success-16" className="text-green-500" width={36} />
              <Box>
                <Typography>Login&nbsp;Successful</Typography>
                <Typography>You have successfully signed into your account</Typography>
              </Box>
            </Box>
          </>
        ) : (
          <Stack spacing={3}>
            <Stack spacing={0.5}>
              <Typography sx={{ fontSize: 'h5.fontSize', fontWeight: 'bold', textAlign: 'center' }}>
                Welcome Back
              </Typography>
              <Typography sx={{ textAlign: 'center' }}>Log in to your account to continue</Typography>
            </Stack>
            <Login formState={formState} formAction={formAction} isFormLoading={isFormLoading} />
          </Stack>
        )}
      </Box>
    </Container>
  );
}
