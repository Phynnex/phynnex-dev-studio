import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  return (
    <div 
      className="
        group relative p-8 rounded-2xl text-center 
        bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40
        backdrop-blur-sm border border-white/10
        hover:border-primary-purple/50 hover:bg-gradient-to-br hover:from-gray-800/60 hover:via-gray-700/40 hover:to-black/50
        transform transition-all duration-500 ease-out
        hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary-purple/20
        animate-fade-in-up overflow-hidden
      "
      style={{ animationDelay: delay }}
    >
      {/* Gradient overlay on hover */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-10 
        bg-gradient-to-br from-primary-purple via-secondary-magenta to-primary-purple 
        transition-opacity duration-500 rounded-2xl
      " />
      
      {/* Floating background shapes */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-primary-purple/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-secondary-magenta/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon container */}
        <div className="
          w-20 h-20 mx-auto mb-6 rounded-2xl
          bg-gradient-to-br from-primary-purple/20 via-secondary-magenta/15 to-primary-purple/20
          backdrop-blur-sm border border-primary-purple/30
          flex items-center justify-center
          group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gradient-to-br group-hover:from-primary-purple/30 group-hover:via-secondary-magenta/25 group-hover:to-primary-purple/30
          transition-all duration-500 ease-out
          shadow-lg group-hover:shadow-xl group-hover:shadow-primary-purple/25
        ">
          <div className="transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="
          text-xl lg:text-2xl font-montserrat font-bold mb-4 text-white
          group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-purple group-hover:via-secondary-magenta group-hover:to-primary-purple group-hover:bg-clip-text
          transition-all duration-300
        ">
          {title}
        </h3>

        {/* Description */}
        <p className="
          text-gray-300 font-inter leading-relaxed text-sm lg:text-base
          group-hover:text-gray-200 transition-colors duration-300
        ">
          {description}
        </p>

        {/* Hover indicator */}
        <div className="
          mt-6 inline-flex items-center text-primary-purple font-semibold text-sm
          opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0
          transition-all duration-300 cursor-pointer
        ">
          Learn More
          <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="
              inline-block px-4 py-2 rounded-full
              bg-white/5 backdrop-blur-sm border border-white/20
              text-primary-purple font-medium text-sm tracking-wide uppercase
              font-inter
            ">
              Our Expertise
            </span>
          </div>

          {/* Main title */}
          <h2 className="
            text-3xl md:text-4xl lg:text-5xl font-montserrat font-black tracking-tight text-white mb-6
            animate-fade-in-up
          " style={{ animationDelay: '0.2s' }}>
            <span className="block">Expert Digital Solutions</span>
            <span className="block mt-2 bg-gradient-to-r from-primary-purple via-secondary-magenta to-primary-purple bg-clip-text text-transparent">
              for Your Business
            </span>
          </h2>

          {/* Subtitle */}
          <p className="
            mx-auto max-w-2xl text-gray-300 font-inter text-lg lg:text-xl leading-relaxed
            animate-fade-in-up opacity-90
          " style={{ animationDelay: '0.3s' }}>
            We offer specialized services to help transform your ideas into powerful digital
            realities that drive growth and innovation.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <ServiceCard
            title="Website Development"
            description="Professional, responsive websites built with cutting-edge technologies that deliver exceptional user experiences and drive business growth."
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
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            }
          />

          <ServiceCard
            title="Custom Software Development"
            description="Tailored software solutions designed to address your specific business challenges, streamline operations, and enhance productivity."
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
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            }
          />

          <ServiceCard
            title="Mobile App Development"
            description="Native and cross-platform mobile applications that provide seamless experiences across devices while meeting your business objectives."
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            }
          />

          <ServiceCard
            title="Technical Support"
            description="Comprehensive support services to ensure your digital solutions operate smoothly, with quick resolution of issues and minimal downtime."
            delay="0.7s"
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
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            }
          />

          <ServiceCard
            title="Development Training"
            description="Specialized training programs to equip your team with the skills needed to understand, maintain, and extend your software solutions."
            delay="0.8s"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            }
          />

          <ServiceCard
            title="Consultation & Strategy"
            description="Expert advice on digital transformation, technology selection, and implementation strategies to maximize your return on investment."
            delay="0.9s"
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            }
          />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <p className="text-gray-400 font-inter mb-6">
            Ready to transform your business with cutting-edge digital solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="
              px-8 py-4 rounded-full font-semibold text-base
              bg-gradient-to-r from-primary-purple to-secondary-magenta
              text-white shadow-lg
              hover:shadow-xl hover:shadow-primary-purple/25
              transition-all duration-300 transform hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-primary-purple/50
            ">
              Get Started Today
            </button>
            <button className="
              px-8 py-4 rounded-full font-semibold text-base
              border-2 border-white/20 text-white
              bg-white/5 backdrop-blur-sm
              hover:bg-white/10 hover:border-white/40
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-white/30
            ">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;