'use client';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import NextForm from 'next/form';
import { useActionState } from 'react';

import { CustomTextField } from '@/app/_ui/CustomTextField';

import { update } from '../_actions/update';

export function PasswordRecoveryForm() {
  const [formState, formAction, isFormLoading] = useActionState(update, null);

  return (
    <Stack spacing={2}>
      <NextForm action={formAction} noValidate>
        <Stack spacing={2}>
          <CustomTextField label="Email" id="email" name="email" type="email" placeholder="あなたのメールアドレス" />
          <Button type="submit" variant="contained" size="large" disableElevation disabled={isFormLoading}>
            {isFormLoading ? 'Loading' : 'Recovery'}
          </Button>
        </Stack>
      </NextForm>
      {formState && !('error' in formState) && typeof formState === 'object' && (
        <Alert severity="success">メールを送信しました。</Alert>
      )}
      {formState && 'error' in formState && <Alert severity="error">{formState.error.message}</Alert>}
    </Stack>
  );
}
