import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About — Phynnex Dev Studio"
        description="A small, senior team building reliable web products with care. Full‑stack development, project management, and sales/marketing in‑house — partnering with expert product designers per project."
        image="https://picsum.photos/seed/about/1200/630"
      />

      {/* Intro */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="relative z-10 container-custom text-center">
          <h1 className="heading-1">Lean Team. Big Outcomes.</h1>
          <p className="section-subtitle mt-4">
            We craft dependable web apps for early‑stage companies and growing teams. Our trio —
            a Full‑Stack Developer, Project Manager, and Sales/Marketing lead — keeps delivery fast and
            focused. For world‑class UX/UI, we bring in trusted design partners per project.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/process" className="btn-outline">How We Work</Link>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 lg:py-20 bg-black">
        <div className="container-custom">
          <h2 className="section-title text-center">Who We Are</h2>
          <p className="section-subtitle text-center">
            A product‑minded studio focused on shipping clear, maintainable software. We operate remote‑first
            and work closely with founders and product leads to turn goals into shipped features.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="surface p-6">
              <h3 className="heading-3">Full‑Stack Development</h3>
              <p className="mt-2 text-dark-gray font-inter">
                Architecture, implementation, and DevOps‑lite. We build fast, reliable apps with React,
                Next.js, Node.js, TypeScript, and AWS.
              </p>
            </div>
            <div className="surface p-6">
              <h3 className="heading-3">Project Management</h3>
              <p className="mt-2 text-dark-gray font-inter">
                Clear scoping, weekly demos, and predictable delivery. We keep priorities and timelines
                visible so there are no surprises.
              </p>
            </div>
            <div className="surface p-6">
              <h3 className="heading-3">Sales & Marketing</h3>
              <p className="mt-2 text-dark-gray font-inter">
                Lead generation, proposals, and go‑to‑market support. We work with you to position and
                launch effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <h2 className="section-title text-center">How We Work</h2>
          <p className="section-subtitle text-center">
            A lightweight process that keeps momentum while protecting quality.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="surface p-6">
              <div className="text-primary-purple text-sm font-inter">Week 1–2</div>
              <h3 className="heading-3">Discovery Sprint</h3>
              <p className="mt-2 text-dark-gray font-inter">
                Workshops, user flows, and a prioritized backlog. You get a concise brief, timeline,
                and fixed‑price plan.
              </p>
            </div>
            <div className="surface p-6">
              <div className="text-primary-purple text-sm font-inter">Weeks 2+</div>
              <h3 className="heading-3">Build</h3>
              <p className="mt-2 text-dark-gray font-inter">
                Iterative delivery with weekly demos. Strong testing, accessibility, and performance from day one.
              </p>
            </div>
            <div className="surface p-6">
              <div className="text-primary-purple text-sm font-inter">Ongoing</div>
              <h3 className="heading-3">Care Plan</h3>
              <p className="mt-2 text-dark-gray font-inter">
                Maintenance, security, analytics, and small features on a predictable monthly retainer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 lg:py-20 bg-black">
        <div className="container-custom">
          <h2 className="section-title text-center">Principles We Work By</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Clarity Over Complexity', body: 'Straightforward solutions beat clever ones. We optimize for readability and long‑term maintainability.' },
              { title: 'Performance By Default', body: 'Fast pages convert better. We make speed a requirement, not a nice‑to‑have.' },
              { title: 'Accessibility Matters', body: 'Inclusive products are better products. We build with WCAG in mind from the start.' },
              { title: 'Transparent Communication', body: 'Weekly demos, honest trade‑offs, and tight feedback loops keep projects on track.' },
              { title: 'Security & Privacy', body: 'We follow sensible defaults, least privilege, and never ship secrets.' },
              { title: 'Ownership', body: 'We treat your product like our own — reliable, tested, and easy to evolve.' },
            ].map((p) => (
              <div key={p.title} className="surface p-6">
                <h3 className="heading-3">{p.title}</h3>
                <p className="mt-2 text-dark-gray font-inter">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design partners */}
      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <div className="surface px-6 py-8 md:px-10 md:py-10 text-center">
            <h3 className="heading-3">Design Partners</h3>
            <p className="text-dark-gray font-inter max-w-3xl mx-auto mt-2">
              We collaborate with senior UX/UI designers on a per‑project basis. You get polished
              interfaces and a solid design system without carrying full‑time overhead.
              Want references?
              <Link href="/contact" className="text-primary-purple hover:underline"> Get in touch</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-black">
        <div className="container-custom text-center">
          <h2 className="section-title">Ready to Build?</h2>
          <p className="section-subtitle">Book a Discovery Sprint and get a clear, actionable plan.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">Book a Sprint</Link>
            <Link href="/portfolio" className="btn-secondary">See Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
