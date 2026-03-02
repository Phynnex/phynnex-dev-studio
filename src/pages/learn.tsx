import React from 'react';
import SEO from '../components/SEO';

const LearnPage = () => {
  const tracks = [
    {
      title: 'Frontend Development',
      description: 'Master React, HTML, CSS and modern tooling.',
      duration: '12 weeks',
    },
    {
      title: 'Backend Development',
      description: 'Build robust APIs with Node.js and databases.',
      duration: '10 weeks',
    },
    {
      title: 'Full-Stack Development',
      description: 'Combine frontend and backend skills to create complete applications.',
      duration: '16 weeks',
    },
  ];

  return (
    <>
      <SEO
        title="Phynnex Dev Studio - Learn"
        description="Explore our hands-on boot camp training programs for web development."
      />
      <div className="bg-black py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-off-white">
            Training Programs
          </h1>
          <p className="text-center text-lg text-dark-gray mt-4 max-w-3xl mx-auto">
            Kickstart your career with our immersive boot camps covering different tracks of web
            development.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {tracks.map((track) => (
              <div key={track.title} className="p-6 rounded-xl bg-gray-900 border border-white/10">
                <h2 className="text-2xl font-semibold text-off-white mb-2">{track.title}</h2>
                <p className="text-dark-gray mb-4">{track.description}</p>
                <p className="text-sm font-medium text-off-white">Duration: {track.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnPage;
