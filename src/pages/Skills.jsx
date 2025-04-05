import React, { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import agm from '../assets/gmm.png';

function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  return (
    <div
      ref={ref}
      className='text-white flex items-center justify-center min-h-screen'
    >
      <AnimatePresence>
        {isInView && (
          <div className='flex flex-col md:flex-row items-center justify-center gap-10'>

            {/* About Me Text */}
            <motion.div
              key="about-text"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center md:text-left'
            >
              <h2 className='text-4xl font-bold mb-4'>About Me</h2>
              <p className='text-lg max-w-md'>
                Hi! I'm a passionate developer who loves building cool things with React and Node.js.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              key="about-img"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 3 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={agm}
                alt="About me"
                className=' w-64 h-64 object-cover'
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Skills;