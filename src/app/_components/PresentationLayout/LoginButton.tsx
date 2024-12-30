'use client';

import Button from '@mui/material/Button';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export function LoginButton() {
  const pathname = usePathname();
  const isCurrentLoginPath = pathname === '/login';

  return (
    <Button
      component={NextLink}
      href={`/login?from=${pathname}`}
      variant="outlined"
      size="small"
      disabled={isCurrentLoginPath}
    >
      Log&nbsp;In
    </Button>
  );
}
