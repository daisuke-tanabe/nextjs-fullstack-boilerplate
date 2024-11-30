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
    <div>
      <div>Your email: {user.email}</div>
      <div>Total users: {result}</div>
    </div>
  );
}
