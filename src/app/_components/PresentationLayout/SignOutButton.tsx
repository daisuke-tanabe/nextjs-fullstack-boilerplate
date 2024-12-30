'use client';

import Button from '@mui/material/Button';

import { signout } from '@/app/_actions/signout';

export function SignOutButton() {
  return <Button onClick={() => void signout()}>Signout</Button>;
}
