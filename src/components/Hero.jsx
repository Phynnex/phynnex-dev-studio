import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-off-white pt-20 pb-20 ">
      <div className="px-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="heading-1 text-4xl md:text-6xl font-bold leading-tight mb-6 text-deep-blue">
              Transform Your Ideas into Powerful Digital Solutions
            </h1>
            <p className="text-lg text-dark-gray mb-8 font-inter">
              We help businesses grow by leveraging cutting-edge technology and creative strategies. 
              Our team of experts will bring your vision to life.
            </p>
            <Link 
              to="/contact" 
              className="btn-primary inline-block"
            >
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="bg-light-purple bg-opacity-20 rounded-lg w-full h-64 md:h-[28rem] flex items-center justify-center">
              <img src="/api/placeholder/500/300" alt="Digital Solutions" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;