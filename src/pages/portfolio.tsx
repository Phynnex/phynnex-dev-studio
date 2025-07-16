import React from 'react';
import Head from 'next/head';
import Portfolio from '../components/Portfolio';

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>Phynnex Dev Studio - Portfolio</title>
        <meta
          name="description"
          content="Explore successful projects delivered by Phynnex Dev Studio."
        />
      </Head>
      <main className="pt-20">
      <div className="bg-whisper py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-creole">Our Portfolio</h1>
          <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Explore our successful projects across various industries
          </p>
        </div>
      </div>
      <Portfolio />
    </main>
    </>
  );
};

export default PortfolioPage;
