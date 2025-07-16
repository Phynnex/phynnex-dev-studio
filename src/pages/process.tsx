import React from 'react';
import Head from 'next/head';
import Process from '../components/Process';

const ProcessPage = () => {
  return (
    <>
      <Head>
        <title>Phynnex Dev Studio - Process</title>
        <meta
          name="description"
          content="Learn about the proven methodology we use at Phynnex Dev Studio."
        />
      </Head>
      <main className="pt-20">
      <div className="bg-whisper py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-creole">Our Process</h1>
          <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Learn about our proven methodology to deliver successful digital projects
          </p>
        </div>
      </div>
      <Process />
    </main>
    </>
  );
};

export default ProcessPage;
