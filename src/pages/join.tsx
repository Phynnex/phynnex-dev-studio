import React from 'react';
import Head from 'next/head';

const JoinPage = () => {
  return (
    <>
      <Head>
        <title>Phynnex Dev Studio - Join</title>
        <meta
          name="description"
          content="Join Phynnex Dev Studio to receive the latest updates and opportunities."
        />
      </Head>
      <div className="bg-whisper py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-creole">Join Us</h1>
          <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Sign up to get the latest updates and opportunities.
          </p>
        </div>
      </div>
    </>
  );
};

export default JoinPage;
