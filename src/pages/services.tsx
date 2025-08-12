import React from 'react';
import SEO from '../components/SEO';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <>
      <SEO title="Phynnex Dev Studio - Services" description="Comprehensive digital solutions tailored to your business needs." />

      <div className="bg-black py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-off-white">Our Services</h1>
          <p className="text-center text-lg text-dark-gray mt-4 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to meet your business needs and goals
          </p>
        </div>
      </div>
      <Services />
    </>
  );
};

export default ServicesPage;
