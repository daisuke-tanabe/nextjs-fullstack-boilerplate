'use client';

import { Button, Input } from '@nextui-org/react';
import { useActionState } from 'react';

type UserPayload = {
  id: string | null;
  email: string | null;
};

type ErrorPayload = {
  error: {
    message: string;
    status?: number;
  };
};

export function Signup({
  action,
}: {
  action: (prevState: unknown, formData: FormData) => Promise<UserPayload | ErrorPayload>;
}) {
  const [formState, formAction, isFormLoading] = useActionState(action, null);

  return (
    <div className="flex flex-col gap-4">
      <p className="pb-4 text-left text-3xl font-semibold">Signup</p>
      <form className="flex flex-col gap-4" action={formAction} noValidate>
        <Input label="Email" id="email" name="email" type="email" />
        <Input label="Password" id="password" name="password" type="password" />
        <Button color="primary" type="submit" isLoading={isFormLoading}>
          {!isFormLoading && 'Signup'}
        </Button>
      </form>
      {formState && 'error' in formState && <div className="text-danger-500 text-sm">{formState.error.message}</div>}
    </div>
  );
}
