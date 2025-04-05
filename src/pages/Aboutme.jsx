import React, { useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

function Aboutme() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const roles = ['Web Developer', 'React Developer', 'Backend Developer', 'Full Stack Developer'];

  return (
    <div className="min-h-screen px-4 py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div ref={ref} className="flex flex-col items-center justify-center">
        <AnimatePresence>
          {isInView && (
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mb-14 px-4"
            >
              <h3 className="text-4xl font-bold mb-4 text-blue-400">About Me</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate software developer skilled in JavaScript, React, Node.js, Express, and MongoDB.
                I enjoy building fast, scalable, and user-friendly applications that solve real-world problems.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile view: show one by one */}
        <div className="flex flex-col sm:hidden gap-6 mt-8 px-6 w-full">
          {isInView &&
            roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.5, duration: 0.6 }}
                className="bg-gradient-to-tr from-blue-800 to-blue-600 rounded-xl shadow-xl p-6 flex items-center justify-center text-xl font-semibold text-white h-40 hover:scale-105 transition-transform duration-300"
              >
                {role}
              </motion.div>
            ))}
        </div>

        {/* Desktop view: grid layout */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-10 mt-8 px-6 w-full">
          {isInView &&
            roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-gradient-to-tr from-blue-800 to-blue-600 rounded-xl shadow-xl p-6 flex items-center justify-center text-xl font-semibold text-white h-40 hover:scale-105 transition-transform duration-300"
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
