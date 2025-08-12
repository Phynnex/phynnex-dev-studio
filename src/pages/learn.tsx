import React from 'react';
import SEO from '../components/SEO';

const LearnPage = () => {
  return (
    <>
      <SEO
        title="Phynnex Dev Studio - Learn"
        description="Discover resources and articles from Phynnex Dev Studio."
      />
      <div className="bg-black py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-off-white">Learn</h1>
          <p className="text-center text-lg text-dark-gray mt-4 max-w-3xl mx-auto">
            Discover resources and articles to boost your knowledge.
          </p>
        </div>
      </div>
    </>
  );
};

export default LearnPage;
