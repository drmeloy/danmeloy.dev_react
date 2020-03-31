import React, { useState, useRef } from 'react';
import styles from './Hamburger.css';
import Scroll from 'react-scroll';
const Link = Scroll.Link;
import Burger from 'react-css-burger';
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

export default function Hamburger(){
  const [open, setOpen] = useState(false);
  const sidebar = useRef();

  const clickMenu = () => {
    if(!open){
      setOpen(!open);
    } else {
      sidebar.current.classList.add(styles.SlideOut);
      setTimeout(() => {
        setOpen(!open);
      }, 500);
    }
  };

  return (
    <>
      <div className={styles.BurgerIcon}>
        <Burger 
          onClick={clickMenu}
          active={open}
          burger='emphatic'
          color={'#C0C0C0'}
          scale={.5}
          marginTop={'0'}
          marginLeft={'0'}
        />
      </div>
      {open ? <nav ref={sidebar} className={styles.BurgerNav}>
        <Link
          to='Home'
          spy={true}
          smooth={true}
          duration={800}
          className={styles.Link}
          activeClass={styles.Active}>
          <img className={styles.inactive} src={home_icon} alt='home icon'></img>
          <img className={styles.active} src={home_active_icon} alt='active home icon'></img>
          <p>Home</p>
        </Link>
        <Link
          to='About'
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={800}
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
          className={styles.Link}
          activeClass={styles.Active}>
          <img className={styles.inactive} src={work_icon} alt='work icon'></img>
          <img className={styles.active} src={work_active_icon} alt='work active icon'></img>
          <p>Work</p>
        </Link>
        <Link
          to='Background'
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={800}
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
          className={styles.Link}
          activeClass={styles.Active}>
          <img className={styles.inactive} src={contact_icon} alt='contact icon'></img>
          <img className={styles.active} src={contact_active_icon} alt='contact active icon'></img>
          <p>Contact</p>
        </Link>
      </nav>
        : ''}
    </>
  );
}
