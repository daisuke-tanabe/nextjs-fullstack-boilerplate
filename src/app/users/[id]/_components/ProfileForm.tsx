'use client';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { User } from '@supabase/supabase-js';
import NextForm from 'next/form';
import { useActionState } from 'react';

import { CustomTextField } from '@/ui/CustomTextField';

import { update } from '../_actions/update';

type ProfileFormProps = {
  me: User;
};

export function ProfileForm({ me }: ProfileFormProps) {
  const [formState, formAction, isFormLoading] = useActionState(update, {
    id: me.id,
    email: me.email,
    newEmail: me.new_email,
  });

  return (
    <NextForm action={formAction} noValidate>
      <Stack spacing={2}>
        <CustomTextField label="User ID (Immutable)" id="id" name="id" type="text" defaultValue={me.id} readOnly />
        <CustomTextField
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          defaultValue={me.email}
          readOnly
        />
        <CustomTextField
          label="New email"
          id="newEmail"
          name="newEmail"
          type="email"
          placeholder="Enter your email"
          defaultValue={me.new_email}
        />
        {'error' in formState && <Alert severity="error">{formState.error.message}</Alert>}
        <Button type="submit" variant="contained" size="large" disableElevation disabled={isFormLoading}>
          {isFormLoading ? 'Loading' : 'Update'}
        </Button>
      </Stack>
    </NextForm>
  );
}
