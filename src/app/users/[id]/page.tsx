import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { serverClient } from '@/utils/supabase/serverClient';

import { ProfileForm } from './_components/ProfileForm';

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
        {me.new_email && (
          <Alert severity="warning">
            メールアドレスの変更が完了していません。変更前と変更後のメールをご確認ください。
          </Alert>
        )}
        <ProfileForm me={me} />
      </Stack>
    </Container>
  );
}
