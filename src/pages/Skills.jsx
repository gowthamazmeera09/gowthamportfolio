import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import agm from '../assets/gmm.png';

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <div ref={ref} className="text-white bg-gray-950 flex items-center justify-center min-h-screen px-4">
      <AnimatePresence>
        {isInView && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-md"
            >
              <h2 className="text-5xl font-bold mb-4 text-blue-400">Skills</h2>
              <p className="text-lg text-gray-300">
                I have strong proficiency in front-end and back-end technologies including JavaScript, React, Node.js, Express, and MongoDB. I also enjoy UI/UX design and photo editing.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={agm}
                alt="Skills"
                className="rounded-2xl w-64 h-64 object-cover shadow-lg border-4 border-blue-500"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Skills;