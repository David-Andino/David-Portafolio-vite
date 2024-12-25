import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-6  bg-white dark:bg-gray-800 rounded-xl shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="md:w-1/3 mb-4 md:mb-0" variants={imageVariants}>
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
            src="/David.jpg"
            alt="David Andino"
            className="w-full h-full object-cover object-left-top"
          />
        </motion.div>
      </motion.div>
      <div className="md:w-2/3 md:pl-6">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center md:text-left"
          variants={itemVariants}
        >
          Acerca de mi
        </motion.h2>
        <motion.p
          className="text-sm md:text-base text-gray-600 dark:text-gray-400 text-center md:text-left mb-4"
          variants={itemVariants}
        >
          Soy un desarrollador apasionado con 4 años de experiencia creando soluciones eficientes y escalables. 
          Tengo experiencia en el desarrollo de aplicaciones web y de escritorio. 
          Me destaco por mi capacidad para resolver problemas, aprender rápidamente y adaptarme a entornos dinámicos.
        </motion.p>
        <motion.p
          className="text-sm md:text-base text-gray-600 dark:text-gray-400 text-center md:text-left"
          variants={itemVariants}
        >
          Busco aportar valor a equipos innovadores en un mercado laboral competitivo, ofreciendo mi compromiso, 
          habilidades técnicas y enfoque en resultados para contribuir al éxito de cada proyecto.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
