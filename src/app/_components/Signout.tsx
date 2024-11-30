'use client';

import { Button } from '@nextui-org/react';

import { signout } from './actions';

export function Signout() {
  return (
    <Button className="text-default-500" radius="full" variant="light" onClick={() => void signout()}>
      Signout
    </Button>
  );
}
