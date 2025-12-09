import "./Services.css"

const Services = () => {
  const services = [
    {
      icon: <i className="fab fa-python"></i>,
      title: "Python Development",
      description:
        "Building robust backend systems, automation scripts, and data analysis solutions. Specializing in Django, Flask, and machine learning applications that power modern web platforms — with a dash of curiosity and pragmatic problem-solving.",
    },
    {
      icon: <i className="fas fa-palette"></i>,
      title: "Backend & Database Solutions",
      description:
        "I build robust backend systems with Python to handle logic and data. I manage and optimize MongoDB databases for scalable applications. My goal is to ensure performance, and seamless data flow.",
    },
    {
      icon: <i className="fas fa-code"></i>,
      title: "Web Developer",
      description:
        "Developing responsive, fast, and user-friendly websites using modern technologies. Expert in React, JavaScript, and CSS frameworks to create seamless digital experiences — available for full‑stack collaboration and product-focused projects.",
    },
  ]

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-10 m-auto">
            <div className="section-heading">
              <h5 className="section-subtitle">MY SERVICE</h5>
              <h2 className="section-title">
                Creative digital
                <br />
                solutions
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="single-service">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
