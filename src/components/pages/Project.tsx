import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Globe, Github } from "lucide-react";

import GitHubDashboard from "../../assets/projects/GithubDashBoard.png";
import turfImage from "../../assets/projects/landingpage.png";
import foodImage from "../../assets/projects/1__woXdoGspsNHgWXX4syipA.jpg";
import todoImage from "../../assets/projects/estadoserver.png";
import expenseTrackerImage from "../../assets/projects/GestionPW.png";
import Tabaco from "../../assets/projects/gestionTabaco.png";
import Usuarios from "../../assets/projects/usuarios.png";
import Empleados from "../../assets/projects/empleados.png";
import BotTelegram from "../../assets/projects/telegram-bot.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: JSX.Element }[];
  image: string;
}
const projects: Project[] = [
 {
    title: "Dashboard de información de ususarios en Github",
    description:
      "Analiza perfiles de GitHub en tiempo real: repositorios, commits, lenguajes y métricas clave, todo desde una interfaz limpia y rápida.",
    technologies: [
    "React.js",
      "JavaScript",
      "react-dom",
      "CSS",
      "HTML",
      "Vite",
      "lucide-react",
      "recharts",
    ],
    links: [
      {
        type: "Website",
        href: "https://david-andino.github.io/github-dashboard//",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/David-Andino/github-dashboard.git",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: GitHubDashboard,
  },
  {
    title: "Página Inscripción Tecno Fest 2024",
    description:
      "Sitio Web para inscribirse al Evento anual organizado por la carrera Ing. en Sistemas.",
    technologies: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "CSS",
      "HTML",
      "Vite",
      "axios",
      "My Sql",
    ],
    links: [
      {
        type: "Website",
        href: "https://tecno-fest.com/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/UNICAH-ICC-SAP/LandingPageTecnoFest.git",
        icon: <Github className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/UNICAH-ICC-SAP/ApiTecnoFest.git",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: turfImage,
  },
  {
    title: "Gestion Prácticas Web",
    description:
      "Aplicación desarrollada para la gestión de prácticas de los estudiantes de la Universidad Católica de Honduras, Facilitando tanto al Equipo de Administración y alumnos. Apartado de Administración tiene la funcionalidad de crear ternas, agregar docentes, actualizar y eliminar terna, y el apartado de alumno podrá ver la terna a la que pertenece con los docentes asignados al igual de cual será el coordinador de dicha terna.",
    technologies: [
      "React.js",
      "TypeScript",
      "My Sql",
      "Vite",
      "CSS",
      "Node js",
    ],
    links: [
      {
        type: "Website",
        href: "https://github.com/UNICAH-ICC-SAP/GestionPracticasWeb.git",
        icon: <Github className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/UNICAH-ICC-SAP/GestionPracticasApi.git",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: expenseTrackerImage,
  },
  {
    title: "Cargas Academicas Web",
    description:
      "Sistema creado para Crear El horario por periodo de cada carrera, cuenta con diferentes validaciones que evitan el coque de clases, de maestros, aulas y secciones asi como las funciones de crear, actualizar y eliminar clases asigadas.",
    technologies: [
      "React.js",
      "TypeScript",
      "My Sql",
      "Vite",
      "CSS",
      "Node js",
    ],
    links: [
      {
        type: "Website",
        href: "https://github.com/UNICAH-ICC-SAP/CargasAcademicas.git",
        icon: <Github className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/UNICAH-ICC-SAP/GestionPracticasApi.git",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: expenseTrackerImage,
  },
  {
    title: "Api RESTfull",
    description:
      "El backend está construido con Node.js y el framework Express para manejar las solicitudes HTTP. Autenticación: Utiliza JWT (JSON Web Tokens) para la autenticación de los usuarios. Los tokens son generados en el servidor y enviados al cliente tras un login exitoso. Gestión de Usuarios: Rutas para registro de usuarios, login, y manejo de perfiles de usuario. Encriptación de Contraseñas: Las contraseñas se encriptan utilizando bcrypt antes de ser almacenadas en la base de datos. Base de Datos (MongoDB)",
    technologies: [
      "Angular js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "JWT",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/David-Andino/Login-MongoDB-NodeJS-Angular-Express.git",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: foodImage,
  },
  {
    title: "Bot Discord",
    description:
      "ChichicasteBot es un bot desarrollado para interactuar con los usuarios de un servidor de discord.",
    technologies: [
      "JavaScript",
      "SQLite",
      "Discord.js",
      "Node.js",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/David-Andino/Chichicaste.git",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: todoImage,
  },
  {
    title: "Sistema de Gestión de Procesos, Inventario, Ventas y Facturación de Tabaco",
    description:
      "un sistema integral para la gestión del proceso productivo del tabaco en una empresa tabacalera, abarcando el flujo completo desde la recepción del producto crudo hasta su facturación para exportación. El sistema está dividido en módulos por bodega y área administrativa, permitiendo trazabilidad, control de inventario y emisión de reportes.",
    technologies: [
      "JavaScript",
      "MySql",
      "Node js",
      "Express js",
      "HTML5",
      "CSS",
      "Bootstrap",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/David-Andino/Front-Sabor-del-Mundo.git",
        icon: <Github className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/David-Andino/Backend_Tabacalera.git",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: Tabaco,
  },
  {
    title: "Sistema de Gestión de Usuarios y Autenticación",
    description:
      "un sistema de gestión de usuarios con control de accesos y roles personalizados para una empresa tabacalera, como parte de un ecosistema digital más amplio. Este módulo permite crear, editar y eliminar usuarios, asignarles permisos según su área (bodega, finanzas, RRHH, administración) y restringir funcionalidades con base en roles definidos..",
    technologies: [
      "JavaScript",
      "MySql",
      "Node js",
      "Express js",
      "HTML5",
      "CSS",
      "Bootstrap",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/David-Andino/Front-Sabor-del-Mundo.git",
        icon: <Github className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/David-Andino/Login_Backend.git",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: Usuarios,
  },
  {
    title: "Sistema de Gestión de Empleados",
    description:
      "Diseñé e implementé un sistema web para la gestión del personal en una empresa tabacalera, permitiendo el registro de empleados, control de asistencia diaria, emisión de carnets personalizados y generación de reportes administrativos, optimizando así los procesos del área de Recursos Humanos.",
    technologies: [
      "JavaScript",
      "MySql",
      "Node js",
      "Express js",
      "HTML5",
      "CSS",
      "Bootstrap",
      "JsPdf",
      "html2canvas",
      "JsBarcode",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/David-Andino/Front-Sabor-del-Mundo.git",
        icon: <Github className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/David-Andino/Personal_Backend.git",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: Empleados,
  },
  {
    title: "Bot de Telegran para convertir videos de YouTube a MP3 o MP4",
    description:
      "Desarrollé un bot para Telegram que permite convertir videos de YouTube a formatos MP3 (audio) o MP4 (video) mediante comandos simples. El usuario solo necesita enviar un enlace de YouTube y el bot responde con el archivo convertido listo para descargar directamente en Telegram.",
    technologies: [
      "Python",
      "python-telegram-bot",
      "yt-dlp",
      "FFmpeg",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/David-Andino/Telegram-bot-Python.git",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: BotTelegram,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className=" w-full max-w-6xl  ">
      <div className="container mx-auto px-4 ">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
        >
          Mis Proyectos
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
