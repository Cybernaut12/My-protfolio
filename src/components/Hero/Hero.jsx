"use client"

import { useEffect, useState } from "react"
import "./Hero.css"
import heroimage from "../../assets/cyberpics_hero.jpg"

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const textItems = ["Innovator", "Coder", "Builder", "Developer", "Freelancer", "Creator"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textItems.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [textItems.length])

  return (
    <section className="tf__banner banner" style={{ background: "url(/placeholder.svg?height=1080&width=1920)" }}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-6 col-lg-8">
            <div className="tf__banner_text">
              <h1>
                HI, I'M CYBER!
                <br />
                Creative{" "}
                <span className="cd-headline rotate-1">
                  <span className="cd-words-wrapper">
                    {textItems.map((text, index) => (
                      <b key={index} className={index === currentTextIndex ? "is-visible" : "is-hidden"}>
                        {text}
                      </b>
                    ))}
                  </span>
                </span>
              </h1>
              <p>
                A passionate Software Engineer skilled in HTML, CSS, and JavaScript.
                Experienced in building responsive web applications using React and Tailwind CSS.
                Proficient in Python, MongoDB, and C++ for backend and data-driven solutions.
                I enjoy solving real-world problems through clean, efficient, and scalable code.
                Always learning and growing to become a strong, versatile full-stack developer.
              </p>
              <ul>
                <li>
                  {/* Place your PDF at /public/CYBER_CV.pdf */}
                  <a className="common_btn" href="/CYBER_CV.docx" download>
                    Download CV
                    <i aria-hidden="true" className="fa-solid fa-arrow-down-to-line"></i>
                  </a>
                </li>
                <li>
                  <a className="banner_video_btn play_btn" href="https://www.youtube.com/watch?v=B-ytMSuwbf8">
                    <i aria-hidden="true" className="fas fa-play-circle"></i>
                    Watch The Video
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-5 col-lg-4">
            <div className="tf__banner_img">
              <div className="img">
                <img src={heroimage} className="img-fluid w-100" alt="Cyber Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
