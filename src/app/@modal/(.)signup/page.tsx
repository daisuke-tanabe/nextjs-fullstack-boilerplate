'use client';

import { useRouter } from 'next/navigation';
import { Modal, ModalBody, ModalContent } from '@nextui-org/react';

import { Signup } from '@/app/_components/Signup';
import { signup } from '@/app/_actions/signup';

export default function LoginPage() {
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
            <Signup action={signup} />
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
