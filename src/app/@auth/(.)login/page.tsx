'use client';

import { useSearchParams, useRouter } from 'next/navigation';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { login } from '@/app/_actions/login';
import { Login } from '@/app/_components/Login/Login';
import { Suspense, useActionState } from 'react';
import { Icon } from '@iconify/react';
import Stack from '@mui/material/Stack';

type User = {
  id: string;
  email: string | undefined;
};

type Error = {
  error: {
    message: string;
    status?: number | undefined;
  };
};

function LoginModal({
  formState,
  formAction,
  isFormLoading,
}: {
  formState: User | Error | null;
  formAction: (payload: FormData) => void;
  isFormLoading: boolean;
}) {
  const router = useRouter();
  const theme = useTheme();
  const searchParams = useSearchParams();
  const isFullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const fromParam = searchParams.get('from');

  const handleClose = () => {
    router.push(fromParam ?? '/');
  };

  return (
    <Dialog open fullWidth onClose={handleClose} maxWidth="sm" fullScreen={isFullScreen}>
      <DialogContent sx={{ px: 4, pt: 6, pb: 4 }}>
        {formState && 'id' in formState && 'email' in formState ? (
          <Box>
            <Box>
              <Icon icon="qlementine-icons:success-16" className="text-green-500" width={36} />
              <Box>
                <Typography>Log&nbsp;In&nbsp;Successful</Typography>
                <Typography>You have successfully signed into your account</Typography>
              </Box>
            </Box>
            <Button onClick={handleClose}>Continue</Button>
          </Box>
        ) : (
          <Stack spacing={3}>
            <Stack spacing={0.5}>
              <Typography sx={{ fontSize: 'h5.fontSize', fontWeight: 'bold', textAlign: 'center' }}>
                Welcome Back
              </Typography>
              <Typography sx={{ textAlign: 'center' }}>Log in to your account to continue</Typography>
            </Stack>
            <Login formState={formState} formAction={formAction} isFormLoading={isFormLoading} />
          </Stack>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function Page() {
  const [formState, formAction, isFormLoading] = useActionState(login, null);

  return (
    <Suspense>
      <LoginModal formState={formState} formAction={formAction} isFormLoading={isFormLoading} />
    </Suspense>
  );
}
