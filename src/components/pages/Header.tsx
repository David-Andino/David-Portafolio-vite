import React from "react";
import { motion } from "framer-motion";
import BoxReveal from "@/components/magicui/box-reveal";

interface GradientTextProps {
  text: string;
  className?: string;
}

const WordAnimation: React.FC = () => (
  <GradientText
    className="font-display text-center   font-bold tracking-[-0.05em]  text-4xl lg:text-6xl md:p-2"
    text="Hi, I'm Rijo Sebastian"
  />
);

const GradientText: React.FC<GradientTextProps> = ({ text, className }) => (
  <motion.h1
    className={`bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${className}`}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {text}
  </motion.h1>
);

const SubTitle: React.FC = () => (
  <motion.div
    className="w-full text-center mt-4 flex   justify-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <BoxReveal boxColor="#3b82f6" duration={0.5}>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 text-center">
        Full Stack Developer
      </p>
    </BoxReveal>
  </motion.div>
);

 

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 gap-10 py-12  ">
      <div className="text-center my-4">
        <WordAnimation />
        <div className="mt-2 text-center">
          <SubTitle />
        </div>
      </div>
     </div>
  );
};

export default Header;
