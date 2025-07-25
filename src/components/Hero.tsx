import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type HeroProps = object;
const Hero = ({}: HeroProps) => {
  return (
    <section className="bg-off-white pt-20 pb-20 ">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="heading-1 text-4xl md:text-6xl font-bold leading-tight mb-6 text-deep-blue">
              Transform Your Ideas into Powerful Digital Solutions
            </h1>
            <p className="text-base sm:text-lg text-dark-gray mb-8 font-inter">
              We help businesses grow by leveraging cutting-edge technology and creative strategies.
              Our team of experts will bring your vision to life.
            </p>
            <Link href="/contact" className="btn-primary inline-block text-base sm:text-lg">
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="bg-light-purple bg-opacity-20 rounded-lg w-full h-64 md:h-[28rem] flex items-center justify-center">
              <Image
                src="https://picsum.photos/seed/hero/500/300"
                alt="Digital Solutions"
                className="rounded-lg"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
