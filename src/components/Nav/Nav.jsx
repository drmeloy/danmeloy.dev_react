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
        className={styles.Link}
        activeClass='active'>
        <img src='../../../public/assets/home.png'></img>
        <p>Home</p>
      </Link>
      <Link
        to='About'
        spy={true}
        smooth={true}
        duration={800}
        className={styles.Link}
        activeClass='active'>
        <img src='../../../public/assets/about.png'></img>
        <p>About</p>
      </Link>
      <Link
        to='Work'
        spy={true}
        smooth={true}
        duration={800}
        className={styles.Link}
        activeClass='active'>
        <img src='../../../public/assets/work.png'></img>
        <p>Work</p>
      </Link>
      <Link
        to='Background'
        spy={true}
        smooth={true}
        duration={800}
        className={styles.Link}
        activeClass='Active-Background'>
        <img src='../../../public/assets/background.png'></img>
        <p>Background</p>
      </Link>
      <Link
        to='Background'
        spy={true}
        smooth={true}
        duration={800}
        className={styles.Link}
        activeClass='Active-Background'>
        <img src='../../../public/assets/contact.png'></img>
        <p>Contact</p>
      </Link>
    </nav>
  );
}
