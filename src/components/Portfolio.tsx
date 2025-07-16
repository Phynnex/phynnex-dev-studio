// components/Portfolio.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
}
const ProjectCard = ({ title, category, description, image, tags }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="h-56 bg-light-purple bg-opacity-20 relative">
        <Image
          src={image || "/api/placeholder/400/300"}
          alt={title}
          className="w-full h-full object-cover"
          width={400}
          height={300}
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-deep-blue font-montserrat">{title}</h3>
          <span className="text-xs font-medium bg-primary-purple bg-opacity-10 text-primary-purple px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        <p className="text-dark-gray mb-4 font-inter">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium bg-off-white px-2 py-1 rounded-full text-dark-gray"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

interface PortfolioProps {}

const Portfolio = ({}: PortfolioProps) => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce solution with integrated payment processing and inventory management.",
      image: "/api/placeholder/400/300",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      type: "web"
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description: "Patient-centric mobile application for scheduling appointments and accessing medical records.",
      image: "/api/placeholder/400/300",
      tags: ["React Native", "Firebase", "Redux", "API Integration"],
      type: "mobile"
    },
    {
      id: 3,
      title: "Corporate Website Redesign",
      category: "UI/UX Design",
      description: "Complete redesign of a corporate website focusing on user experience and conversion optimization.",
      image: "/api/placeholder/400/300",
      tags: ["UI/UX", "Figma", "HTML/CSS", "JavaScript"],
      type: "design"
    },
    {
      id: 4,
      title: "Inventory Management System",
      category: "Web Development",
      description: "Custom inventory tracking solution with real-time analytics and reporting capabilities.",
      image: "/api/placeholder/400/300",
      tags: ["React", "Node.js", "PostgreSQL", "Charts.js"],
      type: "web"
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      category: "Mobile Development",
      description: "Mobile application for tracking workouts, nutrition, and personal fitness goals.",
      image: "/api/placeholder/400/300",
      tags: ["React Native", "TypeScript", "Firebase", "Health API"],
      type: "mobile"
    },
    {
      id: 6,
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      description: "Intuitive dashboard design for a SaaS platform, focusing on data visualization and usability.",
      image: "/api/placeholder/400/300",
      tags: ["UI/UX", "Adobe XD", "Design System", "Prototyping"],
      type: "design"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <span className="text-primary-purple font-semibold tracking-wider uppercase text-sm font-montserrat">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2 text-deep-blue font-montserrat">
            Featured Projects
          </h2>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto mb-8 font-inter">
            Explore our portfolio of conceptual designs and sample projects that showcase our capabilities and expertise.
          </p>
          
          <div className="inline-flex flex-wrap justify-center gap-2 bg-off-white p-1 rounded-full mb-8">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors font-montserrat ${
                filter === 'all' 
                  ? 'bg-primary-purple text-white' 
                  : 'text-dark-gray hover:bg-light-purple hover:bg-opacity-30'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors font-montserrat ${
                filter === 'web' 
                  ? 'bg-primary-purple text-white' 
                  : 'text-dark-gray hover:bg-light-purple hover:bg-opacity-30'
              }`}
            >
              Web Development
            </button>
            <button 
              onClick={() => setFilter('mobile')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors font-montserrat ${
                filter === 'mobile' 
                  ? 'bg-primary-purple text-white' 
                  : 'text-dark-gray hover:bg-light-purple hover:bg-opacity-30'
              }`}
            >
              Mobile Apps
            </button>
            <button 
              onClick={() => setFilter('design')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors font-montserrat ${
                filter === 'design' 
                  ? 'bg-primary-purple text-white' 
                  : 'text-dark-gray hover:bg-light-purple hover:bg-opacity-30'
              }`}
            >
              UI/UX Design
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-dark-gray mb-6 font-inter">
            Interested in seeing how we can bring your project to life?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-purple text-white py-3 px-8 rounded-full font-medium hover:bg-deep-blue transition-colors shadow-md font-montserrat"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;