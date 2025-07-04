import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from './Projects'; // Import project data

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Find the project by ID
    const foundProject = projectsData.find(p => p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      // Redirect to 404 or projects page if project not found
      navigate('/projects');
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Loading project details...</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Function to shuffle array for random grid placement
  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  // Combine and shuffle content blocks
  const contentBlocks = shuffleArray([
    {
      type: 'mockups',
      data: project.details.mockupImages
    },
    {
      type: 'about',
      title: 'About the Project',
      content: project.details.about
    },
    {
      type: 'technologies',
      title: 'Technologies Used',
      content: project.details.technologies
    },
    {
        type: 'features',
        title: 'Key Features',
        content: project.details.features
    }
  ]);


  // Determine grid template areas based on shuffled blocks
  // This is a simplified approach, for complex random layouts you might need more dynamic CSS grid logic
  const gridAreas = [
    ['mockups-1', 'about'],
    ['technologies', 'mockups-2'],
    ['mockups-3', 'features'],
  ];

  // Randomize grid layout (simple randomization for illustrative purposes)
  const getRandomGridTemplate = () => {
    const templates = [
      "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
      "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
      "grid-cols-1 md:grid-cols-3 lg:grid-cols-2",
    ];
    return templates[Math.floor(Math.random() * templates.length)];
  };

  const randomGridClass = getRandomGridTemplate();


  return (
    <motion.div
      className="relative w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex flex-col items-center h-full max-w-6xl mx-auto">
        <motion.h2
          className="my-5 text-lg font-semibold tracking-tight text-[#007BFF] uppercase"
          variants={itemVariants}
        >
          Project Showcase
        </motion.h2>
        <motion.h3
          className="max-w-4xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl"
          variants={itemVariants}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="mt-4 text-lg text-gray-700 text-center max-w-3xl"
          variants={itemVariants}
          transition={{ delay: 0.2 }}
        >
          {project.description}
        </motion.p>
        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 mt-6 text-base font-bold text-white bg-[#007BFF] rounded-md hover:bg-[#0056B3] transition-all duration-300 shadow-md"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Live Project →
          </motion.a>
        )}

        <div className={`w-full mt-20 grid ${randomGridClass} gap-8 auto-rows-fr`}>
          {contentBlocks.map((block, index) => (
            <motion.div
              key={index}
              className={`p-6 bg-white rounded-lg shadow-xl ${
                block.type === 'mockups' ? 'md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-center items-center' : 'md:col-span-1'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.01, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
            >
              {block.type === 'mockups' ? (
                <div className="w-full h-full flex flex-wrap gap-4 justify-center items-center p-4">
                  {block.data.map((mock, i) => (
                    <motion.img
                      key={i}
                      src={mock.src}
                      alt={mock.alt}
                      className={`object-contain shadow-md rounded-lg
                        ${mock.size === 'large' ? 'w-full md:max-w-xl' : ''}
                        ${mock.size === 'medium' ? 'w-full md:w-1/2' : ''}
                        ${mock.size === 'small' ? 'w-full md:w-1/3' : ''}
                      `}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                    />
                  ))}
                </div>
              ) : (
                <>
                  <h4 className="mb-4 text-2xl font-bold text-gray-900 border-b-2 border-[#007BFF] pb-2">
                    {block.title}
                  </h4>
                  {Array.isArray(block.content) ? (
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
                      {block.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-lg text-gray-700">{block.content}</p>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;