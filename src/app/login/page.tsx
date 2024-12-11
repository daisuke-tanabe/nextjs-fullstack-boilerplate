'use client';

import { login } from '@/app/_actions/login';

import { Login } from '@/app/_components/Login';
import { useActionState } from 'react';
import { Icon } from '@iconify/react';

export default function Page() {
  const [formState, formAction, isFormLoading] = useActionState(login, null);

  return (
    <main className="px-4 sm:p-8 py-8 sm:py-12">
      <div className="max-w-sm m-auto">
        {formState && 'id' in formState && 'email' in formState ? (
          <>
            <div className="flex flex-col items-center gap-4">
              <Icon icon="qlementine-icons:success-16" className="text-green-500" width={36} />
              <div className="flex flex-col items-center gap-2">
                <p className="text-2xl font-semibold">Login&nbsp;Successful</p>
                <p className="text-sm">You have successfully signed into your account</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center gap-2 mb-6">
              <p className="text-2xl font-semibold">Welcome Back</p>
              <p className="text-sm">Log in to your account to continue</p>
            </div>
            <Login formState={formState} formAction={formAction} isFormLoading={isFormLoading} />
          </>
        )}
      </div>
    </main>
  );
}
