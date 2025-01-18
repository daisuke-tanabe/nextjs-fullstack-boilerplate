import Stack from '@mui/material/Stack';
import { ReactNode } from 'react';

import { AppBar } from '@/app/_components/PresentationLayout/AppBar';

type PresentationLayoutProps = Readonly<{
  children: ReactNode;
}>;

export function PresentationLayout({ children }: PresentationLayoutProps) {
  return (
    <Stack sx={{ height: '100dvh' }}>
      <AppBar />
      {children}
    </Stack>
  );
}
