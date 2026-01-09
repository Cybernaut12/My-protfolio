"use client"

import "./About.css"
import aboutimage from "../../assets/cyberPics.png"

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-7 col-lg-6 col-xl-6">
            <div className="about-content">
              <div className="section-heading">
                <h5 className="section-subtitle">ABOUT ME</h5>
                <h2 className="section-title">Hi — I'm a developer crafting human-centered web experiences</h2>
              </div>

              <div className="about-text">
                <p>
                  I'm a hands-on developer who focuses on building accessible, performant, and user-friendly web applications.
                  I bridge design and engineering by turning ideas into polished, maintainable products that people enjoy using.
                </p>
                {/* Place your PDF at /public/CYBER_CV.pdf */}
                <a href="/Victor_Ajisola_Cv.pdf" download className="common-btn">
                  Download CV
                  <i className="fa-solid fa-arrow-down-to-line"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-lg-6 col-xl-6">
            <div className="about-img">
              <img src={aboutimage} alt="About" className="about-image" />

              <div className="about-img-text">
                <i className="fas fa-chart-pie"></i>
                <div className="about-content-box">
                  <h4>Daily Activity</h4>
                  <p>Cyber Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
