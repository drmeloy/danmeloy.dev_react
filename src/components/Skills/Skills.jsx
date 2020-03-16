import React from 'react';
import styles from './Skills.css';

export default function Skills(){
  return (
    <>
      <section className={styles.Skills}>
        <p>Tools I currently use include:</p>
        <div className={styles.Icons}>
          <p>
            <img src='../../../public/assets/js.png' alt='javascript icon'/>
            <br/>Javascript
          </p>
          <p>
            <img src='../../../public/assets/html.png' alt='html icon'/>
            <br/>HTML
          </p>
          <p>
            <img src='../../../public/assets/css.png' alt='css icon'/>
            <br/>CSS
          </p>
          <p>
            <img src='../../../public/assets/node.png' alt='node icon'/>
            <br/>Node.js
          </p>
          <p>
            <img src='../../../public/assets/react.png' alt='react icon'/>
            <br/>React
          </p>
          <p>
            <img src='../../../public/assets/redux.png' alt='redux icon'/>
            <br/>Redux
          </p>
          <p>
            <img src='../../../public/assets/mongodb.png' alt='mongodb icon'/>
            <br/>MongoDB
          </p>
          <p>
            <img src='../../../public/assets/postgres.png' alt='postgres icon'/>
            <br/>PostgreSQL
          </p>
          <p>
            <img src='../../../public/assets/github.png' alt='github icon'/>
            <br/>Github
          </p>
          <p>
            <img src='../../../public/assets/heroku.png' alt='heroku icon'/>
            <br/>Heroku
          </p>
          <p>
            <img src='../../../public/assets/jest.png' alt='heroku icon'/>
            <br/>Jest
          </p>
        </div>
      </section>
    </>
  );
}
