import { PropsWithChildren } from 'react';

import { serverClient } from '@/utils/supabase/serverClient';

type LayoutProps = PropsWithChildren<{
  params: Promise<{
    id: string;
  }>;
}>;

export default async function Layout({ children, params }: LayoutProps) {
  const { id } = await params;

  const serverSupabase = await serverClient();
  const {
    data: { user: me },
  } = await serverSupabase.auth.getUser();

  // 自身のJWTセッションと違うユーザー情報は閲覧させない
  if (id !== me?.id) return <div>403</div>;

  return children;
}
