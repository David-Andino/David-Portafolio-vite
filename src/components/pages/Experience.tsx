import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon, CodeIcon } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software de Microservicios – Gestión Empresarial Tabacalera",
      company: "Sabor del Mundo Tabacos S de RL de C.V.",
      location: "El Paraíso, El Paraíso",
      duration: "May 2024 - May 2025",
      description: "Diseñé e implementé un sistema empresarial basado en arquitectura de microservicios, compuesto por tres módulos independientes pero complementarios: Gestión de Tabaco, Gestión de Empleados y Gestión de Usuarios. Cada sistema fue desarrollado como una aplicación individual, con su propia base de datos separada, lo que permite una mayor escalabilidad, seguridad y mantenimiento modular. El sistema completo es totalmente responsive, adaptándose fluidamente a dispositivos móviles, tabletas y PC, ofreciendo una experiencia de usuario clara, funcional y adaptable según el rol o área de trabajo.",
      icon: <CodeIcon className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "Bootstrap", "Git", "GitHub", "Docker" ],
    },
   {
      title: "Gestor de Inventario y Ventas",
      company: "Mercadito La Reforma",
      location: "Danlí, El Paraíso",
      duration: "May 2023 - Ago 2023",
      description: "Aplicacion de escritorio enfocada al manejo del inventario y ventas, con un apartado de gráficos que muestra las ventas diarias, semanales y mensuales asi como el top de productos más vendidos y la caja con mas ventas, con gestor de stock y roles de usuario (Administrador y Empleado) compatible con lector de código de barras.",
      icon: <CodeIcon className="w-6 h-6" />,
      skills: ["C#", "My Sql", ".Net framework"],
    },
    {
      title: "Generador de Reportes y Gestor de movimiento del Mercado de criptomonedas",
      company: "Wash-Nyc y Algomango",
      location: "Remoto",
      duration: "Feb 2022 - May 2022",
      description:
        "Se desarrollarón Aplicaciones de Monitoreo del bot Mediante un Dashboard, Mensajes automatizados en Telegram y un generador de documentos de Excel.",
      icon: <BriefcaseIcon className="w-6 h-6" />,
      skills: ["C#", "Firebase", ".Net Framework", "Node.js"],
    },
    {
      title: "Bot trading",
      company: "Wash-Nyc",
      location: "Remoto",
      duration: "2021 - 2022",
      description:
        "desarrollo de un bot de trading utilizando Node.js, C#, Firebase.",
      icon: <CodeIcon className="w-6 h-6" />,
      skills: ["Firebase", "C#", ".Net Framework", "Node js", "Alpaca", "Binance", "Kucoin", "CryptoExchange.Net"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="w-full max-w-6xl mx-auto p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 rounded-xl shadow-lg mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        variants={titleVariants}
      >
        Experiencia Laboral
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 border-none">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full"
                >
                  {exp.icon}
                </motion.div>
                <div className="flex-grow">
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {exp.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.company} | {exp.location}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="mt-2 sm:mt-0">
                  {exp.duration}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="outline"
                        className="bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
