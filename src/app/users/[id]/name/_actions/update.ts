'use server';

import { authErrorMessages } from '@/utils/supabase/authErrorMessages';
import { serverClient } from '@/utils/supabase/serverClient';

type Code = keyof typeof authErrorMessages;

type User = {
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
  const displayName = formData.get('displayName') as string;

  const { data, error } = await supabase.auth.updateUser(
    {
      data: {
        display_name: displayName,
      },
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
    displayName: data.user.user_metadata.display_name as string | undefined,
  };
}
