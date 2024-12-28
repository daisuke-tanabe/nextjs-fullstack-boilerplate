'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import { Icon } from '@iconify/react';
import NextLink from 'next/link';

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
    <Box>
      <form action={formAction} noValidate>
        <TextField
          autoComplete="username"
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
        />
        <TextField
          autoComplete="current-password"
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <Box>
          <Link component={NextLink} href="#dummyURL">
            Forgot password?
          </Link>
        </Box>
        <Button type="submit">{!isFormLoading && 'Log In'}</Button>
      </form>
      {formState && 'error' in formState && <Box>{formState.error.message}</Box>}
      <Box>
        <Divider />
        <Typography>OR</Typography>
        <Divider />
      </Box>
      <Box>
        <Button>
          <Icon icon="devicon:google" width={24} />
        </Button>
        <Button>
          <Icon icon="logos:facebook" width={24} />
        </Button>
        <Button>
          <Icon icon="simple-icons:apple" width={24} />
        </Button>
      </Box>
      <Typography>
        Need to create an account?&nbsp;
        <Link href="/signup">Sign Up</Link>
      </Typography>
    </Box>
  );
}
