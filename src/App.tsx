import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import Programs from './components/Programs';
import Faculty from './components/Faculty';
import Achievements from './components/Achievements';
import Events from './components/Events';
import Admission from './components/Admission';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <main>
        <Hero />
        <News />
        <Programs />
        <Faculty />
        <Achievements />
        <Events />
        <Admission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;