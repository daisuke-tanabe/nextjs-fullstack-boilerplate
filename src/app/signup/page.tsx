import { signup } from '@/app/_actions/signup';
import { Signup } from '@/app/_components/Signup';

export default function Page() {
  return (
    <div className="max-w-sm m-auto">
      <Signup action={signup} />
    </div>
  );
}
