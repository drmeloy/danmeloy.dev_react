import React from 'react';
import styles from './About.css';
import { Element } from 'react-scroll';

export default function About(){
  return (
    <Element id='About' name='About'>
      <section className={styles.About}>
        <img className={styles.CroppedHeadshot} src='/public/assets/headshot.jfif' alt='headshot of dan' />
        <div className={styles.Container}>
          <p><span className={styles.Hello}>Hello! My name is Dan.</span><br/>I&apos;m a full-stack software engineer. I use technical skill and interpersonal connection to create beautiful and innovative digital products. I believe that meaningful relationships lead to positive results. As such, I seek to invest in people as much as in the technologies we use.</p>
          <img className={styles.Headshot} src='/public/assets/dan.jpg' alt='headshot of dan' />
        </div>
        <div className={styles.Resume}>
          <a href='/public/assets/Dan Meloy Software Engineer Resume.pdf' target='_blank'>View my resume here</a>
        </div>
        <div className={styles.Skills}>
          <span>Technologies I currently use:</span>
          <div className={styles.Icons}>
            <p>
              <img src='/public/assets/js.png' alt='javascript icon'/>
              <br/>Javascript
            </p>
            <p>
              <img src='/public/assets/html.png' alt='html icon'/>
              <br/>HTML
            </p>
            <p>
              <img src='/public/assets/css.png' alt='css icon'/>
              <br/>CSS
            </p>
            <p>
              <img src='/public/assets/node.png' alt='node icon'/>
              <br/>Node.js
            </p>
            <p>
              <img src='/public/assets/react.png' alt='react icon'/>
              <br/>React
            </p>
            <p>
              <img src='/public/assets/redux.png' alt='redux icon'/>
              <br/>Redux
            </p>
            <p>
              <img src='/public/assets/mongodb.png' alt='mongodb icon'/>
              <br/>MongoDB
            </p>
            <p>
              <img src='/public/assets/postgres.png' alt='postgres icon'/>
              <br/>PostgreSQL
            </p>
            <p>
              <img src='/public/assets/github.png' alt='github icon'/>
              <br/>Github
            </p>
            <p>
              <img src='/public/assets/heroku.png' alt='heroku icon'/>
              <br/>Heroku
            </p>
            <p>
              <img src='/public/assets/netlify.png' alt='netlify icon'/>
              <br/>Netlify
            </p>
            <p>
              <img src='/public/assets/jest.png' alt='jest icon'/>
              <br/>Jest
            </p>
            <p>
              <img src='/public/assets/shell.png' alt='shell icon'/>
              <br/>Shell
            </p>
          </div>
          <br/>
          <span>Technologies I am currently learning:</span>
          <div className={styles.Icons}>
            <p>
              <img src='/public/assets/scala.png' alt='scala icon'/>
              <br/>Scala
            </p>
            <p>
              <img src='/public/assets/graphql.png' alt='graphql icon'/>
              <br/>GraphQL
            </p>
            <p>
              <img src='/public/assets/typescript.png' alt='typescript icon'/>
              <br/>Typescript
            </p>
            <p>
              <img src='/public/assets/sass.png' alt='sass icon'/>
              <br/>Sass
            </p>
          </div>
        </div>

      </section>
    </Element>
  );
}
