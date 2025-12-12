import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroBg from '../assets/images/hero_bg.png';

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const gradRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        if (bgRef.current) bgRef.current.style.setProperty('--y', `${y * 0.15}px`);
        if (gradRef.current) gradRef.current.style.setProperty('--y', `${y * 0.05}px`);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden pb-12 pt-28">
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 parallax -z-10">
        <Image
          src={heroBg}
          alt=""
          aria-hidden="true"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      {/* Gradient */}
      <div
        ref={gradRef}
        className="absolute inset-0 parallax z-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-primary-purple/40"
      />
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay z-10" />

      {/* Main content */}
      <div className="relative z-20 w-full px-6 sm:px-8 lg:px-16 xl:px-24 flex flex-col items-center justify-center min-h-[78vh] text-center">
        <div
          className="mb-12 md:mb-16 max-w-5xl animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          {/* Overline/Tagline */}
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
            <span
              className="
              inline-block px-4 py-2 rounded-full
              bg-white/10 backdrop-blur-sm border border-white/20
              text-white/90 font-medium text-sm tracking-wide uppercase
              font-inter
            "
            >
              Software Engineer & Product Partner
            </span>
          </div>

          <h1
            className="
            font-montserrat font-black tracking-tight text-white
            leading-[1.1] md:leading-[1.08]
            text-[clamp(2.25rem,5.5vw,4.5rem)]
            mb-2
          "
          >
            <span className="block">Fyne Tonye Angala</span>
            <span className="block mt-2 bg-gradient-to-r from-primary-purple via-secondary-magenta to-primary-purple bg-clip-text text-transparent">
              Software Engineer
            </span>
          </h1>

          <p
            className="
            mx-auto mt-8 md:mt-10 max-w-2xl
            text-gray-200 font-inter font-normal
            text-[clamp(1.125rem,1.5vw,1.375rem)]
            leading-[1.65] md:leading-[1.7]
            opacity-90
          "
          >
            I build secure, high-performance web apps in React, Next.js, Node.js, and TypeScript. 6+
            years across fintech, cybersecurity, and e-commerce shipping dashboards, portals, and
            platforms with clear communication and reliable delivery.
          </p>
        </div>

        {/* CTA Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            {/* Primary CTA */}
            <Link
              href="#contact"
              className="
                group inline-flex items-center justify-center
                px-10 py-4 rounded-full font-semibold text-base
                bg-gradient-to-r from-primary-purple to-secondary-magenta
                text-white shadow-lg
                transition-all duration-300 ease-out
                hover:shadow-[0_12px_40px_rgba(139,92,246,.4)]
                hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-primary-purple/50 focus:ring-offset-2 focus:ring-offset-transparent
                min-w-[200px]
                relative overflow-hidden
              "
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-magenta to-primary-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#portfolio"
              className="
                group inline-flex items-center justify-center
                px-10 py-4 rounded-full font-semibold text-base
                border-2 border-white/25 text-white/95
                bg-white/5 backdrop-blur-sm
                hover:bg-white/10 hover:border-white/40
                transition-all duration-300 ease-out
                focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent
                min-w-[200px]
              "
            >
              View Work
              <svg
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Trust indicators */}
          {/* <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-white/60 text-sm font-inter mb-4">
              Trusted by innovative companies worldwide
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-40">
            
              <div className="w-20 h-8 bg-white/20 rounded"></div>
              <div className="w-20 h-8 bg-white/20 rounded"></div>
              <div className="w-20 h-8 bg-white/20 rounded"></div>
              <div className="w-20 h-8 bg-white/20 rounded"></div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Enhanced floating shapes with better positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
        <div className="absolute top-1/5 left-[8%] w-20 h-20 bg-white/[0.03] rounded-full blur-2xl animate-drift-slow" />
        <div className="absolute top-[30%] right-[12%] w-16 h-16 bg-primary-purple/10 rounded-full blur-xl animate-drift-slower" />
        <div className="absolute bottom-[35%] left-[15%] w-12 h-12 bg-secondary-magenta/15 rounded-full blur-lg animate-drift-slowest" />
        <div className="absolute top-[60%] right-[8%] w-8 h-8 bg-white/[0.05] rounded-full blur-md animate-drift-slow" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none z-40" />
    </section>
  );
};

export default Hero;
