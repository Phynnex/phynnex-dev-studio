import React from 'react';
import Services from '../components/Services';
import CTA from '../components/CTA';

const ServicesPage = () => {
  return (
    <main className="pt-20">
      <div className="bg-whisper py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-creole">Our Services</h1>
          <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to meet your business needs and goals
          </p>
        </div>
      </div>
      <Services />
      <CTA />
    </main>
  );
};

export default ServicesPage;
