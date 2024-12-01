'use client';

import { useRouter } from 'next/navigation';

import { Modal, ModalBody, ModalContent } from '@nextui-org/react';

import { login } from '@/app/_actions/login';
import { Login } from '@/app/_components/Login';

export default function Page() {
  const router = useRouter();

  return (
    <Modal
      placement="top"
      defaultOpen
      onClose={() => {
        router.back();
      }}
    >
      <ModalContent>
        <ModalBody>
          <div className="px-4 py-8">
            <Login action={login} />
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
