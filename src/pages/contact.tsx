import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <main className="pt-20">
      <div className="bg-whisper py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-creole">Contact Us</h1>
          <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Get in touch with our team to discuss your project
          </p>
        </div>
      </div>
      <Contact />
    </main>
  );
};

export default ContactPage;
