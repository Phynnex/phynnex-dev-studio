import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Full from '../assets/images/New.png';
import useTheme from '../hooks/useTheme';

type NavbarProps = object;

const Navbar = ({}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [theme, toggleTheme] = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
      setIsDropdownOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router.events]);

  const isActiveRoute = (path: string) => router.pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
  ];

  const dropdownLinks = [
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/process', label: 'Our Process' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-white/10' 
          : 'bg-black/90 backdrop-blur-sm'
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0 group transition-transform duration-200 hover:scale-105"
          >
            <div className="flex items-center space-x-3">
              <Image 
                src={Full} 
                alt="Phynnex Dev Studio Logo" 
                className="w-auto h-10 lg:h-12 object-contain filter brightness-200" 
                width={120} 
                height={48}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative font-inter font-medium transition-all duration-200
                  hover:text-primary-purple
                  ${isActiveRoute(link.href) 
                    ? 'text-primary-purple' 
                    : 'text-white/90 hover:text-white'
                  }
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 
                  after:w-0 after:bg-primary-purple after:transition-all after:duration-200
                  hover:after:w-full
                  ${isActiveRoute(link.href) ? 'after:w-full' : ''}
                `}
              >
                {link.label}
              </Link>
            ))}

            {/* Desktop Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`
                  flex items-center font-inter font-medium transition-all duration-200
                  hover:text-primary-purple text-white/90 hover:text-white
                  ${isDropdownOpen ? 'text-primary-purple' : ''}
                `}
              >
                More
                <svg
                  className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
              <div
                className={`
                  absolute top-full left-0 mt-2 w-48 
                  bg-gray-900/95 backdrop-blur-md border border-white/10
                  rounded-lg shadow-xl overflow-hidden
                  transition-all duration-200 origin-top
                  ${isDropdownOpen 
                    ? 'opacity-100 scale-y-100 visible' 
                    : 'opacity-0 scale-y-95 invisible'
                  }
                `}
              >
                {dropdownLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      block px-4 py-3 text-sm font-inter font-medium
                      transition-all duration-150
                      hover:bg-primary-purple/20 hover:text-primary-purple
                      ${isActiveRoute(link.href) 
                        ? 'text-primary-purple bg-primary-purple/10' 
                        : 'text-white/80 hover:text-white'
                      }
                      ${index !== dropdownLinks.length - 1 ? 'border-b border-white/5' : ''}
                    `}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.05 6.05 4.636 4.636m12.728 0-1.414 1.414M6.05 17.95l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                  />
                </svg>
              )}
            </button>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/join"
                className="
                  px-5 py-2.5 rounded-lg font-inter font-semibold text-sm
                  border-2 border-primary-purple/60 text-white
                  hover:border-primary-purple hover:bg-primary-purple/10
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-primary-purple/50
                "
              >
                Join
              </Link>
              <Link
                href="/learn"
                className="
                  px-5 py-2.5 rounded-lg font-inter font-semibold text-sm
                  bg-gradient-to-r from-primary-purple to-secondary-magenta
                  text-white shadow-lg
                  hover:shadow-xl hover:shadow-primary-purple/25
                  transition-all duration-200 transform hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-primary-purple/50
                "
              >
                Learn
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-3 rounded-lg font-inter font-medium transition-all duration-150
                    hover:bg-white/5
                    ${isActiveRoute(link.href) 
                      ? 'text-primary-purple bg-primary-purple/10' 
                      : 'text-white/90 hover:text-white'
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile dropdown links */}
              <div className="pt-2 border-t border-white/10 mt-2">
                <div className="px-4 py-2 text-xs font-inter font-semibold text-white/60 uppercase tracking-wider">
                  More
                </div>
                {dropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      px-6 py-3 rounded-lg font-inter font-medium transition-all duration-150
                      hover:bg-white/5
                      ${isActiveRoute(link.href) 
                        ? 'text-primary-purple bg-primary-purple/10' 
                        : 'text-white/80 hover:text-white'
                      }
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-white/10 mt-4">
                <Link
                  href="/join"
                  className="
                    mx-4 px-4 py-3 rounded-lg font-inter font-semibold text-center
                    border-2 border-primary-purple/60 text-white
                    hover:border-primary-purple hover:bg-primary-purple/10
                    transition-all duration-200
                  "
                  onClick={() => setIsOpen(false)}
                >
                  Join
                </Link>
                <Link
                  href="/learn"
                  className="
                    mx-4 px-4 py-3 rounded-lg font-inter font-semibold text-center
                    bg-gradient-to-r from-primary-purple to-secondary-magenta
                    text-white shadow-lg
                    transition-all duration-200
                  "
                  onClick={() => setIsOpen(false)}
                >
                  Learn
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
