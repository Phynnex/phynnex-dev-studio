import React from 'react';
import Head from 'next/head';

const TermsPage = () => {
  return (
    <>
      <Head>
        <title>Phynnex Dev Studio - Terms of Service</title>
        <meta
          name="description"
          content="Understand the terms of service for using Phynnex Dev Studio."
        />
      </Head>

      <div className="bg-whisper py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-creole">
            Terms of Service
          </h1>
          <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            By accessing the Phynnex Dev Studio website you agree to these terms
            of service. Please read them carefully before using our site.
          </p>
          <p className="text-center text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
            All content on this site is the property of Phynnex Dev Studio and
            may not be reproduced or distributed without prior written consent.
            You agree not to use the site for any unlawful purpose or to attempt
            to compromise its security.
          </p>
          <p className="text-center text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
            Our website and services are provided "as is" without warranties of
            any kind. Phynnex Dev Studio is not liable for damages arising from
            your use or inability to use the site.
          </p>
          <p className="text-center text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
            We may update these terms at any time. Continued use of the website
            constitutes acceptance of the updated terms. For questions, contact
            us at legal@digitalsolutions.com.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
