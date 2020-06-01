import React from 'react';
import styles from './About.css';
import { Element } from 'react-scroll';
import cropped_headshot from '../../../public/assets/headshot.png';
import headshot from '../../../public/assets/dan.jpg';
import js_icon from '../../../public/assets/js.png';
import html_icon from '../../../public/assets/html.png';
import css_icon from '../../../public/assets/css.png';
import node_icon from '../../../public/assets/node.png';
import react_icon from '../../../public/assets/react.png';
import redux_icon from '../../../public/assets/redux.png';
import mongodb_icon from '../../../public/assets/mongodb.png';
import postgres_icon from '../../../public/assets/postgres.png';
import github_icon from '../../../public/assets/github.png';
import heroku_icon from '../../../public/assets/heroku.png';
import netlify_icon from '../../../public/assets/netlify.png';
import jest_icon from '../../../public/assets/jest.png';
import scala_icon from '../../../public/assets/scala.png';
import graphql_icon from '../../../public/assets/graphql.png';
import typescript_icon from '../../../public/assets/typescript.png';
import sass_icon from '../../../public/assets/sass.png';
import deno_icon from '../../../public/assets/deno.png';
import resume from '../../../public/assets/Dan Meloy Software Engineer Resume.pdf';

export default function About(){
  return (
    <Element id='About' name='About'>
      <section className={styles.About}>
        <img className={styles.CroppedHeadshot} src={cropped_headshot} alt='headshot of dan' />
        <div className={styles.Container}>
          <p><span className={styles.Hello}>Hello! My name is Dan.</span><br/>I&apos;m a full-stack software engineer. I use technical skill and interpersonal connection to create beautiful and innovative digital products. I believe that meaningful relationships lead to positive results. As such, I seek to invest in people as much as in the technologies we use.</p>
          <img className={styles.Headshot} src={headshot} alt='headshot of dan' />
        </div>
        <div className={styles.Resume}>
          <a href={resume} target='_blank' rel='noopener noreferrer'>View my resume here</a>
        </div>
        <div className={styles.Skills}>
          <span>Technologies I currently use:</span>
          <div className={styles.Icons}>
            <p>
              <img src={js_icon} alt='javascript icon'/>
              <br/>Javascript
            </p>
            <p>
              <img src={html_icon} alt='html icon'/>
              <br/>HTML
            </p>
            <p>
              <img src={css_icon} alt='css icon'/>
              <br/>CSS
            </p>
            <p>
              <img src={node_icon} alt='node icon'/>
              <br/>Node.js
            </p>
            <p>
              <img src={react_icon} alt='react icon'/>
              <br/>React
            </p>
            <p>
              <img src={redux_icon} alt='redux icon'/>
              <br/>Redux
            </p>
            <p>
              <img src={mongodb_icon} alt='mongodb icon'/>
              <br/>MongoDB
            </p>
            <p>
              <img src={postgres_icon} alt='postgres icon'/>
              <br/>PostgreSQL
            </p>
            <p>
              <img src={github_icon} alt='github icon'/>
              <br/>Github
            </p>
            <p>
              <img src={heroku_icon} alt='heroku icon'/>
              <br/>Heroku
            </p>
            <p>
              <img src={netlify_icon} alt='netlify icon'/>
              <br/>Netlify
            </p>
            <p>
              <img src={jest_icon} alt='jest icon'/>
              <br/>Jest
            </p>
            <p>
              <img src={scala_icon} alt='scala icon'/>
              <br/>Scala
            </p>
          </div>
          <br/>
          <span>Technologies I am currently learning:</span>
          <div className={styles.Icons}>
            <p>
              <img src={typescript_icon} alt='typescript icon'/>
              <br/>Typescript
            </p>
            <p>
              <img src={deno_icon} alt='deno icon'/>
              <br/>Deno
            </p>
            <p>
              <img src={graphql_icon} alt='graphql icon'/>
              <br/>GraphQL
            </p>
            <p>
              <img src={sass_icon} alt='sass icon'/>
              <br/>Sass
            </p>
          </div>
        </div>

      </section>
    </Element>
  );
}
