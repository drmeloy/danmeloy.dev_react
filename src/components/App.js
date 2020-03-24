import React from 'react';
import Landing from './Landing/Landing';
import Nav from './Nav/Nav';
import About from './About/About';
import Skills from './Skills/Skills';
import Work from './Work/Work';

export default function App() {
  return (
    <>
      <Nav />
      <Landing />
      <About />
      <Skills />
      <Work />
    </>
  );
}
