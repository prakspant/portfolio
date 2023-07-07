import './index.scss';
import {Loader} from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {useEffect, useState} from 'react';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);

    return () => clearTimeout(timer);
  }, [])
  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={'Contact me'.split('')}
            index={15}
            />
          </h1>
          <p>
            I am interested in software and web development projects, particularly novel, interesting ones
            However for any requests or questions please don't hesitate to contact me.
            I am passionate about web development and can talk about coding all day.
          </p>
          <div className="contact-form" >
            <form>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder="Name" required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder="Email" required />
                </li>
                <li>
                  <input placeholder='Subject' type='text' name='subject' required />
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND'/>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
