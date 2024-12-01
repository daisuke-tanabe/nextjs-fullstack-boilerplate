import { login } from '@/app/_actions/login';

import { Login } from '@/app/_components/Login';

export default function Page() {
  return (
    <div className="max-w-sm m-auto">
      <Login action={login} />
    </div>
  );
}
