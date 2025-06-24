import React from 'react';
import { Link } from 'react-router-dom';

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <div className="w-16 h-16 bg-gradient-to-r from-primary-purple to-deep-blue text-white rounded-full flex items-center justify-center mx-auto mb-5 font-bold text-xl">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-dark-gray font-montserrat">{title}</h3>
      <p className="text-dark-gray font-inter">{description}</p>
    </div>
  );
};

const Process = () => {
  return (
    <section id="process" className="py-20 bg-off-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <span className="text-primary-purple font-semibold tracking-wider uppercase text-sm font-montserrat">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2 text-deep-blue font-montserrat">
            Our Seamless Development Process Explained
          </h2>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto font-inter">
            We follow a structured approach to ensure every project is delivered on time and exceeds expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProcessStep
            number="1"
            title="Discovery &amp; Strategy"
            description="Understand your goals and craft an effective roadmap."
          />

          <ProcessStep
            number="2"
            title="Design &amp; Prototype"
            description="Visualize solutions with wireframes and prototypes."
          />

          <ProcessStep
            number="3"
            title="Iterative Development"
            description="Build features in cycles for constant improvement."
          />

          <ProcessStep
            number="4"
            title="Quality Assurance"
            description="Test rigorously to ensure a reliable product."
          />

          <ProcessStep
            number="5"
            title="Launch &amp; Scale"
            description="Deploy seamlessly and prepare for growth."
          />

          <ProcessStep
            number="6"
            title="Ongoing Partnership"
            description="Continuous support and enhancements for success."
          />
        </div>
        
        <div className="text-center mt-16">
          <Link 
            to="/contact" 
            className="inline-block btn-primary"
          >
            Start Your Project
          </Link>
          <p className="mt-4 text-dark-gray font-inter">No commitment consultation – Let's discuss your vision</p>
        </div>
      </div>
    </section>
  );
};

export default Process;