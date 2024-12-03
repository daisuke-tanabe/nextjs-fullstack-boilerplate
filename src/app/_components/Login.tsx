'use client';

import { useActionState } from 'react';
import { Button, Input } from '@nextui-org/react';

type UserPayload = {
  id: string;
  email: string;
};

type ErrorPayload = {
  error: {
    message: string;
    status?: number;
  };
};

export function Login({
  action,
}: {
  action: (prevState: unknown, formData: FormData) => Promise<UserPayload | ErrorPayload>;
}) {
  const [formState, formAction, isFormLoading] = useActionState(action, null);

  return (
    <div className="flex flex-col gap-4">
      <p className="pb-4 text-left text-3xl font-semibold">Login</p>
      <form className="flex flex-col gap-4" action={formAction} noValidate>
        <Input label="Email" id="email" name="email" type="email" autoComplete="username" />
        <Input label="Password" id="password" name="password" type="password" autoComplete="current-password" />
        <Button color="primary" type="submit" isLoading={isFormLoading}>
          {!isFormLoading && 'Login'}
        </Button>
      </form>
      {formState && 'error' in formState && <div className="text-danger-500 text-sm">{formState.error.message}</div>}
    </div>
  );
}
