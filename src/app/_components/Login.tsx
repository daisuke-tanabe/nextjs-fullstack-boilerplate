'use client';

import { Button, Divider, Input, Link } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import NextLink from 'next/link';

type User = {
  id: string;
  email: string | undefined;
};

type Error = {
  error: {
    message: string;
    status?: number;
  };
};

export function Login({
  formState,
  formAction,
  isFormLoading,
}: {
  formState: User | Error | null;
  formAction: (payload: FormData) => void;
  isFormLoading: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-3" action={formAction} noValidate>
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          placeholder="Enter your email"
          variant="bordered"
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          variant="bordered"
        />
        <div className="flex justify-end px-1 py-2">
          <Link as={NextLink} className="text-default-500" href="#dummyURL" size="sm">
            Forgot password?
          </Link>
        </div>
        <Button color="primary" type="submit" isLoading={isFormLoading}>
          {!isFormLoading && 'Log In'}
        </Button>
      </form>
      {formState && 'error' in formState && <div className="text-danger-500 text-sm">{formState.error.message}</div>}
      <div className="flex items-center gap-4 py-2">
        <Divider className="flex-1" />
        <p className="shrink-0 text-tiny text-default-500">OR</p>
        <Divider className="flex-1" />
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <Button isIconOnly aria-label="Google" variant="bordered" size="lg">
          <Icon icon="devicon:google" width={24} />
        </Button>
        <Button isIconOnly aria-label="Facebook" variant="bordered" size="lg">
          <Icon icon="logos:facebook" width={24} />
        </Button>
        <Button isIconOnly aria-label="Apple" variant="bordered" size="lg">
          <Icon icon="simple-icons:apple" width={24} />
        </Button>
      </div>
      <p className="text-center text-small">
        Need to create an account?&nbsp;
        <Link as="a" href="/signup" size="sm">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
