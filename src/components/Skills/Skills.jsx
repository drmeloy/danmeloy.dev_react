import React from 'react';
import styles from './Skills.css';

export default function Skills(){
  return (
    <>
      <section className={styles.Skills}>
        <p>Technologies I currently use:</p>
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
            <img src='../../../public/assets/jest.png' alt='jest icon'/>
            <br/>Jest
          </p>
          <p>
            <img src='../../../public/assets/shell.png' alt='shell icon'/>
            <br/>Shell
          </p>
        </div>
        <br/>
        <p>Technologies I am currently learning:</p>
        <div className={styles.Icons}>
          <p>
            <img src='../../../public/assets/graphql.png' alt='graphql icon'/>
            <br/>GraphQL
          </p>
          <p>
            <img src='../../../public/assets/typescript.png' alt='typescript icon'/>
            <br/>Typescript
          </p>
        </div>
      </section>
    </>
  );
}
