import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that provides current conditions and forecasts for locations worldwide.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["JavaScript", "OpenWeather API", "HTML", "CSS"]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and professional information.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"]
    },
  ];

  return (
    <div>
      <section className="bg-blue-50">
        <div className="section-container">
          <h1 className="section-title">My Projects</h1>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project represents my skills and experience in different technologies and domains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>


                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;