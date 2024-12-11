'use client';

import { Button } from '@nextui-org/react';

import { signout } from '@/app/_actions/signout';

export function Signout() {
  return (
    <Button
      className="text-default-500 text-sm border	rounded px-4"
      radius="sm"
      size="sm"
      variant="bordered"
      onPress={() => void signout()}
    >
      Signout
    </Button>
  );
}
