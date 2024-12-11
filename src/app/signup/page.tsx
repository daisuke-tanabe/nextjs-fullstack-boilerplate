'use client';

import { signup } from '@/app/_actions/signup';
import { Signup } from '@/app/_components/Signup';
import { useActionState } from 'react';
import NextLink from 'next/link';
import { Link } from '@nextui-org/react';

export default function Page() {
  const [formState, formAction, isFormLoading] = useActionState(signup, null);

  return (
    <div className="relative flex min-h-dvh flex-col">
      <div className="flex items-center justify-center">
        <div
          className="flex h-screen w-screen items-center justify-end overflow-hidden bg-content1 p-12"
          style={{
            backgroundImage: 'url(https://picsum.photos/1920/1080?grayscale)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute left-10 top-10">
            <div className="flex items-center">
              <Link as={NextLink} href="/" className="text-xl text-white">
                Lorem ipsum
              </Link>
            </div>
          </div>
          <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-6 pb-6 pt-12 shadow-small">
            <div className="flex flex-col items-center gap-2 mb-6">
              <p className="text-2xl font-semibold">Create Account</p>
              <p className="text-sm">Sign up for a new account to get started</p>
            </div>
            <Signup formState={formState} formAction={formAction} isFormLoading={isFormLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}
