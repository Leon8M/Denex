import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

// Import local images directly
import leo from '../assets/leo.png';
import tonnie from '../assets/tonnie.png';
import denno from '../assets/denno.png';
import verticalMock from '../assets/vert.png'; // Using the provided mockup
import vertical2 from '../assets/vert2.png'; // Additional mockup image for Vertical Solutions
import vertical3 from '../assets/vert3.png'; // Additional mockup image for Vertical Solutions
import tonnie2 from '../assets/tonnie2.png'; // Additional mockup image for Anthony's Portfolio
import leo2 from '../assets/leo2.png'; // Additional mockup image for Leon Munene
import denno2 from '../assets/denno2.png'; // Additional mockup image for Dennis Miring'u
import learn from '../assets/learn.png'; // Mockup for AI LearnHub
import learn2 from '../assets/learn2.png'; // Additional mockup image for AI LearnHub

// Centralized project data (moved from here to potentially a separate data file if it grows large)
export const projectsData = [
  {
    id: 1,
    title: "Vertical Solutions",
    description: "A Company website for Vertical techniques Ltd; Cost-Efficient and Safe High-Altitude Cleaning Solutions. Features a modern, responsive design with clear service offerings.",
    image: verticalMock,
    tags: ["React", "Tailwind CSS", "Business", "SEO Optimized"],
    link: "https://www.verticaltechniques.co.ke",
    details: {
      about: "Vertical Solutions needed a robust online presence to showcase their high-altitude cleaning, structural repair, and installation services. The primary goal was to create a professional, easy-to-navigate website that clearly communicates their expertise and safety standards.",
      technologies: ["ReactJS", "Tailwind CSS", "Netlify (Deployment)", "Framer Motion (Animations)", "EmailJS (Contact Form)"],
      features: [
        "Interactive Service Sections",
        "Clear Call-to-Actions",
        "Mobile-First Responsiveness",
        "Client Testimonials",
        "Integrated Contact Form"
      ],
      mockupImages: [
        { src: verticalMock, alt: "Vertical Solutions Homepage Mockup", size: "large" },
        { src: vertical2, alt: "Vertical Solutions Services Page Mockup", size: "medium" },
        { src: vertical3, alt: "Vertical Solutions Contact Page Mockup", size: "small" },
      ]
    }
  },
  {
    id: 2,
    title: "Anthony's Portfolio",
    description: "A Portfolio website for Anthony Njeru, an auditor, highlighting his professional experience and services.",
    image: tonnie,
    tags: ["React", "Tailwind CSS", "Portfolio", "Personal Branding"],
    link: "https://anthonynjeru.netlify.app/",
    details: {
      about: "Anthony required a personal website to present his auditing expertise and professional background. The site was designed to be clean, professional, and easily updatable, allowing him to showcase his career achievements and client testimonials.",
      technologies: ["ReactJS", "Tailwind CSS", "Formik", "Yup", "Vercel (Deployment)"],
      features: [
        "Dynamic Skills Section",
        "Experience Timeline",
        "Experience Showcase",
        "Amazing Contact Form",
        "Responsive Layout"
      ],
      mockupImages: [
        { src: tonnie, alt: "Anthony's Portfolio Homepage Mockup", size: "large" },
        { src: tonnie2, alt: "Anthony's Portfolio About Page Mockup", size: "medium" },
      ]
    }
  },
  {
    id: 3,
    title: "Leon Munene",
    description: "A Portfolio website for Leon Munene, a Software Developer, showcasing his projects and skills.",
    image: leo,
    tags: ["React", "Tailwind CSS", "Portfolio", "Development"],
    link: "https://leonmunene.netlify.app/",
    details: {
      about: "Leon, a software developer, needed a modern and interactive portfolio to highlight his coding projects and technical skills. The website emphasizes visual appeal and showcases his ability to build engaging user interfaces.",
      technologies: ["ReactJS", "Tailwind CSS", "GSAP (Animations)", "Node.js (for contact form backend)"],
      features: [
        "Interactive Project Gallery",
        "Skill Set Showcase",
        "Contact Form with Backend",
        "Smooth Scroll Animations",
        "Blog Integration"
      ],
      mockupImages: [
        { src: leo, alt: "Leon Munene Portfolio Homepage Mockup", size: "large" },
        { src: leo2, alt: "Leon Munene Projects Page Mockup", size: "medium" },
      ]
    }
  },
  {
    id: 3,
    title: "AI LearnHub",
    description: "AI LearnHub is a platform for users to use AI to generate courses and learn from them.",
    image: learn,
    tags: ["NextJs", "Tailwind CSS", "AI", "UI"],
    link: "https://learn-with-ai-lilac.vercel.app/",
    details: {
      about: "AI LearnHub leverages artificial intelligence to create personalized learning experiences. Users can generate custom courses based on their interests and skill levels, making education more accessible and tailored.",
      technologies: ["NextJS", "Tailwind CSS", "Shadcdn", "Node.js"],
      features: [
        "AI Course Generation",
        "User-Friendly Interface",
        "Personalized Learning Paths",
        "Interactive Learning Modules",
        "Responsive Design"
      ],
      mockupImages: [
        { src: learn, alt: "AI LearnHub Homepage Mockup", size: "large" },
        { src: learn2, alt: "AI LearnHub Course Page Mockup", size: "medium" },
      ]
    }
  },
  {
    id: 4,
    title: "Dennis Miring'u",
    description: "A portfolio website for Dennis Miring'u, a Software Developer, featuring his work and contact information.",
    image: denno,
    tags: ["React", "CSS", "Portfolio", "Web Development"],
    link: "https://dennismiringu.vercel.app/",
    details: {
      about: "Dennis, another talented software developer, sought a minimalist yet effective portfolio to display his diverse range of projects and provide an easy way for potential clients to get in touch. The design focuses on clarity and direct communication.",
      technologies: ["ReactJS", "CSS Modules", "Vercel (Deployment)", "Headless CMS (for project content)"],
      features: [
        "Clean & Minimalist Design",
        "Project Case Studies",
        "Direct Contact Options",
        "Skills Highlight Section",
        "Performance Optimized"
      ],
      mockupImages: [
        { src: denno, alt: "Dennis Miring'u Portfolio Homepage Mockup", size: "large" },
        { src: denno2, alt: "Dennis Miring'u About Page Mockup", size: "medium" },
      ]
    }
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1, // Stagger project card animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
          Our Work
        </motion.h2>
        <motion.h3
          className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl"
          variants={itemVariants}
        >
          Projects We've Built
        </motion.h3>

        <motion.div
          className="grid w-full grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants} // Use container variants for stagger
          initial="hidden"
          whileInView="visible" // Animate when in view
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;