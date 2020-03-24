import React from 'react';
import styles from './Work.css';

export default function Work(){
  return (
    <>
      <section className={styles.Work}>
        <span>Selected projects:</span>
        {/* KiT */}
        <div className={styles.Portfolio}>
          <img src='../../../public/assets/kit.png' />
          <div>
            <h1>KiT: Keeping In Touch</h1>
            <p>A progressive web app for setting, tracking, and meeting communication goals. User can input contacts, set communication goals, receive push notification reminders, and view communication logs. Contacts are automatically sorted and styled based on proximity to communcation deadline.</p>
            <p>Built with:
              <img src='../../../public/assets/react.png' alt='react icon'/>
              <img src='../../../public/assets/redux.png' alt='redux icon'/>
              <img src='../../../public/assets/mongodb.png' alt='mongodb icon'/>
              <img src='../../../public/assets/node.png' alt='node icon'/>
              <img src='../../../public/assets/css.png' alt='css icon'/>
              <p>View on:
                <a href='https://friendlier-staging.netlify.com/login' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/webpage.png' alt='webpage icon'/></a>
                <a href='https://github.com/band-m' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/github.png' alt='github icon'/></a></p>
            </p>
          </div>
        </div>

        {/* Knowoncology */}
        <div className={styles.Portfolio}>
          <img src='../../../public/assets/know.png' />
          <div>
            <h1>Knowoncology</h1>
            <p>A client-driven backend migration for a naturopathic cancer research non-profit database <a href='https://www.knowoncology.org/' target='_blank' rel='noopener noreferrer'>(www.knowoncology.org)</a> built with MongoDB, resulting in 10x faster search speed and more reliable search results.</p>
            <p>Built with:
              <img src='../../../public/assets/mongodb.png' alt='mongodb icon'/>
              <img src='../../../public/assets/node.png' alt='node icon'/>
              <img src='../../../public/assets/js.png' alt='javascript icon'/>
              <img src='../../../public/assets/css.png' alt='css icon'/>
              <p>View on:
                <a href='https://knowoncology.herokuapp.com' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/webpage.png' alt='webpage icon'/></a>
                <a href='https://github.com/kNOWOncology/knowoncology/' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/github.png' alt='github icon'/></a></p>
            </p>
          </div>
        </div>

        {/* Treks n Trails */}
        <div className={styles.Portfolio}>
          <img src='../../../public/assets/treksntrails.png' />
          <div>
            <h1>Treks n&apos; Trails</h1>
            <p>Hiking and camping tool that munges data from five different APIs to generate a list of hiking trails, campgrounds, weather, and directions from a current or specified location. Hikes can be filtered by difficulty and length and a user can favorite a hike for later reference.</p>
            <p>Built with:
              <img src='../../../public/assets/postgres.png' alt='postgres icon'/>
              <img src='../../../public/assets/node.png' alt='node icon'/>
              <img src='../../../public/assets/js.png' alt='javascript icon'/>
              <img src='../../../public/assets/css.png' alt='css icon'/>
              <p>View on:
                <a href='https://treksntrails.herokuapp.com' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/webpage.png' alt='webpage icon'/></a>
                <a href='https://github.com/Plant-Parenthood/treks-n-tents' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/github.png' alt='github icon'/></a></p>
            </p>
          </div>
        </div>

        {/* Band Search */}
        <div className={styles.Portfolio}>
          <img src='../../../public/assets/bandsearch.png' />
          <div>
            <h1>Band Search</h1>
            <p>Single page application to search musical artists, view discographies, examine albums, and get song lyrics</p>
            <p>
              Built with:
              <img src='../../../public/assets/react.png' alt='react icon'/>
              <img src='../../../public/assets/js.png' alt='javascript icon'/>
              <img src='../../../public/assets/css.png' alt='css icon'/>
              <p>View on:
                <a href='https://drmeloy.github.io/Artist-Search/' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/webpage.png' alt='webpage icon'/></a>
                <a href='https://github.com/drmeloy/Artist-Search' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/github.png' alt='github icon'/></a></p>
            </p>
          </div>
        </div>

        {/* Address Book */}
        <div className={styles.Portfolio}>
          <img src='../../../public/assets/addressbook.png' />
          <div>
            <h1>Address Book</h1>
            <p>Full-stack CRUD application that allows a user to input, save, view, edit, and delete their contacts. User authentication ensures privacy of contact information.</p>
            <p>Built with:
              <img src='../../../public/assets/mongodb.png' alt='mongodb icon'/>
              <img src='../../../public/assets/node.png' alt='node icon'/>
              <img src='../../../public/assets/js.png' alt='javascript icon'/>
              <img src='../../../public/assets/css.png' alt='css icon'/>
              <p>View on:
                <a href='https://alchemyaddressesbook.herokuapp.com' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/webpage.png' alt='webpage icon'/></a>
                <a href='https://github.com/drmeloy/lab-15-address-book' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/github.png' alt='github icon'/></a></p>
            </p>
          </div>
        </div>

        {/* DREAMy */}
        <div className={styles.Portfolio}>
          <img src='../../../public/assets/dreamy.png' />
          <div>
            <h1>DREAMy</h1>
            <p>Postman clone with trippy aesthetics. A user can hit any REST API endpoint with the GET, POST, PUT, PATCH, and DELETE methods, as well as add customized authentication headers. History is logged, viewable, and revistable.</p>
            <p>Built with:
              <img src='../../../public/assets/react.png' alt='react icon'/>
              <img src='../../../public/assets/js.png' alt='javascript icon'/>
              <img src='../../../public/assets/css.png' alt='css icon'/>
              <p>View on:
                <a href='https://drmeloy.github.io/lab-28-RESTy/' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/webpage.png' alt='webpage icon'/></a>
                <a href='https://github.com/drmeloy/lab-28-RESTy/' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/github.png' alt='github icon'/></a></p>
            </p>
          </div>
        </div>

        {/* Github Viewer */}
        <div className={styles.Portfolio}>
          <img src='../../../public/assets/githubviewer.png' />
          <div>
            <h1>Github Viewer</h1>
            <p>Application used to view Github profiles and their repositories, pull requests, and issues in one convenient space. Hits the Github API and utilizes Redux for state management.</p>
            <p>Built with:
              <img src='../../../public/assets/react.png' alt='react icon'/>
              <img src='../../../public/assets/redux.png' alt='redux icon'/>
              <img src='../../../public/assets/js.png' alt='javascript icon'/>
              <img src='../../../public/assets/css.png' alt='css icon'/>
              <p>View on:
                <a href='https://drmeloy.github.io/lab-40-github-viewer/' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/webpage.png' alt='webpage icon'/></a>
                <a href='https://github.com/drmeloy/lab-40-github-viewer/' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/github.png' alt='github icon'/></a></p>
            </p>
          </div>
        </div>

        {/* Quixx */}
        <div className={styles.Portfolio}>
          <img src='../../../public/assets/quixx.png' />
          <div>
            <h1>Qwixx</h1>
            <p>A mobile-responsive JavaScript implementation of the popular Qwixx dice game <a href='https://gamewright.com/product/Qwixx' target='_blank' rel='noopener noreferrer'>(https://gamewright.com/product/Qwixx)</a> that speeds gameplay and doesn&apos;t rely on paper scorecards. Developed with face-to-face multiplayer in mind with each player&apos;s device acting as their scorecard.</p>
            <p>Built with: 
              <img src='../../../public/assets/js.png' alt='javascript icon'/>
              <img src='../../../public/assets/html.png' alt='html icon'/>
              <img src='../../../public/assets/css.png' alt='css icon'/>
              <p>View on:
                <a href='https://i-16.github.io/qwixx/' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/webpage.png' alt='webpage icon'/></a>
                <a href='https://github.com/I-16/qwixx' target='_blank' rel='noopener noreferrer'><img src='../../../public/assets/github.png' alt='github icon'/></a></p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
