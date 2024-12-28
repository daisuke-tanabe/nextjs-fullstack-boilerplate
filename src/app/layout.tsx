import type { Metadata } from 'next';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

import { NavigationHeader } from '@/app/_components/NavigationHeader/NavigationHeader';
import { createClient } from '@/utils/supabase/server';
import Toolbar from '@mui/material/Toolbar';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import theme from './_lib/theme';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default async function Layout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <CssBaseline />
      </Head>
      <body className={roboto.variable}>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme} defaultMode="system">
            <NavigationHeader user={user} />
            <Toolbar />
            {children}
            {auth}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
