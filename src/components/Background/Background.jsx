import React from 'react';
import styles from './Background.css';

export default function Background(){
  return (
    <>
      <section className={styles.Background}>
        <p className={styles.Title}>A bit about my background...</p>
        <div className={styles.Titles}>
          <h4 className={styles.One}>Perspectives-based approach</h4>
          <h4>International entrepreneur</h4>
          <h4>Leadership and empowering others</h4>
        </div>
        <div className={styles.Excerpts}>
          <p>My life has provided me with a range of experiences that help shape who I am. As a student of Anthropology, I learned how perspectives often vary and hugely differentiate the way we understand the world. Throughout my life I strive to keep a perspectives-based approach to problem solving and relationship building, believing that the first step to success is understanding others as best we can.</p>
          <p>I&apos;ve opened two successful businesses abroad in Quito, Ecuador. Being a co-owner and founder of <a href='https://communityhostel.com/' target='_blank' rel='noopener noreferrer'>Community Hostel</a> and <a href='http://bandidobrewing.com/en/' target='_blank' rel='noopener noreferrer'>Bandido Brewing</a> taught me how to take ideas and turn them into reality. The challenges of opening two businesses in a foreign country taught me the value of adaptability. With a mindset of adaptability, any problem is solvable, any issue or interruption is merely a part of the process. To this day my adaptability remains one of my greatest strengths.</p>
          <p>I&apos;ve been a leader and facilitator for a wilderness non-profit. I led backcountry wilderness trips for adults with physical and developmental disabilities and facilitated outdoor experiential education events for under-served student communities. By helping people connect with the outdoors I was helping them build their confidence and realize that they can do anything they set their minds to, regardless of personal background or ability level.</p>
        </div>
        <p className={styles.Closer}>Now, as a developer and engineer, I hope to use technology to apply the lessons I&apos;ve learned throughout my life. I aim to solve problems that can empower others.</p>
      </section>
    </>
  );
}
