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
        duration={1000}
        activeClass='active'>
          Landing
      </Link>
      <a>About</a>
      <a>Work</a>
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
