'use client';

import { signup } from '@/app/_actions/signup';
import { Signup } from '@/app/_components/Signup';
import { useActionState } from 'react';
import NextLink from 'next/link';
import Link from '@mui/material/Link';

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
              <Link component={NextLink} href="/">
                Lorem ipsum
              </Link>
            </div>
          </div>
          <div className="absolute top-0 bottom-0 right-0 flex flex-col justify-center w-full max-w-lg gap-4 bg-content1 px-20">
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
