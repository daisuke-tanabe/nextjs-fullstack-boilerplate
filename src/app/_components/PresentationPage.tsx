import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NextLink from 'next/link';

export function PresentationPage() {
  return (
    <Stack>
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
