import { signup } from '@/app/_actions/signup';
import { Signup } from '@/app/_components/Signup';

export default function Page() {
  return (
    <div className="max-w-sm m-auto flex flex-col gap-4">
      <div className="flex flex-col items-center gap-3 mb-4">
        <p className="text-3xl font-semibold">Create Account</p>
        <p className="text-sm">Sign up for a new account to get started</p>
      </div>
      <Signup action={signup} />
    </div>
  );
}
