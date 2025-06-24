import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Custom Software Development',
    description:
      'Bespoke applications crafted to solve your unique business challenges. Our iterative approach ensures the final product aligns perfectly with your goals.',
  },
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform and native apps that engage your users wherever they are. We build intuitive experiences that keep your audience connected on the go.',
  },
  {
    title: 'DevOps & Cloud Engineering',
    description:
      'Automated CI/CD pipelines and scalable cloud infrastructure keep your software resilient. We streamline deployment so you can focus on innovation.',
  },
  {
    title: 'Technical Support & Maintenance',
    description:
      'Reliable support ensures your systems run smoothly long after launch. We proactively monitor, update, and troubleshoot to minimize downtime.',
  },
];

const Home = () => (
  <main className="pt-20">
    <section className="bg-off-white py-20">
      <div className="container-custom text-center">
        <h1 className="heading-1 mb-6">
          Transform Your Ideas into Scalable Software &amp; Exceptional Talent
        </h1>
        <p className="text-lg text-dark-gray mb-8 font-inter">
          Partner with our experts to build innovative solutions and develop the skills your team needs to thrive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary">
            Book a Discovery Call
          </Link>
          <Link to="/academy" className="btn-secondary">
            Explore Academy Courses
          </Link>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-whisper p-6 rounded-lg shadow-sm text-center"
            >
              <h3 className="heading-3 mb-4">{service.title}</h3>
              <p className="text-dark-gray font-inter">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Home;

