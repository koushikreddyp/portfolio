import React from 'react';
import { Calendar, Award, ExternalLink } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Coursera",
      date: "June 2023",
      description: "This specialization is intended for people without programming experience who seek to develop C++ programming skills ",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://coursera.org/share/3e501baec815f28f22b27ab1ff166620"
    },
    {
      id: 2,
      title: "Server side JavaScript with Node.js",
      issuer: "Coursera",
      date: "March 2023",
      description: "Server side JavaScript with Node.js",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://coursera.org/share/55636c21e4b492bec3984580d0402544"
    },
    {
      id: 3,
      title: "Building Web Applications in PHP",
      issuer: "Coursera",
      date: "January 2023",
      description: "an online non-credit course authorized by University of Michigan and offered through Coursera",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://coursera.org/share/e5e95824aec085017d6c45b55e0a3edc"
    },
  ];

  return (
    <div>
      <section className="bg-blue-50">
        <div className="section-container">
          <h1 className="section-title">My Certificates</h1>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            These certifications represent my commitment to continuous learning and professional development in various technical domains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="card overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Award size={20} className="text-blue-600 mr-2" />
                    <h3 className="text-xl font-bold">{certificate.title}</h3>
                  </div>

                  <div className="flex items-center text-gray-600 mb-2">
                    <span className="font-medium mr-2">Issuer:</span>
                    <span>{certificate.issuer}</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{certificate.date}</span>
                  </div>

                  <p className="text-gray-700 mb-4">{certificate.description}</p>

                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Certificate <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;