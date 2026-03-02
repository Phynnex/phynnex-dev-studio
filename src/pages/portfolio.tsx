import React from 'react';
import SEO from '../components/SEO';
import Portfolio from '../components/Portfolio';

const PortfolioPage = () => {
  return (
    <>
      <SEO
        title="Security Products Portfolio — Fyne Beulah Iwari-Dick"
        description="Selected cybersecurity products built for security teams."
      />
      <div className="bg-black py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-off-white">
            Security Products
          </h1>
          <p className="text-center text-lg text-dark-gray mt-4 max-w-3xl mx-auto">
            Focused case studies in cybersecurity and security product engineering.
          </p>
        </div>
      </div>
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
