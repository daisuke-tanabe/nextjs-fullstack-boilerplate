'use client';

import { usePathname } from 'next/navigation';

import { Button } from '@nextui-org/react';
import NextLink from 'next/link';

export function Auth() {
  const pathname = usePathname();
  const isLoginPath = pathname === '/login';

  return (
    <>
      <Button
        as={NextLink}
        href={`/login?from=${pathname}`}
        className="text-default-500"
        radius="full"
        variant="light"
        isDisabled={isLoginPath}
      >
        Log&nbsp;In
      </Button>
      <Button as="a" href="/signup" className="text-default-500" radius="full" variant="light">
        Sign&nbsp;Up
      </Button>
    </>
  );
}
