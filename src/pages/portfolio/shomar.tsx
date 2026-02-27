import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../../components/SEO';

const ShomarCaseStudyPage = () => {
  const screenshots = [
    { src: '/images/project1.png', alt: 'Shomar risk overview dashboard' },
    { src: '/images/project2.png', alt: 'Shomar investigation workflow view' },
    { src: '/images/project3.png', alt: 'Shomar evidence and audit trail view' },
  ];

  return (
    <>
      <SEO
        title="Shomar Case Study — Cybersecurity Platform"
        description="How Shomar unified security workflows with audit-ready, data-driven product decisions."
      />

      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-primary-purple font-medium text-sm tracking-wide uppercase font-inter">
                Case Study
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-black tracking-tight text-white mb-6">
              Shomar — Cybersecurity Platform
            </h1>
            <p className="text-gray-300 font-inter text-lg lg:text-xl leading-relaxed">
              A unified security platform for CyberCapSec that organizes investigations, evidence,
              and risk visibility without sacrificing auditability.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Product Engineering', 'Cybersecurity', 'Platform UX', 'Data Visualization'].map(
                (item) => (
                  <span
                    key={item}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-black">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6 text-gray-300 font-inter">
            <div>
              <h2 className="text-2xl lg:text-3xl font-montserrat font-bold text-white mb-3">
                Problem
              </h2>
              <p className="leading-relaxed">
                Security teams were juggling multiple tools to manage investigations, evidence, and
                reporting. Context was lost between systems, and audit readiness depended on manual
                coordination.
              </p>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-montserrat font-bold text-white mb-3">
                Users
              </h2>
              <p className="leading-relaxed">
                Security analysts, incident responders, and compliance stakeholders who need clear,
                role-based access to risk, investigations, and evidence trails.
              </p>
            </div>
          </div>
          <div className="space-y-6 text-gray-300 font-inter">
            <div>
              <h2 className="text-2xl lg:text-3xl font-montserrat font-bold text-white mb-3">
                My Role
              </h2>
              <p className="leading-relaxed">
                Product Engineer responsible for translating workflows into user journeys, defining
                the data model, and shipping the core front-end architecture with secure
                integrations.
              </p>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-montserrat font-bold text-white mb-3">
                Tech Decisions
              </h2>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                <li>Next.js + TypeScript for reliable, maintainable product delivery.</li>
                <li>Zod schemas to validate user input and API payload integrity.</li>
                <li>Zustand for predictable state coordination across investigative workflows.</li>
                <li>Recharts for consistent, accessible data visualization patterns.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <h2 className="text-2xl lg:text-3xl font-montserrat font-bold text-white mb-8">
            Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {screenshots.map((shot) => (
              <div
                key={shot.alt}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/40 border border-white/10"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={720}
                  height={520}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-black">
        <div className="container-custom">
          <h2 className="text-2xl lg:text-3xl font-montserrat font-bold text-white mb-6">
            Lessons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 font-inter">
            <div className="surface p-6">
              <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
                Security needs clarity, not clutter
              </h3>
              <p className="leading-relaxed">
                Analysts move faster when the system keeps evidence, status, and actions in one
                context.
              </p>
            </div>
            <div className="surface p-6">
              <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
                Audit readiness must be designed in
              </h3>
              <p className="leading-relaxed">
                Building audit trails and roles from day one reduces long-term security debt.
              </p>
            </div>
            <div className="surface p-6">
              <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
                Data visualization drives alignment
              </h3>
              <p className="leading-relaxed">
                Shared dashboards align stakeholders around risk posture and response progress.
              </p>
            </div>
            <div className="surface p-6">
              <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
                Product engineering is continuous discovery
              </h3>
              <p className="leading-relaxed">
                Close feedback loops with security teams keep workflows grounded in reality.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/#portfolio" className="btn-secondary">
              Back to work
            </Link>
            <Link href="/#contact" className="btn-primary">
              Discuss a project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShomarCaseStudyPage;
