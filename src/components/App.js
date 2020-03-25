import React from 'react';
import Landing from './Landing/Landing';
import Nav from './Nav/Nav';
import About from './About/About';
import Work from './Work/Work';
import Background from './Background/Background';

export default function App() {
  return (
    <>
      <Nav />
      <Landing />
      <About />
      <Work />
      <Background />
    </>
  );
}
