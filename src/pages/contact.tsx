import React from 'react';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <SEO title="Phynnex Dev Studio - Contact" description="Get in touch with Phynnex Dev Studio to discuss your project." />
      <div className="bg-black py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-off-white">Contact Us</h1>
          <p className="text-center text-lg text-dark-gray mt-4 max-w-3xl mx-auto">
            Get in touch with our team to discuss your project
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
