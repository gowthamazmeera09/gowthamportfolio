import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import agm from '../assets/gmm.png';
import Aboutme from './Aboutme';
import Skills from './Skills';
import resume from '../assets/AZMEERA GOWTHAM RESUME FOR PORTFOLIO.pdf';

import { FaFacebook, FaInstagram, FaWhatsappSquare, FaGithub, FaMailBulk, FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import Projects from './Projects';

function Home() {
  return (
    <div className=" text-white min-h-screen w-full">
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

            {/* Social Icons */}
            <div className="flex flex-wrap md:flex-nowrap gap-4 mt-6 justify-center md:justify-start text-3xl">
              <a href="https://www.facebook.com/azmeera.gowtham.35" target="_blank" rel="noopener noreferrer"
                className="hover:text-blue-600 transition-transform transform hover:scale-110">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/gowthamazmeera/" target="_blank" rel="noopener noreferrer"
                className="hover:text-pink-500 transition-transform transform hover:scale-110">
                <FaInstagram />
              </a>
              <a href="https://wa.me/916303497101" target="_blank" rel="noopener noreferrer"
                className="hover:text-green-500 transition-transform transform hover:scale-110">
                <FaWhatsappSquare />
              </a>
              <a href="https://github.com/gowthamazmeera09" target="_blank" rel="noopener noreferrer"
                className="hover:text-gray-300 transition-transform transform hover:scale-110">
                <FaGithub />
              </a>
              <a href="mailto:gowthamazmeera@gmail.com"
                className="hover:text-red-500 transition-transform transform hover:scale-110">
                <FaMailBulk />
              </a>
              <a href="https://www.linkedin.com/in/azmeera-gowtham-74983b272/" target="_blank" rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform transform hover:scale-110">
                <FaLinkedin />
              </a>
              <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-messaging--messaging-webapp" target="_blank" rel="noopener noreferrer"
                className="hover:text-indigo-500 transition-transform transform hover:scale-110">
                <SiIndeed />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center mt-8">
              <button className="px-8 py-3 sm:px-10 sm:py-4 text-white bg-gradient-to-b from-blue-600 to-black rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                Contact Me
              </button>

              <a
                href={resume}
                download="AZMEERA GOWTHAMS RESUME"
                className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-t from-blue-600 to-black text-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center"
              >
                Download Resume
              </a>
            </div>

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

      {/* About Me Section */}
      <div className="mt-36 px-4 md:px-16">
        <Aboutme />
      </div>

      {/* Skills Section */}
      <div className="mt-16 px-4 md:px-16">
        <Skills />
      </div>

      <div className="mt-16 px-4 md:px-16">
        <Projects />
      </div>
    </div>
  );
}

export default Home;
