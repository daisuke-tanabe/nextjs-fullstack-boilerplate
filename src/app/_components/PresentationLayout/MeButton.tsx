'use client';

import PersonIcon from '@mui/icons-material/Person';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import NextLink from 'next/link';

import { useMe } from '@/app/_hooks/useMe';

export function MeButton() {
  const { me } = useMe();

  if (!me) return null;

  return (
    <IconButton component={NextLink} href={`/users/${me.id}`} sx={{ p: 0 }}>
      <Avatar sx={{ width: 32, height: 32 }}>
        <PersonIcon />
      </Avatar>
    </IconButton>
  );
}
