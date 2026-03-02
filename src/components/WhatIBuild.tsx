import React from 'react';

const WhatIBuild = () => {
  const items = [
    {
      title: 'Security dashboards',
      description:
        'Operational views that surface risk, investigations, and response status with clarity.',
    },
    {
      title: 'Data visualization systems',
      description: 'Charts and signals that translate complex telemetry into decisions.',
    },
    {
      title: 'Product interfaces for complex domains',
      description: 'User-centered flows that make security workflows intuitive and auditable.',
    },
    {
      title: 'Cloud-integrated web platforms',
      description: 'Secure, scalable apps with AWS-backed storage, auth, and monitoring.',
    },
  ];

  return (
    <section id="what-i-build" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-16 w-32 h-32 bg-primary-purple/4 rounded-full blur-2xl animate-drift-slow" />
        <div className="absolute bottom-1/4 right-12 w-40 h-40 bg-secondary-magenta/4 rounded-full blur-3xl animate-drift-slower" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="text-center mb-14 lg:mb-18">
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-primary-purple font-medium text-sm tracking-wide uppercase font-inter">
              What I Build
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black tracking-tight text-white mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block">Product engineering</span>
            <span className="block mt-2 bg-gradient-to-r from-primary-purple via-secondary-magenta to-primary-purple bg-clip-text text-transparent">
              for security teams
            </span>
          </h2>

          <p
            className="mx-auto max-w-2xl text-gray-300 font-inter text-lg lg:text-xl leading-relaxed animate-fade-in-up opacity-90"
            style={{ animationDelay: '0.3s' }}
          >
            I focus on building secure, data-driven platforms that make complex security work
            manageable and measurable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl p-6 lg:p-8 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40 backdrop-blur-sm border border-white/10 hover:border-primary-purple/40 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-primary-purple via-secondary-magenta to-primary-purple transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-montserrat font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 font-inter leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
