import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Plane, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Destinations', to: 'destinations' },
    { name: 'Testimonials', to: 'testimonials' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-secondary transition-colors duration-300">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <span className={`text-2xl font-display font-black tracking-tighter ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              BS <span className="text-secondary">TOURS</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`nav-link ${isScrolled ? 'text-slate-700' : 'text-white hover:text-secondary'}`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:+251911223344" 
              className="btn-primary flex items-center space-x-2 text-sm"
            >
              <Phone size={18} />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-primary' : 'text-white'} p-2`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-white shadow-2xl transition-all duration-300 transform ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-4 text-lg font-semibold text-slate-800 border-b border-slate-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <a 
              href="tel:+251911223344" 
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
