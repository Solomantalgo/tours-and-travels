import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Camera, Star } from 'lucide-react';
import kaba from '../assets/kaba.jpeg';
import fall from '../assets/fall.jpeg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    {
      image: img4,
      title: 'Hijja and Umrah travel preparations',
      description: "We help you prepare for your Hijja and Umrah journeys with expert guidance, ensuring a smooth and spiritually fulfilling experience. Our comprehensive services cover everything from visa processing to accommodation arrangements, making your pilgrimage stress-free and memorable."
    },
    {
      image: kaba,
      title: 'Mecca, Saudi Arabia',
      description: "A serene and spiritual journey to the holy city of Mecca. Our guided Umrah packages ensure a peaceful and well-organized pilgrimage for every traveler."
    },
    {
      image: img3,
      title: 'At the KABA,',
      description: "A place of profound spirituality and unity, the Kaaba in Mecca is the heart of Islamic faith. Our tours offer an unforgettable experience to witness this sacred site up close."
    },
    
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Drag/Touch Handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.type.includes('mouse') ? e.pageX : e.touches[0].pageX);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    const endX = e.type.includes('mouse') ? e.pageX : e.changedTouches[0].pageX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setIsDragging(false);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-secondary font-black uppercase tracking-[0.2em] text-sm mb-4">Testimonials</h4>
          <h2 className="text-4xl md:text-5xl text-primary font-display leading-tight mb-6">
            What Our <span className="text-secondary">Travelers</span> Say
          </h2>
          
          {/* Section Rating Overlay */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-accent fill-accent" />
              ))}
            </div>
            <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">
              5.0 Rating based on 500+ reviews
            </p>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Card */}
          <div 
            ref={sliderRef}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            className={`bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 transition-all duration-500 hover:shadow-primary/10 cursor-grab active:cursor-grabbing select-none`}
          >
            {/* Image Cover */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden group pointer-events-none">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Title Overlay on Image */}
                  <div className="absolute bottom-8 left-8 text-white z-20">
                    <div className="flex items-center space-x-2 bg-secondary/80 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                      <Camera size={14} />
                      <span>Captured Moment</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold md:text-4xl drop-shadow-lg leading-tight">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Description Below */}
            <div className="p-8 md:p-12 bg-white">
              <div className="relative h-24 md:h-20">
                {slides.map((slide, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 transform ${
                      index === current 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                  >
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed italic border-l-4 border-secondary pl-6">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Slider Controls */}
              <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8">
                <div className="flex space-x-3">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-2 transition-all duration-300 rounded-full ${
                        i === current ? 'w-12 bg-secondary' : 'w-4 bg-slate-200'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-primary hover:text-white text-primary transition-all shadow-sm group"
                  >
                    <ChevronLeft size={24} className="group-active:scale-90 transition-transform" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-primary hover:text-white text-primary transition-all shadow-sm group"
                  >
                    <ChevronRight size={24} className="group-active:scale-90 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
