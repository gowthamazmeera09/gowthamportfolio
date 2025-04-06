import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence, useInView } from 'framer-motion';

import html from '../assets/other/html.png';
import css from '../assets/other/css.png';
import javascript from '../assets/other/javascript.png';
import react from '../assets/other/reactjs.png';
import nodejs from '../assets/other/nodejs.png';
import mongodb from '../assets/other/mongodb.png';
import express from '../assets/other/expressjs.png';
import tailwind from '../assets/other/tailwind.png';
import git from '../assets/other/git.png';
import github from '../assets/other/github.png';

const skillIcons = [
  { src: html, alt: 'HTML', name:'HTML5' },
  { src: css, alt: 'CSS', name:'CSS3' },
  { src: javascript, alt: 'JavaScript', name:'javascript' },
  { src: react, alt: 'React', name:'Reactjs' },
  { src: mongodb, alt: 'MongoDB' , name:'mongoDB'},
  { src: nodejs, alt: 'Node.js', name:'nodejs' },
  { src: express, alt: 'Express.js', name:'Expressjs' },
  { src: tailwind, alt: 'Tailwind CSS', name:'TailwindCSS' },
  { src: git, alt: 'git', name:'git' },
  { src: github, alt: 'github', name:'github' },
];

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <div
      ref={ref}
      className="text-white flex items-center justify-center min-h-screen px-4"
    >
      <AnimatePresence>
        {isInView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col md:flex-row items-center justify-center gap-16"
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-md text-center md:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
              <h2 className="text-5xl font-bold mb-4 text-blue-400">Skills</h2>
              </h2>
              <p className="text-lg text-gray-300">
                I have strong proficiency in front-end and back-end technologies including JavaScript, React, Node.js, Express, and MongoDB. I also enjoy UI/UX design and photo editing.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {skillIcons.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="bg-gray-800 p-4 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-blue-500/50"
                >
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="w-20 h-20 object-contain"
                  />
                  <p>{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Skills;
