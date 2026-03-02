import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  return (
    <div
      className={`
          group relative p-8 rounded-2xl text-center
          bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40
          backdrop-blur-sm border border-white/10
          hover:border-primary-purple/50 hover:bg-gradient-to-br hover:from-gray-800/60 hover:via-gray-700/40 hover:to-black/50
          transform transition-all duration-500 ease-out
          hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary-purple/20
          animate-fade-in-up overflow-hidden
          [animation-delay:${delay}]
        `}
    >
      {/* Gradient overlay on hover */}
      <div
        className="
        absolute inset-0 opacity-0 group-hover:opacity-10 
        bg-gradient-to-br from-primary-purple via-secondary-magenta to-primary-purple 
        transition-opacity duration-500 rounded-2xl
      "
      />

      {/* Floating background shapes */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-primary-purple/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-secondary-magenta/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon container */}
        <div
          className="
          w-20 h-20 mx-auto mb-6 rounded-2xl
          bg-gradient-to-br from-primary-purple/20 via-secondary-magenta/15 to-primary-purple/20
          backdrop-blur-sm border border-primary-purple/30
          flex items-center justify-center
          group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gradient-to-br group-hover:from-primary-purple/30 group-hover:via-secondary-magenta/25 group-hover:to-primary-purple/30
          transition-all duration-500 ease-out
          shadow-lg group-hover:shadow-xl group-hover:shadow-primary-purple/25
        "
        >
          <div className="transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3
          className="
          text-xl lg:text-2xl font-montserrat font-bold mb-4 text-white
          group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-purple group-hover:via-secondary-magenta group-hover:to-primary-purple group-hover:bg-clip-text
          transition-all duration-300
        "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
          text-gray-300 font-inter leading-relaxed text-sm lg:text-base
          group-hover:text-gray-200 transition-colors duration-300
        "
        >
          {description}
        </p>

        {/* Hover indicator */}
        <div
          className="
          mt-6 inline-flex items-center text-primary-purple font-semibold text-sm
          opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0
          transition-all duration-300 cursor-pointer
        "
        >
          Learn More
          <svg
            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
        </div>
      </div>
    </div>
  );
};

type ServicesProps = object;

const Services = ({}: ServicesProps) => {
  return (
    <section id="services" className="relative py-20 lg:py-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />

      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary-purple/5 rounded-full blur-3xl animate-drift-slow" />
        <div className="absolute top-3/4 right-20 w-24 h-24 bg-secondary-magenta/5 rounded-full blur-2xl animate-drift-slower" />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-primary-purple/3 rounded-full blur-xl animate-drift-slowest" />
      </div>

      <div className="relative z-10 container-custom">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Overline */}
          <div className="mb-6 animate-fade-in-up [animation-delay:0.1s]">
            <span
              className="
              inline-block px-4 py-2 rounded-full
              bg-white/5 backdrop-blur-sm border border-white/20
              text-primary-purple font-medium text-sm tracking-wide uppercase
              font-inter
            "
            >
              Services for founders & teams
            </span>
          </div>

          {/* Main title */}
          <h2
            className="
              text-3xl md:text-4xl lg:text-5xl font-montserrat font-black tracking-tight text-white mb-6
              animate-fade-in-up [animation-delay:0.2s]
            "
          >
            <span className="block">From idea to launch</span>
            <span className="block mt-2 bg-gradient-to-r from-primary-purple via-secondary-magenta to-primary-purple bg-clip-text text-transparent">
              with one accountable partner
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="
              mx-auto max-w-2xl text-gray-300 font-inter text-lg lg:text-xl leading-relaxed
              animate-fade-in-up opacity-90 [animation-delay:0.3s]
            "
          >
            Clear scopes, fast delivery, and production-ready engineering for web apps, dashboards,
            and secure platforms using React, Next.js, Node.js, and TypeScript.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <ServiceCard
            title="Product Discovery"
            description="Workshops, scope, and clickable prototypes to align on the right thing to build. Roadmaps you can share with stakeholders."
            delay="0.4s"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l-2-2m0 0l-2-2m2 2h12M14 4l2 2m0 0l2 2m-2-2H4"
                />
              </svg>
            }
          />

          <ServiceCard
            title="Build & Integrate"
            description="Full-stack delivery for dashboards, client portals, and mobile-ready web apps. Auth, payments, and APIs baked in from day one."
            delay="0.5s"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6l-2 4h4l-2 4m-7 2h14"
                />
              </svg>
            }
          />

          <ServiceCard
            title="Stabilize & Optimize"
            description="Performance, security hardening, and UX refinements for products already in market. Faster load times, clearer flows, happier users."
            delay="0.6s"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12h3m6-9v3m9 6h-3m-6 9v-3M7.5 7.5l1.5 1.5m6 6 1.5 1.5m0-9L14 9m-4 4-1.5 1.5"
                />
              </svg>
            }
          />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20 animate-fade-in-up [animation-delay:1s]">
          <p className="text-gray-400 font-inter mb-6">
            Ready to ship your next feature or launch?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/#contact"
              className="
              px-8 py-4 rounded-full font-semibold text-base
              bg-gradient-to-r from-primary-purple to-secondary-magenta
              text-white shadow-lg
              hover:shadow-xl hover:shadow-primary-purple/25
              transition-all duration-300 transform hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-primary-purple/50
            "
            >
              Book a project intro
            </Link>
            <Link
              href="/#portfolio"
              className="
              px-8 py-4 rounded-full font-semibold text-base
              border-2 border-white/20 text-white
              bg-white/5 backdrop-blur-sm
              hover:bg-white/10 hover:border-white/40
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-white/30
            "
            >
              See recent work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
