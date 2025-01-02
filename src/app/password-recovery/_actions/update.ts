'use server';

import { authErrorMessages } from '@/utils/supabase/authErrorMessages';
import { serverClient } from '@/utils/supabase/serverClient';

type Code = keyof typeof authErrorMessages;

type Error = {
  error: {
    message: string;
    status?: number | undefined;
  };
};

export async function update(prevState: unknown, formData: FormData): Promise<object | null | Error> {
  const supabase = await serverClient();

  const { data, error } = await supabase.auth.resetPasswordForEmail(formData.get('email') as string);

  if (error) {
    return {
      error: {
        message: authErrorMessages[error.code as Code],
        status: error.status,
      },
    };
  }

  return data;
}
