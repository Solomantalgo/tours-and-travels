import React from 'react';
import { Star, MapPin, ArrowRight } from 'lucide-react';

const Destinations = () => {
  const destinations = [
    {
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Lalibela Rock Churches',
      location: 'Northern Ethiopia',
      price: '$450',
      rating: 4.9,
    },
    {
      img: 'https://images.unsplash.com/photo-1543731068-7e0f5beff43a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Simien Mountains',
      location: 'Amhara Region',
      price: '$350',
      rating: 4.8,
    },
    {
      img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Danakil Depression',
      location: 'Afar Region',
      price: '$600',
      rating: 4.9,
    },
    {
      img: 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Omo Valley',
      location: 'Southern Ethiopia',
      price: '$500',
      rating: 4.7,
    },
  ];

  return (
    <section id="destinations" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0 text-center md:text-left">
          <div className="max-w-xl mx-auto md:mx-0">
            <h4 className="text-secondary font-black uppercase tracking-[0.2em] text-sm mb-4">Top Destinations</h4>
            <h2 className="text-4xl md:text-5xl text-primary font-display leading-tight mb-4">
              Explore Our <span className="text-secondary">Popular</span> Places
            </h2>
            <p className="text-slate-500 text-lg">
              Explore the breathtaking beauty and rich history of Ethiopia's most iconic destinations.
            </p>
          </div>
          <button className="btn-outline hidden md:flex items-center space-x-2">
            <span>View All Destinations</span>
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <div 
              key={index} 
              className="group relative h-[450px] overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image */}
              <img 
                src={dest.img} 
                alt={dest.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
                <Star className="text-accent h-4 w-4 fill-accent" />
                <span className="text-sm font-bold text-primary">{dest.rating}</span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center space-x-1 text-slate-300 text-sm mb-2">
                  <MapPin size={14} />
                  <span>{dest.location}</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{dest.title}</h3>
                
                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xl font-black text-secondary">{dest.price}<span className="text-sm font-normal text-slate-300">/person</span></p>
                  <button className="bg-white text-primary p-2 rounded-lg hover:bg-secondary hover:text-white transition-colors duration-300">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden flex justify-center">
          <button className="btn-primary w-full max-w-sm">View All Destinations</button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
