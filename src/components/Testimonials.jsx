import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Travel Enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'My trip to Ethiopia with BS Tour & Travel was hands down the best travel experience of my life. The guides were so knowledgeable, and everything was perfectly organized.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Adventure Seeker',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'The Danakil Depression tour was an absolute highlight. The team at BS Tours was professional, safety-conscious, and made sure we had an unforgettable adventure.',
      rating: 5,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Culture Explorer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'Lalibela was magical, and our guide from BS Tours made the history come alive. I highly recommend them to anyone looking for an authentic and luxury travel experience in Africa.',
      rating: 4.8,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-secondary font-black uppercase tracking-[0.2em] text-sm mb-4">Testimonials</h4>
          <h2 className="text-4xl md:text-5xl text-primary font-display leading-tight mb-6">
            What Our <span className="text-secondary">Travelers</span> Say
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Hear from our happy clients about their memorable journeys and experiences with BS Tour & Travel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-10 relative group hover:bg-primary transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="absolute top-6 right-8 text-secondary group-hover:text-white/30 transition-colors">
                <Quote size={48} fill="currentColor" className="opacity-10" />
              </div>
              
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < Math.floor(testimonial.rating) ? 'text-accent fill-accent' : 'text-slate-200'} group-hover:text-accent group-hover:fill-accent transition-colors`} 
                  />
                ))}
              </div>
              
              <p className="text-slate-600 text-lg italic mb-10 group-hover:text-white transition-colors">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-4 border-slate-100 group-hover:border-white/20 transition-all"
                />
                <div>
                  <h4 className="text-primary font-black group-hover:text-white transition-colors">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm font-medium group-hover:text-white/60 transition-colors uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
