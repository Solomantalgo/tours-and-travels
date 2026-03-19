import React from 'react';
import { CheckCircle2, Award, Users, Map } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: <Award className="text-secondary" />, label: 'Years Experience', value: '10+' },
    { icon: <Users className="text-secondary" />, label: 'Happy Clients', value: '5K+' },
    { icon: <Map className="text-secondary" />, label: 'Destinations', value: '50+' },
  ];

  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-1"></div>
            <img 
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Our Story" 
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 glass-card p-6 hidden md:block">
              <div className="flex flex-col space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 bg-slate-100 rounded-lg">{stat.icon}</div>
                    <div>
                      <p className="text-2xl font-black text-primary leading-none">{stat.value}</p>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:pl-8">
            <h4 className="text-secondary font-black uppercase tracking-[0.2em] text-sm mb-4">About the Company</h4>
            <h2 className="text-4xl md:text-5xl text-primary leading-tight mb-6">
              Making Every Journey <br />
              <span className="text-secondary">Extraordinary</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              BS Tour & Travel is a premier tour operator based in Ethiopia, dedicated to providing authentic and luxury travel experiences. Our team of local experts ensures that every trip is meticulously planned and executed with the highest standards of safety and comfort.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Expert Local Guides & Drivers',
                'Tailor-made Itineraries for Every Traveler',
                'Luxury Accommodations & Transport',
                '24/7 Dedicated Customer Support'
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-secondary flex-shrink-0" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="btn-primary px-10 py-4 shadow-xl shadow-primary/20">
              Learn More Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
