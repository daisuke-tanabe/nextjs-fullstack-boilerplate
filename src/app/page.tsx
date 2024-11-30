import Image from 'next/image';
import { prisma } from '@/lib';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || user === null) redirect('/login');

  const result = await prisma.user.count();

  return (
    <main className="flex w-full max-w-sm flex-col gap-4 rounded-large px-8 pb-10 pt-6">
      <div>
        <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div>
      <div>
        <div>Your email: {user.email}</div>
        <div>Total users: {result}</div>
      </div>
    </main>
  );
}
