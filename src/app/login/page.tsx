'use client';

import { login } from '@/app/_actions/login';

import { Login } from '@/app/_components/Login';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useActionState } from 'react';
import { Icon } from '@iconify/react';

export default function Page() {
  const [formState, formAction, isFormLoading] = useActionState(login, null);

  return (
    <Container>
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
          <>
            <Box>
              <Typography>Welcome Back</Typography>
              <Typography>Log in to your account to continue</Typography>
            </Box>
            <Login formState={formState} formAction={formAction} isFormLoading={isFormLoading} />
          </>
        )}
      </Box>
    </Container>
  );
}
