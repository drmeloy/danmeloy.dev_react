import React from 'react';
import styles from './Nav.css';

export default function Nav(){
  return (
    <section className={styles.Nav}>
      <a>Landing</a>
      <a>About</a>
      <a>Work</a>
      <a>Background</a>
      <a>Contact</a>
    </section>
  );
}
