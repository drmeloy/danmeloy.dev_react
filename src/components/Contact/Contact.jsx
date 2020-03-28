import React from 'react';
import styles from './Contact.css';
import { Element } from 'react-scroll';

export default function Contact(){
  return (
    <>
      <Element id='Background' name='Background'>
        <section className={styles.Contact}>
          <p>I am currently available for full-time and contact work. The best way to reach me is by email or text message. Please feel free to reach out!</p>
        </section>
        <p>Phone: (503)-704-2278</p>
        <p>Email: drmeloy@gmail.com</p>
        <p>Github: <a href='https://github.com/drmeloy' target='_blank' rel='noopener noreferrer'>/drmeloy</a></p>
        <p>LinkdIn: <a href='https://www.linkedin.com/in/dan-meloy/' target='_blank' rel='noopener noreferrer'>/in/drmeloy</a></p>
        <p>Twitter: <a href='https://twitter.com/DevvyDan' target='_blank' rel='noopener noreferrer'>/DevvyDan</a></p>
      </Element>
    </>
  );
}
