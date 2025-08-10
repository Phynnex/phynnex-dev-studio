import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

type HeroProps = object;
const Hero = ({}: HeroProps) => {
  return (

    <section className="bg-black pt-20 pb-20">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="md:w-1/2 md:pr-10 mb-10 md:mb-0 text-center md:text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="heading-1 text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transform Your Ideas into Powerful Digital Solutions
            </h1>
            <p className="text-base sm:text-lg text-dark-gray mb-8 font-inter">
              We help businesses grow by leveraging cutting-edge technology and creative strategies.
              Our team of experts will bring your vision to life.
            </p>
            <Link href="/contact" className="btn-primary inline-block text-base sm:text-lg">
              Get Started
            </Link>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

            <div className="bg-light-purple bg-opacity-20 rounded-lg w-full h-64 md:h-[28rem] flex items-center justify-center">
              <Image
                src="https://picsum.photos/seed/hero/500/300"
                alt="Phynnex Dev Studio"
                className="rounded-lg"
                width={500}
                height={300}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
