import React from 'react';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import About from './About/About';
import Work from './Work/Work';
import Background from './Background/Background';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Work />
      <Background />
      <Contact />
      <Footer />
    </>
  );
}
