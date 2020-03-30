import React, { useState } from 'react';
import styles from './Work.css';
import { Element } from 'react-scroll';

export default function Work2(){
  const [project, setProject] = useState('kit');

  return (
    <Element id='Work' name='Work'>
      <section className={styles.Work}>
        <p>Selected projects:</p>
        <div className={styles.Buttons}>
          <span onMouseOver={() => setProject('kit')} className={project === 'kit' ? styles.ActiveButton : styles.Button}>KiT: Keeping In Touch</span>
          <span onMouseOver={() => setProject('know')} className={project === 'know' ? styles.ActiveButton : styles.Button}>KNOWOncology</span>
          <span onMouseOver={() => setProject('tnt')} className={project === 'tnt' ? styles.ActiveButton : styles.Button}>Treks n&apos; Trails</span>
          <span onMouseOver={() => setProject('band')} className={project === 'band' ? styles.ActiveButton : styles.Button}>Band Search</span>
          <span onMouseOver={() => setProject('address')} className={project === 'address' ? styles.ActiveButton : styles.Button}>Address Book</span>
          <span onMouseOver={() => setProject('dreamy')} className={project === 'dreamy' ? styles.ActiveButton : styles.Button}>DREAMy</span>
          <span onMouseOver={() => setProject('github')} className={project === 'github' ? styles.ActiveButton : styles.Button}>Github Viewer</span>
          <span onMouseOver={() => setProject('qwixx')} className={project === 'qwixx' ? styles.ActiveButton : styles.Button}>Qwixx</span>
        </div>
        { project === 'kit' ? 
          <div className={styles.Project}>
            <img className={styles.Screenshot} src='../../../public/assets/kit.png' />
            <div>
              <h1>KiT: Keeping In Touch</h1>
              <p>A progressive web app for setting, tracking, and meeting communication goals. User can input contacts, set communication goals, receive push notification reminders, and view communication logs. Contacts are automatically sorted and styled based on proximity to communcation deadline.</p>
              <div className={styles.Icons}><p>Built with:</p>
                <figure>
                  <img src='../../../public/assets/react.png' alt='react icon'/>
                  <figcaption>React</figcaption>
                </figure>
                <figure>
                  <img src='../../../public/assets/redux.png' alt='redux icon'/>
                  <figcaption>Redux</figcaption>
                </figure>
                <figure>
                  <img src='../../../public/assets/mongodb.png' alt='mongodb icon'/>
                  <figcaption>MongoDB</figcaption>
                </figure>
                <figure>
                  <img src='../../../public/assets/node.png' alt='node icon'/>
                  <figcaption>NodeJS</figcaption>
                </figure>
                <figure>
                  <img src='../../../public/assets/css.png' alt='css icon'/>
                  <figcaption>CSS</figcaption>
                </figure>
              </div>
              <div className={styles.Icons}><p>View on:</p>
                <a href='https://friendlier-staging.netlify.com/login' target='_blank' rel='noopener noreferrer'>
                  <figure className={styles.Link}>
                    <img src='../../../public/assets/webpage.png' alt='webpage icon'/>
                    <figcaption>WWW</figcaption>
                  </figure>
                </a>
                <a href='https://github.com/band-m' target='_blank' rel='noopener noreferrer'>
                  <figure className={styles.Link}>
                    <img src='../../../public/assets/github.png' alt='github icon'/>
                    <figcaption>Github</figcaption>
                  </figure>
                </a>
              </div>
            </div>
          </div>

          : project === 'know' ?
            <div className={styles.Project}>
              <img className={styles.Screenshot} src='../../../public/assets/know.png' />
              <div>
                <h1>Knowoncology</h1>
                <p>A client-driven backend migration for a naturopathic cancer research non-profit database <a href='https://www.knowoncology.org/' target='_blank' rel='noopener noreferrer'>(www.knowoncology.org)</a> built with MongoDB, resulting in 10x faster search speed and more reliable search results.</p>
                <div className={styles.Icons}><p>Built with:</p>
                  <figure>
                    <img src='../../../public/assets/mongodb.png' alt='mongodb icon'/>
                    <figcaption>MongoDB</figcaption>
                  </figure>
                  <figure>
                    <img src='../../../public/assets/node.png' alt='node icon'/>
                    <figcaption>NodeJS</figcaption>
                  </figure>
                  <figure>
                    <img src='../../../public/assets/js.png' alt='javascript icon'/>
                    <figcaption>JavaScript</figcaption>
                  </figure>
                  <figure>
                    <img src='../../../public/assets/css.png' alt='css icon'/>
                    <figcaption>CSS</figcaption>
                  </figure> 
                </div>
                <div className={styles.Icons}><p>View on:</p>
                  <a href='https://knowoncology.herokuapp.com' target='_blank' rel='noopener noreferrer'>
                    <figure className={styles.Link}>
                      <img src='../../../public/assets/webpage.png' alt='webpage icon'/>
                      <figcaption>WWW</figcaption>
                    </figure>
                  </a>
                  <a href='https://github.com/kNOWOncology/knowoncology/' target='_blank' rel='noopener noreferrer'>
                    <figure className={styles.Link}>
                      <img src='../../../public/assets/github.png' alt='github icon'/>
                      <figcaption>Github</figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            </div>

            : project === 'tnt' ?
              <div className={styles.Project}>
                <img className={styles.Screenshot} src='../../../public/assets/treksntrails.png' />
                <div>
                  <h1>Treks n&apos; Trails</h1>
                  <p>Hiking and camping tool that munges data from five different APIs to generate a list of hiking trails, campgrounds, weather, and directions from a current or specified location. Hikes can be filtered by difficulty and length and a user can favorite a hike for later reference.</p>
                  <div className={styles.Icons}><p>Built with:</p>
                    <figure>
                      <img src='../../../public/assets/postgres.png' alt='postgres icon'/>
                      <figcaption>PostgreSQL</figcaption>
                    </figure>
                    <figure>
                      <img src='../../../public/assets/node.png' alt='node icon'/>
                      <figcaption>NodeJS</figcaption>
                    </figure>
                    <figure>
                      <img src='../../../public/assets/js.png' alt='javascript icon'/>
                      <figcaption>JavaScript</figcaption>
                    </figure>
                    <figure>
                      <img src='../../../public/assets/css.png' alt='css icon'/>
                      <figcaption>CSS</figcaption>
                    </figure>
                  </div>
                  <div className={styles.Icons}><p>View on:</p>
                    <a href='https://treksntrails.herokuapp.com' target='_blank' rel='noopener noreferrer'>
                      <figure className={styles.Link}>
                        <img src='../../../public/assets/webpage.png' alt='webpage icon'/>
                        <figcaption>WWW</figcaption>
                      </figure>
                    </a>
                    <a href='https://github.com/Plant-Parenthood/treks-n-tents' target='_blank' rel='noopener noreferrer'>
                      <figure className={styles.Link}>
                        <img src='../../../public/assets/github.png' alt='github icon'/>
                        <figcaption>Github</figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
              </div>

              : project === 'band' ?
                <div className={styles.Project}>
                  <img className={styles.Screenshot} src='../../../public/assets/bandsearch.png' />
                  <div>
                    <h1>Band Search</h1>
                    <p>Single page application to search musical artists, view discographies, examine albums, and get song lyrics.</p>
                    <div className={styles.Icons}><p>Built with:</p>
                      <figure>
                        <img src='../../../public/assets/react.png' alt='react icon'/>
                        <figcaption>React</figcaption>
                      </figure>
                      <figure>
                        <img src='../../../public/assets/js.png' alt='javascript icon'/>
                        <figcaption>JavaScript</figcaption>
                      </figure>
                      <figure>
                        <img src='../../../public/assets/css.png' alt='css icon'/>
                        <figcaption>CSS</figcaption>
                      </figure>
                    </div>
                    <div className={styles.Icons}><p>View on:</p>
                      <a href='https://drmeloy.github.io/Artist-Search/' target='_blank' rel='noopener noreferrer'>
                        <figure className={styles.Link}>
                          <img src='../../../public/assets/webpage.png' alt='webpage icon'/>
                          <figcaption>WWW</figcaption>
                        </figure>
                      </a>
                      <a href='https://github.com/drmeloy/Artist-Search' target='_blank' rel='noopener noreferrer'>
                        <figure className={styles.Link}>
                          <img src='../../../public/assets/github.png' alt='github icon'/>
                          <figcaption>Github</figcaption>
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>

                : project === 'address' ? 
                  <div className={styles.Project}>
                    <img className={styles.Screenshot} src='../../../public/assets/addressbook.png' />
                    <div>
                      <h1>Address Book</h1>
                      <p>Full-stack CRUD application that allows a user to input, save, view, edit, and delete their contacts. User authentication ensures privacy of contact information.</p>
                      <div className={styles.Icons}><p>Built with:</p>
                        <figure>
                          <img src='../../../public/assets/mongodb.png' alt='mongodb icon'/>
                          <figcaption>MongoDB</figcaption>
                        </figure>
                        <figure>
                          <img src='../../../public/assets/node.png' alt='node icon'/>
                          <figcaption>NodeJS</figcaption>
                        </figure>
                        <figure>
                          <img src='../../../public/assets/js.png' alt='javascript icon'/>
                          <figcaption>JavaScript</figcaption>
                        </figure>
                        <figure>
                          <img src='../../../public/assets/css.png' alt='css icon'/>
                          <figcaption>CSS</figcaption>
                        </figure>
                      </div>
                      <div className={styles.Icons}><p>View on:</p>
                        <a href='https://alchemyaddressesbook.herokuapp.com' target='_blank' rel='noopener noreferrer'>
                          <figure className={styles.Link}>
                            <img src='../../../public/assets/webpage.png' alt='webpage icon'/>
                            <figcaption>WWW</figcaption>
                          </figure>
                        </a>
                        <a href='https://github.com/drmeloy/lab-15-address-book' target='_blank' rel='noopener noreferrer'>
                          <figure className={styles.Link}>
                            <img src='../../../public/assets/github.png' alt='github icon'/>
                            <figcaption>Github</figcaption>
                          </figure>
                        </a>
                      </div>
                    </div>
                  </div>

                  : project === 'dreamy' ?
                    <div className={styles.Project}>
                      <img className={styles.Screenshot} src='../../../public/assets/dreamy.png' />
                      <div>
                        <h1>DREAMy</h1>
                        <p>Postman clone with trippy aesthetics. A user can hit any REST API endpoint with the GET, POST, PUT, PATCH, and DELETE methods, as well as add customized authentication headers. History is logged, viewable, and revistable.</p>
                        <div className={styles.Icons}><p>Built with:</p>
                          <figure>
                            <img src='../../../public/assets/react.png' alt='react icon'/>
                            <figcaption>React</figcaption>
                          </figure>
                          <figure>
                            <img src='../../../public/assets/js.png' alt='javascript icon'/>
                            <figcaption>JavaScript</figcaption>
                          </figure>
                          <figure>
                            <img src='../../../public/assets/css.png' alt='css icon'/>
                            <figcaption>CSS</figcaption>
                          </figure>
                        </div>
                        <div className={styles.Icons}><p>View on:</p>
                          <a href='https://drmeloy.github.io/lab-28-RESTy/' target='_blank' rel='noopener noreferrer'>
                            <figure className={styles.Link}>
                              <img src='../../../public/assets/webpage.png' alt='webpage icon'/>
                              <figcaption>WWW</figcaption>
                            </figure>
                          </a>
                          <a href='https://github.com/drmeloy/lab-28-RESTy/' target='_blank' rel='noopener noreferrer'>
                            <figure className={styles.Link}>
                              <img src='../../../public/assets/github.png' alt='github icon'/>
                              <figcaption>Github</figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                    </div>

                    : project === 'github' ?
                      <div className={styles.Project}>
                        <img className={styles.Screenshot} src='../../../public/assets/githubviewer.png' />
                        <div>
                          <h1>Github Viewer</h1>
                          <p>Application used to view Github profiles and their repositories, pull requests, and issues in one convenient space. Hits the Github API and utilizes Redux for state management.</p>
                          <div className={styles.Icons}><p>Built with:</p>
                            <figure>
                              <img src='../../../public/assets/react.png' alt='react icon'/>
                              <figcaption>React</figcaption>
                            </figure>
                            <figure>
                              <img src='../../../public/assets/redux.png' alt='redux icon'/>
                              <figcaption>Redux</figcaption>
                            </figure>
                            <figure>
                              <img src='../../../public/assets/js.png' alt='javascript icon'/>
                              <figcaption>JavaScript</figcaption>
                            </figure>
                            <figure>
                              <img src='../../../public/assets/css.png' alt='css icon'/>
                              <figcaption>CSS</figcaption>
                            </figure>
                          </div>
                          <div className={styles.Icons}><p>View on:</p>
                            <a href='https://drmeloy.github.io/lab-40-github-viewer/' target='_blank' rel='noopener noreferrer'>
                              <figure className={styles.Link}>
                                <img src='../../../public/assets/webpage.png' alt='webpage icon'/>
                                <figcaption>WWW</figcaption>
                              </figure>
                            </a>
                            <a href='https://github.com/drmeloy/lab-40-github-viewer/' target='_blank' rel='noopener noreferrer'>
                              <figure className={styles.Link}>
                                <img src='../../../public/assets/github.png' alt='github icon'/>
                                <figcaption>Github</figcaption>
                              </figure>
                            </a>
                          </div>
                        </div>
                      </div>

                      : project === 'qwixx' ?
                        <div className={styles.Project}>
                          <img className={styles.Screenshot} src='../../../public/assets/quixx.png' />
                          <div>
                            <h1>Qwixx</h1>
                            <p>A mobile-responsive JavaScript implementation of the popular Qwixx dice game <a href='https://gamewright.com/product/Qwixx' target='_blank' rel='noopener noreferrer'>(https://gamewright.com/product/Qwixx)</a> that speeds gameplay and doesn&apos;t rely on paper scorecards. Developed with face-to-face multiplayer in mind with each player&apos;s device acting as their scorecard.</p>
                            <div className={styles.Icons}><p>Built with:</p>
                              <figure>
                                <img src='../../../public/assets/js.png' alt='javascript icon'/>
                                <figcaption>JavaScript</figcaption>
                              </figure>
                              <figure>
                                <img src='../../../public/assets/html.png' alt='html icon'/>
                                <figcaption>HTML</figcaption>
                              </figure>
                              <figure>
                                <img src='../../../public/assets/css.png' alt='css icon'/>
                                <figcaption>CSS</figcaption>
                              </figure>
                            </div>
                            <div className={styles.Icons}><p>View on:</p>
                              <a href='https://i-16.github.io/qwixx/' target='_blank' rel='noopener noreferrer'>
                                <figure className={styles.Link}>
                                  <img src='../../../public/assets/webpage.png' alt='webpage icon'/>
                                  <figcaption>WWW</figcaption>
                                </figure>
                              </a>
                              <a href='https://github.com/I-16/qwixx' target='_blank' rel='noopener noreferrer'>
                                <figure className={styles.Link}>
                                  <img src='../../../public/assets/github.png' alt='github icon'/>
                                  <figcaption>Github</figcaption>
                                </figure>
                              </a>
                            </div>
                          </div>
                        </div>
                        : ''
        }
      </section>
    </Element>
  );
}
