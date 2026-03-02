// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

type FooterProps = object;
const Footer = ({}: FooterProps) => {
  return (
    <footer className="relative bg-black text-off-white">
      {/* Subtle animated gradient divider */}
      <div className="h-1 w-full gradient-band opacity-60"></div>

      <div className="container-custom py-12">
        {/* CTA Card */}
        <div className="surface relative overflow-hidden px-6 py-8 md:px-10 md:py-10 mb-12">
          <div className="pointer-events-none absolute inset-0 hero-gradient opacity-10"></div>
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold">
                Let’s build something remarkable
              </h3>
              <p className="mt-2 text-dark-gray font-inter max-w-2xl">
                From idea to production — we craft performant, elegant digital products.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/contact" className="btn-primary">
                Start a Project
              </Link>
              <Link href="/process" className="btn-outline">
                Our Process
              </Link>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-off-white font-montserrat">
              Phynnex Dev Studio
            </Link>
            <p className="mt-3 text-sm text-dark-gray font-inter">
              Product-minded engineers building beautiful, reliable software with care.
            </p>

            {/* Socials */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://github.com/"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-white/10 hover:border-primary-purple/60 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-white/10 hover:border-primary-purple/60 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-white/10 hover:border-primary-purple/60 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <Link
                href="/contact"
                aria-label="Email"
                className="p-2 rounded-md border border-white/10 hover:border-primary-purple/60 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-montserrat font-semibold text-off-white">Company</h4>
            <ul className="mt-3 space-y-2 font-inter text-sm">
              <li>
                <Link href="/about" className="text-dark-gray hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark-gray hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-dark-gray hover:text-white transition-colors">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-semibold text-off-white">Services</h4>
            <ul className="mt-3 space-y-2 font-inter text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-dark-gray hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-dark-gray hover:text-white transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-montserrat font-semibold text-off-white">Resources</h4>
            <ul className="mt-3 space-y-2 font-inter text-sm">
              <li>
                <Link href="/privacy" className="text-dark-gray hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-dark-gray hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-dark-gray hover:text-white transition-colors">
                  Cookies Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10 text-xs text-dark-gray font-inter">
          <div>&copy; 2025 Phynnex Dev Studio. All rights reserved.</div>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
