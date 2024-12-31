'use client';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NextForm from 'next/form';
import NextLink from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useActionState } from 'react';

import { login } from '@/app/_actions/login';
import { useMe } from '@/app/_hooks/useMe';
import { CustomTextField } from '@/app/_ui/CustomTextField';
import { GoogleAuthButton } from '@/app/_ui/GoogleAuthButton';

export function LoginForm() {
  const { setMe } = useMe();
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromParam = searchParams.get('from');

  const [formState, formAction, isFormLoading] = useActionState(async (state: unknown, payload: FormData) => {
    const user = await login(state, payload);
    if ('id' in user) {
      setMe({
        id: user.id,
        email: user.email,
        newEmail: user.new_email,
        displayName: user.user_metadata.display_name as string | undefined,
      });
      router.push(fromParam ?? '/');
    }
    return user;
  }, null);

  return (
    <Stack spacing={2}>
      <NextForm action={formAction} noValidate>
        <Stack spacing={2}>
          <CustomTextField
            autoComplete="username"
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <CustomTextField
            autoComplete="current-password"
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <Box sx={{ textAlign: 'right' }}>
            <Link component={NextLink} href="#dummyURL" underline="none">
              Forgot password?
            </Link>
          </Box>
          <Button type="submit" variant="contained" size="large" disableElevation disabled={isFormLoading}>
            {isFormLoading ? 'Loading' : 'Log In'}
          </Button>
        </Stack>
      </NextForm>

      {formState && 'error' in formState && <Alert severity="error">{formState.error.message}</Alert>}

      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Divider sx={{ flex: 1, borderColor: 'grey.400' }} />
        <Typography sx={{ px: 2 }}>OR</Typography>
        <Divider sx={{ flex: 1, borderColor: 'grey.400' }} />
      </Stack>

      <GoogleAuthButton />

      <Typography sx={{ textAlign: 'center' }}>
        Need to create an account?&nbsp;
        <Link href="/signup">Sign Up</Link>
      </Typography>
    </Stack>
  );
}
