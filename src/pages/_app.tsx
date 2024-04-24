import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/app';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@/core/providers';
import { Layout } from '@/presentation/layout/layout';
import '@/configs/styles/globalStyles.css';
import '@/configs/styles/global';

import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const route = () => {
    if (typeof window !== 'undefined') {
      return window?.location;
    }
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="16x16" />
      </Head>

      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider>
          <RecoilRoot>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </ThemeProvider>
      </AppRouterCacheProvider>

      <Analytics mode="production" />
      <SpeedInsights />
    </>
  );
}
