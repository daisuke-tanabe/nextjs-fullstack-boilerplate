import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { PasswordResetForm } from './PasswordResetForm';

export function PresentationPage() {
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
          <Typography sx={{ fontSize: 'h5.fontSize', fontWeight: 'bold', textAlign: 'center' }}>
            パスワードの回復
          </Typography>
          <Typography sx={{ textAlign: 'center' }}>
            登録したメールアドレスを入力して下さい。
            <br />
            パスワードを設定するためのURLをお送りします。
          </Typography>
        </Stack>
        <PasswordResetForm />
      </Stack>
    </Container>
  );
}
