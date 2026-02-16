import React from 'react';
import type { GetStaticProps } from 'next';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Testimonials from '../components/Testimonials';
import DiscoverySprint from '../components/DiscoverySprint';
import Services from '../components/Services';
import Process from '../components/Process';
import Benefits from '../components/Benefits';
import Team from '../components/Team';
import CTA from '../components/CTA';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Technologies from '../components/Technologies';
import Faq from '../components/FAQ';
import SEO from '../components/SEO';
import WhatIBuild from '../components/WhatIBuild';

type HomePageProps = {
  siteUrl: string;
};

const HomePage = ({ siteUrl }: HomePageProps) => {
  const sections = [
    TrustedBy,
    Services,
    WhatIBuild,
    Process,
    Technologies,
    Portfolio,
    Testimonials,
    DiscoverySprint,
    Benefits,
    Team,
    Faq,
    CTA,
    Contact,
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fyne Beulah Iwari-Dick',
    url: siteUrl,
  };

  return (
    <>
      <SEO
        title="Fyne Beulah Iwari-Dick | Product Engineer (Cybersecurity)"
        description="I build secure, data-driven cybersecurity products with modern web technologies. Product engineering from discovery to delivery."
        url={siteUrl}
        image="https://picsum.photos/seed/hero/1200/630"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </SEO>
      <Hero />
      {sections.map((Section, idx) => (
        <div key={idx}>
          <Section />
        </div>
      ))}
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.phynnex.dev';
  return {
    props: { siteUrl },
  };
};
