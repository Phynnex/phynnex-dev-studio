import React from 'react';
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Phynnex Dev Studio - About</title>
        <meta name="description" content="Learn more about Phynnex Dev Studio and our mission." />
      </Head>
      <div className="bg-black py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-off-white">About Us</h1>
          <p className="text-center text-lg text-dark-gray mt-4 max-w-3xl mx-auto">
            Learn more about our company and mission.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
