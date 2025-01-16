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
            パスワードの更新
          </Typography>
          <Typography sx={{ textAlign: 'center' }}>新しいパスワードを入力してください</Typography>
        </Stack>
        <PasswordResetForm />
      </Stack>
    </Container>
  );
}
