'use client';

import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { useState } from 'react';

import { useMe } from '@/app/_hooks/useMe';
import { AttributeBox } from '@/app/users/[id]/_components/AttributeBox';
import { AttributeList } from '@/app/users/[id]/_components/AttributeList';
import { browserClient } from '@/utils/supabase/browserClient';

export function PresentationPage() {
  const { me, setMe } = useMe();
  const [isLoading, setIsLoading] = useState(false);

  if (!me) return null;

  const supabase = browserClient();

  const hasGoogleIdentify = me.identities.some(({ provider }) => provider === 'google');

  const handleClick = async () => {
    setIsLoading(true);
    if (!hasGoogleIdentify) {
      const { data } = await supabase.auth.linkIdentity({
        provider: 'google',
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_URL}/users/${me.id}/provider`,
        },
      });
      setIsLoading(!data);
    } else {
      const { data: identitiesData } = await supabase.auth.getUserIdentities();
      if (!identitiesData) {
        setIsLoading(false);
        return;
      }
      const googleIdentity = identitiesData.identities.find(({ provider }) => provider === 'google');
      if (!googleIdentity) {
        setIsLoading(false);
        return;
      }
      const { data: googleUnlinkIdentityData } = await supabase.auth.unlinkIdentity(googleIdentity);
      if (!googleUnlinkIdentityData) {
        setIsLoading(false);
        return;
      }
      setMe((prevState) =>
        prevState
          ? {
              ...prevState,
              identities: prevState.identities.filter(({ provider }) => provider !== 'google'),
            }
          : null,
      );
      setIsLoading(false);
    }
  };

  return (
    <Stack spacing={2}>
      <AttributeBox>
        <AttributeList label="外部プロパイダー認証">
          <ListItem disablePadding sx={{ px: 2, pt: '10px', pb: '11px', justifyContent: 'space-between' }}>
            <Stack direction="row" gap={2} sx={{ alignItems: 'center' }}>
              <Icon icon="devicon:google" width={24} />
              <Typography>Google</Typography>
            </Stack>
            <Button
              type="button"
              variant={hasGoogleIdentify ? 'contained' : 'outlined'}
              onClick={() => void handleClick()}
              sx={{ height: 32, width: 80 }}
              disabled={isLoading}
              disableElevation
            >
              <Icon
                icon="line-md:loading-twotone-loop"
                width={24}
                height={24}
                style={{ display: isLoading ? 'block' : 'none' }}
              />
              {!isLoading && (hasGoogleIdentify ? '連携済' : '未連携')}
            </Button>
          </ListItem>
        </AttributeList>
        <Stack spacing={2} sx={{ p: 2 }}>
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
            <Button
              component={NextLink}
              href={`/users/${me.id}`}
              variant="outlined"
              disableElevation
              sx={{ width: 108 }}
            >
              戻る
            </Button>
          </Stack>
        </Stack>
      </AttributeBox>
    </Stack>
  );
}
