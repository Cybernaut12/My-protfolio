"use client"

import { useEffect, useRef } from "react"
import "./Skills.css"

const Skills = () => {
  const skillsRef = useRef(null)

  const skillsData = [
    {
      year: "2022 - 2024",
      title: "Frontend Developer",
      description:
        "Specialized in crafting responsive UI components and interactive web interfaces. Proficient in HTML, CSS, JavaScript, and React, with a focus on cross-browser compatibility and performance optimization.",
    },
    {
      year: "2025 - Present",
      title: "Full Stack Web Developer",
      description:
        "Building scalable web applications using React, Node.js, and modern JavaScript frameworks. Focused on creating performant, accessible, and user-centered digital experiences with clean, maintainable code.",
    },
    {
      year: "2024 - 2027",
      title: "Advanced Diploma in Software Engineering",
      description:
        "Currently studying Software Engineering at Aptech, gaining hands-on experience in frontend, backend, databases, and modern development tools. Building real-world projects and developing strong skills.",
    },
    {
      year: "2025 - present",
      title: "Python Developer",
      description:
        "Developed backend systems, automation scripts, and data analysis solutions using Python. Experienced with Django, Flask, and machine learning libraries to create efficient and scalable applications.",
    },
  ]

  const skillBars = [
    { name: "HTML", percentage: 76 },
    { name: "Python", percentage: 84 },
    { name: "CSS", percentage: 59 },
    { name: "TypeScript", percentage: 70 },
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 84 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll(".progress-fill")
            progressBars.forEach((bar) => {
              const width = bar.getAttribute("data-width")
              bar.style.width = width
            })
          }
        })
      },
      { threshold: 0.5 },
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills-section" id="skills" ref={skillsRef}>
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-8 m-auto mb-5">
            <div className="section-heading">
              <h5 className="section-subtitle">EDUCATION & SKILL</h5>
              <h2 className="section-title">Showcasing your talent amplifying your impact</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {skillsData.map((skill, index) => (
            <div key={index} className="col-xl-6 col-lg-6">
              <div className="single-skill">
                <span>{skill.year}</span>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="row">
          {skillBars.map((skill, index) => (
            <div key={index} className="col-xl-6 col-lg-6">
              <div className="skill-bar">
                <p>{skill.name}</p>
                <div className="progress-bar">
                  <div className="progress-fill" data-width={`${skill.percentage}%`} style={{ width: "0%" }}>
                    <span className="percentage">{skill.percentage}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
