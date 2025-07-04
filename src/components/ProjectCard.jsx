import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" },
  };

  return (
    <motion.div
      className="overflow-hidden bg-white rounded-lg shadow-md flex flex-col h-full cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link to={`/projects/${project.id}`}>
        <img className="object-cover w-full h-48" src={project.image} alt={project.title} />
        <div className="flex flex-col justify-between flex-grow p-6">
          <div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">{project.title}</h3>
            <p className="text-base text-gray-600">{project.description}</p>
            <div className="flex flex-wrap mt-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 mb-2 mr-2 text-sm font-medium text-[#007BFF] bg-[#E0F2FE] rounded-full"
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
              className="mt-6 inline-block text-sm font-semibold text-[#007BFF] hover:underline transition-colors duration-200"
              onClick={(e) => e.stopPropagation()} // Prevent navigating to project details when clicking external link
            >
              Visit Website →
            </a>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;