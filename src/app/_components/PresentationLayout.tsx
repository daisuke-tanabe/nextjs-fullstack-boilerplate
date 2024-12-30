import { ReactNode } from 'react';

import { AppBar } from '@/app/_components/PresentationLayout/AppBar';

type PresentationLayoutProps = Readonly<{
  auth: ReactNode;
  children: ReactNode;
}>;

export function PresentationLayout({ auth, children }: PresentationLayoutProps) {
  return (
    <>
      <AppBar />
      {children}
      {auth}
    </>
  );
}
