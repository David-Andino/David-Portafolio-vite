import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: JSX.Element }[];
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      onClick={() => setIsFlipped((prev) => !prev)}
      className="relative border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden cursor-pointer bg-white dark:bg-gray-800"
    >
      {/* Overlay — hover en desktop, click en móvil */}
      <div
        className={`absolute inset-0 z-10 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 transition-opacity duration-300
          ${isFlipped ? "opacity-100" : "opacity-0"}
          hover:opacity-100`}
      >
        <h3 className="text-xl font-bold text-white mb-3 text-center">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 text-center line-clamp-5">
          {project.description}
        </p>
        <div className="flex space-x-4">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // evita cerrar el overlay al hacer click en el link
              className="text-white hover:text-gray-300 transition-colors p-2"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Imagen */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
      />

      {/* Info inferior */}
      <div className="p-4">
        <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {project.title}
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;