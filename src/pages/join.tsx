import React from 'react';
import SEO from '../components/SEO';

const JoinPage = () => {
  return (
    <>
      <SEO title="Phynnex Dev Studio - Join" description="Join Phynnex Dev Studio to receive the latest updates and opportunities." />
      <div className="bg-black py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-off-white">Join Us</h1>
          <p className="text-center text-lg text-dark-gray mt-4 max-w-3xl mx-auto">
            Sign up to get the latest updates and opportunities.
          </p>
        </div>
      </div>
    </>
  );
};

export default JoinPage;
