'use client';

import PersonIcon from '@mui/icons-material/Person';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

import { useMe } from '@/app/_hooks/useMe';

export function MeButton() {
  const { me } = useMe();

  if (!me) return null;

  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <IconButton component={NextLink} href={`/users/${me.id}`} sx={{ p: 0 }}>
        <Avatar sx={{ width: 32, height: 32 }}>
          <PersonIcon />
        </Avatar>
      </IconButton>
      <Typography color="text.primary">{me.displayName ? me.displayName : me.email}</Typography>
    </Stack>
  );
}
