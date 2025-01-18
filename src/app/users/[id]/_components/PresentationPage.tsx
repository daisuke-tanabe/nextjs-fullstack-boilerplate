'use client';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { usePathname, useRouter } from 'next/navigation';

import { useMe } from '@/app/_hooks/useMe';
import { AttributeBox } from '@/app/users/[id]/_components/AttributeBox';
import { AttributeList } from '@/app/users/[id]/_components/AttributeList';
import { AttributeListItemButton } from '@/app/users/[id]/_components/AttributeListItemButton';
import { browserClient } from '@/utils/supabase/browserClient';

export function PresentationPage() {
  const pathname = usePathname();
  const router = useRouter();
  const { me, setMe } = useMe();

  const supabase = browserClient();

  if (!me) return null;

  const handleSignout = async () => {
    await supabase.auth.signOut();
    setMe(null);
    // 自身のユーザーページでサインアウトした際はホームに戻す
    if (pathname.includes(`/users/${me.id}`)) router.push('/');
  };

  return (
    <Stack spacing={3}>
      <AttributeBox>
        <AttributeList label="アカウント">
          <ListItem disablePadding>
            <AttributeListItemButton href={`/users/${me.id}/email`}>
              <ListItemText primary="メールアドレスの変更" />
              <ChevronRightIcon />
            </AttributeListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <AttributeListItemButton href={`/users/${me.id}/password`}>
              <ListItemText primary="パスワードの変更" />
              <ChevronRightIcon />
            </AttributeListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <AttributeListItemButton href={`/users/${me.id}/name`}>
              <ListItemText primary="名前の変更" />
              <ChevronRightIcon />
            </AttributeListItemButton>
          </ListItem>
        </AttributeList>
        <ListItem disablePadding>
          <AttributeListItemButton href={`/users/${me.id}/provider`}>
            <ListItemText primary="外部プロバイダー認証" />
            <ChevronRightIcon />
          </AttributeListItemButton>
        </ListItem>
      </AttributeBox>

      <Stack sx={{ alignItems: 'center' }}>
        <Button size="large" variant="outlined" onClick={() => void handleSignout()}>
          Signout
        </Button>
      </Stack>
    </Stack>
  );
}
