'use client';

import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import ListItem from '@mui/material/ListItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import { useColorScheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { ChangeEvent, useEffect } from 'react';

import { useMe } from '@/app/_hooks/useMe';
import { AttributeBox } from '@/app/users/[id]/_components/AttributeBox';
import { AttributeList } from '@/app/users/[id]/_components/AttributeList';

export function PresentationPage() {
  const { me } = useMe();
  const { mode = 'system', setMode } = useColorScheme();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as 'light' | 'dark' | 'system';
    setMode(value);
    localStorage.setItem('ui-mode', value);
  };

  useEffect(() => {
    const uiMode = localStorage.getItem('ui-mode') as 'light' | 'dark' | 'system' | null;
    setMode(uiMode ?? 'system');
  }, []);

  if (!me) return null;

  return (
    <Stack spacing={2}>
      <AttributeBox>
        <AttributeList label="テーマの変更">
          <ListItem disablePadding sx={{ px: 2, pt: '10px', pb: '11px', justifyContent: 'space-between' }}>
            <Typography>テーマ</Typography>
            <RadioGroup row name="theme" value={mode} onChange={handleChange}>
              <FormControlLabel
                value="system"
                control={<Radio sx={{ p: 0 }} />}
                label="システム"
                sx={{ ml: 0, gap: 0.5 }}
              />
              <FormControlLabel
                value="light"
                control={<Radio sx={{ p: 0 }} />}
                label="ライト"
                sx={{ ml: 0, gap: 0.5 }}
              />
              <FormControlLabel
                value="dark"
                control={<Radio sx={{ p: 0 }} />}
                label="ダーク"
                sx={{ ml: 0, gap: 0.5 }}
              />
            </RadioGroup>
          </ListItem>
        </AttributeList>
        <Stack spacing={2} sx={{ p: 2 }}>
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
            <Button
              component={NextLink}
              href={`/users/${me.id}`}
              variant="outlined"
              disableElevation
              sx={{ width: 108 }}
            >
              戻る
            </Button>
          </Stack>
        </Stack>
      </AttributeBox>
    </Stack>
  );
}
