import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NextForm from 'next/form';

import { CustomTextField } from '@/ui/CustomTextField';
import { serverClient } from '@/utils/supabase/serverClient';

export default async function Page() {
  const serverSupabase = await serverClient();
  const {
    data: { user: me },
  } = await serverSupabase.auth.getUser();

  // TODO: エラーハンドリングは後で考える
  if (!me) return null;

  return (
    <Container
      sx={{
        pt: 6,
        pb: 3,
        maxWidth: {
          xs: '100%',
          sm: 375,
        },
      }}
    >
      <Stack spacing={3}>
        <Stack spacing={0.5}>
          <Typography sx={{ fontSize: 'h5.fontSize', fontWeight: 'bold', textAlign: 'center' }}>Me</Typography>
          <Typography sx={{ textAlign: 'center' }}>Your profile information</Typography>
        </Stack>
        <NextForm action="#dummyAction" noValidate>
          <Stack spacing={2}>
            <CustomTextField
              label="User ID (Immutable)"
              id="uid"
              name="uid"
              type="text"
              defaultValue={me.id}
              disabled
            />
            <CustomTextField
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              defaultValue={me.email}
            />
            <CustomTextField
              label="Name"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              defaultValue={(me.user_metadata.name as string | undefined) ?? ''}
            />
          </Stack>
        </NextForm>
      </Stack>
    </Container>
  );
}
