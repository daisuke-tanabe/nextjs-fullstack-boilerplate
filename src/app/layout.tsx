import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar, NavbarBrand, NavbarContent, NextUIProvider } from '@nextui-org/react';
import './globals.css';
import Image from 'next/image';
import { Signout } from '@/app/_components/Signout';

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
              <Signout />
            </NavbarContent>
          </Navbar>
          <main className="p-6">{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
}
