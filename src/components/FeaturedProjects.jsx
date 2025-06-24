import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Startup CRM Platform',
    impact: 'Improved sales team efficiency by 30% with a custom CRM solution.',
    link: '/portfolio',
  },
  {
    id: 2,
    title: 'Health Tracker App',
    impact: 'Enabled thousands of users to monitor wellness daily.',
    link: '/portfolio',
  },
];

const FeaturedProjects = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto max-w-7xl px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-deep-blue text-center font-montserrat">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-off-white p-6 rounded-lg shadow-md flex flex-col"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-deep-blue mb-2 font-montserrat">
                {project.title}
              </h3>
              <p className="text-dark-gray font-inter">{project.impact}</p>
            </div>
            <Link
              to={project.link}
              className="text-primary-purple font-medium hover:underline mt-auto font-montserrat"
            >
              View Case Study
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
