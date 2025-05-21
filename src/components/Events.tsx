import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Annual School Exhibition",
      date: "June 15-17, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "School Main Hall",
      description: "Showcasing student projects across all subjects, featuring interactive displays, performances, and presentations.",
      category: "Exhibition"
    },
    {
      title: "Parent-Teacher Conference",
      date: "June 25, 2025",
      time: "1:00 PM - 7:00 PM",
      location: "Classroom Buildings",
      description: "One-on-one meetings between parents and teachers to discuss student progress and development plans.",
      category: "Academic"
    },
    {
      title: "Cultural Performance Night",
      date: "July 8, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "School Auditorium",
      description: "A celebration of Indonesian cultural heritage through music, dance, and dramatic performances by our students.",
      category: "Cultural"
    },
    {
      title: "Science Fair",
      date: "July 20, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Science Building",
      description: "Students present their original research projects and scientific experiments to judges and visitors.",
      category: "Academic"
    }
  ];

  const today = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = monthNames[today.getMonth()];
  const year = today.getFullYear();

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay up to date with our school activities, celebrations, and important dates for the academic year.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-teal-600 rounded-t-xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-1">School Calendar</h3>
              <p className="text-white/80">{month} {year}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-b-xl p-6 shadow-sm">
              <div className="grid grid-cols-7 gap-2 text-center mb-4">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                  <div key={index} className="text-sm font-medium text-gray-500">{day}</div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2 text-center">
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 3; // Adjust to start on correct day of week
                  return (
                    <div 
                      key={i} 
                      className={`
                        text-sm py-2 rounded-full 
                        ${day <= 0 || day > 31 ? 'text-gray-300' : 'text-gray-900'}
                        ${day === 15 || day === 25 ? 'bg-teal-100 text-teal-800 font-medium' : ''}
                        ${day === 8 || day === 20 ? 'bg-orange-100 text-orange-800 font-medium' : ''}
                      `}
                    >
                      {day > 0 && day <= 31 ? day : ''}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm">
                  <div className="w-3 h-3 rounded-full bg-teal-500 mr-2"></div>
                  <span className="text-gray-600">Academic Events</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                  <span className="text-gray-600">Cultural Events</span>
                </div>
              </div>

              <div className="mt-6">
                <a 
                  href="#" 
                  className="block w-full py-3 bg-gray-100 text-gray-800 font-medium rounded-lg text-center hover:bg-gray-200 transition-colors duration-300"
                >
                  Download Full Calendar
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 space-y-6">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <div className={`
                      inline-block px-3 py-1 rounded-full text-sm font-medium mb-3
                      ${event.category === 'Academic' ? 'bg-teal-100 text-teal-800' : 
                        event.category === 'Cultural' ? 'bg-orange-100 text-orange-800' : 
                        'bg-blue-100 text-blue-800'}
                    `}>
                      {event.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <a 
                      href="#" 
                      className="inline-block px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors duration-300"
                    >
                      Add to Calendar
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center mt-8">
              <a 
                href="#" 
                className="inline-block px-6 py-3 border-2 border-teal-600 text-teal-600 font-medium rounded-lg hover:bg-teal-600 hover:text-white transition-colors duration-300"
              >
                View All Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;