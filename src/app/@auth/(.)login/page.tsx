'use client';

import { useRouter } from 'next/navigation';

import { Modal, ModalBody, ModalContent } from '@nextui-org/react';

import { login } from '@/app/_actions/login';
import { Login } from '@/app/_components/Login';

export default function Page() {
  const router = useRouter();

  return (
    <Modal
      size="sm"
      placement="top"
      defaultOpen
      onClose={() => {
        router.back();
      }}
    >
      <ModalContent>
        <ModalBody className="py-16 pb-8">
          <div className="flex flex-col items-center gap-3 mb-4">
            <img src="https://placehold.jp/aaaaaa/ffffff/64x64.png?text=DEMO" alt="demo" width="80" height="80" />
            <p className="text-3xl font-semibold">Welcome Back</p>
            <p className="text-sm">Log in to your account to continue</p>
          </div>
          <Login action={login} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
