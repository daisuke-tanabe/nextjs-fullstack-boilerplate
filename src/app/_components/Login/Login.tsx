'use client';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { Icon } from '@iconify/react';
import NextForm from 'next/form';
import NextLink from 'next/link';

import { CustomTextField } from '@/ui/CustomTextField';

type User = {
  id: string;
  email: string | undefined;
};

type Error = {
  error: {
    message: string;
    status?: number;
  };
};

const socialIcons = ['devicon:google', 'logos:facebook', 'simple-icons:apple'];

export function Login({
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

      <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
        {socialIcons.map((icon) => (
          <IconButton
            key={icon}
            sx={{ borderStyle: 'solid', borderRadius: 2, borderWidth: 2, borderColor: 'grey.400' }}
          >
            <Icon icon={icon} width={24} />
          </IconButton>
        ))}
      </Stack>

      <Typography sx={{ textAlign: 'center' }}>
        Need to create an account?&nbsp;
        <Link href="/signup">Sign Up</Link>
      </Typography>
    </Stack>
  );
}
