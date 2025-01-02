'use client';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

import { SignOutButton } from '@/app/_components/PresentationLayout/SignOutButton';
import { useMe } from '@/app/_hooks/useMe';
import { AttributeBox } from '@/app/users/[id]/_components/AttributeBox';
import { AttributeList } from '@/app/users/[id]/_components/AttributeList';
import { AttributeListItemButton } from '@/app/users/[id]/_components/AttributeListItemButton';

export function PresentationPage() {
  const { me } = useMe();

  if (!me) return null;

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

      <AttributeBox>
        <AttributeList label="外観">
          <ListItem disablePadding>
            <AttributeListItemButton href={`/users/${me.id}/theme`}>
              <ListItemText primary="テーマの変更" />
              <ChevronRightIcon />
            </AttributeListItemButton>
          </ListItem>
        </AttributeList>
      </AttributeBox>

      <Stack sx={{ alignItems: 'center' }}>
        <SignOutButton />
      </Stack>
    </Stack>
  );
}
