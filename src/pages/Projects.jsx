import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects'; // Optional: externalize data

const Projects = () => {
  return (
    <motion.section
      className="bg-[#111111] text-[#EAEAEA] px-6 py-20 md:py-28 lg:py-36"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-[#00F5A0] font-semibold text-sm tracking-widest uppercase mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Our Work
        </motion.h2>

        <motion.h3
          className="text-3xl sm:text-5xl font-black mb-12 text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Projects We've Built
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
