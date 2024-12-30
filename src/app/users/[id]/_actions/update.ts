'use server';

import { authErrorMessages } from '@/utils/supabase/authErrorMessages';
import { serverClient } from '@/utils/supabase/serverClient';

type Code = keyof typeof authErrorMessages;

type User = {
  id: string;
  email: string | undefined;
  newEmail?: string | undefined;
  displayName?: string | undefined;
};

type Error = {
  error: {
    message: string;
    status?: number | undefined;
  };
};

export async function update(prevState: unknown, formData: FormData): Promise<User | Error> {
  const supabase = await serverClient();

  const id = formData.get('id') as string;
  const newEmail = formData.get('newEmail') as string;
  const display_name = formData.get('displayName') as string;

  const { data, error } = await supabase.auth.updateUser(
    {
      ...(newEmail && { email: newEmail }),
      data: { display_name },
    },
    {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_URL}/users/${id}`,
    },
  );

  if (error) {
    return {
      error: {
        message: authErrorMessages[error.code as Code],
        status: error.status,
      },
    };
  }

  return {
    id: data.user.id,
    email: data.user.email,
    newEmail: data.user.new_email,
    displayName: data.user.user_metadata.display_name as string | undefined,
  };
}
