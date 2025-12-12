import React from 'react';
import {
  Code,
  Database,
  Globe,
  Layers,
  Server,
  Cloud,
  Palette,
  Zap,
  Settings,
  Package,
  TestTube,
  Monitor,
  Cpu,
  Box,
  Workflow,
  Shield,
} from 'lucide-react';

interface TechnologyItemProps {
  name: string;
  delay: string;
  icon: React.ReactNode;
}

const TechnologyItem = ({ name, delay, icon }: TechnologyItemProps) => {
  return (
    <div
      className={`
          group relative overflow-hidden rounded-2xl p-4
          bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40
          backdrop-blur-sm border border-white/10
          hover:border-primary-purple/50 hover:bg-gradient-to-br hover:from-gray-800/60 hover:via-gray-700/40 hover:to-black/50
          transform transition-all duration-500 ease-out
          hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-purple/20
          animate-fade-in-up
          [animation-delay:${delay}]
        `}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-primary-purple via-secondary-magenta to-primary-purple transition-opacity duration-500 rounded-2xl" />

      {/* Floating background shapes */}
      <div className="absolute top-2 right-2 w-8 h-8 bg-primary-purple/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-1 left-2 w-6 h-6 bg-secondary-magenta/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10 flex  items-center justify-center gap-5">
        {/* Icon */}
        <div className="text-primary-purple/70 group-hover:text-primary-purple group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>

        {/* Technology name */}
        <span className="text-white font-medium font-inter text-xs text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-purple group-hover:to-secondary-magenta group-hover:bg-clip-text transition-all duration-300">
          {name}
        </span>
      </div>

      {/* Tech icon indicator */}
      <div className="absolute top-2 left-2 w-2 h-2 bg-primary-purple/30 rounded-full group-hover:bg-primary-purple group-hover:scale-150 transition-all duration-300" />
    </div>
  );
};

interface TechnologyCategoryProps {
  title: string;
  technologies: { name: string; icon: React.ReactNode }[];
  delay: string;
}

const TechnologyCategory = ({ title, technologies, delay }: TechnologyCategoryProps) => {
  return (
    <div className="mb-16 animate-fade-in-up [animation-delay:${delay}]">
      <div className="mb-8">
        <h3 className="text-2xl lg:text-3xl font-montserrat font-bold text-white mb-2 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
          {title}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-secondary-magenta rounded-full" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {technologies.map((tech, index) => (
          <TechnologyItem
            key={index}
            name={tech.name}
            icon={tech.icon}
            delay={`${parseFloat(delay.replace('s', '')) + index * 0.05}s`}
          />
        ))}
      </div>
    </div>
  );
};

type TechnologiesProps = object;

const Technologies = ({}: TechnologiesProps) => {
  const frontendTechnologies = [
    { name: 'React', icon: <Code size={24} /> },
    { name: 'Next.js', icon: <Zap size={24} /> },
    { name: 'TypeScript', icon: <Code size={24} /> },
    { name: 'Tailwind CSS', icon: <Palette size={24} /> },
    { name: 'Redux Toolkit', icon: <Layers size={24} /> },
    { name: 'Zustand', icon: <Layers size={24} /> },
    { name: 'React Query', icon: <Workflow size={24} /> },
    { name: 'shadcn/Radix UI', icon: <Palette size={24} /> },
    { name: 'Framer Motion', icon: <Zap size={24} /> },
    { name: 'Material UI', icon: <Box size={24} /> },
  ];

  const backendTechnologies = [
    { name: 'Node.js', icon: <Server size={24} /> },
    { name: 'Express', icon: <Zap size={24} /> },
    { name: 'REST APIs', icon: <Globe size={24} /> },
    { name: 'WebSockets', icon: <Zap size={24} /> },
    { name: 'PostgreSQL', icon: <Database size={24} /> },
    { name: 'MongoDB', icon: <Database size={24} /> },
    { name: 'Prisma ORM', icon: <Package size={24} /> },
    { name: 'NextAuth', icon: <Shield size={24} /> },
    { name: 'JWT/OAuth', icon: <Shield size={24} /> },
    { name: 'Supabase', icon: <Zap size={24} /> },
  ];

  const tools = [
    { name: 'GitHub Actions', icon: <Workflow size={24} /> },
    { name: 'Vercel', icon: <Cloud size={24} /> },
    { name: 'Netlify', icon: <Cloud size={24} /> },
    { name: 'AWS Amplify', icon: <Cloud size={24} /> },
    { name: 'Jest & RTL', icon: <TestTube size={24} /> },
    { name: 'Cypress', icon: <Monitor size={24} /> },
    { name: 'Postman', icon: <Zap size={24} /> },
  ];

  return (
    <section id="technologies" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary-purple/3 rounded-full blur-3xl animate-drift-slow" />
        <div className="absolute top-3/4 right-20 w-40 h-40 bg-secondary-magenta/4 rounded-full blur-2xl animate-drift-slower" />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-primary-purple/2 rounded-full blur-xl animate-drift-slowest" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="text-center mb-16 lg:mb-20">
          {/* Overline */}
          <div className="mb-6 animate-fade-in-up [animation-delay:0.1s]">
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-primary-purple font-medium text-sm tracking-wide uppercase font-inter">
              Our Expertise
            </span>
          </div>

          {/* Main title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black tracking-tight text-white mb-6 animate-fade-in-up [animation-delay:0.2s]">
            <span className="block">Technologies We</span>
            <span className="block mt-2 bg-gradient-to-r from-primary-purple via-secondary-magenta to-primary-purple bg-clip-text text-transparent">
              Master & Perfect
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-gray-300 font-inter text-lg lg:text-xl leading-relaxed animate-fade-in-up opacity-90 [animation-delay:0.3s]">
            We leverage cutting-edge technologies to build powerful, scalable, and beautiful digital
            solutions that drive results.
          </p>
        </div>

        <TechnologyCategory
          title="Frontend Development"
          technologies={frontendTechnologies}
          delay="0.4s"
        />
        <TechnologyCategory
          title="Backend Development"
          technologies={backendTechnologies}
          delay="0.6s"
        />
        <TechnologyCategory title="Tools & Platforms" technologies={tools} delay="0.8s" />

        {/* Stats section */}
        <div className="mt-20 animate-fade-in-up [animation-delay:1s]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '4+', label: 'Launches', icon: <Cpu size={20} /> },
              { number: '8+', label: 'Core tools', icon: <Box size={20} /> },
              { number: '95%', label: 'On-time delivery', icon: <Zap size={20} /> },
              { number: '2-6 wks', label: 'Typical sprints', icon: <Settings size={20} /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40 backdrop-blur-sm border border-white/10 hover:border-primary-purple/30 transition-all duration-500 group"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="text-primary-purple/70 group-hover:text-primary-purple transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-black font-montserrat bg-gradient-to-r from-primary-purple to-secondary-magenta bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-inter text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
