import React from 'react';
import styles from './Nav.css';
import Scroll from 'react-scroll';
const Link = Scroll.Link;

export default function Nav(){
  return (
    <nav className={styles.Nav}>
      <Link
        to='Landing'
        spy={true}
        smooth={true}
        duration={800}
        activeClass='active'>
          Landing
      </Link>
      <Link
        to='About'
        spy={true}
        smooth={true}
        duration={800}
        activeClass='active'>
          About
      </Link>
      <Link
        to='Work'
        spy={true}
        smooth={true}
        duration={800}
        activeClass='active'>
          Work
      </Link>
      <Link
        to='Background'
        spy={true}
        smooth={true}
        duration={800}
        activeClass='Active-Background'>
          Background
      </Link>
      <a>Contact</a>
    </nav>
  );
}
