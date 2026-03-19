import React from 'react';
import { Plane, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-display font-black tracking-tighter">
                BS <span className="text-secondary">TOURS</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Your trusted partner for authentic and luxury travel experiences across Ethiopia and around the world. We make every journey extraordinary.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-[2px] after:bg-secondary">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['Home', 'AboutUs', 'Services', 'Destinations', 'Testimonials'].map((name) => (
                <li key={name}>
                  <Link 
                    to={name.toLowerCase()} 
                    smooth={true} 
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-[2px] after:bg-secondary">
              Contact Info
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 text-slate-400">
                <MapPin className="text-secondary flex-shrink-0 mt-1" size={20} />
                <span>Bole Road, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center space-x-4 text-slate-400">
                <Phone className="text-secondary flex-shrink-0" size={20} />
                <span>+251 911 223 344</span>
              </li>
              <li className="flex items-center space-x-4 text-slate-400">
                <Mail className="text-secondary flex-shrink-0" size={20} />
                <span>info@bstours.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-[2px] after:bg-secondary">
              Newsletter
            </h4>
            <p className="text-slate-400 mb-6">Subscribe to get the latest travel deals and news.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-secondary transition-colors"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary p-2 rounded-full hover:bg-secondary-dark transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} BS Tour & Travel. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
