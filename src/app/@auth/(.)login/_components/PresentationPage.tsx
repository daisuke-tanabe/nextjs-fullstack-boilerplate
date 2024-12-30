'use client';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter, useSearchParams } from 'next/navigation';

import { LoginForm } from '@/app/_ui/LoginForm';

export function PresentationPage() {
  const router = useRouter();
  const theme = useTheme();
  const searchParams = useSearchParams();
  const isFullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const fromParam = searchParams.get('from');

  const handleClose = () => {
    router.push(fromParam ?? '/');
  };

  return (
    <Dialog
      open
      fullWidth
      onClose={handleClose}
      fullScreen={isFullScreen}
      PaperProps={{
        sx: {
          maxWidth: {
            xs: '100%',
            sm: 375,
          },
        },
      }}
    >
      <DialogContent sx={{ px: 3, pt: 6, pb: 3 }}>
        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography sx={{ fontSize: 'h5.fontSize', fontWeight: 'bold', textAlign: 'center' }}>
              Welcome Back
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>Log in to your account to continue</Typography>
          </Stack>
          <LoginForm />
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
