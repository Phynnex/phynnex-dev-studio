import React from 'react';
import SEO from '../components/SEO';
import Process from '../components/Process';

const ProcessPage = () => {
  return (
    <>
      <SEO title="Phynnex Dev Studio - Process" description="Learn about the proven methodology we use at Phynnex Dev Studio." />
      <div className="bg-black py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-off-white">Our Process</h1>
          <p className="text-center text-lg text-dark-gray mt-4 max-w-3xl mx-auto">
            Learn about our proven methodology to deliver successful digital projects
          </p>
        </div>
      </div>
      <Process />
    </>
  );
};

export default ProcessPage;
