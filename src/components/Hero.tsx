import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const newsSection = document.getElementById('news');
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/8471838/pexels-photo-8471838.jpeg" 
          alt="School campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-teal-700/70"></div>
      </div>

      {/* Decorative element - batik pattern */}
      <div className="absolute right-0 top-0 w-48 h-48 md:w-96 md:h-96 opacity-20 bg-white rotate-45 -mr-24 -mt-24 rounded-full"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
          Sekolah Harapan Indonesia
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8 animate-fadeInUp">
          Nurturing the Future Leaders of Indonesia with Excellence in Education, Cultural Values, and Innovation
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp animation-delay-300">
          <a href="#admission" className="px-8 py-3 bg-white text-teal-700 font-medium rounded-lg hover:bg-teal-50 transition-colors duration-300">
            Apply Now
          </a>
          <a href="#programs" className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300">
            Explore Programs
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;