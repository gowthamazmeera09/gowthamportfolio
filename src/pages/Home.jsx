import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import agm from '../assets/gmm.png';
import Aboutme from './Aboutme';
import Skills from './Skills';

function Home() {
  return (
    <div className=" text-white">
      <div className="flex items-center justify-center px-4 md:px-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-16 mt-20">

          {/* Text Section with animation */}
          <motion.div
            className="text-center md:text-left space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Hi.., I'm <span className="text-blue-500">GOWTHAM</span>
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-300 font-light">I am a</h3>
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                2000,
                'React Developer',
                2000,
                'Photo Editor',
                2000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-blue-400 text-2xl md:text-4xl font-extrabold"
            />
          </motion.div>

          {/* Image Section with animation */}
          <motion.div
            className="w-full md:w-[400px] lg:w-[450px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <img
              src={agm}
              alt="Gowtham"
              className="rounded-3xl  w-full h-auto object-cover "
            />
          </motion.div>

        </div>
      </div>

      <div className="mt-32">
        <Aboutme />
      </div>
      
      <div>
        <Skills />
      </div>
    </div>
  );
}

export default Home;
