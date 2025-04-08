const ProjectCard = ({ project }) => {
  return (
    <div className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg flex flex-col h-full">
      <img className="object-cover w-full h-48" src={project.image} alt={project.title} />
      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">{project.title}</h3>
          <p className="text-base text-gray-600">{project.description}</p>
          <div className="flex flex-wrap mt-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 mb-2 mr-2 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full"
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
            className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:underline"
          >
            Visit Website →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
