import React from 'react';
import styles from './About.css';

export default function About(){
  return (
    <>
      <section className={styles.About}>
        <img className={styles.CroppedHeadshot} src='../../../public/assets/headshot.jfif' alt='headshot of dan' />
        <p>Hello! My name is Dan. I&apos;m a full-stack software engineer. I use technical skill and interpersonal connections to create beautiful and innovative digital products. I believe that meaningful relationships lead to positive results. As such, I seek to invest in people as much as in the technologies we use.</p>
        <img className={styles.Headshot} src='../../../public/assets/dan.jpg' alt='headshot of dan' />
      </section>
    </>
  );
}
