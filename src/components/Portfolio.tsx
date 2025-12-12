import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
  role?: string;
  metrics?: string[];
  link?: string;
  delay: string;
}

type Project = Omit<ProjectCardProps, 'delay'> & {
  id: number;
  type: string;
};

const ProjectCard = ({ title, category, description, image, tags, role, metrics, link, delay }: ProjectCardProps) => {
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
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-primary-purple via-secondary-magenta to-primary-purple transition-opacity duration-500 rounded-2xl" />

      <div className="relative h-56 overflow-hidden">
        <Image
          src={image || 'https://picsum.photos/seed/portfolio-default/400/300'}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={400}
          height={300}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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

        {(role || (metrics && metrics.length)) && (
          <div className="mt-4 grid gap-2 text-sm text-gray-300 font-inter">
            {role && (
              <div>
                <span className="text-white/80">Role:</span> {role}
              </div>
            )}
            {metrics && metrics.length > 0 && (
              <ul className="list-disc pl-5 space-y-1">
                {metrics.map((m, i) => (
                  <li key={i} className="text-gray-300">
                    {m}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {link && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary-purple text-sm font-inter group-hover:text-secondary-magenta transition-colors duration-300"
            >
              <span>View Project</span>
              <svg
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

type PortfolioProps = object;

const Portfolio = ({}: PortfolioProps) => {
  const [filter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Aquila Mobile Security',
      category: 'Featured Project',
      description:
        'Mobile security platform where developers upload APK/ipa files to scan for vulnerabilities, with real-time insights and guided remediation.',
      image: '/images/project1.png',
      tags: ['React', 'Redux Toolkit', 'React Query', 'Tailwind CSS'],
      role: 'Lead Frontend Engineer, Ethnos Cyber',
      metrics: ['Scan to insight in under 2 minutes', 'Secure upload and RBAC'],
      link: 'https://www.aquilasec.io/',
      type: 'web',
    },
    {
      id: 2,
      title: 'Castellum Security Platform',
      category: 'Featured Project',
      description:
        'Security awareness training platform helping teams learn, test, and improve cyber hygiene with live chat support.',
      image: '/images/project2.png',
      tags: ['React', 'Tailwind CSS', 'Redux Toolkit'],
      role: 'Software Engineer, Ethnos Cyber',
      metrics: ['Automated modules & progress tracking', 'Embedded chat for learner support'],
      link: 'https://www.mycastellum.com/',
      type: 'web',
    },
    {
      id: 3,
      title: 'GetMoore Fintech Dashboard',
      category: 'Featured Project',
      description:
        'Next.js + TypeScript analytics platform for transactions and compliance data, modular dashboards with micro-APIs.',
      image: '/images/project3.png',
      tags: ['Next.js', 'TypeScript', 'NextAuth', 'Zustand', 'React Query'],
      role: 'Senior Frontend Engineer, GetMoore',
      metrics: ['25% smaller bundles via code-splitting', '95%+ successful deployments via CI/CD'],
      link: 'https://getmoore.africa/',
      type: 'web',
    },
    {
      id: 4,
      title: 'Client Portal Demo',
      category: 'Featured Project',
      description:
        'Full-stack SaaS portal with Next.js, NextAuth, Prisma + PostgreSQL, React Query, and secure client messaging.',
      image: '/images/project4.png',
      tags: ['Next.js', 'TypeScript', 'NextAuth', 'Prisma', 'React Query'],
      role: 'Full-Stack Developer',
      metrics: ['Role-based access, secure messaging', 'CI/CD with GitHub Actions'],
      link: 'https://client-portal-demo-ten.vercel.app/',
      type: 'web',
    },
  ];

  const filteredProjects = projects;

  const filterButtons = [{ key: 'all', label: 'Featured Work' }];

  return (
    <section id="portfolio" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/5 right-10 w-36 h-36 bg-secondary-magenta/3 rounded-full blur-3xl animate-drift-slow" />
        <div className="absolute top-2/3 left-16 w-28 h-28 bg-primary-purple/4 rounded-full blur-2xl animate-drift-slower" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary-magenta/2 rounded-full blur-xl animate-drift-slowest" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="text-center mb-16 lg:mb-20">
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-primary-purple font-medium text-sm tracking-wide uppercase font-inter">
              Case Studies
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black tracking-tight text-white mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block">Selected work</span>
            <span className="block mt-2 bg-gradient-to-r from-primary-purple via-secondary-magenta to-primary-purple bg-clip-text text-transparent">
              for security & fintech teams
            </span>
          </h2>

          <p
            className="mx-auto max-w-2xl text-gray-300 font-inter text-lg lg:text-xl leading-relaxed mb-12 animate-fade-in-up opacity-90"
            style={{ animationDelay: '0.3s' }}
          >
            Impact-focused builds: secure uploads, data-rich dashboards, real-time tracking, and clear user journeys that reduce friction.
          </p>

          <div
            className="inline-flex flex-wrap justify-center gap-2 p-2 rounded-2xl bg-gradient-to-r from-gray-900/60 via-gray-800/40 to-gray-900/60 backdrop-blur-sm border border-white/10 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            {filterButtons.map((button, _index) => (
              <button
                key={button.key}
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
          {filteredProjects.map(({ id, ...project }, index) => (
            <ProjectCard
              key={id}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              tags={project.tags}
              role={project.role}
              metrics={project.metrics}
              link={project.link}
              delay={`${0.5 + index * 0.1}s`}
            />
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-black/50 backdrop-blur-sm border border-white/10 hover:border-primary-purple/30 transition-all duration-500">
            <h3 className="text-2xl lg:text-3xl font-montserrat font-bold text-white mb-4">
              Want a deep dive?
            </h3>

            <p className="text-gray-300 font-inter mb-8 text-lg">
              Let&apos;s walk through architecture decisions, timelines, and outcomes for a project similar to yours.
            </p>

            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base bg-gradient-to-r from-primary-purple to-secondary-magenta text-white shadow-lg transition-all duration-300 ease-out hover:shadow-xl hover:shadow-primary-purple/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-purple/50 relative overflow-hidden"
            >
              <span className="relative z-10">Book a walkthrough</span>
              <svg
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
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
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-magenta to-primary-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
