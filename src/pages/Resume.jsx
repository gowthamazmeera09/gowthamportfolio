import React from 'react'
import resume from '../assets/AZMEERA GOWTHAM RESUME FOR PORTFOLIO.pdf';

function Resume() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <a
        href={resume}
        download="AZMEERA GOWTHAMS RESUME"
        className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-t from-blue-600 to-black text-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center"
      >
        Download Resume
      </a>
    </div>
  )
}

export default Resume;