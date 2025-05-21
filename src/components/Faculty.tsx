import React from 'react';

const Faculty = () => {
  const faculty = [
    {
      name: "Dr. Putri Wijaya",
      position: "School Principal",
      bio: "Ph.D. in Educational Leadership with over 20 years of experience in education administration and curriculum development.",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg"
    },
    {
      name: "Prof. Budi Santoso",
      position: "Science Department Head",
      bio: "Specialized in Physics with numerous publications and 15 years of teaching experience at both secondary and university levels.",
      image: "https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg"
    },
    {
      name: "Mrs. Siti Rahayu",
      position: "Mathematics Teacher",
      bio: "Award-winning mathematics educator with innovative teaching methods that make complex concepts accessible to all students.",
      image: "https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg"
    },
    {
      name: "Mr. Arief Hidayat",
      position: "Arts & Culture Teacher",
      bio: "Professional artist and educator dedicated to preserving Indonesian cultural heritage through creative expression.",
      image: "https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg"
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Distinguished Faculty</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of educators committed to providing exceptional educational experiences and nurturing student potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-block px-6 py-3 border-2 border-teal-600 text-teal-600 font-medium rounded-lg hover:bg-teal-600 hover:text-white transition-colors duration-300"
          >
            View All Faculty Members
          </a>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl overflow-hidden">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/8471791/pexels-photo-8471791.jpeg" 
              alt="Join our team" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Join Our Teaching Team</h3>
            <p className="text-white/90 mb-6">
              We're always looking for passionate educators who want to make a difference in students' lives and contribute to our school community.
            </p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-white text-orange-600 font-medium rounded-lg hover:bg-orange-50 transition-colors duration-300"
            >
              View Career Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;