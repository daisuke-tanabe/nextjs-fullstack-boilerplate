'use client';

import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
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
            xs: 1,
            sm: 2,
          },
          py: {
            xs: 1,
            sm: 2,
          },
        },
        (theme) =>
          theme.applyStyles('dark', {
            bgcolor: '#161616',
          }),
      ]}
    >
      <Stack
        spacing={2}
        sx={{
          maxWidth: {
            xs: '100%',
            sm: 480,
          },
          mx: 'auto',
        }}
      >
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <Avatar sx={{ width: 64, height: 64 }}>
            <PersonIcon sx={{ width: 48, height: 48 }} />
          </Avatar>
          <Typography
            sx={{
              fontSize: 'h6.fontSize',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {me.displayName ? me.displayName : '名称未設定'}
          </Typography>
        </Stack>
        {children}
      </Stack>
    </Container>
  );
}
