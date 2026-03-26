import React from 'react';
import { Plane, Car, Hotel, Map, Shield, HeartHandshake } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Plane size={32} className="text-secondary" />,
      title: 'Flight Booking',
      description: 'Get the best deals on domestic and international flights with our expert booking service.',
    },
    {
      icon: <Car size={32} className="text-secondary" />,
      title: 'Car Hire',
      description: 'Luxury SUVs and comfortable sedans for your travel needs across the country.',
    },
    {
      icon: <Hotel size={32} className="text-secondary" />,
      title: 'Hotel Reservation',
      description: 'We partner with the finest hotels to ensure your stay is comfortable and memorable.',
    },
    {
      icon: <Map size={32} className="text-secondary" />,
      title: 'Tour Packages',
      description: 'Tailored packages for families, couples, and groups.',
    },
    {
      icon: <Shield size={32} className="text-secondary" />,
      title: 'Hijja & Umrah',
      description: 'Our team provides dedicated support for these sacred journeys.',
    },
    {
      icon: <HeartHandshake size={32} className="text-secondary" />,
      title: 'Visa Assistance',
      description: 'Professional guidance and support for all your visa application requirements.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <h4 className="text-secondary font-black uppercase tracking-[0.2em] text-sm mb-4">Our Services</h4>
          <h2 className="text-4xl md:text-5xl text-primary leading-tight font-display mb-6">
            Everything You Need For <br />
            <span className="text-secondary">Perfect</span> Travel
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We offer a wide range of travel services designed to provide you with a seamless and enjoyable experience from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-10 hover:bg-primary group transition-all duration-500 transform hover:-translate-y-2 cursor-default"
            >
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl inline-block group-hover:bg-white/20 transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4 group-hover:text-white transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
