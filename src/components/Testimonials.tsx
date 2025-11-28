import React from 'react';

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'They moved from brief to launch quickly and kept us aligned the whole way. The first release exceeded expectations.',
    name: 'J. Williams',
    title: 'Founder, NovaLabs',
  },
  {
    quote:
      'Clear plans, tight execution, and a polished product. Communication was stellar from kickoff to handoff.',
    name: 'S. Patel',
    title: 'COO, Helios',
  },
  {
    quote: 'Strong engineering with a product mindset. Exactly the partner we needed.',
    name: 'M. Lee',
    title: 'Product Lead, Nimbus',
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="relative z-10 container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">Short notes from recent collaborations</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="surface p-6 h-full flex flex-col justify-between animate-fade-in-up"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <p className="text-off-white/90 font-inter leading-relaxed">“{t.quote}”</p>
              <div className="mt-6 text-sm text-dark-gray font-inter">
                <div className="text-off-white/90 font-semibold">{t.name}</div>
                <div>{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

