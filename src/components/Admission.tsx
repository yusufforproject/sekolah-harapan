import React from 'react';
import { CheckCircle, Calendar, FileText, Users } from 'lucide-react';

const Admission = () => {
  const admissionSteps = [
    {
      title: "Complete Application Form",
      description: "Fill out our comprehensive online application form with student and family information.",
      icon: FileText,
    },
    {
      title: "Schedule Assessment",
      description: "Book an assessment date for academic evaluation and student interview.",
      icon: Calendar,
    },
    {
      title: "Parent Interview",
      description: "Meet with our admissions team to discuss educational goals and expectations.",
      icon: Users,
    },
    {
      title: "Admission Decision",
      description: "Receive your admission decision within two weeks of completing all steps.",
      icon: CheckCircle,
    }
  ];

  return (
    <section id="admission" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admission Information</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our school community and give your child the gift of quality education in a nurturing environment.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 py-8 px-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Admissions Process</h3>
                <p className="text-white/90">
                  Follow these steps to apply for enrollment at Sekolah Harapan Indonesia.
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-10 relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-teal-100"></div>
                  
                  {admissionSteps.map((step, index) => (
                    <div key={index} className="relative pl-12">
                      <div className="absolute left-0 top-0 bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <a 
                    href="#" 
                    className="block w-full py-3 bg-teal-600 text-white font-medium rounded-lg text-center hover:bg-teal-700 transition-colors duration-300"
                  >
                    Start Your Application
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Year 2025-2026</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 p-2 rounded-lg mr-4">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Application Deadline</h4>
                    <p className="text-gray-600">March 31, 2025</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 p-2 rounded-lg mr-4">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Assessment Period</h4>
                    <p className="text-gray-600">April 15 - May 15, 2025</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 p-2 rounded-lg mr-4">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Admission Decisions</h4>
                    <p className="text-gray-600">By May 31, 2025</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 p-2 rounded-lg mr-4">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">School Year Begins</h4>
                    <p className="text-gray-600">July 15, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tuition & Fees</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Elementary School (Grades 1-6)</span>
                  <span className="font-medium text-gray-900">Rp. 45,000,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Junior High School (Grades 7-9)</span>
                  <span className="font-medium text-gray-900">Rp. 55,000,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Senior High School (Grades 10-12)</span>
                  <span className="font-medium text-gray-900">Rp. 65,000,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Registration Fee (one-time)</span>
                  <span className="font-medium text-gray-900">Rp. 5,000,000</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                * Tuition fees can be paid annually, per semester, or monthly. Scholarships and financial aid are available for qualifying students.
              </p>
              <a 
                href="#" 
                className="inline-block text-teal-600 font-medium hover:text-teal-700 transition-colors duration-200"
              >
                Download complete fee structure →
              </a>
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Have Questions?</h3>
              <p className="mb-6">
                Our admissions team is ready to assist you with any questions about the application process, school tours, or program details.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#contact" 
                  className="px-4 py-2 bg-white text-orange-600 font-medium rounded-lg hover:bg-orange-50 transition-colors duration-300"
                >
                  Contact Us
                </a>
                <a 
                  href="#" 
                  className="px-4 py-2 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  Schedule a Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;