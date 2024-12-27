'use client';

import NextLink from 'next/link';
import { Link } from '@nextui-org/react';

type PageHomeProps = {
  email?: string;
};

export function PageHome({ email }: PageHomeProps) {
  return (
    <div>
      {email ? <div>Your email: {email}</div> : <div>Not logged in</div>}
      <div>
        <Link as={NextLink} href="/posts/1" size="sm">
          /posts/1
        </Link>
      </div>
      <div>
        <Link as={NextLink} href="/posts/2" size="sm">
          /posts/2
        </Link>
      </div>
    </div>
  );
}
