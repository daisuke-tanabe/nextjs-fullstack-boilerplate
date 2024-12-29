'use client';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NextLink from 'next/link';

import { useMe } from '@/app/_hooks/useMe';

export function PageHome() {
  const { me } = useMe();

  return (
    <Stack>
      {me?.id ? <Box>Your ID: {me.id}</Box> : <Box>Not logged in</Box>}
      <Box>
        <Link component={NextLink} href="/posts/1">
          /posts/1
        </Link>
      </Box>
      <Box>
        <Link component={NextLink} href="/posts/2">
          /posts/2
        </Link>
      </Box>
    </Stack>
  );
}
