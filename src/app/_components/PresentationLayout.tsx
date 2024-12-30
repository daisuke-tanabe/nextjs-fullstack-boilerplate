import { ReactNode } from 'react';

import { AppBar } from '@/app/_components/PresentationLayout/AppBar';
import { AppBarContent } from '@/app/_components/PresentationLayout/AppBarContent';

type PresentationLayoutProps = Readonly<{
  auth: ReactNode;
  children: ReactNode;
}>;

export function PresentationLayout({ auth, children }: PresentationLayoutProps) {
  return (
    <>
      <AppBar>
        <AppBarContent />
      </AppBar>
      {children}
      {auth}
    </>
  );
}
