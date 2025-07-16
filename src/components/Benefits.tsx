import React from 'react';
import Link from 'next/link';

interface BenefitsProps {}

const Benefits = ({}: BenefitsProps) => {
  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-blue font-montserrat">
              Discover the Benefits of Partnering with Our Expert Team
            </h2>
            <p className="text-dark-gray mb-4 font-inter">
              When you choose our agency, you're not just getting a service provider – you're gaining a strategic partner 
              committed to your success.
            </p>
            <p className="text-dark-gray mb-4 font-inter">
              Our team of experienced professionals brings a wealth of knowledge across various industries, ensuring that 
              your digital solutions are not only beautiful but also effective at achieving your business goals.
            </p>
            <p className="text-dark-gray mb-8 font-inter">
              We pride ourselves on clear communication, transparency throughout the process, and delivering projects 
              on time and within budget.
            </p>
            <Link 
              href="/services" 
              className="inline-block btn-primary"
            >
              Explore Our Services
            </Link>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-light-purple bg-opacity-20 rounded-lg w-full h-64 md:h-80 flex items-center justify-center shadow-md">
              <img src="/api/placeholder/500/300" alt="Benefits" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;