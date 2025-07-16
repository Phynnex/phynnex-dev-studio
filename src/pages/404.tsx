import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Phynnex Dev Studio - Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for does not exist."
        />
      </Head>
      <main className="pt-20">
        <div className="bg-whisper py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-creole">Page Not Found</h1>
            <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              The page you are looking for doesn&apos;t exist.&nbsp;
              <Link href="/" className="text-primary-purple underline">
                Go back home
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
