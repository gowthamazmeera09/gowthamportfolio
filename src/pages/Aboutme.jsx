import React, { useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

function Aboutme() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const roles = [
    'Web Developer',
    'React Developer',
    'Backend Developer',
    'Full Stack Developer'
  ];

  return (
    <div className="min-h-screen px-6 py-24 text-white">
      <div ref={ref} className="flex flex-col items-center justify-center max-w-6xl mx-auto">
        <AnimatePresence>
          {isInView && (
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mb-16 px-4"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-blue-500">About Me</h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I'm a passionate software developer skilled in JavaScript, React, Node.js, Express, and MongoDB.
                I love building fast, scalable, and user-friendly applications that solve real-world problems with elegant design and performance.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 w-full">
          {isInView &&
            roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="glass-card p-6 rounded-2xl text-center text-lg font-semibold backdrop-blur-md bg-white/10 border border-white/20 hover:scale-105 transition duration-300"
              >
                {role}
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
