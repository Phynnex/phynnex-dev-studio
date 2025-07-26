import React from 'react';
import Head from 'next/head';

const SupportPage = () => {
  return (
    <>
      <Head>
        <title>Phynnex Dev Studio - Support</title>
        <meta
          name="description"
          content="Need help? Reach out to the Phynnex Dev Studio support center."
        />
      </Head>
      <div className="bg-whisper py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-creole">Support Center</h1>
          <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Welcome to the Phynnex Dev Studio Support Center. We’re dedicated to providing prompt
            assistance for any issues or questions you may have.
          </p>
          <p className="text-center text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
            For technical help or project inquiries, email us at support@digitalsolutions.com or
            call 1-800-555-1234. Our team aims to respond within one business day.
          </p>
          <p className="text-center text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
            You can also explore our FAQ section for quick answers to common questions about our
            services and development process.
          </p>
          <p className="text-center text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
            Existing clients may request updates or maintenance by contacting their project manager
            or submitting a ticket through our support channel.
          </p>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
