'use client';

import { useSearchParams, useRouter } from 'next/navigation';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { login } from '@/app/_actions/login';
import { Login } from '@/app/_components/Login';
import { Suspense, useActionState } from 'react';
import { Icon } from '@iconify/react';

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
  const searchParams = useSearchParams();
  const fromParam = searchParams.get('from');

  const handleClose = () => {
    router.push(fromParam ?? '/');
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogContent>
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
          <>
            <Box>
              <img src="https://placehold.jp/aaaaaa/ffffff/64x64.png?text=DEMO" alt="demo" width="80" height="80" />
            </Box>
            <Box>
              <Typography>Welcome Back</Typography>
              <Typography>Log in to your account to continue</Typography>
            </Box>
            <Login formState={formState} formAction={formAction} isFormLoading={isFormLoading} />
          </>
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
