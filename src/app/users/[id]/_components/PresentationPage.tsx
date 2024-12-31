import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ProfileForm } from './PresentationPage/ProfileForm';

export function PresentationPage() {
  return (
    <Stack spacing={3}>
      <Stack spacing={0.5}>
        <Typography sx={{ fontSize: 'h5.fontSize', fontWeight: 'bold', textAlign: 'center' }}>Me</Typography>
        <Typography sx={{ textAlign: 'center' }}>Your profile information</Typography>
      </Stack>
      <ProfileForm />
    </Stack>
  );
}
