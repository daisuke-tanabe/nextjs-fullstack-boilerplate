'use client';

import { PropsWithChildren } from 'react';

import { useMe } from '@/app/_hooks/useMe';

export function PresentationLayout({ children }: PropsWithChildren) {
  const { me } = useMe();

  if (!me) return <div>403</div>;

  return children;
}
