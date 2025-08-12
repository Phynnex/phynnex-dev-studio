import React from 'react';
import SEO from '../components/SEO';
import Portfolio from '../components/Portfolio';

const PortfolioPage = () => {
  return (
    <>
      <SEO
        title="Phynnex Dev Studio - Portfolio"
        description="Explore successful projects delivered by Phynnex Dev Studio."
      />
      <div className="bg-black py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-off-white">
            Our Portfolio
          </h1>
          <p className="text-center text-lg text-dark-gray mt-4 max-w-3xl mx-auto">
            Explore our successful projects across various industries
          </p>
        </div>
      </div>
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
