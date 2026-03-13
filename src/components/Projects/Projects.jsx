import "./Projects.css"
import biographyImg from "../../assets/Biography-project.png"
import eventImg from "../../assets/Event-project.png"
import cyberStImg from "../../assets/cyberstore.png"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Biography website",
      category: "Web Development",
      description: "A tribute website dedicated to Mohamed Abdul Salam, the Nobel Prize winner in Physics, showcasing his life, achievements, and contributions to science.",
      image: biographyImg,
      liveLink: "https://masbiography.netlify.app/",
      sourceLink: "https://github.com/Cybernaut12/Biography"
    },
    {
      id: 2,
      title: "College Events Portal",
      category: "Frontend Development",
      description: "A centralized hub to discover information about upcoming and past college events, categorized by event types and participating departments.",
      image: eventImg,
      liveLink: "https://ecampusconnect.netlify.app/",
      sourceLink: "https://github.com/Cybernaut12/campusconnect"
    },
    {
      id: 3,
      title: "Cyberstore",
      category: "Ecommerce Website",
      description: "An ecommerce website for clothing, footwear, and accessories, with smooth product browsing, cart management, and checkout flow.",
      image: cyberStImg,
      liveLink: "https://cyberstore-lemon.vercel.app",
      sourceLink: "https://github.com/Cybernaut12/campusconnect"
    }
  ]

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h5 className="section-subtitle">MY PORTFOLIO</h5>
              <h2 className="section-title">Some of my recent <br /> projects</h2>
            </div>
          </div>
        </div>
        
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className="single-project">
                <div className="project-img">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-buttons">
                    <a href={project.liveLink} className="project-btn" target="_blank" rel="noopener noreferrer">
                      Live View <i className="fas fa-arrow-right"></i>
                    </a>
                    <a href={project.sourceLink} className="project-btn" target="_blank" rel="noopener noreferrer">
                      Source Code <i className="fas fa-code"></i>
                    </a>
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

export default Projects
