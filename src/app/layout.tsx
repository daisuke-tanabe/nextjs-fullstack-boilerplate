import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Button, Navbar, NavbarBrand, NavbarContent, NextUIProvider } from '@nextui-org/react';
import './globals.css';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <Navbar maxWidth="full" isBordered>
            <NavbarBrand>
              <Image src="/vercel.svg" alt="Next.js Logo" width={97} height={22} priority />
            </NavbarBrand>
            <NavbarContent justify="end">
              <Button className="text-default-500" radius="full" variant="light">
                Login
              </Button>
              <Button className="text-default-500" radius="full" variant="light">
                Signup
              </Button>
            </NavbarContent>
          </Navbar>
          <main className="p-6">{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
}
