import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-semibold mb-4">404 - Page Not Found</h1>
        <Link href="/" className="text-primary-purple underline">
          Return home
        </Link>
      </div>
    </>
  );
}
