import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "National Science Olympiad Champions",
      year: "2024",
      description: "Our students won gold medals in the physics, chemistry, and biology categories at the National Science Olympiad.",
      image: "https://images.pexels.com/photos/8471887/pexels-photo-8471887.jpeg"
    },
    {
      title: "International Robotics Competition Finalists",
      year: "2023",
      description: "Our robotics team reached the finals of the International Robotics Competition in Singapore, ranking 3rd out of 50 teams.",
      image: "https://images.pexels.com/photos/8472042/pexels-photo-8472042.jpeg"
    },
    {
      title: "National Arts & Culture Award",
      year: "2024",
      description: "Our students received recognition for their outstanding performances showcasing traditional Indonesian arts and dance.",
      image: "https://images.pexels.com/photos/8472160/pexels-photo-8472160.jpeg"
    },
    {
      title: "Regional Mathematics Competition Winners",
      year: "2023",
      description: "Our mathematics team secured first place in the regional mathematics competition, showcasing exceptional problem-solving skills.",
      image: "https://images.pexels.com/photos/8472120/pexels-photo-8472120.jpeg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="achievements" className="py-20 bg-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Achievements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We celebrate the outstanding accomplishments of our students across academics, arts, sports, and community service.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="min-w-full flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {achievement.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                    <p className="text-gray-600 mb-6">{achievement.description}</p>
                    <a 
                      href="#" 
                      className="inline-block text-teal-600 font-medium hover:text-teal-700 transition-colors duration-200"
                    >
                      Read full story →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-teal-600 p-2 rounded-full shadow-md focus:outline-none"
            aria-label="Previous achievement"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-teal-600 p-2 rounded-full shadow-md focus:outline-none"
            aria-label="Next achievement"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-teal-600' : 'bg-teal-200'
                }`}
                aria-label={`Go to achievement ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-teal-600 mb-2">100+</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Awards</h3>
            <p className="text-gray-600">National and international academic competition awards won by our students.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-teal-600 mb-2">85%</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">University Acceptance</h3>
            <p className="text-gray-600">Of our graduates are accepted into top-tier universities in Indonesia and abroad.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Arts & Sports Trophies</h3>
            <p className="text-gray-600">Recognitions in various cultural, arts, and sports competitions at all levels.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;