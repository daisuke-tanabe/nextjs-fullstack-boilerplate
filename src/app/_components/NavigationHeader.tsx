import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import NextLink from 'next/link';
import { Signout } from '@/app/_components/Signout';
import { createClient } from '@/utils/supabase/server';
import { Auth } from '@/app/_components/Auth';

export async function NavigationHeader() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <Navbar maxWidth="full" isBordered>
      <NavbarBrand>
        <h1 className="text-2xl font-bold">
          <NextLink href="/">nextjs-fullstack-boilerplate</NextLink>
        </h1>
      </NavbarBrand>
      <NavbarContent justify="end">{user ? <Signout /> : <Auth />}</NavbarContent>
    </Navbar>
  );
}
