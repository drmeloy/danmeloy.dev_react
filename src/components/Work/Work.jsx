import React from 'react';
import styles from './Work.css';

export default function Work(){
  return (
    <>
      <section className={styles.Work}>
        <p>Selected projects:</p>
        <div className={styles.Portfolio}>
          <figure>
            <img src='http://placekitten.com/400/300' />
            <figcaption>Knowoncology</figcaption>
          </figure>
          <figure>
            <img src='http://placekitten.com/400/300' />
            <figcaption>KiT</figcaption>
          </figure>
          <figure>
            <img src='http://placekitten.com/400/300' />
            <figcaption>Treks n' Trails</figcaption>
          </figure>
          <figure>
            <img src='http://placekitten.com/400/300' />
            <figcaption>Artist Search</figcaption>
          </figure>
          <figure>
            <img src='http://placekitten.com/400/300' />
            <figcaption>Address Book</figcaption>
          </figure>
          <figure>
            <img src='http://placekitten.com/400/300' />
            <figcaption>DREAMy</figcaption>
          </figure>
          <figure>
            <img src='http://placekitten.com/400/300' />
            <figcaption>Github Viewer</figcaption>
          </figure>
          <figure>
            <img src='http://placekitten.com/400/300' />
            <figcaption>Quixx</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
