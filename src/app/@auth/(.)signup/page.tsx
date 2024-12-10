'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react';

import { Signup } from '@/app/_components/Signup';
import { signup } from '@/app/_actions/signup';
import { useActionState } from 'react';
import { Icon } from '@iconify/react';

export default function LoginPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [formState, formAction, isFormLoading] = useActionState(signup, null);
  const fromParam = searchParams.get('from');

  const handleClose = () => {
    if (!fromParam) {
      router.push('/');
      return;
    }
    router.push(fromParam);
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
                    <p className="text-2xl font-semibold">Sign&nbsp;Up&nbsp;Successful</p>
                    <p className="text-sm">
                      We`&apos;ve sent you an email with further instructions
                      <br />
                      Please check your inbox
                    </p>
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
                  <p className="text-2xl font-semibold">Create Account</p>
                  <p className="text-sm">Sign up for a new account to get started</p>
                </div>
                <Signup formState={formState} formAction={formAction} isFormLoading={isFormLoading} />
              </>
            )}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
