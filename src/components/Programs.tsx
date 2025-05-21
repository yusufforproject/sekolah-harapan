import React from 'react';
import { BookOpen, Code, Music, FlaskConical, Globe, PaintBucket } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Elementary Education",
      description: "A foundational program focused on developing core academic skills, creativity, and character in children ages 6-12.",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Junior High School",
      description: "Building on elementary foundations with more advanced subjects and critical thinking for students ages 13-15.",
      icon: FlaskConical,
      color: "from-teal-500 to-emerald-500"
    },
    {
      title: "Senior High School",
      description: "College preparatory education with specialized tracks in Sciences, Social Studies, and Language Arts.",
      icon: Globe,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Computer Science",
      description: "Special focus on programming, digital literacy, and technology innovation across all grade levels.",
      icon: Code,
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Arts Program",
      description: "Enrichment in visual arts, design, and creative expression to nurture artistic talents.",
      icon: PaintBucket,
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "Music & Performance",
      description: "Comprehensive music education with instrumental training, vocal development, and performance opportunities.",
      icon: Music,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive curriculum is designed to develop well-rounded students with strong academic foundations and diverse skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="group p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${program.color} transform transition-all duration-300 group-hover:w-full group-hover:opacity-10`}></div>
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${program.color} text-white mb-4`}>
                  <program.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
                <a 
                  href="#" 
                  className="mt-4 inline-block text-teal-600 font-medium hover:text-teal-700 transition-colors duration-200"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mb-32"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Discover Our Curriculum</h3>
            <p className="text-white/90 text-lg mb-6 max-w-3xl">
              Our curriculum blends Indonesian cultural values with international educational standards, preparing students for global challenges while honoring their heritage.
            </p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-white text-teal-700 font-medium rounded-lg hover:bg-teal-50 transition-colors duration-300"
            >
              Download Curriculum Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;