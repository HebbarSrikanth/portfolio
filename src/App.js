import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
const App=()=> {
  return (
    <main className='text-gray-400 bg-gray-400 body-font'>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
    </main>
  );
}

export default App
