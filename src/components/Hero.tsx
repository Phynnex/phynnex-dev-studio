import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen hero-gradient overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>
      <div className="relative z-10 px-6 sm:px-8 lg:px-12">
        <h1 className="heading-1 mb-6">Transform Your Ideas into Powerful Digital Solutions</h1>
        <p className="text-base sm:text-lg text-dark-gray mb-8 font-inter">
          We help businesses grow by leveraging cutting-edge technology and creative strategies. Our team of experts will bring
          your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary">
            Get Started
          </Link>
          <Link href="/services" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
