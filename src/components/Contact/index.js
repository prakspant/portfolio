import './index.scss';
import {Loader} from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {useEffect, useState, useRef} from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);

    return () => clearTimeout(timer);
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_am4sec6',
        'template_lhcocgi',
        refForm.current,
        'QCia-umSycBWRPJs2'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

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
            <form ref={refForm} onSubmit={sendEmail}>
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
        <div className='info-map'>
          Prakhar Pant,
          <br />
          Australia
          <br />
          Clayton
          <br />
          Melbourne
          <br />
          <span>prakharpant288@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[-37.909705, 145.128789]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Circle center={[-37.909705, 145.128789]} radius={100}>
              <Popup>
                This is the vicinity in which Prakhar dwells
              </Popup>
            </Circle>
          </ MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
