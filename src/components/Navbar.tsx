import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Full from '../assets/images/New.png';

type NavbarProps = object;

const Navbar = ({}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-navy-blue py-4 px-12 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between">
          <div className="w-2/5 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold italic text-off-white">
              <Image src={Full} alt="Logo" className="w-20 h-14" width={80} height={56} />
              {/* <Image src="/api/placeholder/500/300" alt="Digital Solutions" className="rounded-lg" width={500} height={300} /> */}
            </Link>

            {/* Navigation Links - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="font-inter text-off-white hover:text-primary-purple transition-colors"
              >
                Home Page
              </Link>
              <Link
                href="/about"
                className="font-inter text-off-white hover:text-primary-purple transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="font-inter text-off-white hover:text-primary-purple transition-colors"
              >
                Services
              </Link>
              <div className="relative group">
                <button
                  className="font-inter text-off-white hover:text-primary-purple transition-colors flex items-center"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  More Links
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-navy-blue shadow-lg rounded-md py-1 z-10">
                    <Link
                      href="/portfolio"
                      className="block px-4 py-2 text-off-white hover:bg-primary-purple hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Portfolio
                    </Link>
                    <Link
                      href="/process"
                      className="block px-4 py-2 text-off-white hover:bg-primary-purple hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Our Process
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 text-off-white hover:bg-primary-purple hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* CTA Buttons */}
          <div className="w-2/5 flex justify-end">
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/join"
                className="px-4 py-2 border border-primary-purple text-off-white hover:bg-primary-purple hover:text-white transition-colors font-inter rounded-md"
              >
                Join
              </Link>
              <Link
                href="/learn"
                className="px-4 py-2 bg-primary-purple text-white hover:bg-opacity-90 transition-colors font-inter rounded-md"
              >
                Learn
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-off-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-primary-purple mt-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="font-inter text-off-white hover:text-primary-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home Page
              </Link>
              <Link
                href="/about"
                className="font-inter text-off-white hover:text-primary-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="font-inter text-off-white hover:text-primary-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <button
                className="text-left font-inter text-off-white hover:text-primary-purple transition-colors flex items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                More Links
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="pl-4 flex flex-col space-y-2">
                <Link
                  href="/portfolio"
                  className="font-inter text-off-white hover:text-primary-purple transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/process"
                  className="font-inter text-off-white hover:text-primary-purple transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Our Process
                </Link>
                <Link
                  href="/contact"
                  className="font-inter text-off-white hover:text-primary-purple transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="flex space-x-4 pt-2">
                <Link
                  href="/join"
                  className="px-4 py-2 border border-primary-purple text-off-white hover:bg-primary-purple hover:text-white transition-colors text-center font-inter"
                  onClick={() => setIsOpen(false)}
                >
                  Join
                </Link>
                <Link
                  href="/learn"
                  className="px-4 py-2 bg-primary-purple text-white hover:bg-opacity-90 transition-colors text-center font-inter"
                  onClick={() => setIsOpen(false)}
                >
                  Learn
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
