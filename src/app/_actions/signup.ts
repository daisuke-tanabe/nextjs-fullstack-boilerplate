'use server';

import { authErrorMessages } from '@/utils/supabase/authErrorMessages';
import { serverClient } from '@/utils/supabase/serverClient';

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
  const supabase = await serverClient();

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
