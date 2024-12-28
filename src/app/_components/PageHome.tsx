'use client';

import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

type PageHomeProps = {
  email?: string;
};

export function PageHome({ email }: PageHomeProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
        minHeight: '56px',
      }}
    >
      {email ? <Box>Your email: {email}</Box> : <Box>Not logged in</Box>}
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
    </Box>
  );
}
