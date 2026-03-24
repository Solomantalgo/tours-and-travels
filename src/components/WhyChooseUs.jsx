import React from 'react';
import { Shield, Wallet, Headphones, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const stats = [
    { value: '500+', label: 'Happy Travellers' },
    { value: '10+', label: 'Years of Experience' },
    { value: '50+', label: 'Destinations Covered' },
    { value: '24/7', label: 'Customer Support' },
  ];

  const trustPoints = [
    {
      icon: <Shield size={40} className="text-[#e53935]" />,
      title: 'Trusted & Reliable',
      text: 'We have been crafting seamless travel experiences for over a decade with full transparency.'
    },
    {
      icon: <Wallet size={40} className="text-[#e53935]" />,
      title: 'Best Price Guarantee',
      text: 'We offer competitive prices with no hidden charges — quality travel that fits your budget.'
    },
    {
      icon: <Headphones size={40} className="text-[#e53935]" />,
      title: '24/7 Support',
      text: 'Our team is always available to assist you before, during, and after your journey.'
    },
    {
      icon: <Globe size={40} className="text-[#e53935]" />,
      title: 'Local Expertise',
      text: 'As a Ugandan travel agency, we know East Africa deeply and personally — not just on paper.'
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-[#f0f4ff]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#1a237e] font-display font-black leading-tight mb-4 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Trusted by travellers across East Africa and beyond
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow"
            >
              <p className="text-4xl md:text-5xl font-black text-[#e53935] mb-2">{stat.value}</p>
              <p className="text-[#1a237e] font-bold uppercase tracking-wider text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex items-start space-x-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="p-4 bg-red-50 rounded-2xl flex-shrink-0">
                {point.icon}
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-[#1a237e] mb-3">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
