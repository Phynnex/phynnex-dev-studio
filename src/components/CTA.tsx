// components/CTA.tsx
import React from 'react';
import Link from 'next/link';

type CTAProps = object;
const CTA = ({}: CTAProps) => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="surface text-center p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
          Start Your Project Today
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8 font-inter">
          Ready to transform your business with powerful digital solutions? Get in touch with our
          team to discuss your project.
        </p>
          <Link href="/contact" className="inline-block btn-primary">
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
