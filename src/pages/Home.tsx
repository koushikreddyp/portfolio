import React from 'react';
import { ArrowRight, Code, Award, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="section-container flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm Koushik Reddy
            </h1>
            <p className="text-xl mb-6">
              B.Tech CSE Student at Lovely Professional University
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition duration-300"
              >
                Contact Me
              </Link>
              <Link
                to="/projects"
                className="bg-transparent hover:bg-blue-600 text-white border border-white font-semibold py-2 px-6 rounded-md transition duration-300"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="profile.png"
                alt="Koushik Reddy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-gray-50">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-6">
                I am a passionate Computer Science student with a focus on web
                development and software engineering. Currently pursuing my
                B.Tech in Computer Science Engineering at Lovely Professional
                University, I am dedicated to creating efficient and
                user-friendly applications.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more about me <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-1/3 font-medium">Languages:</span>
                    <span className="w-2/3">
                      JavaScript, TypeScript, Python
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1/3 font-medium">Frontend:</span>
                    <span className="w-2/3">React, HTML, CSS, Tailwind</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1/3 font-medium">Backend:</span>
                    <span className="w-2/3">Node.js, Express</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section>
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="mb-4 text-blue-600">
                <Code size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Projects</h3>
              <p className="text-gray-600 mb-4">
                Check out my latest projects and applications that showcase my
                technical skills and creativity.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                View projects <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="card p-6">
              <div className="mb-4 text-blue-600">
                <Award size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Certificates</h3>
              <p className="text-gray-600 mb-4">
                Browse through my certifications and achievements in various
                technical domains.
              </p>
              <Link
                to="/certificates"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                View certificates <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="card p-6">
              <div className="mb-4 text-blue-600">
                <FileText size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Resume</h3>
              <p className="text-gray-600 mb-4">
                Download my resume to get a comprehensive overview of my skills,
                education, and experience.
              </p>
              <a
                href="CV.pdf"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Download resume <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
