import React from 'react';
import SEO from '../components/SEO';

const PrivacyPage = () => {
  return (
    <>
      <SEO
        title="Phynnex Dev Studio - Privacy Policy"
        description="Read about Phynnex Dev Studio's privacy practices."
      />

      <div className="bg-black py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-off-white">
            Privacy Policy
          </h1>
          <p className="text-center text-lg text-dark-gray mt-4 max-w-3xl mx-auto">
            Phynnex Dev Studio respects your privacy and is committed to protecting your personal
            information. This policy explains how we collect, use, and safeguard the data you
            provide to us.
          </p>
          <p className="text-center text-lg text-dark-gray mt-2 max-w-3xl mx-auto">
            We collect your name, email address, phone number, and any other details you choose to
            share when you contact us. This information is used solely to respond to inquiries and
            deliver our services.
          </p>
          <p className="text-center text-lg text-dark-gray mt-2 max-w-3xl mx-auto">
            We may also gather non‑personal usage data, such as your IP address and pages visited,
            to analyze site performance and improve our offerings. Your information is never sold or
            shared with third parties except when required to provide our services or comply with
            the law.
          </p>
          <p className="text-center text-lg text-dark-gray mt-2 max-w-3xl mx-auto">
            Our website uses cookies to remember your preferences and understand how visitors
            interact with our pages. You can disable cookies in your browser settings, although some
            features may become unavailable.
          </p>
          <p className="text-center text-lg text-dark-gray mt-2 max-w-3xl mx-auto">
            If you have questions about this policy or wish to manage the personal data we hold
            about you, please contact us at privacy@digitalsolutions.com.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
