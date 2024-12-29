'use client';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NextForm from 'next/form';

import { CustomTextField } from '@/ui/CustomTextField';
import { SocialButtons } from '@/ui/SocialButtons';

type User = {
  id: string | undefined;
  email: string | undefined;
};

type Error = {
  error: {
    message: string;
    status?: number;
  };
};

export function Signup({
  formState,
  formAction,
  isFormLoading,
}: {
  formState: User | Error | null;
  formAction: (payload: FormData) => void;
  isFormLoading: boolean;
}) {
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
          <Button type="submit" variant="contained" size="large" disableElevation disabled={isFormLoading}>
            {isFormLoading ? 'Loading' : 'Sign Up'}
          </Button>
        </Stack>
      </NextForm>

      {formState && 'id' in formState && <Alert severity="success">メールアドレスに認証リンクを送信しました。</Alert>}
      {formState && 'error' in formState && <Alert severity="error">{formState.error.message}</Alert>}

      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Divider sx={{ flex: 1, borderColor: 'grey.400' }} />
        <Typography sx={{ px: 2 }}>OR</Typography>
        <Divider sx={{ flex: 1, borderColor: 'grey.400' }} />
      </Stack>

      <SocialButtons />

      <Typography sx={{ textAlign: 'center' }}>
        Already have an account?&nbsp;
        <Link component="a" href="/login">
          Log In
        </Link>
      </Typography>
    </Stack>
  );
}
