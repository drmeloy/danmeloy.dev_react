import React from 'react';
import styles from './Contact.css';
import { Element } from 'react-scroll';

export default function Contact(){
  return (
    <>
      <Element id='Contact' name='Contact'>
        <section className={styles.Contact}>
          <p className={styles.Message}>I am currently available for full-time and contract work.</p>
          <div className={styles.Info}>
            <p><span>Phone:</span> (503)-704-2278</p>
            <p><span>Email:</span> drmeloy@gmail.com</p>
            <p><span>Github:</span> <a href='https://github.com/drmeloy' target='_blank' rel='noopener noreferrer'>/drmeloy</a></p>
            <p><span>LinkdIn:</span> <a href='https://www.linkedin.com/in/dan-meloy/' target='_blank' rel='noopener noreferrer'>/in/drmeloy</a></p>
            <p><span>Twitter:</span> <a href='https://twitter.com/DevvyDan' target='_blank' rel='noopener noreferrer'>/DevvyDan</a></p>
          </div>
        </section>
      </Element>
    </>
  );
}
