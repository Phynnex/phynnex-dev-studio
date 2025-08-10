// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

type FooterProps = object;
const Footer = ({}: FooterProps) => {
  return (
    <footer className="bg-black/50 backdrop-blur py-10 border-t border-white/10 text-off-white">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-10">
          {/* Logo */}
          <div className="mb-8">
            <Link href="/" className="text-2xl font-bold text-primary-purple font-montserrat">
              Phynnex Dev Studio
            </Link>
          </div>

          {/* Navigation */}
          <nav className="w-full flex justify-center">
            <ul className="flex flex-wrap justify-center gap-5 md:gap-8">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-dark-gray hover:text-primary-purple transition-colors font-inter"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="text-sm text-dark-gray hover:text-primary-purple transition-colors font-inter"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-dark-gray hover:text-primary-purple transition-colors font-inter"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-dark-gray hover:text-primary-purple transition-colors font-inter"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-sm text-dark-gray hover:text-primary-purple transition-colors font-inter"
                >
                  Support Center
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-5 border-t border-white/10 text-xs text-dark-gray">
          <div className="mb-4 md:mb-0 font-inter">
            &copy; 2025 Phynnex Dev Studio. All rights reserved.
          </div>
          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="text-dark-gray hover:text-primary-purple transition-colors font-inter"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-dark-gray hover:text-primary-purple transition-colors font-inter"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-dark-gray hover:text-primary-purple transition-colors font-inter"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
