import React from 'react';
import { Loader } from 'react-loaders';
import {useEffect, useState} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import LogoP from "../../assets/images/LogoP.png";

function Portfolio() {
  // State variable to control visibility of loader and content
  const [loading, setLoading] = useState(true);
  const [letterClass, setLetterClass] = useState('text-animate');

  const projects = [
    {
      title: "Righteous Slaughter",
      description: "A game like no other",
      image: LogoP,
      link: "http://example.com/project1"
    },
    // Add more projects here...
  ];

  useEffect(() => {
    // Set up a timer to hide the loader and show the content after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false); // hide loader and show content
      setLetterClass('text-animate-hover');
    }, 3000);

    // Cleanup timer if the component is unmounted before 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader type='line-scale' />
      ) : (
        <div className="container">
          <div className="welcome">
            <h1 id="welcome">
              <AnimatedLetters
              letterClass={letterClass}
              strArray={'Welcome To My Portfolio'.split('')}
              index={39}
              />
            </h1>
          </div>
          <div className="projects">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h2>{project.title}</h2>
                <img src={project.image} alt={project.title} />
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
              </div>
            ))}
          </div>
          {/* Your portfolio content goes here */}
        </div>
      )}
    </div>
  );
}

export default Portfolio
