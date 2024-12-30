import PersonIcon from '@mui/icons-material/Person';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

import { serverClient } from '@/utils/supabase/serverClient';

export async function MeButton() {
  const supabase = await serverClient({ next: { tags: ['user'] }, cache: 'force-cache' });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <IconButton component={NextLink} href={`/users/${user.id}`} sx={{ p: 0 }}>
        <Avatar sx={{ width: 32, height: 32 }}>
          <PersonIcon />
        </Avatar>
      </IconButton>
      <Typography color="text.primary">{user.user_metadata.display_name || user.email}</Typography>
    </Stack>
  );
}
