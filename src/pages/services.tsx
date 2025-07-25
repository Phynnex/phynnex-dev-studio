import React from 'react';
import Head from 'next/head';
import Services from '../components/Services';
import CTA from '../components/CTA';

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Phynnex Dev Studio - Services</title>
        <meta
          name="description"
          content="Comprehensive digital solutions tailored to your business needs."
        />
      </Head>
      <div className="bg-whisper py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-creole">Our Services</h1>
          <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to meet your business needs and goals
          </p>
        </div>
      </div>
      <Services />
      <CTA />
    </>
  );
};

export default ServicesPage;
