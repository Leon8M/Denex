import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.02}
      transitionSpeed={800}
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      className="rounded-xl bg-[#1a1a1a] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-[#2a2a2a]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col h-full"
      >
        <Link to={`/projects/${project.id}`} className="h-full flex flex-col">
          <img
            className="object-cover w-full h-48 sm:h-52 lg:h-56"
            src={project.image}
            alt={project.title}
          />
          <div className="flex-grow p-5 sm:p-6 flex flex-col justify-between text-[#EAEAEA]">
            <div>
              <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 font-medium text-[#00F5A0] bg-[#1f1f1f] border border-[#00F5A0]/30 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-sm font-semibold text-[#00F5A0] hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Visit Website →
              </a>
            )}
          </div>
        </Link>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
