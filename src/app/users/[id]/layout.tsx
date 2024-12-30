import { PropsWithChildren } from 'react';

import { serverClient } from '@/utils/supabase/serverClient';

import { PresentationLayout } from './_components/PresentationLayout';

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

  if (id !== user?.id) return <div>403</div>;

  return <PresentationLayout>{children}</PresentationLayout>;
}
