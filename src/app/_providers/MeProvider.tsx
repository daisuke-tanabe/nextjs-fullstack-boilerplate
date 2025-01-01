'use client';

import { User } from '@supabase/supabase-js';
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

type Me = {
  id: string;
  email: string | undefined;
  newEmail: string | undefined;
  displayName: string | undefined;
  identities: {
    id: string;
    identityId: string;
    provider: string;
    userId: string;
  }[];
} | null;

type MeProviderProps = PropsWithChildren<{
  user: User | null;
}>;

export const MeContext = createContext<Me>(null);
export const SetMeContext = createContext<Dispatch<SetStateAction<Me>>>(() => undefined);

export function MeProvider({ children, user }: MeProviderProps) {
  const [me, setMe] = useState<Me>(
    user
      ? {
          id: user.id,
          email: user.email,
          newEmail: user.new_email,
          displayName: user.user_metadata.display_name as string | undefined,
          identities:
            user.identities?.map(({ id, identity_id, provider, user_id }) => ({
              id,
              identityId: identity_id,
              provider,
              userId: user_id,
            })) ?? [],
        }
      : null,
  );

  return (
    <MeContext value={me}>
      <SetMeContext value={setMe}>{children}</SetMeContext>
    </MeContext>
  );
}
