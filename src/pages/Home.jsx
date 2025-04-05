import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import agm from '../assets/gmm.png';
import Aboutme from './Aboutme';
import Skills from './Skills';

function Home() {
  return (
    <div className=" text-white">
      <div className="flex items-center justify-center px-4 md:px-16 pt-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-12">

          {/* Text Section */}
          <motion.div
            className="text-center md:text-left space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
              Hello! I'm <span className="text-blue-500">GOWTHAM</span>
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-400 font-light">I am a</h3>
            <TypeAnimation
              sequence={[
                'MERN Stack Developer', 2000,
                'React Developer', 2000,
                'Photo Editor', 2000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-blue-400 text-2xl md:text-4xl font-extrabold"
            />
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full md:w-[380px] lg:w-[420px] drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <img
              src={agm}
              alt="Gowtham"
              className="rounded-[2rem] w-full h-auto object-cover"
            />
          </motion.div>

        </div>
      </div>

      <div className="mt-36">
        <Aboutme />
      </div>

      <div>
        <Skills />
      </div>
    </div>
  );
}

export default Home;
