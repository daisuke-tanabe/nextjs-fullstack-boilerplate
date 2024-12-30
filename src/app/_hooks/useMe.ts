import { useContext } from 'react';

import { MeContext, SetMeContext } from '@/app/_providers/MeProvider';

export function useMe() {
  const me = useContext(MeContext);
  const setMe = useContext(SetMeContext);

  return {
    me,
    setMe,
  };
}
