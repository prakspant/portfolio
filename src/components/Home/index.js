import LogoP from '../../assets/images/LogoPTransparent.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['r', 'a', 'k', 'h', 'a', 'r'];
  const jobArray = 'developer'.split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);

    return () => clearTimeout(timer);
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
        <img src={LogoP} alt="Prakhar" />
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        index={15} />
        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        index={21} />
        </h1>
        <h2>Full Stack Developer / Javascript Expert</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
      <Logo />
    </div>
  );
}


export default Home
