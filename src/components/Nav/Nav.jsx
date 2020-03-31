import React from 'react';
import styles from './Nav.css';
import Scroll from 'react-scroll';
const Link = Scroll.Link;

export default function Nav(){
  return (
    <nav className={styles.Nav}>
      <Link
        to='Home'
        spy={true}
        smooth={true}
        duration={800}
        className={styles.Link}
        activeClass={styles.Active}>
        <img className={styles.inactive} src='/public/assets/home.png'></img>
        <img className={styles.active} src='/public/assets/home_active.png'></img>
        <p>Home</p>
      </Link>
      <Link
        to='About'
        spy={true}
        hashSpy={true}
        smooth={true}
        duration={800}
        offset={1}
        className={styles.Link}
        activeClass={styles.Active}>
        <img className={styles.inactive} src='/public/assets/about.png'></img>
        <img className={styles.active} src='/public/assets/about_active.png'></img>
        <p>About</p>
      </Link>
      <Link
        to='Work'
        spy={true}
        hashSpy={true}
        smooth={true}
        duration={800}
        offset={4}
        className={styles.Link}
        activeClass={styles.Active}>
        <img className={styles.inactive} src='/public/assets/work.png'></img>
        <img className={styles.active} src='/public/assets/work_active.png'></img>
        <p>Work</p>
      </Link>
      <Link
        to='Background'
        spy={true}
        hashSpy={true}
        smooth={true}
        duration={800}
        offset={4}
        className={styles.Link}
        activeClass={styles.Active}>
        <img className={styles.inactive} src='/public/assets/background.png'></img>
        <img className={styles.active} src='/public/assets/background_active.png'></img>
        <p>Background</p>
      </Link>
      <Link
        to='Contact'
        spy={true}
        hashSpy={true}
        smooth={true}
        duration={800}
        offset={6}
        className={styles.Link}
        activeClass={styles.Active}>
        <img className={styles.inactive} src='/public/assets/contact.png'></img>
        <img className={styles.active} src='/public/assets/contact_active.png'></img>
        <p>Contact</p>
      </Link>
    </nav>
  );
}
