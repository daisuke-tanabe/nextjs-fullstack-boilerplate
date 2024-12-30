'use client';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { User } from '@supabase/supabase-js';
import NextForm from 'next/form';
import { useActionState } from 'react';

import { CustomTextField } from '@/app/_ui/CustomTextField';

import { update } from '../_actions/update';

type ProfileFormProps = {
  me: User & {
    user_metadata: {
      display_name?: string | undefined;
    };
  };
};

export function ProfileForm({ me }: ProfileFormProps) {
  const [formState, formAction, isFormLoading] = useActionState(update, {
    id: me.id,
    email: me.email,
    newEmail: me.new_email,
    displayName: me.user_metadata.display_name,
  });

  return (
    <NextForm action={formAction} noValidate>
      <Stack spacing={2}>
        <CustomTextField label="User ID - Immutable" id="id" type="text" defaultValue={me.id} disabled />
        <CustomTextField label="Email - Immutable" id="email" type="email" defaultValue={me.email} disabled />
        <CustomTextField
          label="New email"
          id="newEmail"
          name="newEmail"
          type="email"
          placeholder="Enter your email"
          defaultValue={me.new_email}
        />
        <CustomTextField
          label="Display name"
          id="displayName"
          name="displayName"
          type="text"
          placeholder="Enter your display name"
          defaultValue={me.user_metadata.display_name}
        />
        <input type="hidden" name="id" defaultValue={me.id} />
        {'error' in formState && <Alert severity="error">{formState.error.message}</Alert>}
        <Button type="submit" variant="contained" size="large" disableElevation disabled={isFormLoading}>
          {isFormLoading ? 'Loading' : 'Update'}
        </Button>
      </Stack>
    </NextForm>
  );
}