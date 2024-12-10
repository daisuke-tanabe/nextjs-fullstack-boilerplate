'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Modal, ModalBody, ModalContent } from '@nextui-org/react';

import { Signup } from '@/app/_components/Signup';
import { signup } from '@/app/_actions/signup';

export default function LoginPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
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
        <ModalBody className="py-16 pb-8">
          <div className="flex flex-col items-center gap-3 mb-4">
            <img src="https://placehold.jp/aaaaaa/ffffff/64x64.png?text=DEMO" alt="demo" width="80" height="80" />
            <p className="text-3xl font-semibold">Create Account</p>
            <p className="text-sm">Sign up for a new account to get started</p>
          </div>
          <Signup action={signup} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
