import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Benefits from '../components/Benefits';
import Team from '../components/Team';
import CTA from '../components/CTA';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Technologies from '../components/Technologies';
import Faq from '../components/FAQ';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.phynnex.dev';

const HomePage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Phynnex Dev Studio',
    url: siteUrl,
  };

  return (
    <>
      <Head>
        <title>Phynnex Dev Studio - Home</title>
        <meta
          name="description"
          content="Welcome to Phynnex Dev Studio, your partner for custom digital solutions."
        />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:title" content="Phynnex Dev Studio" />
        <meta
          property="og:description"
          content="Welcome to Phynnex Dev Studio, your partner for custom digital solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content="https://picsum.photos/seed/hero/1200/630" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Hero />
      <Services />
      <Process />
      <Technologies />
      <Portfolio />
      <Benefits />
      <Team />
      <Faq />
      <CTA />
      <Contact />
    </>
  );
};

export default HomePage;
