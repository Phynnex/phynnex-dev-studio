import React from 'react';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO title="Phynnex Dev Studio - About" description="Learn more about Phynnex Dev Studio and our mission." />
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
