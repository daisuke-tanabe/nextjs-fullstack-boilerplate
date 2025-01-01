'use client';

import { Icon } from '@iconify/react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import NextForm from 'next/form';
import NextLink from 'next/link';
import { useActionState } from 'react';

import { useMe } from '@/app/_hooks/useMe';
import { AttributeBox } from '@/app/users/[id]/_components/AttributeBox';
import { AttributeList } from '@/app/users/[id]/_components/AttributeList';
import { AttributeTextField } from '@/app/users/[id]/_components/AttributeTextField';
import { update } from '@/app/users/[id]/name/_actions/update';

export function PresentationPage() {
  const { me, setMe } = useMe();
  const [formState, formAction, isFormLoading] = useActionState(async (state: unknown, payload: FormData) => {
    const user = await update(state, payload);
    setMe((prevState) =>
      prevState
        ? {
            ...prevState,
            displayName: 'error' in user ? prevState.displayName : user.displayName,
          }
        : null,
    );
    return user;
  }, null);

  if (!me) return null;

  return (
    <Stack spacing={2}>
      <AttributeBox>
        <NextForm action={formAction} noValidate>
          <AttributeList label="名前の変更">
            <ListItem disablePadding sx={{ px: 2, py: 1 }}>
              <AttributeTextField
                defaultValue={me.displayName}
                id="displayName"
                label="名前"
                name="displayName"
                placeholder="表示名"
                type="text"
              />
            </ListItem>
          </AttributeList>
          <Stack spacing={2} sx={{ p: 2 }}>
            {formState && 'newEmail' in formState && <Alert severity="success">ユーザーの名称を変更しました。</Alert>}
            {formState && 'error' in formState && <Alert severity="error">{formState.error.message}</Alert>}
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
              <Button
                component={NextLink}
                href={`/users/${me.id}`}
                variant="outlined"
                disableElevation
                sx={{ width: 108 }}
              >
                キャンセル
              </Button>
              <Button type="submit" variant="contained" disableElevation sx={{ width: 108 }} disabled={isFormLoading}>
                {isFormLoading ? <Icon icon="line-md:loading-twotone-loop" width={24} /> : '保存'}
              </Button>
            </Stack>
          </Stack>
        </NextForm>
      </AttributeBox>
    </Stack>
  );
}
