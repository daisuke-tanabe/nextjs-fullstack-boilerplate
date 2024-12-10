'use client';

import { signup } from '@/app/_actions/signup';
import { Signup } from '@/app/_components/Signup';
import { useActionState } from 'react';
import { Icon } from '@iconify/react';

export default function Page() {
  const [formState, formAction, isFormLoading] = useActionState(signup, null);

  return (
    <div className="max-w-sm m-auto flex flex-col gap-4">
      {formState && 'id' in formState && 'email' in formState ? (
        <>
          <div className="flex flex-col items-center gap-4">
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
        </>
      ) : (
        <>
          <div className="flex flex-col items-center gap-2 mb-6">
            <p className="text-2xl font-semibold">Create Account</p>
            <p className="text-sm">Sign up for a new account to get started</p>
          </div>
          <Signup formState={formState} formAction={formAction} isFormLoading={isFormLoading} />
        </>
      )}
    </div>
  );
}
