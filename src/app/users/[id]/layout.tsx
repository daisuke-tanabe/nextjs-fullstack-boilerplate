import { PropsWithChildren } from 'react';

import { serverClient } from '@/utils/supabase/serverClient';

type LayoutProps = PropsWithChildren<{
  params: Promise<{
    id: string;
  }>;
}>;

export default async function Layout({ children, params }: LayoutProps) {
  const { id } = await params;
  const supabase = await serverClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 自身のJWTセッションと違うユーザー情報は閲覧させない
  if (id !== user?.id) return <div>403</div>;

  return children;
}
