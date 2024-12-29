'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
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
          <CustomTextField
            label="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
          />
          <FormControlLabel
            label={
              <Typography>
                I agree with the&nbsp;
                <Link href="#">Terms</Link>
                &nbsp; and&nbsp;
                <Link href="#">Privacy Policy</Link>
              </Typography>
            }
            control={<Checkbox name="approval" />}
          />
          <Button type="submit" variant="contained" size="large" disableElevation disabled={isFormLoading}>
            {isFormLoading ? 'Loading' : 'Sign Up'}
          </Button>
        </Stack>
      </NextForm>

      {formState && 'error' in formState && <Box>{formState.error.message}</Box>}

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
