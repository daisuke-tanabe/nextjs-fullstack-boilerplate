import { Button, Input } from '@nextui-org/react';

import { login, signup } from './actions';

export default function LoginPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large px-8 pb-10 pt-6">
        <form className="flex flex-col gap-4">
          <Input label="Email" id="email" name="email" type="email" required />
          <Input label="password" id="password" name="password" type="password" required />
          <Button color="primary" type="submit" formAction={login}>
            Log in
          </Button>
          <Button color="primary" type="submit" formAction={signup}>
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
}
