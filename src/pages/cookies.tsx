import React from 'react';
import Head from 'next/head';

const CookiesPage = () => {
  return (
    <>
      <Head>
        <title>Phynnex Dev Studio - Cookies Settings</title>
        <meta name="description" content="Information about how Phynnex Dev Studio uses cookies." />
      </Head>

      <div className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-off-white">
            Cookies Settings
          </h1>
          <p className="text-center text-lg text-dark-gray mt-4 max-w-3xl mx-auto">
            Phynnex Dev Studio uses cookies to enhance your browsing experience and analyze site
            traffic. Cookies are small files stored on your device when you visit our website.
          </p>
          <p className="text-center text-lg text-dark-gray mt-2 max-w-3xl mx-auto">
            Essential cookies enable key functionality such as security and accessibility. Analytics
            cookies help us understand how visitors interact with our pages. We do not currently use
            advertising cookies.
          </p>
          <p className="text-center text-lg text-dark-gray mt-2 max-w-3xl mx-auto">
            You can disable or remove cookies through your browser settings at any time, though
            doing so may affect certain features of the site.
          </p>
          <p className="text-center text-lg text-dark-gray mt-2 max-w-3xl mx-auto">
            For more details about how we use cookies and handle personal data, please review our
            Privacy Policy or contact privacy@digitalsolutions.com.
          </p>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;
