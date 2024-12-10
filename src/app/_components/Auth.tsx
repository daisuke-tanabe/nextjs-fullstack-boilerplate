'use client';

import { usePathname } from 'next/navigation';

import { Button } from '@nextui-org/react';
import NextLink from 'next/link';

export function Auth() {
  const pathname = usePathname();

  return (
    <>
      <Button as={NextLink} href={`/login?from=${pathname}`} className="text-default-500" radius="full" variant="light">
        Log&nbsp;In
      </Button>
      <Button
        as={NextLink}
        href={`/signup?from=${pathname}`}
        className="text-default-500"
        radius="full"
        variant="light"
      >
        Sign&nbsp;Up
      </Button>
    </>
  );
}
