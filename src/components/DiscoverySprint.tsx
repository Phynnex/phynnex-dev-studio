import React from 'react';
import Link from 'next/link';

const DiscoverySprint = () => {
  return (
    <section className="py-20 lg:py-24 bg-black">
      <div className="container-custom">
        <div className="surface relative overflow-hidden px-6 py-8 md:px-12 md:py-12">
          <div className="pointer-events-none absolute inset-0 hero-gradient opacity-10" />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="heading-2">Discovery Sprint</h3>
              <p className="text-dark-gray font-inter mt-2 md:mt-3 max-w-2xl">
                A focused 1–2 week engagement to align goals, scope, and a delivery plan. You get a
                concise brief, timeline, and budget — plus early risk reduction.
              </p>
              <ul className="mt-4 text-off-white/90 font-inter text-sm list-disc pl-5 space-y-1">
                <li>Workshops, user flows, and a prioritized backlog</li>
                <li>Lo‑fi concepts and a clear implementation plan</li>
                <li>Fixed price, delivered fast</li>
              </ul>
            </div>
            <div className="flex md:justify-end">
              <Link href="/contact" className="btn-primary">
                Book a Sprint
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySprint;
