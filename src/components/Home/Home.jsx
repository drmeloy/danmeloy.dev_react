import React from 'react';
import styles from './Home.css';
import { Element } from 'react-scroll';

export default function Home(){
  return (
    <Element id='Home' name='Home'>
      <section className={styles.Landing}>
        <h2 className='animated fadeInDown'>Modern development</h2>
        <p className='animated fadeInDown'>by</p>
        <h1 className='animated fadeInDown'>Dan Meloy</h1>
        <span className='animated fadeIn'>Full-stack digital solutions</span>
        <div className='animated fadeIn'>
          <a href='https://github.com/drmeloy' target='_blank' rel='noopener noreferrer'><img src='/public/assets/github_landing.png' alt='github link'></img></a>
          <a href='https://www.linkedin.com/in/dan-meloy/' target='_blank' rel='noopener noreferrer'><img src='/public/assets/linkedin_landing.png' alt='linkedin link'></img></a>
          <a href='https://twitter.com/DevvyDan' target='_blank' rel='noopener noreferrer'><img src='/public/assets/twitter_landing.png' alt='twitter link'></img></a>
          <a href='mailto:drmeloy@gmail.com'><img src='/public/assets/email_landing.png' alt='email link'></img></a>
        </div>
      </section>
    </Element>
  );
}
