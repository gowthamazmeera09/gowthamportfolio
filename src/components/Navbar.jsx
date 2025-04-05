import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <h1 className="text-3xl md:text-5xl font-bold text-white font-serif relative inline-block">
            <span className="relative z-10 font-extrabold">Portfolio</span>
            <span className="absolute left-0 bottom-0 w-full h-5 bg-blue-500 z-0 -skew-x-12"></span>
        </h1>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium text-gray-700 no-underline">
          <Link className="hover:text-blue-600 transition" to="/">Home</Link>
          <Link className="hover:text-blue-600 transition" to="/About">About Me</Link>
          <Link className="hover:text-blue-600 transition" to="/skills">Skills</Link>
          <Link className="hover:text-blue-600 transition" to="/resume">Resume</Link>
          <Link className="hover:text-blue-600 transition" to="/Contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-600 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner px-6 py-4 flex flex-col space-y-4 text-center text-gray-700 font-medium transition-all duration-300 ease-in-out">
          <Link to="/" onClick={toggleMenu} className="hover:text-blue-600">Home</Link>
          <Link to="/About" onClick={toggleMenu} className="hover:text-blue-600">About Me</Link>
          <Link to="/skills" onClick={toggleMenu} className="hover:text-blue-600">Skills</Link>
          <Link to="/resume" onClick={toggleMenu} className="hover:text-blue-600">Resume</Link>
          <Link to="/Contact" onClick={toggleMenu} className="hover:text-blue-600">Contact</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
