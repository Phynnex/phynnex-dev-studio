import React from 'react';
import Head from 'next/head';

const CookiesPage = () => {
  return (
    <>
      <Head>
        <title>Phynnex Dev Studio - Cookies Settings</title>
        <meta
          name="description"
          content="Information about how Phynnex Dev Studio uses cookies."
        />
      </Head>
      <main className="pt-20">
        <div className="bg-whisper py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-creole">Cookies Settings</h1>
            <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              This page is under construction.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default CookiesPage;
