import React from 'react';
import Link from 'next/link';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay: string;
  isEven: boolean;
}

const ProcessStep = ({ number, title, description, delay, isEven }: ProcessStepProps) => {
  return (
    <div
      className={`
        group relative text-center p-8 rounded-2xl 
        bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40
        backdrop-blur-sm border border-white/10
        hover:border-primary-purple/50 hover:bg-gradient-to-br hover:from-gray-800/60 hover:via-gray-700/40 hover:to-black/50
        transform transition-all duration-700 ease-out
        hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary-purple/25
        animate-fade-in-up overflow-hidden
        ${isEven ? 'lg:translate-y-8' : ''}
        [animation-delay:${delay}]
      `}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-primary-purple via-secondary-magenta to-primary-purple transition-opacity duration-500 rounded-2xl" />
      <div
        className={`
        hidden lg:block absolute top-8 w-20 h-0.5 bg-gradient-to-r from-primary-purple/30 to-secondary-magenta/30
        ${number === '3' ? 'hidden' : isEven ? 'right-full' : 'left-full'}
        group-hover:from-primary-purple group-hover:to-secondary-magenta transition-all duration-500
      `}
      />

      <div className="absolute top-4 right-4 w-16 h-16 bg-primary-purple/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-secondary-magenta/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10">
        <div
          className="
          w-20 h-20 mx-auto mb-6 rounded-2xl
          bg-gradient-to-br from-primary-purple via-secondary-magenta to-primary-purple
          flex items-center justify-center
          font-montserrat font-black text-2xl text-white
          shadow-lg group-hover:shadow-xl group-hover:shadow-primary-purple/40
          transform group-hover:scale-110 group-hover:rotate-12
          transition-all duration-500 ease-out
          relative overflow-hidden
        "
        >
          <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10">{number}</span>
        </div>

        <h3
          className="
          text-xl lg:text-2xl font-montserrat font-bold mb-4 text-white
          group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-purple group-hover:via-secondary-magenta group-hover:to-primary-purple group-hover:bg-clip-text
          transition-all duration-300
        "
        >
          {title}
        </h3>

        <p className="text-gray-300 font-inter leading-relaxed text-sm lg:text-base group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>

        <div className="mt-6 w-full h-1 bg-gray-800 rounded-full overflow-hidden group-hover:bg-gray-700 transition-colors duration-300">
          <div
            className={`h-full bg-gradient-to-r from-primary-purple to-secondary-magenta rounded-full transition-all duration-1000 ease-out [width:0%] [animation:fillProgress_2s_ease-out_${delay}_forwards]`}
          />
        </div>
      </div>
    </div>
  );
};

type ProcessProps = object;

const Process = ({}: ProcessProps) => {
  const processSteps = [
    {
      number: '1',
      title: 'Align',
      description:
        'Clarify goals, users, and success metrics. We map scope, choose the stack, and set timelines you can share with stakeholders.',
    },
    {
      number: '2',
      title: 'Build',
      description: 'Design systems, frontends, and APIs in small, shippable increments. Weekly demos keep you in the loop.',
    },
    {
      number: '3',
      title: 'Launch & Handoff',
      description:
        'Staging, QA, and production launch with observability. We document, train, and stay available for improvements.',
    },
  ];

  return (
    <section id="process" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/6 right-10 w-40 h-40 bg-primary-purple/3 rounded-full blur-3xl animate-drift-slow" />
        <div className="absolute top-2/3 left-20 w-32 h-32 bg-secondary-magenta/4 rounded-full blur-2xl animate-drift-slower" />
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-primary-purple/2 rounded-full blur-xl animate-drift-slowest" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M100 200 Q300 100 500 200 T900 200 Q1000 150 1100 200"
            stroke="url(#processGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 container-custom">
        <div className="text-center mb-16 lg:mb-20">
          <div className="mb-6 animate-fade-in-up [animation-delay:0.1s]">
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-primary-purple font-medium text-sm tracking-wide uppercase font-inter">
              How we work
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black tracking-tight text-white *:mb-6 animate-fade-in-up [animation-delay:0.2s]">
            <span className="block">A clear path</span>
            <span className="block mt-2 bg-gradient-to-r from-primary-purple via-secondary-magenta to-primary-purple bg-clip-text text-transparent">
              from brief to launch
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-gray-300 font-inter text-lg lg:text-xl leading-relaxed animate-fade-in-up opacity-90 [animation-delay:0.3s]">
            Outcome-first, transparent, and paced to ship. You always know what we&apos;re building and why.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 lg:mb-20">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={`${0.4 + index * 0.1}s`}
              isEven={index % 2 === 1}
            />
          ))}
        </div>

        <div className="mb-16 lg:mb-20 animate-fade-in-up [animation-delay:1s]">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-xl lg:text-2xl font-montserrat font-bold text-white mb-8">
              What to expect
            </h3>
            <div className="flex items-center justify-between bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              {processSteps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center text-center">
                  <div
                    className={`
                    w-4 h-4 rounded-full mb-2 transition-all duration-500
                    ${index === 0 ? 'bg-primary-purple animate-pulse' : 'bg-gray-600'}
                  `}
                  />
                  <span className="text-xs font-inter text-gray-400 hidden sm:block">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in-up [animation-delay:1.1s]">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-black/50 backdrop-blur-sm border border-white/10 hover:border-primary-purple/30 transition-all duration-500">
            <h3 className="text-2xl lg:text-3xl font-montserrat font-bold text-white mb-4">
              Ready to build?
            </h3>

            <p className="text-gray-300 font-inter mb-8 text-lg">
              No commitment an intro call to shape scope, timelines, and budget before we write a line of code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base bg-gradient-to-r from-primary-purple to-secondary-magenta text-white shadow-lg transition-all duration-300 ease-out hover:shadow-xl hover:shadow-primary-purple/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-purple/50 min-w-[200px]relative overflow-hidden"
              >
                <span className="relative z-10">Book an intro</span>
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

              <Link
                href="/#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base border-2 border-white/25 text-white/95 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-white/30 min-w-[200px]"
              >
                View Work
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    />
                  </svg>
                  Fixed scope & timelines
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    />
                  </svg>
                  Weekly demos
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-purple-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    />
                  </svg>
                  Clear handoff
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fillProgress {
          from {
            width: 0%;
          }
          to {
            width: ${100 / 3}%;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
