import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ProfileForm } from './PresentationPage/ProfileForm';

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
          <Typography sx={{ fontSize: 'h5.fontSize', fontWeight: 'bold', textAlign: 'center' }}>Me</Typography>
          <Typography sx={{ textAlign: 'center' }}>Your profile information</Typography>
        </Stack>
        <ProfileForm />
      </Stack>
    </Container>
  );
}
