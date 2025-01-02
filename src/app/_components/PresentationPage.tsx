import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NextLink from 'next/link';

export async function PresentationPage() {
  const response = await fetch('https://dummyjson.com/posts?limit=10', { cache: 'force-cache' });
  const { posts } = (await response.json()) as { posts: { id: string; title: string }[] };

  return (
    <Stack>
      {posts.map(({ id, title }) => (
        <Box key={id}>
          <Link component={NextLink} href={`/posts/${id}`}>
            {title}
          </Link>
        </Box>
      ))}
    </Stack>
  );
}
