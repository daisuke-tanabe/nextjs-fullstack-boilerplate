'use client';

import { Button, Checkbox, Divider, Input, Link } from '@nextui-org/react';
import { Icon } from '@iconify/react';

type User = {
  id: string | undefined;
  email: string | undefined;
};

type Error = {
  error: {
    message: string;
    status?: number;
  };
};

export function Signup({
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
          autoComplete="username"
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          radius="sm"
          variant="bordered"
        />
        <Input
          autoComplete="current-password"
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          radius="sm"
          variant="bordered"
        />
        <Input
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          radius="sm"
          variant="bordered"
        />
        <Checkbox isRequired className="py-4" size="sm">
          I agree with the&nbsp;
          <Link href="#" size="sm">
            Terms
          </Link>
          &nbsp; and&nbsp;
          <Link href="#" size="sm">
            Privacy Policy
          </Link>
        </Checkbox>
        <Button color="primary" type="submit" radius="sm" isLoading={isFormLoading}>
          {!isFormLoading && 'Sign Up'}
        </Button>
      </form>
      {formState && 'error' in formState && <div className="text-danger-500 text-sm">{formState.error.message}</div>}
      <div className="flex items-center gap-4 py-2">
        <Divider className="flex-1" />
        <p className="shrink-0 text-tiny text-default-500">OR</p>
        <Divider className="flex-1" />
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <Button isIconOnly aria-label="Google" variant="bordered" radius="sm" size="lg">
          <Icon icon="devicon:google" width={24} />
        </Button>
        <Button isIconOnly aria-label="Facebook" variant="bordered" radius="sm" size="lg">
          <Icon icon="logos:facebook" width={24} />
        </Button>
        <Button isIconOnly aria-label="Apple" variant="bordered" radius="sm" size="lg">
          <Icon icon="simple-icons:apple" width={24} />
        </Button>
      </div>
      <p className="text-center text-small">
        Already have an account?&nbsp;
        <Link as="a" href="/login" size="sm">
          Log In
        </Link>
      </p>
    </div>
  );
}
