import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg text-center transform transition-transform hover:-translate-y-2 hover:shadow-xl">
      <div className="w-16 h-16 bg-light-purple bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-montserrat font-semibold mb-4 text-deep-blue">{title}</h3>
      <p className="text-dark-gray font-inter">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Expert Digital Solutions for Your Business
          </h2>
          <p className="section-subtitle">
            We offer specialized services to help transform your ideas into powerful digital realities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Website Development"
            description="Professional, responsive websites built with cutting-edge technologies that deliver exceptional user experiences and drive business growth."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            }
          />
          
          <ServiceCard 
            title="Custom Software Development"
            description="Tailored software solutions designed to address your specific business challenges, streamline operations, and enhance productivity."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
          />
          
          <ServiceCard 
            title="Mobile App Development"
            description="Native and cross-platform mobile applications that provide seamless experiences across devices while meeting your business objectives."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            }
          />
          
          <ServiceCard 
            title="Technical Support"
            description="Comprehensive support services to ensure your digital solutions operate smoothly, with quick resolution of issues and minimal downtime."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
          />
          
          <ServiceCard 
            title="Development Training"
            description="Specialized training programs to equip your team with the skills needed to understand, maintain, and extend your software solutions."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            }
          />
          
          <ServiceCard 
            title="Consultation & Strategy"
            description="Expert advice on digital transformation, technology selection, and implementation strategies to maximize your return on investment."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;