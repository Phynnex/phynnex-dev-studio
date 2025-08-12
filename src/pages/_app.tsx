import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/Layout';

import SEO from '../components/SEO';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
