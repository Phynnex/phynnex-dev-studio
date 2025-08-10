import React from 'react';
import Link from 'next/link';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}
const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="text-center p-6 bg-black rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-primary-purple">
      <div className="w-16 h-16 bg-gradient-to-r from-primary-purple to-black text-white rounded-full flex items-center justify-center mx-auto mb-5 font-bold text-xl">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-dark-gray font-montserrat">{title}</h3>
      <p className="text-dark-gray font-inter">{description}</p>
    </div>
  );
};

type ProcessProps = object;

const Process = ({}: ProcessProps) => {
  return (
    <section id="process" className="py-20 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary-purple font-semibold tracking-wider uppercase text-sm font-montserrat">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2 text-off-white font-montserrat">
            Our Seamless Development Process Explained
          </h2>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto font-inter">
            We follow a structured approach to ensure every project is delivered on time and exceeds
            expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProcessStep
            number="1"
            title="Discovery"
            description="We begin by understanding your business, goals, and requirements to create a tailored strategy."
          />

          <ProcessStep
            number="2"
            title="Planning"
            description="Our team creates detailed project plans, wireframes, and prototypes for your approval."
          />

          <ProcessStep
            number="3"
            title="Development"
            description="We bring your project to life using cutting-edge technologies and best practices."
          />

          <ProcessStep
            number="4"
            title="Testing"
            description="Rigorous quality assurance to ensure your solution works flawlessly across all devices."
          />

          <ProcessStep
            number="5"
            title="Launch"
            description="We deploy your solution and ensure a smooth transition to the live environment."
          />

          <ProcessStep
            number="6"
            title="Support"
            description="Ongoing maintenance and support to keep your digital solution performing at its best."
          />
        </div>

        <div className="text-center mt-16">
          <Link href="/contact" className="inline-block btn-primary">
            Start Your Project
          </Link>
          <p className="mt-4 text-dark-gray font-inter">
            No commitment consultation – Let&apos;s discuss your vision
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
