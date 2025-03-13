import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Full from '../assets/images/New.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-off-white py-4 px-12 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between">
          <div className='w-2/5 flex items-center justify-between'>
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold italic text-deep-blue">
              <img src={Full} alt="Logo" className='w-20 h-14' />
            </Link>
            
            {/* Navigation Links - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="font-inter text-deep-blue hover:text-primary-purple transition-colors">
                Home Page
              </Link>
              <Link to="/about" className="font-inter text-deep-blue hover:text-primary-purple transition-colors">
                About Us
              </Link>
              <Link to="/services" className="font-inter text-deep-blue hover:text-primary-purple transition-colors">
                Services
              </Link>
              <div className="relative group">
                <button 
                  className="font-inter text-deep-blue hover:text-primary-purple transition-colors flex items-center"
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                    <Link 
                      to="/portfolio" 
                      className="block px-4 py-2 text-deep-blue hover:bg-off-white hover:text-primary-purple"
                      onClick={() => setIsOpen(false)}
                    >
                      Portfolio
                    </Link>
                    <Link 
                      to="/process" 
                      className="block px-4 py-2 text-deep-blue hover:bg-off-white hover:text-primary-purple"
                      onClick={() => setIsOpen(false)}
                    >
                      Our Process
                    </Link>
                    <Link 
                      to="/contact" 
                      className="block px-4 py-2 text-deep-blue hover:bg-off-white hover:text-primary-purple"
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
          <div className='w-2/5 flex justify-end'>
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/join" 
                className="px-4 py-2 border border-primary-purple text-deep-blue hover:bg-off-white transition-colors font-inter rounded-md"
              >
                Join
              </Link>
              <Link 
                to="/learn" 
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
              className="text-deep-blue focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t mt-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="font-inter text-deep-blue hover:text-primary-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home Page
              </Link>
              <Link 
                to="/about" 
                className="font-inter text-deep-blue hover:text-primary-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="font-inter text-deep-blue hover:text-primary-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <button 
                className="text-left font-inter text-deep-blue hover:text-primary-purple transition-colors flex items-center"
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="pl-4 flex flex-col space-y-2">
                <Link 
                  to="/portfolio" 
                  className="font-inter text-deep-blue hover:text-primary-purple transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
                <Link 
                  to="/process" 
                  className="font-inter text-deep-blue hover:text-primary-purple transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Our Process
                </Link>
                <Link 
                  to="/contact" 
                  className="font-inter text-deep-blue hover:text-primary-purple transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
              
              {/* Mobile CTA Buttons */}
              <div className="flex space-x-4 pt-2">
                <Link 
                  to="/join" 
                  className="px-4 py-2 border border-primary-purple text-deep-blue hover:bg-off-white transition-colors text-center font-inter"
                  onClick={() => setIsOpen(false)}
                >
                  Join
                </Link>
                <Link 
                  to="/learn" 
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