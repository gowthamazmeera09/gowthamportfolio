import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="bg-gradient-to-l from-black via-gray-900 to-black min-h-screen">
      <div>
        {/* Header section */}
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<Aboutme />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App; 