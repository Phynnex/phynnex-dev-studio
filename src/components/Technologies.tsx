// // components/Technologies.tsx
// import React from 'react';

// interface TechnologyItemProps {
//   name: string;
// }
// const TechnologyItem = ({ name }: TechnologyItemProps) => {
//   return (
//     <div className="bg-black rounded-lg shadow-sm p-4 flex items-center justify-center hover:shadow-md transition-all duration-300 border border-primary-purple">
//       <span className="text-dark-gray font-medium font-inter">{name}</span>
//     </div>
//   );
// };

// interface TechnologyCategoryProps {
//   title: string;
//   technologies: string[];
// }

// const TechnologyCategory = ({ title, technologies }: TechnologyCategoryProps) => {
//   return (
//     <div className="mb-10">
//       <h3 className="text-xl font-semibold mb-6 text-off-white font-montserrat">{title}</h3>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {technologies.map((tech, index) => (
//           <TechnologyItem key={index} name={tech} />
//         ))}
//       </div>
//     </div>
//   );
// };

// type TechnologiesProps = object;

// const Technologies = ({}: TechnologiesProps) => {
//   const frontendTechnologies = [
//     'React',
//     'JavaScript',
//     'HTML5',
//     'CSS3',
//     'Tailwind CSS',
//     'Next.js',
//     'React Native',
//     'Redux',
//     'TypeScript',
//     'Bootstrap',
//   ];

//   const backendTechnologies = [
//     'Node.js',
//     'Express',
//     'MongoDB',
//     'PostgreSQL',
//     'Firebase',
//     'Python',
//     'Django',
//     'GraphQL',
//     'REST API',
//     'AWS',
//   ];

//   const tools = [
//     'Git',
//     'GitHub',
//     'VS Code',
//     'Figma',
//     'Adobe XD',
//     'Postman',
//     'Docker',
//     'Webpack',
//     'Jest',
//     'CI/CD',
//   ];

//   return (
//     <section className="py-20">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <span className="text-primary-purple font-semibold tracking-wider uppercase text-sm font-montserrat">
//             Our Expertise
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2 text-off-white font-montserrat">
//             Technologies We Master
//           </h2>
//           <p className="text-lg text-dark-gray max-w-3xl mx-auto font-inter">
//             We leverage cutting-edge technologies to build powerful, scalable, and beautiful digital
//             solutions.
//           </p>
//         </div>

//         <TechnologyCategory title="Frontend Development" technologies={frontendTechnologies} />
//         <TechnologyCategory title="Backend Development" technologies={backendTechnologies} />
//         <TechnologyCategory title="Tools & Platforms" technologies={tools} />
//       </div>
//     </section>
//   );
// };

// export default Technologies;



// components/Technologies.tsx
import React from 'react';

interface TechnologyItemProps {
  name: string;
  delay: string;
}

const TechnologyItem = ({ name, delay }: TechnologyItemProps) => {
  return (
    <div 
      className="
        group relative overflow-hidden rounded-2xl p-4 
        bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40
        backdrop-blur-sm border border-white/10
        hover:border-primary-purple/50 hover:bg-gradient-to-br hover:from-gray-800/60 hover:via-gray-700/40 hover:to-black/50
        transform transition-all duration-500 ease-out
        hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-purple/20
        animate-fade-in-up
      "
      style={{ animationDelay: delay }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-primary-purple via-secondary-magenta to-primary-purple transition-opacity duration-500 rounded-2xl" />
      
      {/* Floating background shapes */}
      <div className="absolute top-2 right-2 w-8 h-8 bg-primary-purple/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-1 left-2 w-6 h-6 bg-secondary-magenta/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10 flex items-center justify-center h-12">
        <span className="text-white font-medium font-inter text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-purple group-hover:to-secondary-magenta group-hover:bg-clip-text transition-all duration-300">
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
  technologies: string[];
  delay: string;
}

const TechnologyCategory = ({ title, technologies, delay }: TechnologyCategoryProps) => {
  return (
    <div className="mb-16 animate-fade-in-up" style={{ animationDelay: delay }}>
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
            name={tech} 
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
    'React',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Next.js',
    'React Native',
    'Redux',
    'TypeScript',
    'Bootstrap',
    'Vue.js',
    'Angular'
  ];

  const backendTechnologies = [
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Firebase',
    'Python',
    'Django',
    'GraphQL',
    'REST API',
    'AWS',
    'Docker',
    'Kubernetes'
  ];

  const tools = [
    'Git',
    'GitHub',
    'VS Code',
    'Figma',
    'Adobe XD',
    'Postman',
    'Docker',
    'Webpack',
    'Jest',
    'CI/CD',
    'Vercel',
    'Netlify'
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
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-primary-purple font-medium text-sm tracking-wide uppercase font-inter">
              Our Expertise
            </span>
          </div>

          {/* Main title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black tracking-tight text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="block">Technologies We</span>
            <span className="block mt-2 bg-gradient-to-r from-primary-purple via-secondary-magenta to-primary-purple bg-clip-text text-transparent">
              Master & Perfect
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-gray-300 font-inter text-lg lg:text-xl leading-relaxed animate-fade-in-up opacity-90" style={{ animationDelay: '0.3s' }}>
            We leverage cutting-edge technologies to build powerful, scalable, and beautiful digital solutions that drive results.
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
        <TechnologyCategory 
          title="Tools & Platforms" 
          technologies={tools} 
          delay="0.8s"
        />

        {/* Stats section */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Technologies' },
              { number: '100+', label: 'Projects' },
              { number: '99%', label: 'Success Rate' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40 backdrop-blur-sm border border-white/10 hover:border-primary-purple/30 transition-all duration-500">
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