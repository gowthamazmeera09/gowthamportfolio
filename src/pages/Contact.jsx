import React from "react";
import { FaFacebook, FaInstagram, FaWhatsappSquare, FaGithub, FaMailBulk, FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Contact = () => {
  return (
    <div className="flex flex-wrap items-center justify-center h-screen">
      <div className="flex flex-wrap md:flex-nowrap gap-4 mt-6 justify-center md:justify-start text-6xl">
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
      <div>
        
      </div>
    </div>
  );
};

export default Contact;
