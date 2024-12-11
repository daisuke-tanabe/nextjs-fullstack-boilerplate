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
        className="text-sm border	rounded px-4"
        color="primary"
        radius="sm"
        size="sm"
        variant="bordered"
        isDisabled={isLoginPath}
      >
        Log&nbsp;In
      </Button>
      <Button
        as="a"
        href="/signup"
        className="text-sm rounded px-4"
        color="primary"
        radius="sm"
        size="sm"
        variant="solid"
      >
        Sign&nbsp;Up
      </Button>
    </>
  );
}
