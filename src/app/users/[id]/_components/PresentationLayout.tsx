'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { PropsWithChildren } from 'react';

import { useMe } from '@/app/_hooks/useMe';

export function PresentationLayout({ children }: PropsWithChildren) {
  const { me } = useMe();

  if (!me) return <div>403</div>;

  return (
    <Container
      maxWidth={false}
      sx={[
        {
          bgcolor: '#f6f6f6',
          flex: 1,
          px: {
            xs: 0,
            sm: 3,
          },
          py: 3,
        },
        (theme) =>
          theme.applyStyles('dark', {
            bgcolor: '#161616',
          }),
      ]}
    >
      <Box
        sx={[
          {
            bgcolor: 'common.white',
            borderRadius: {
              xs: 0,
              sm: 2,
            },
            maxWidth: {
              xs: '100%',
              sm: 428,
            },
            mx: 'auto',
            p: {
              xs: 2,
              sm: 3,
            },
          },
          (theme) =>
            theme.applyStyles('dark', {
              bgcolor: '#212121',
            }),
        ]}
      >
        {children}
      </Box>
    </Container>
  );
}
