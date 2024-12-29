'use client';

import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

type Me = {
  id?: string;
} | null;

type MeProviderProps = PropsWithChildren<{
  me: Me;
}>;

export const MeContext = createContext<Me>(null);
export const SetMeContext = createContext<Dispatch<SetStateAction<Me>>>(() => undefined);

export function MeProvider({ children, me }: MeProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setMe] = useState<Me>(null);

  return (
    <MeContext value={me}>
      <SetMeContext value={setMe}>{children}</SetMeContext>
    </MeContext>
  );
}
