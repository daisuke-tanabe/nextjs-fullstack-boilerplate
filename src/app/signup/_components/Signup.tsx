'use client';

import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';

import NextForm from 'next/form';
import IconButton from '@mui/material/IconButton';

import { CustomTextField } from '@/ui/CustomTextField';

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

const socialIcons = ['devicon:google', 'logos:facebook', 'simple-icons:apple'];

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
        Already have an account?&nbsp;
        <Link component="a" href="/login">
          Log In
        </Link>
      </Typography>
    </Stack>
  );
}
