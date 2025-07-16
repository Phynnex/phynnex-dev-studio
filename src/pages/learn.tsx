import React from 'react';
import Head from 'next/head';

const LearnPage = () => {
  return (
    <>
      <Head>
        <title>Phynnex Dev Studio - Learn</title>
        <meta
          name="description"
          content="Discover resources and articles from Phynnex Dev Studio."
        />
      </Head>
      <main className="pt-20">
      <div className="bg-whisper py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-creole">Learn</h1>
          <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Discover resources and articles to boost your knowledge.
          </p>
        </div>
      </div>
    </main>
    </>
  );
};

export default LearnPage;
