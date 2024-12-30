'use client';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import NextForm from 'next/form';
import { useActionState } from 'react';

import { useMe } from '@/app/_hooks/useMe';
import { CustomTextField } from '@/app/_ui/CustomTextField';

import { update } from '../../_actions/update';

export function ProfileForm() {
  const { me, setMe } = useMe();
  const [formState, formAction, isFormLoading] = useActionState(async (state: unknown, payload: FormData) => {
    const user = await update(state, payload);
    setMe((prevState) =>
      prevState
        ? {
            ...prevState,
            newEmail: 'error' in user ? prevState.newEmail : user.newEmail,
            displayName: 'error' in user ? prevState.displayName : user.displayName,
          }
        : null,
    );
    return user;
  }, null);

  return (
    <NextForm action={formAction} noValidate>
      <Stack spacing={2}>
        {me?.newEmail && (
          <Alert severity="warning">
            メールアドレスの変更が完了していません。変更前と変更後のメールをご確認ください。
          </Alert>
        )}
        <CustomTextField label="User ID - Immutable" id="id" type="text" defaultValue={me?.id} disabled />
        <CustomTextField label="Email - Immutable" id="email" type="email" defaultValue={me?.email} disabled />
        <CustomTextField
          label="New email"
          id="newEmail"
          name="newEmail"
          type="email"
          placeholder="Enter your email"
          defaultValue={me?.newEmail}
        />
        <CustomTextField
          label="Display name"
          id="displayName"
          name="displayName"
          type="text"
          placeholder="Enter your display name"
          defaultValue={me?.displayName}
        />
        <input type="hidden" name="id" defaultValue={me?.id} />
        {formState && 'error' in formState && <Alert severity="error">{formState.error.message}</Alert>}
        <Button type="submit" variant="contained" size="large" disableElevation disabled={isFormLoading}>
          {isFormLoading ? 'Loading' : 'Update'}
        </Button>
      </Stack>
    </NextForm>
  );
}
