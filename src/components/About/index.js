import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact, faHtml5, faCss3, faJsSquare, faPython, faNode} from '@fortawesome/free-brands-svg-icons';
import {Loader} from 'react-loaders'

function About() {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);

    return () => clearTimeout(timer);
  }, [])
  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
          strArray={'About me'.split('')}
          index={15}
          />
        </h1>
        <p>
          I am a highly motivated and ambitious software developer / full stack developer
          looking for a part/time role in Australia where I get to work on challenging and interesting projects.
          Currently I'm enrolled in Monash' Master's of Information Technology course.
        </p>
        <p>
          I'm quite confident in my abilities as a developer and see myself as a student with tenure.
          I like to keep on learning and adding to my skillset. And I enjoy outdoing myself in every
          new project I undertake.
        </p>
        <p>
          I shall keep updating my portfolio section with any unuique and self built projects of mine.
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cube-spinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faPython} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faNode} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
}


export default About
