import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/projects');
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#111111]">
        <p className="text-xl text-[#EAEAEA]">Loading project details...</p>
      </div>
    );
  }

  return (
    <motion.div
      className="w-full px-6 py-12 md:py-20 bg-[#111111] text-[#EAEAEA] min-h-screen"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[#00F5A0] text-lg font-semibold uppercase">Project Showcase</h2>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold">{project.title}</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">{project.description}</p>

        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 mt-6 text-sm font-semibold text-[#111111] bg-[#00F5A0] rounded-md hover:bg-[#00d98c] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Live Project →
          </motion.a>
        )}
      </div>

      {/* Main Content */}
      <div className="mt-16 space-y-16 max-w-6xl mx-auto">
        {/* Mockup Images */}
        <section>
          <h3 className="text-2xl font-bold text-[#00F5A0] mb-6 border-b border-gray-700 pb-2 text-center">Visual Mockups</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.details.mockupImages.map((mock, i) => (
              <motion.div
                key={i}
                className="rounded-xl overflow-hidden shadow-lg bg-[#1a1a1a] p-3 hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <img
                  src={mock.src}
                  alt={mock.alt}
                  className="w-full h-full max-h-[400px] object-contain rounded-md"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* About */}
        <section>
          <h3 className="text-2xl font-bold text-[#00F5A0] mb-4">About the Project</h3>
          <p className="text-base text-gray-300">{project.details.about}</p>
        </section>

        {/* Technologies Used */}
        <section>
          <h3 className="text-2xl font-bold text-[#00F5A0] mb-4">Technologies Used</h3>
          <ul className="list-disc list-inside space-y-2 text-base text-gray-300 pl-4">
            {project.details.technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </section>

        {/* Features */}
        <section>
          <h3 className="text-2xl font-bold text-[#00F5A0] mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-base text-gray-300 pl-4">
            {project.details.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
