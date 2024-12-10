'use server';

import { createClient } from '@/utils/supabase/server';
import { authErrorMessages } from '@/utils/supabase/authErrorMessages';

type Code = keyof typeof authErrorMessages;

type User = {
  id: string | undefined;
  email: string | undefined;
};

type Error = {
  error: {
    message: string;
    status?: number | undefined;
  };
};

export async function signup(prevState: unknown, formData: FormData): Promise<User | Error> {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  if (error) {
    return {
      error: {
        message: authErrorMessages[error.code as Code],
        status: error.status,
      },
    };
  }

  return {
    id: data.user?.id,
    email: data.user?.email,
  };
}
