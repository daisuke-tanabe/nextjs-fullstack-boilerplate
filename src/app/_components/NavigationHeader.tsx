'use client';

import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

export function NavigationHeader({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();

  if (pathname === '/signup' || segment === 'signup') return null;

  return (
    <Navbar maxWidth="full" isBordered>
      <NavbarBrand>
        <h1 className="text-2xl font-bold">
          <NextLink href="/">Lorem ipsum</NextLink>
        </h1>
      </NavbarBrand>
      <NavbarContent justify="end">{children}</NavbarContent>
    </Navbar>
  );
}
