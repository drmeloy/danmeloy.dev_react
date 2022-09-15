import React, { useState } from 'react';
import styles from './Work.css';
import { Element } from 'react-scroll';
import js_icon from '../../../public/assets/js.png';
import html_icon from '../../../public/assets/html.png';
import css_icon from '../../../public/assets/css.png';
import node_icon from '../../../public/assets/node.png';
import react_icon from '../../../public/assets/react.png';
import redux_icon from '../../../public/assets/redux.png';
import mongodb_icon from '../../../public/assets/mongodb.png';
import postgres_icon from '../../../public/assets/postgres.png';
import webpage_icon from '../../../public/assets/webpage.png';
import github_icon from '../../../public/assets/github.png';
import kit_screenshot from '../../../public/assets/kit.png';
import know_screenshot from '../../../public/assets/know.png';
import tnt_screenshot from '../../../public/assets/treksntrails.png';
import bandsearch_screenshot from '../../../public/assets/bandsearch.png';
import addressbook_screenshot from '../../../public/assets/addressbook.png';
import dreamy_screenshot from '../../../public/assets/dreamy.png';
import github_viewer_screenshot from '../../../public/assets/githubviewer.png';
import qwixx_screenshot from '../../../public/assets/quixx.png';

export default function Work2(){
  const [project, setProject] = useState('kit');

  return (
    <Element id='Work' name='Work'>
      <section className={styles.Work}>
        <p>Selected projects <i>(Note: older projects may no longer be hosted)</i>:</p>
        <div className={styles.Buttons}>
          <span onMouseOver={() => setProject('kit')} onClick={() => setProject('kit')} className={project === 'kit' ? styles.ActiveButton : styles.Button}>KiT: Keeping In Touch</span>
          <span onMouseOver={() => setProject('know')} onClick={() => setProject('know')} className={project === 'know' ? styles.ActiveButton : styles.Button}>KNOWOncology</span>
          <span onMouseOver={() => setProject('tnt')} onClick={() => setProject('tnt')} className={project === 'tnt' ? styles.ActiveButton : styles.Button}>Treks n&apos; Trails</span>
          <span onMouseOver={() => setProject('band')} onClick={() => setProject('band')} className={project === 'band' ? styles.ActiveButton : styles.Button}>Band Search</span>
          <span onMouseOver={() => setProject('address')} onClick={() => setProject('address')} className={project === 'address' ? styles.ActiveButton : styles.Button}>Address Book</span>
          <span onMouseOver={() => setProject('dreamy')} onClick={() => setProject('dreamy')} className={project === 'dreamy' ? styles.ActiveButton : styles.Button}>DREAMy</span>
          <span onMouseOver={() => setProject('github')} onClick={() => setProject('github')} className={project === 'github' ? styles.ActiveButton : styles.Button}>Github Viewer</span>
          <span onMouseOver={() => setProject('qwixx')} onClick={() => setProject('qwixx')} className={project === 'qwixx' ? styles.ActiveButton : styles.Button}>Qwixx</span>
        </div>
        { project === 'kit' ? 
          <div className={styles.Project}>
            <img className={styles.Screenshot} src={kit_screenshot} alt='kit screenshot'/>
            <div>
              <h1>KiT: Keeping In Touch</h1>
              <p>A progressive web app for setting, tracking, and meeting communication goals. User can input contacts, set communication goals, receive push notification reminders, and view communication logs. Contacts are automatically sorted and styled based on proximity to communication deadline.</p>
              <div className={styles.Icons}><p>Built with:</p>
                <figure>
                  <img src={react_icon} alt='react icon'/>
                  <figcaption>React</figcaption>
                </figure>
                <figure>
                  <img src={redux_icon} alt='redux icon'/>
                  <figcaption>Redux</figcaption>
                </figure>
                <figure>
                  <img src={mongodb_icon} alt='mongodb icon'/>
                  <figcaption>MongoDB</figcaption>
                </figure>
                <figure>
                  <img src={node_icon} alt='node icon'/>
                  <figcaption>NodeJS</figcaption>
                </figure>
                <figure>
                  <img src={css_icon} alt='css icon'/>
                  <figcaption>CSS</figcaption>
                </figure>
              </div>
              <div className={styles.Icons}><p>View on:</p>
                <a href='https://friendlier-staging.netlify.com/login' target='_blank' rel='noopener noreferrer'>
                  <figure className={styles.Link}>
                    <img src={webpage_icon} alt='webpage icon'/>
                    <figcaption>WWW</figcaption>
                  </figure>
                </a>
                <a href='https://github.com/band-m' target='_blank' rel='noopener noreferrer'>
                  <figure className={styles.Link}>
                    <img src={github_icon} alt='github icon'/>
                    <figcaption>Github</figcaption>
                  </figure>
                </a>
              </div>
            </div>
          </div>

          : project === 'know' ?
            <div className={styles.Project}>
              <img className={styles.Screenshot} src={know_screenshot} alt='know screenshot' />
              <div>
                <h1>Knowoncology</h1>
                <p>A client-driven backend migration for a naturopathic cancer research non-profit database <a href='https://www.knowoncology.org/' target='_blank' rel='noopener noreferrer'>(www.knowoncology.org)</a> built with MongoDB, resulting in 10x faster search speed and more reliable search results.</p>
                <div className={styles.Icons}><p>Built with:</p>
                  <figure>
                    <img src={mongodb_icon} alt='mongodb icon'/>
                    <figcaption>MongoDB</figcaption>
                  </figure>
                  <figure>
                    <img src={node_icon} alt='node icon'/>
                    <figcaption>NodeJS</figcaption>
                  </figure>
                  <figure>
                    <img src={js_icon} alt='javascript icon'/>
                    <figcaption>JavaScript</figcaption>
                  </figure>
                  <figure>
                    <img src={css_icon} alt='css icon'/>
                    <figcaption>CSS</figcaption>
                  </figure> 
                </div>
                <div className={styles.Icons}><p>View on:</p>
                  <a href='https://knowoncology.herokuapp.com' target='_blank' rel='noopener noreferrer'>
                    <figure className={styles.Link}>
                      <img src={webpage_icon} alt='webpage icon'/>
                      <figcaption>WWW</figcaption>
                    </figure>
                  </a>
                  <a href='https://github.com/kNOWOncology/knowoncology/' target='_blank' rel='noopener noreferrer'>
                    <figure className={styles.Link}>
                      <img src={github_icon} alt='github icon'/>
                      <figcaption>Github</figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            </div>

            : project === 'tnt' ?
              <div className={styles.Project}>
                <img className={styles.Screenshot} src={tnt_screenshot} alt='treks n trails screenshot' />
                <div>
                  <h1>Treks n&apos; Trails</h1>
                  <p>Hiking and camping tool that munges data from five different APIs to generate a list of hiking trails, campgrounds, weather, and directions from a current or specified location. Hikes can be filtered by difficulty and length and a user can favorite a hike for later reference.</p>
                  <div className={styles.Icons}><p>Built with:</p>
                    <figure>
                      <img src={postgres_icon} alt='postgres icon'/>
                      <figcaption>PostgreSQL</figcaption>
                    </figure>
                    <figure>
                      <img src={node_icon} alt='node icon'/>
                      <figcaption>NodeJS</figcaption>
                    </figure>
                    <figure>
                      <img src={js_icon} alt='javascript icon'/>
                      <figcaption>JavaScript</figcaption>
                    </figure>
                    <figure>
                      <img src={css_icon} alt='css icon'/>
                      <figcaption>CSS</figcaption>
                    </figure>
                  </div>
                  <div className={styles.Icons}><p>View on:</p>
                    <a href='https://treksntrails.herokuapp.com' target='_blank' rel='noopener noreferrer'>
                      <figure className={styles.Link}>
                        <img src={webpage_icon} alt='webpage icon'/>
                        <figcaption>WWW</figcaption>
                      </figure>
                    </a>
                    <a href='https://github.com/Plant-Parenthood/treks-n-tents' target='_blank' rel='noopener noreferrer'>
                      <figure className={styles.Link}>
                        <img src={github_icon} alt='github icon'/>
                        <figcaption>Github</figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
              </div>

              : project === 'band' ?
                <div className={styles.Project}>
                  <img className={styles.Screenshot} src={bandsearch_screenshot} alt='band search screenshot' />
                  <div>
                    <h1>Band Search</h1>
                    <p>Single page application to search musical artists, view discographies, examine albums, and get song lyrics.</p>
                    <div className={styles.Icons}><p>Built with:</p>
                      <figure>
                        <img src={react_icon} alt='react icon'/>
                        <figcaption>React</figcaption>
                      </figure>
                      <figure>
                        <img src={js_icon} alt='javascript icon'/>
                        <figcaption>JavaScript</figcaption>
                      </figure>
                      <figure>
                        <img src={css_icon} alt='css icon'/>
                        <figcaption>CSS</figcaption>
                      </figure>
                    </div>
                    <div className={styles.Icons}><p>View on:</p>
                      <a href='https://drmeloy.github.io/Artist-Search/' target='_blank' rel='noopener noreferrer'>
                        <figure className={styles.Link}>
                          <img src={webpage_icon} alt='webpage icon'/>
                          <figcaption>WWW</figcaption>
                        </figure>
                      </a>
                      <a href='https://github.com/drmeloy/Artist-Search' target='_blank' rel='noopener noreferrer'>
                        <figure className={styles.Link}>
                          <img src={github_icon} alt='github icon'/>
                          <figcaption>Github</figcaption>
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>

                : project === 'address' ? 
                  <div className={styles.Project}>
                    <img className={styles.Screenshot} src={addressbook_screenshot} alt='address book screenshot' />
                    <div>
                      <h1>Address Book</h1>
                      <p>Full-stack CRUD application that allows a user to input, save, view, edit, and delete their contacts. User authentication ensures privacy of contact information.</p>
                      <div className={styles.Icons}><p>Built with:</p>
                        <figure>
                          <img src={mongodb_icon} alt='mongodb icon'/>
                          <figcaption>MongoDB</figcaption>
                        </figure>
                        <figure>
                          <img src={node_icon} alt='node icon'/>
                          <figcaption>NodeJS</figcaption>
                        </figure>
                        <figure>
                          <img src={js_icon} alt='javascript icon'/>
                          <figcaption>JavaScript</figcaption>
                        </figure>
                        <figure>
                          <img src={css_icon} alt='css icon'/>
                          <figcaption>CSS</figcaption>
                        </figure>
                      </div>
                      <div className={styles.Icons}><p>View on:</p>
                        <a href='https://alchemyaddressesbook.herokuapp.com' target='_blank' rel='noopener noreferrer'>
                          <figure className={styles.Link}>
                            <img src={webpage_icon} alt='webpage icon'/>
                            <figcaption>WWW</figcaption>
                          </figure>
                        </a>
                        <a href='https://github.com/drmeloy/lab-15-address-book' target='_blank' rel='noopener noreferrer'>
                          <figure className={styles.Link}>
                            <img src={github_icon} alt='github icon'/>
                            <figcaption>Github</figcaption>
                          </figure>
                        </a>
                      </div>
                    </div>
                  </div>

                  : project === 'dreamy' ?
                    <div className={styles.Project}>
                      <img className={styles.Screenshot} src={dreamy_screenshot} alt='dreamy screenshot' />
                      <div>
                        <h1>DREAMy</h1>
                        <p>Postman clone with trippy aesthetics. A user can hit any REST API endpoint with the GET, POST, PUT, PATCH, and DELETE methods, as well as add customized authentication headers. History is logged, viewable, and revistable.</p>
                        <div className={styles.Icons}><p>Built with:</p>
                          <figure>
                            <img src={react_icon} alt='react icon'/>
                            <figcaption>React</figcaption>
                          </figure>
                          <figure>
                            <img src={js_icon} alt='javascript icon'/>
                            <figcaption>JavaScript</figcaption>
                          </figure>
                          <figure>
                            <img src={css_icon} alt='css icon'/>
                            <figcaption>CSS</figcaption>
                          </figure>
                        </div>
                        <div className={styles.Icons}><p>View on:</p>
                          <a href='https://drmeloy.github.io/lab-28-RESTy/' target='_blank' rel='noopener noreferrer'>
                            <figure className={styles.Link}>
                              <img src={webpage_icon} alt='webpage icon'/>
                              <figcaption>WWW</figcaption>
                            </figure>
                          </a>
                          <a href='https://github.com/drmeloy/lab-28-RESTy/' target='_blank' rel='noopener noreferrer'>
                            <figure className={styles.Link}>
                              <img src={github_icon} alt='github icon'/>
                              <figcaption>Github</figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                    </div>

                    : project === 'github' ?
                      <div className={styles.Project}>
                        <img className={styles.Screenshot} src={github_viewer_screenshot} alt='github viewer screenshot' />
                        <div>
                          <h1>Github Viewer</h1>
                          <p>Application used to view Github profiles and their repositories, pull requests, and issues in one convenient space. Hits the Github API and utilizes Redux for state management.</p>
                          <div className={styles.Icons}><p>Built with:</p>
                            <figure>
                              <img src={react_icon} alt='react icon'/>
                              <figcaption>React</figcaption>
                            </figure>
                            <figure>
                              <img src={redux_icon} alt='redux icon'/>
                              <figcaption>Redux</figcaption>
                            </figure>
                            <figure>
                              <img src={js_icon} alt='javascript icon'/>
                              <figcaption>JavaScript</figcaption>
                            </figure>
                            <figure>
                              <img src={css_icon} alt='css icon'/>
                              <figcaption>CSS</figcaption>
                            </figure>
                          </div>
                          <div className={styles.Icons}><p>View on:</p>
                            <a href='https://drmeloy.github.io/lab-40-github-viewer/' target='_blank' rel='noopener noreferrer'>
                              <figure className={styles.Link}>
                                <img src={webpage_icon} alt='webpage icon'/>
                                <figcaption>WWW</figcaption>
                              </figure>
                            </a>
                            <a href='https://github.com/drmeloy/lab-40-github-viewer/' target='_blank' rel='noopener noreferrer'>
                              <figure className={styles.Link}>
                                <img src={github_icon} alt='github icon'/>
                                <figcaption>Github</figcaption>
                              </figure>
                            </a>
                          </div>
                        </div>
                      </div>

                      : project === 'qwixx' ?
                        <div className={styles.Project}>
                          <img className={styles.Screenshot} src={qwixx_screenshot} alt='qwixx screenshot' />
                          <div>
                            <h1>Qwixx</h1>
                            <p>A mobile-responsive JavaScript implementation of the popular Qwixx dice game <a href='https://gamewright.com/product/Qwixx' target='_blank' rel='noopener noreferrer'>(https://gamewright.com/product/Qwixx)</a> that speeds gameplay and doesn&apos;t rely on paper scorecards. Developed with face-to-face multiplayer in mind with each player&apos;s device acting as their scorecard.</p>
                            <div className={styles.Icons}><p>Built with:</p>
                              <figure>
                                <img src={js_icon} alt='javascript icon'/>
                                <figcaption>JavaScript</figcaption>
                              </figure>
                              <figure>
                                <img src={html_icon} alt='html icon'/>
                                <figcaption>HTML</figcaption>
                              </figure>
                              <figure>
                                <img src={css_icon} alt='css icon'/>
                                <figcaption>CSS</figcaption>
                              </figure>
                            </div>
                            <div className={styles.Icons}><p>View on:</p>
                              <a href='https://i-16.github.io/qwixx/' target='_blank' rel='noopener noreferrer'>
                                <figure className={styles.Link}>
                                  <img src={webpage_icon} alt='webpage icon'/>
                                  <figcaption>WWW</figcaption>
                                </figure>
                              </a>
                              <a href='https://github.com/I-16/qwixx' target='_blank' rel='noopener noreferrer'>
                                <figure className={styles.Link}>
                                  <img src={github_icon} alt='github icon'/>
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
