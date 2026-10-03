import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Play } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroSliderProps {
  onApplyClick: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onApplyClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesData = [
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80',
      badge: 'Recognized Senior Secondary School (UDISE: 06180100104)',
      title: SCHOOL_INFO.name,
      subtitle: 'Creating Learners For Life',
      highlight: 'Sector 21 / Dundahera, Palam Gurgaon Road, Gurugram',
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80',
      badge: 'Admissions Open Session 2026-27',
      title: 'Empowering Minds, Building Futures',
      subtitle: 'Educating The Leaders Of Tomorrow',
      highlight: 'Nursery to Class XII (Science, Commerce & Humanities)',
    },
    {
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80',
      badge: 'Academic & Sports Excellence',
      title: 'Academic & Laboratory Facilities',
      subtitle: 'Composite Science, Computer & Smart Classrooms',
      highlight: 'Individual Student Attention with 20:1 Mentorship Ratio',
    },
    {
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80',
      badge: 'Serving Gurugram Since 1990',
      title: 'Values, Discipline & Success',
      subtitle: 'Knowledge, Character, Excellence',
      highlight: 'Palam Gurgaon Road, Near Kapashera Border, Gurugram',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slidesData.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-950 group">
      {/* Aspect Ratio Container for Slider */}
      <div className="relative w-full h-[320px] sm:h-[440px] md:h-[540px] lg:h-[620px] xl:h-[660px]">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center brightness-[0.78]"
            />
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

            {/* Slider Text Caption Content */}
            <div className="absolute inset-0 flex items-center z-20">
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
                <div className="max-w-2xl space-y-3 sm:space-y-4">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#aa2c38] text-white text-[11px] sm:text-xs font-bold tracking-wide shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>{slide.badge}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-base sm:text-xl md:text-2xl font-light text-amber-200 leading-snug">
                    {slide.subtitle}
                  </p>

                  {/* Highlight text */}
                  <p className="text-xs sm:text-sm text-slate-300 max-w-lg hidden sm:block">
                    {slide.highlight}
                  </p>

                  {/* CTAs */}
                  <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={onApplyClick}
                      className="px-6 sm:px-8 py-2.5 sm:py-3.5 bg-[#aa2c38] hover:bg-[#8c1f2b] text-white font-bold text-xs sm:text-sm rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                    >
                      <span>Apply Online</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={onApplyClick}
                      className="px-5 sm:px-7 py-2.5 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-full backdrop-blur-xs border border-white/30 transition cursor-pointer"
                    >
                      Enquiry Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Revolution Slider Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#aa2c38] text-white flex items-center justify-center transition opacity-70 group-hover:opacity-100 cursor-pointer backdrop-blur-xs border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#aa2c38] text-white flex items-center justify-center transition opacity-70 group-hover:opacity-100 cursor-pointer backdrop-blur-xs border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bullets Pagination */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? 'w-8 h-2.5 bg-[#aa2c38] shadow-sm ring-2 ring-white/50'
                : 'w-2.5 h-2.5 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
