import ProjectCard from '../components/ProjectCard';
import leo from '../assets/leo.png';
import tonnie from '../assets/tonnie.png';
import vert from '../assets/vert.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Vertical Solutions",
      description: "A Company website for Vertical techniques Ltd; Cost-Efficient and Safe High-Altitude Cleaning Solutions",
      image: vert,
      tags: ["React", "Tailwind", "Business"],
      link: "https://www.verticaltechniques.co.ke"
    },
    {
      id: 2,
      title: "Anthony's Portfolio",
      description: "A Porftolio website for Anthony Njeru, an auditor",
      image: tonnie,
      tags: ["React", "Tailwind", "Portfolio"],
      link: "https://anthonynjeru.netlify.app/"
    },
    {
      id: 3,
      title: "Leon Munene",
      description: "A Porftolio website for Leon Munene, a Software Developer",
      image: leo,
      tags: ["React", "Tailwind", "Portfolio"],
      link: "https://leonmunene.netlify.app/"
    },
    {
      id: 4,
      title: "Dennis Miring'u",
      description: "A portfolio website for Dennis Miring'u, a Software Developer",
      image: denno,
      tags: ["React", "Tailwind", "Portfolio"],
      link: "https://dennismiringu.vercel.app/"
    },
  ];

  return (
    <div className="relative w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">
      <div className="container flex flex-col items-center h-full max-w-6xl mx-auto">
        <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">Our Work</h2>
        <h3 className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
          Projects We've Built
        </h3>
        
        <div className="grid w-full grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;