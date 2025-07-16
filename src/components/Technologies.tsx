// components/Technologies.tsx
import React from 'react';

interface TechnologyItemProps {
  name: string;
}
const TechnologyItem = ({ name }: TechnologyItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center hover:shadow-md transition-all duration-300 border border-light-purple border-opacity-20">
      <span className="text-dark-gray font-medium font-inter">{name}</span>
    </div>
  );
};

interface TechnologyCategoryProps {
  title: string;
  technologies: string[];
}

const TechnologyCategory = ({ title, technologies }: TechnologyCategoryProps) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-6 text-deep-blue font-montserrat">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {technologies.map((tech, index) => (
          <TechnologyItem key={index} name={tech} />
        ))}
      </div>
    </div>
  );
};

interface TechnologiesProps {}

const Technologies = ({}: TechnologiesProps) => {
  const frontendTechnologies = [
    "React", 
    "JavaScript", 
    "HTML5", 
    "CSS3", 
    "Tailwind CSS",
    "Next.js",
    "React Native",
    "Redux",
    "TypeScript",
    "Bootstrap"
  ];

  const backendTechnologies = [
    "Node.js", 
    "Express", 
    "MongoDB", 
    "PostgreSQL", 
    "Firebase",
    "Python",
    "Django",
    "GraphQL",
    "REST API",
    "AWS"
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Adobe XD",
    "Postman",
    "Docker",
    "Webpack",
    "Jest",
    "CI/CD"
  ];

  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <span className="text-primary-purple font-semibold tracking-wider uppercase text-sm font-montserrat">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2 text-deep-blue font-montserrat">
            Technologies We Master
          </h2>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto font-inter">
            We leverage cutting-edge technologies to build powerful, scalable, and beautiful digital solutions.
          </p>
        </div>

        <TechnologyCategory title="Frontend Development" technologies={frontendTechnologies} />
        <TechnologyCategory title="Backend Development" technologies={backendTechnologies} />
        <TechnologyCategory title="Tools & Platforms" technologies={tools} />
      </div>
    </section>
  );
};

export default Technologies;