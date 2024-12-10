'use client';

import { useRouter } from 'next/navigation';

import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react';

import { login } from '@/app/_actions/login';
import { Login } from '@/app/_components/Login';
import { useActionState } from 'react';
import { Icon } from '@iconify/react';

export default function Page() {
  const router = useRouter();
  const [formState, formAction, isFormLoading] = useActionState(login, null);

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal size="sm" placement="top" defaultOpen onClose={handleClose}>
      <ModalContent>
        <ModalBody>
          <div className="py-12 pb-4">
            {formState && 'id' in formState && 'email' in formState ? (
              <>
                <div className="flex flex-col items-center gap-4 mb-6">
                  <Icon icon="qlementine-icons:success-16" className="text-green-500" width={36} />
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-2xl font-semibold">Login&nbsp;Successful</p>
                    <p className="text-sm">You have successfully signed into your account</p>
                  </div>
                </div>
                <Button className="block mx-auto" variant="bordered" size="lg" onClick={handleClose}>
                  Done
                </Button>
              </>
            ) : (
              <>
                <div className="flex justify-center mb-4">
                  <img src="https://placehold.jp/aaaaaa/ffffff/64x64.png?text=DEMO" alt="demo" width="80" height="80" />
                </div>
                <div className="flex flex-col items-center gap-2 mb-6">
                  <p className="text-2xl font-semibold">Welcome Back</p>
                  <p className="text-sm">Log in to your account to continue</p>
                </div>
                <Login formState={formState} formAction={formAction} isFormLoading={isFormLoading} />
              </>
            )}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
