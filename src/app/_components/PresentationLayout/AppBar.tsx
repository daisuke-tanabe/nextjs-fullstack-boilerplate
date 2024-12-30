'use client';

import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export function AppBar({ children }: PropsWithChildren) {
  const pathname = usePathname();

  if (pathname === '/signup') return null;

  return children;
}
