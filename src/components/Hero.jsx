import React from 'react';
import { Link } from 'react-scroll';
import { ArrowRight, Plane, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Travel Adventure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 px-4 py-2 rounded-full text-secondary-light font-bold text-sm mb-6 animate-fade-in">
            <Plane size={16} />
            <span className="tracking-wider uppercase">Explore the world with BS Tour and travel</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 animate-slide-up">
            Bringing You <br />
            <span className="text-secondary">Closer</span> To The World
          </h1>
          
          <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-lg animate-slide-up delay-100">
            From the peaks of Rwenzori to the source of the Nile, we provide unforgettable experiences across Uganda and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up delay-200">
            <Link
              to="destinations"
              smooth={true}
              duration={500}
              className="btn-secondary px-8 py-4 text-lg w-full sm:w-auto"
            >
              Explore Destinations
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="btn-outline border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg w-full sm:w-auto"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar / Quick Links (Floating) */}
      <div className="absolute bottom-10 left-0 w-full px-4 hidden lg:block animate-slide-up delay-300">
        <div className="max-w-5xl mx-auto glass-card p-6 flex items-center justify-between">
          <div className="flex-1 px-4 border-r border-slate-200 flex items-center space-x-3">
            <MapPin className="text-primary" />
            <div>
              <p className="text-sm text-slate-500 font-medium">Location</p>
              <p className="text-slate-800 font-bold">Select Destination</p>
            </div>
          </div>
          <div className="flex-1 px-4 border-r border-slate-200 flex items-center space-x-3">
            <Calendar className="text-primary" />
            <div>
              <p className="text-sm text-slate-500 font-medium">When</p>
              <p className="text-slate-800 font-bold">Add Date</p>
            </div>
          </div>
          <div className="flex-1 px-4 flex items-center space-x-3">
            <Plane className="text-primary" />
            <div>
              <p className="text-sm text-slate-500 font-medium">Travel Type</p>
              <p className="text-slate-800 font-bold">Adventure & Tours</p>
            </div>
          </div>
          <button className="btn-primary px-10">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
