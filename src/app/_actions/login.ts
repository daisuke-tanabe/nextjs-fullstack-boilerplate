'use server';

import { User } from '@supabase/supabase-js';

import { authErrorMessages } from '@/utils/supabase/authErrorMessages';
import { serverClient } from '@/utils/supabase/serverClient';

type Code = keyof typeof authErrorMessages;

type Error = {
  error: {
    message: string;
    status?: number | undefined;
  };
};

export async function login(prevState: unknown, formData: FormData): Promise<User | Error> {
  const supabase = await serverClient();

  const { data, error } = await supabase.auth.signInWithPassword({
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

  return data.user;
}
