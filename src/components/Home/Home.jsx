import React from 'react';
import styles from './Home.css';
import { Element } from 'react-scroll';
import github_landing from '../../../public/assets/github_landing.png';
import linkedin_landing from '../../../public/assets/linkedin_landing.png';
import twitter_landing from '../../../public/assets/twitter_landing.png';
import email_landing from '../../../public/assets/email_landing.png';

export default function Home(){
  return (
    <Element id='Home' name='Home'>
      <section className={styles.Landing}>
        <h2 className='animated fadeInDown'>Modern development</h2>
        <p className='animated fadeInDown'>by</p>
        <h1 className='animated fadeInDown'>Dan Meloy</h1>
        <span className='animated fadeIn'>Full-stack digital solutions</span>
        <div className='animated fadeIn'>
          <a href='https://github.com/drmeloy' target='_blank' rel='noopener noreferrer'><img src={github_landing} alt='github link'></img></a>
          <a href='https://www.linkedin.com/in/dan-meloy/' target='_blank' rel='noopener noreferrer'><img src={linkedin_landing} alt='linkedin link'></img></a>
          <a href='https://twitter.com/DevvyDan' target='_blank' rel='noopener noreferrer'><img src={twitter_landing} alt='twitter link'></img></a>
          <a href='mailto:drmeloy@gmail.com'><img src={email_landing} alt='email link'></img></a>
        </div>
      </section>
    </Element>
  );
}
