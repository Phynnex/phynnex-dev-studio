import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type BenefitsProps = object;

const Benefits = ({}: BenefitsProps) => {
  const benefitsList = [
    {
      icon: '✓',
      title: 'Outcome-first',
      description: 'Tight scopes, measurable outcomes, and decisions anchored to your goals.',
    },
    {
      icon: '✓',
      title: 'Secure & performant',
      description: 'Modern tooling, clean architecture, and testing for fast, stable releases.',
    },
    {
      icon: '✓',
      title: 'Transparent delivery',
      description:
        'Weekly demos, async updates, and Looms so you always know what is shipped next.',
    },
    {
      icon: '✓',
      title: 'Smooth handoff',
      description: 'Documentation, training, and backlog grooming to keep your team moving.',
    },
  ];

  return (
    <section id="benefits" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-40 h-40 bg-primary-purple/3 rounded-full blur-3xl animate-drift-slow" />
        <div className="absolute top-2/3 right-20 w-32 h-32 bg-secondary-magenta/4 rounded-full blur-2xl animate-drift-slower" />
        <div className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-primary-purple/2 rounded-full blur-xl animate-drift-slowest" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-12">
              <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-primary-purple font-medium text-sm tracking-wide uppercase font-inter">
                  Why partner with me
                </span>
              </div>

              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black tracking-tight text-white mb-6 animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                <span className="block">Engineering with a</span>
                <span className="block mt-2 bg-gradient-to-r from-primary-purple via-secondary-magenta to-primary-purple bg-clip-text text-transparent">
                  product mindset
                </span>
              </h2>

              <p
                className="text-gray-300 font-inter text-lg lg:text-xl leading-relaxed mb-8 animate-fade-in-up opacity-90"
                style={{ animationDelay: '0.3s' }}
              >
                Builders who can ship and think in outcomes are rare. I bring both: hands-on code
                and the discipline to keep releases aligned to business goals.
              </p>
            </div>

            <div className="space-y-6 mb-10">
              {benefitsList.map((benefit, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm border border-white/10 hover:border-primary-purple/30 transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-purple/20 to-secondary-magenta/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-montserrat font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-purple group-hover:to-secondary-magenta group-hover:bg-clip-text transition-all duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 font-inter leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base bg-gradient-to-r from-primary-purple to-secondary-magenta text-white shadow-lg transition-all duration-300 ease-out hover:shadow-xl hover:shadow-primary-purple/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-purple/50 relative overflow-hidden"
              >
                <span className="relative z-10">Book a call</span>
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

          <div className="order-1 lg:order-2">
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40 backdrop-blur-sm border border-white/10 p-8">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="https://picsum.photos/seed/benefits/600/400"
                    alt="Working session"
                    className="w-full h-auto rounded-xl transform hover:scale-105 transition-transform duration-700"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-purple/20 via-transparent to-transparent rounded-xl" />
                </div>

                <div className="absolute top-4 right-4 w-16 h-16 bg-primary-purple/10 rounded-full blur-2xl animate-drift-slow pointer-events-none" />
                <div className="absolute bottom-8 left-8 w-10 h-10 bg-secondary-magenta/20 rounded-full blur-lg animate-drift-slower pointer-events-none" />
                <div className="absolute -bottom-6 right-1/2 w-14 h-14 bg-primary-purple/15 rounded-full blur-xl animate-drift-slowest pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
