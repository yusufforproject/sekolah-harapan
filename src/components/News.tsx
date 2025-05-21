import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: "Students Win National Science Competition",
      date: "May 15, 2025",
      category: "Achievement",
      excerpt: "Our students brought home the gold medal at the National Science Olympiad, showcasing their exceptional talents in physics and chemistry.",
      image: "https://images.pexels.com/photos/8471925/pexels-photo-8471925.jpeg",
      icon: Award
    },
    {
      title: "New STEM Laboratory Opening Ceremony",
      date: "June 2, 2025",
      category: "Event",
      excerpt: "We're excited to announce the opening of our state-of-the-art STEM laboratory, equipped with the latest technology for hands-on learning.",
      image: "https://images.pexels.com/photos/8472170/pexels-photo-8472170.jpeg",
      icon: Calendar
    },
    {
      title: "Parent-Teacher Conference Schedule",
      date: "June 10, 2025",
      category: "Announcement",
      excerpt: "The upcoming parent-teacher conferences will be held next week. Please check the schedule and book your appointment.",
      image: "https://images.pexels.com/photos/8471981/pexels-photo-8471981.jpeg",
      icon: Users
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">School News & Announcements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest events, achievements, and important announcements from our school community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-sm font-medium text-teal-600 flex items-center">
                  <item.icon className="h-4 w-4 mr-1" />
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a 
                  href="#" 
                  className="inline-block text-teal-600 font-medium hover:text-teal-700 transition-colors duration-200"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors duration-300"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;