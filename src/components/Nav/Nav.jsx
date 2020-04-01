import React, { useRef } from 'react';
import styles from './Nav.css';
import Scroll from 'react-scroll';
const Link = Scroll.Link;
import home_icon from '../../../public/assets/home.png';
import home_active_icon from '../../../public/assets/home_active.png';
import about_icon from '../../../public/assets/about.png';
import about_active_icon from '../../../public/assets/about_active.png';
import work_icon from '../../../public/assets/work.png';
import work_active_icon from '../../../public/assets/work_active.png';
import background_icon from '../../../public/assets/background.png';
import background_active_icon from '../../../public/assets/background_active.png';
import contact_icon from '../../../public/assets/contact.png';
import contact_active_icon from '../../../public/assets/contact_active.png';

export default function Nav(refProp){

  return (
    <nav className={styles.Nav}>
      <Link
        to='Home'
        spy={true}
        smooth={true}
        duration={800}
        className={styles.Link}
        activeClass={styles.Active}>
        <img className={styles.inactive} src={home_icon} alt='home icon'></img>
        <img className={styles.active} src={home_active_icon} alt='home active icon'></img>
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
        <img className={styles.inactive} src={about_icon} alt='about icon'></img>
        <img className={styles.active} src={about_active_icon} alt='about active icon'></img>
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
        <img className={styles.inactive} src={work_icon} alt='work icon'></img>
        <img className={styles.active} src={work_active_icon} alt='work active icon'></img>
        <p>Work</p>
      </Link>
      <button onClick={() => window.scrollTo(0, refProp.current.offsetTop)}>Hi</button>
      <Link
        to='Background'
        spy={true}
        hashSpy={true}
        smooth={true}
        duration={800}
        offset={4}
        className={styles.Link}
        activeClass={styles.Active}>
        <img className={styles.inactive} src={background_icon} alt='background icon'></img>
        <img className={styles.active} src={background_active_icon} alt='background active icon'></img>
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
        <img className={styles.inactive} src={contact_icon} alt='contact icon'></img>
        <img className={styles.active} src={contact_active_icon} alt='contact active icon'></img>
        <p>Contact</p>
      </Link>
    </nav>
  );
}
