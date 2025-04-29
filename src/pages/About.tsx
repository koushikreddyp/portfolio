import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      <section className="bg-blue-50">
        <div className="section-container">
          <h1 className="section-title">About Me</h1>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full h-80 ">
                  <img
                    src="/profile.png"
                    alt="Koushik Reddy"
                    className="w-full h-full "
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">Koushik Reddy</h2>
                  <p className="text-gray-600 mb-4">B.Tech CSE Student</p>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-700">
                      <span className="font-medium mr-2">Age:</span> 21
                    </p>
                    <p className="flex items-center text-gray-700">
                      <span className="font-medium mr-2">Location:</span> Lovely Professional University
                    </p>
                    <p className="flex items-center text-gray-700">
                      <span className="font-medium mr-2">Email:</span> poreddykoushik@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
                <p className="text-gray-700 mb-4">
                  I am a passionate Computer Science student currently pursuing my B.Tech in Computer Science Engineering at Lovely Professional University.
                  With a strong foundation in programming and problem-solving, I am dedicated to creating efficient and user-friendly applications.
                </p>
                <p className="text-gray-700">
                  My journey in technology began with a curiosity about how digital systems work, which evolved into a passion for creating software solutions.
                  I enjoy tackling complex problems and continuously learning new technologies to expand my skill set.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Programming Languages</h3>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>JavaScript</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Python</span>
                          <span>80%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Java</span>
                          <span>70%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Web Technologies</h3>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>React</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>HTML/CSS</span>
                          <span>90%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Node.js</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6 border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-bold">B.Tech in Computer Science Engineering</h3>
                  <p className="text-gray-600">Lovely Professional University</p>
                  <p className="text-gray-500">2021 - 2025</p>
                  <p className="mt-2 text-gray-700">
                    Currently in my 3rd year, focusing on software development, data structures, and algorithms.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-bold">High School</h3>
                  <p className="text-gray-600">Your High School Name</p>
                  <p className="text-gray-500">2019 - 2021</p>
                  <p className="mt-2 text-gray-700">
                    Completed high school with a focus on Mathematics and Computer Science.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Award size={24} className="text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Achievements</h2>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-4 w-4 rounded-full bg-blue-600 mt-2 mr-3"></div>
                    <div>
                      <h3 className="font-bold">Punjab State Youth Festival 2024</h3>
                      <p className="text-gray-700">Secured 1st place in the Short Film Making competition, competing against 14 teams at the Punjab State Youth Festival.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-4 w-4 rounded-full bg-blue-600 mt-2 mr-3"></div>
                    <div>
                      <h3 className="font-bold">Inter University Compaction 2024</h3>
                      <p className="text-gray-700">Achieved 3rd place among 17 schools, recognized for innovative storytelling and technical excellence in filmmaking.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-4 w-4 rounded-full bg-blue-600 mt-2 mr-3"></div>
                    <div>
                      <h3 className="font-bold">Punjab state Youth Festival 2023</h3>
                      <p className="text-gray-700">Earned 3rd place in the competition, demonstrating creativity and technical expertise in filmmaking.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;