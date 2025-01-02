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
import { update } from '@/app/users/[id]/email/_actions/update';

export function PresentationPage() {
  const { me, setMe } = useMe();
  const [formState, formAction, isFormLoading] = useActionState(async (state: unknown, payload: FormData) => {
    const user = await update(state, payload);
    setMe((prevState) =>
      prevState
        ? {
            ...prevState,
            newEmail: 'error' in user ? prevState.newEmail : user.newEmail,
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
          <AttributeList label="メールアドレスの変更">
            <ListItem disablePadding sx={{ px: 2, py: 1 }}>
              <AttributeTextField defaultValue={me.email} disabled id="email" label="現在" name="email" type="email" />
            </ListItem>
            <ListItem disablePadding sx={{ px: 2, py: 1 }}>
              <AttributeTextField
                defaultValue={me.newEmail}
                id="newEmail"
                label="変更"
                name="newEmail"
                placeholder="新しいメールアドレス"
                type="email"
              />
            </ListItem>
          </AttributeList>
          <Stack spacing={2} sx={{ p: 2 }}>
            {formState && 'newEmail' in formState && (
              <Alert severity="success">変更前と変更後のメールアドレスに確認メールを送信しました。</Alert>
            )}
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
