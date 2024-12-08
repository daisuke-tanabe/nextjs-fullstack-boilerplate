import { login } from '@/app/_actions/login';

import { Login } from '@/app/_components/Login';

export default function Page() {
  return (
    <div className="max-w-sm m-auto flex flex-col gap-4">
      <div className="flex flex-col items-center gap-3 mb-4">
        <p className="text-3xl font-semibold">Welcome Back</p>
        <p className="text-sm">Log in to your account to continue</p>
      </div>
      <Login action={login} />
    </div>
  );
}
