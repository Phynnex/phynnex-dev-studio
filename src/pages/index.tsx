import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import Benefits from "../components/Benefits";
import Team from "../components/Team";
import CTA from "../components/CTA";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Technologies from "../components/Technologies";
import Faq from "../components/FAQ";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Phynnex Dev Studio - Home</title>
        <meta
          name="description"
          content="Welcome to Phynnex Dev Studio, your partner for custom digital solutions."
        />
      </Head>
      <main>
        <Navbar/>
        <Hero />
      <Services />
      <Process />
      <Technologies />
      <Portfolio />
      <Benefits />
      <Team/>
      <Faq />
      <CTA />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
