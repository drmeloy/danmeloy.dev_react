import React, { useState, useRef } from 'react';
import styles from './Hamburger.css';
import Scroll from 'react-scroll';
const Link = Scroll.Link;
import Burger from 'react-css-burger';

export default function Hamburger(){
  const [open, setOpen] = useState(false);
  const sidebar = useRef();

  const clickMenu = () => {
    console.log(sidebar.classList);
    
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
          marginTop={0}
          marginLeft={0}
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
          <img className={styles.inactive} src='../../../public/assets/home.png'></img>
          <img className={styles.active} src='../../../public/assets/home_active.png'></img>
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
          <img className={styles.inactive} src='../../../public/assets/about.png'></img>
          <img className={styles.active} src='../../../public/assets/about_active.png'></img>
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
          <img className={styles.inactive} src='../../../public/assets/work.png'></img>
          <img className={styles.active} src='../../../public/assets/work_active.png'></img>
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
          <img className={styles.inactive} src='../../../public/assets/background.png'></img>
          <img className={styles.active} src='../../../public/assets/background_active.png'></img>
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
          <img className={styles.inactive} src='../../../public/assets/contact.png'></img>
          <img className={styles.active} src='../../../public/assets/contact_active.png'></img>
          <p>Contact</p>
        </Link>
      </nav>
        : ''}
    </>
  );
}
