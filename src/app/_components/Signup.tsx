'use client';

import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

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
    <Box>
      <form className="flex flex-col gap-3" action={formAction} noValidate>
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
        <TextField
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
        <Button>{!isFormLoading && 'Sign Up'}</Button>
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
        Already have an account?&nbsp;
        <Link href="/login">Log In</Link>
      </Typography>
    </Box>
  );
}
