import React from 'react';
import Head from 'next/head';

const SupportPage = () => {
  return (
    <>
      <Head>
        <title>Phynnex Dev Studio - Support</title>
        <meta
          name="description"
          content="Need help? Reach out to the Phynnex Dev Studio support center."
        />
      </Head>
      <main className="pt-20">
      <div className="bg-whisper py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-creole">Support Center</h1>
          <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            How can we assist you? This page is under construction.
          </p>
        </div>
      </div>
    </main>
    </>
  );
};

export default SupportPage;
