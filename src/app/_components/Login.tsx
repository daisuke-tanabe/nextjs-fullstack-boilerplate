'use client';

import { useActionState } from 'react';

import { Button, Input } from '@nextui-org/react';
import { User } from '@supabase/supabase-js';

type UserData = Pick<User, 'id' | 'email'>;

export function Login({ action }: { action: (prevState: unknown, formData: FormData) => Promise<UserData | null> }) {
  const [formState, formAction, isFormLoading] = useActionState(action, null);

  return (
    <div className="flex flex-col gap-4">
      <p className="pb-4 text-left text-3xl font-semibold">Login</p>
      {formState ? (
        <div>Success</div>
      ) : (
        <form className="flex flex-col gap-4" action={formAction}>
          <Input label="Email" id="email" name="email" type="email" autoComplete="username" required />
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
          <Button color="primary" type="submit" isLoading={isFormLoading}>
            {!isFormLoading && 'Login'}
          </Button>
        </form>
      )}
    </div>
  );
}
