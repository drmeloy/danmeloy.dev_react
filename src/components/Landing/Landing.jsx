import React from 'react';
import styles from './Landing.css';

export default function Landing(){
  return (
    <section className={styles.Landing}>
      <h2 className='animated fadeInDown'>Modern development</h2>
      <p className='animated fadeInDown'>by</p>
      <h1 className='animated fadeInDown'>Dan Meloy</h1>
      <span className='animated fadeIn'>Full-stack digital solutions</span>
    </section>
  );
}
