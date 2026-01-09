"use client";

import { useEffect, useState } from 'react';
import { Download, Play } from 'lucide-react';
import './Hero.css';
import heroimage from "../../assets/cyberpics_hero.jpg"

const Hero = () => {
  const animatedWords = ['Innovator', 'Coder', 'Builder', 'Developer', 'Freelancer', 'Creator'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out');

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
        setFadeClass('fade-in');
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, [animatedWords.length]);

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-heading">
              Hi, I'm Cybernout!<br />
              Creative <span className={`animated-word ${fadeClass}`}>{animatedWords[currentWordIndex]}</span>
            </h1>

            <p className="hero-description">
              I'm a passionate software engineer specializing in creating beautiful,
              functional web experiences. With expertise in HTML, CSS, and JavaScript,
              I leverage modern frameworks like React and Tailwind CSS to bring ideas to life.
              My backend skills include Python, MongoDB, and C++, enabling me to build clean,
              scalable solutions that solve real-world problems.
            </p>

            <div className="hero-buttons">
              <a
                href="/Victor_Ajisola_Cv.pdf"
                download
                className="btn btn-primary"
              >
                <Download size={20} />
                Download CV
              </a>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Play size={20} />
                Watch The Video
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src={heroimage}
              alt="Professional profile"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
