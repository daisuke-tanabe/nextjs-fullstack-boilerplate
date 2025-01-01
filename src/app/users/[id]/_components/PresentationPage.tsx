'use client';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/system';
import NextLink from 'next/link';

import { useMe } from '@/app/_hooks/useMe';
import { AttributeBox } from '@/app/users/[id]/_components/AttributeBox';

export function PresentationPage() {
  const { me } = useMe();

  if (!me) return null;

  return (
    <Stack spacing={2}>
      <AttributeBox>
        <List
          subheader={
            <ListSubheader sx={{ bgcolor: 'inherit', borderRadius: 'inherit', fontWeight: 'bold', lineHeight: '52px' }}>
              アカウント
            </ListSubheader>
          }
          sx={{ bgcolor: 'inherit', borderRadius: 'inherit', pb: 0 }}
        >
          <ListItem disablePadding>
            <ListItemButton
              component={NextLink}
              href={`/users/${me.id}/email`}
              sx={(theme) => ({
                bgcolor: 'inherit',
                pr: 1,
                ':hover': {
                  backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
                },
              })}
            >
              <ListItemText primary="メールアドレスの変更　" />
              <ChevronRightIcon />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={NextLink}
              href={`/users/${me.id}/name`}
              sx={(theme) => ({
                bgcolor: 'inherit',
                pr: 1,
                ':hover': {
                  backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
                },
              })}
            >
              <ListItemText primary="名前の変更" />
              <ChevronRightIcon />
            </ListItemButton>
          </ListItem>
        </List>
      </AttributeBox>

      <AttributeBox>
        <List
          subheader={
            <ListSubheader sx={{ bgcolor: 'inherit', borderRadius: 'inherit', fontWeight: 'bold', lineHeight: '52px' }}>
              外観
            </ListSubheader>
          }
          sx={{ bgcolor: 'inherit', borderRadius: 'inherit', pb: 0 }}
        >
          <ListItem disablePadding>
            <ListItemButton
              component={NextLink}
              href={`/users/${me.id}/theme`}
              sx={(theme) => ({
                bgcolor: 'inherit',
                pr: 1,
                ':hover': {
                  backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
                },
              })}
            >
              <ListItemText primary="テーマの変更" />
              <ChevronRightIcon />
            </ListItemButton>
          </ListItem>
        </List>
      </AttributeBox>
    </Stack>
  );
}
