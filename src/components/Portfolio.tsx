import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
  delay: string;
}

const ProjectCard = ({ title, category, description, image, tags, delay }: ProjectCardProps) => {
  return (
    <div 
      className="
        group relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40
        backdrop-blur-sm border border-white/10
        hover:border-primary-purple/50 hover:bg-gradient-to-br hover:from-gray-800/60 hover:via-gray-700/40 hover:to-black/50
        transform transition-all duration-700 ease-out
        hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary-purple/25
        animate-fade-in-up
      "
      style={{ animationDelay: delay }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-primary-purple via-secondary-magenta to-primary-purple transition-opacity duration-500 rounded-2xl" />
      
      {/* Image container */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image || 'https://picsum.photos/seed/portfolio-default/400/300'}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={400}
          height={300}
        />
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
          <span className="text-xs font-medium text-primary-purple font-inter">{category}</span>
        </div>
      </div>
      
      <div className="relative z-10 p-6">
        <h3 className="text-xl lg:text-2xl font-montserrat font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-purple group-hover:to-secondary-magenta group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-6 font-inter leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:border-primary-purple/30 hover:text-primary-purple transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project link indicator */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center text-primary-purple text-sm font-inter group-hover:text-secondary-magenta transition-colors duration-300">
            <span>View Project</span>
            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

type PortfolioProps = object;

const Portfolio = ({}: PortfolioProps) => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce solution with integrated payment processing, inventory management, and advanced analytics dashboard.',
      image: 'https://picsum.photos/seed/project1/400/300',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      type: 'web',
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description: 'Patient-centric mobile application for scheduling appointments, accessing medical records, and telemedicine consultations.',
      image: 'https://picsum.photos/seed/project2/400/300',
      tags: ['React Native', 'Firebase', 'Redux', 'API Integration'],
      type: 'mobile',
    },
    {
      id: 3,
      title: 'Corporate Website Redesign',
      category: 'UI/UX Design',
      description: 'Complete redesign of a corporate website focusing on user experience, conversion optimization, and brand identity.',
      image: 'https://picsum.photos/seed/project3/400/300',
      tags: ['UI/UX', 'Figma', 'HTML/CSS', 'JavaScript'],
      type: 'design',
    },
    {
      id: 4,
      title: 'Inventory Management System',
      category: 'Web Development',
      description: 'Custom inventory tracking solution with real-time analytics, reporting capabilities, and automated reordering.',
      image: 'https://picsum.photos/seed/project4/400/300',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Charts.js'],
      type: 'web',
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      description: 'Mobile application for tracking workouts, nutrition, personal fitness goals, and social fitness challenges.',
      image: 'https://picsum.photos/seed/project5/400/300',
      tags: ['React Native', 'TypeScript', 'Firebase', 'Health API'],
      type: 'mobile',
    },
    {
      id: 6,
      title: 'SaaS Dashboard',
      category: 'UI/UX Design',
      description: 'Intuitive dashboard design for a SaaS platform, focusing on data visualization, usability, and user engagement.',
      image: 'https://picsum.photos/seed/project6/400/300',
      tags: ['UI/UX', 'Adobe XD', 'Design System', 'Prototyping'],
      type: 'design',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.type === filter);

  const filterButtons = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'design', label: 'UI/UX Design' }
  ];

  return (
    <section id="portfolio" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/5 right-10 w-36 h-36 bg-secondary-magenta/3 rounded-full blur-3xl animate-drift-slow" />
        <div className="absolute top-2/3 left-16 w-28 h-28 bg-primary-purple/4 rounded-full blur-2xl animate-drift-slower" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary-magenta/2 rounded-full blur-xl animate-drift-slowest" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="text-center mb-16 lg:mb-20">
          {/* Overline */}
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-primary-purple font-medium text-sm tracking-wide uppercase font-inter">
              Our Work
            </span>
          </div>

          {/* Main title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black tracking-tight text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="block">Featured Projects &</span>
            <span className="block mt-2 bg-gradient-to-r from-primary-purple via-secondary-magenta to-primary-purple bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-gray-300 font-inter text-lg lg:text-xl leading-relaxed mb-12 animate-fade-in-up opacity-90" style={{ animationDelay: '0.3s' }}>
            Explore our portfolio of innovative solutions that showcase our capabilities and drive measurable results.
          </p>

          {/* Filter buttons */}
          <div className="inline-flex flex-wrap justify-center gap-2 p-2 rounded-2xl bg-gradient-to-r from-gray-900/60 via-gray-800/40 to-gray-900/60 backdrop-blur-sm border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {filterButtons.map((button, index) => (
              <button
                key={button.key}
                onClick={() => setFilter(button.key)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 font-montserrat ${
                  filter === button.key
                    ? 'bg-gradient-to-r from-primary-purple to-secondary-magenta text-white shadow-lg shadow-primary-purple/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 lg:mb-20">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              tags={project.tags}
              delay={`${0.5 + index * 0.1}s`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-black/50 backdrop-blur-sm border border-white/10 hover:border-primary-purple/30 transition-all duration-500">
            <h3 className="text-2xl lg:text-3xl font-montserrat font-bold text-white mb-4">
              Ready to Create Your 
              <span className="bg-gradient-to-r from-primary-purple to-secondary-magenta bg-clip-text text-transparent"> Success Story?</span>
            </h3>
            
            <p className="text-gray-300 font-inter mb-8 text-lg">
              Let&apos;s discuss how we can bring your vision to life with cutting-edge technology and innovative design.
            </p>
            
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base bg-gradient-to-r from-primary-purple to-secondary-magenta text-white shadow-lg transition-all duration-300 ease-out hover:shadow-xl hover:shadow-primary-purple/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-purple/50 relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-magenta to-primary-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;