"use client"

import { useState, useEffect } from "react"
import "./Header.css"
import cyber from "../images/CYber-LOGO.svg" 
import { init, send } from "@emailjs/browser" 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false)
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
    const [isSending, setIsSending] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState("")
    const [toastType, setToastType] = useState("success") // 'success' | 'error'
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }
  
    // initialize EmailJS once and send mapped template params
    useEffect(() => {
      init("zlbpm8VAF2z9XPwIo") // user ID from EmailJS dashboard
    }, [])
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      setIsSending(true)
      // trigger sending state; toast will be shown on result
  
      // map form fields to the template variables used in your EmailJS template
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }
  
      try {
        const result = await send("service_o7vyipl", "template_p74tdat", templateParams)
        console.log("EmailJS result:", result)
        setToastType("success")
        setToastMessage("Message sent successfully!")
        setShowToast(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
      } catch (err) {
        console.error("EmailJS error:", err)
        setToastType("error")
        setToastMessage("Failed to send. Please try again.")
        setShowToast(true)
      } finally {
        setIsSending(false)
        // toast auto-hide handled by effect below
      }
    }
  
    // auto-hide toast after 5 seconds
    useEffect(() => {
      if (!showToast) return
      const t = setTimeout(() => {
        setShowToast(false)
        setToastMessage("")
      }, 5000)
      return () => clearTimeout(t)
    }, [showToast])
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const targetSection = document.querySelector(targetId)
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }
  return (
    <>
      <nav className={`navbar main_menu ${isScrolled ? "scrolled" : ""}`}>
        <div className="container main_menu_bg">
          <a className="navbar-brand" href="#home">
            <div className="logo-icon">
              {/* Replace logo-lines with your logo image */}
              <img
                src={cyber}
                alt="Logo"
                style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
              />
            </div>
            <span className="logo-text">CYBER</span>
          </a>

          <button className="navbar-toggler" type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className={`hamburger-icon ${isMobileMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className="navbar-collapse desktop-only">
            <ul className="navbar-nav m-auto">
              <li className="nav-item dropdown has-dropdown">
                <a href="#home" className="nav-link text_hover_animaiton" onClick={()=> window.scrollTo(0, 0)}>
                  <span className="menu-text">HOME
                    {/* <i className="fa-solid fa-chevron-down" style={{ marginLeft: "6px" }}></i> */}
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link text_hover_animaiton" onClick={(e) => handleNavClick(e, "#about")}>
                  <span className="menu-text">ABOUT</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#services"
                  className="nav-link text_hover_animaiton"
                  onClick={(e) => handleNavClick(e, "#services")}
                >
                  <span className="menu-text">SERVICES</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#projects"
                  className="nav-link text_hover_animaiton"
                  onClick={(e) => handleNavClick(e, "#projects")}
                >
                  <span className="menu-text">PROJECTS</span>
                </a>
              </li>
              <li className="nav-item dropdown has-dropdown">
                <a href="#blog" className="nav-link text_hover_animaiton" onClick={(e) => handleNavClick(e, "#blog")}>
                  <span className="menu-text">
                    BLOG
                    {/* <i className="fa-solid fa-chevron-down" style={{ marginLeft: "6px" }}></i> */}
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#footer"
                  className="nav-link text_hover_animaiton"
                  onClick={(e) => handleNavClick(e, "#footer")}
                >
                  <span className="menu-text">CONTACT</span>
                </a>
              </li>
            </ul>

            <div className="toggle_icon c-pointer" onClick={() => setIsOffcanvasOpen(true)}>
              <div className="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`mobile-menu-dropdown ${isMobileMenuOpen ? "show" : ""}`}>
          <ul className="mobile-nav">
            <li className="mobile-nav-item">
              <a href="#home" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#home")}>
                HOME
                <i className="fa-solid fa-chevron-down"></i>
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#about" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#about")}>
                ABOUT
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#services" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#services")}>
                SERVICES
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#projects" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#projects")}>
                PROJECTS
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#blog" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#blog")}>
                BLOG
                <i className="fa-solid fa-chevron-down"></i>
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#footer" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#footer")}>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Offcanvas Menu */}
      <div className={`offcanvas ${isOffcanvasOpen ? "show" : ""}`}>
        <div className="offcanvas-header">
          <a className="offcanvas-logo" href="#home">
            <div className="logo-container">
                <div className="logo-icon">
              {/* Replace logo-lines with your logo image */}
              <img
                src={cyber}
                alt="Logo"
                style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
              />
            </div>
              <span className="logo-text">CYBER</span>
            </div>
          </a>
           <button type="button" className="offcanvas-close-btn" onClick={() => setIsOffcanvasOpen(false)}>
            <div className="close-icon">
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="offcanvas-content">
            <h4 className="offcanvas-title">About us</h4>
            <p>
              I'm a full-stack developer passionate about creating accessible, performant, and user-friendly web applications. With expertise in React, Node.js, and modern JavaScript, I transform ideas into polished digital products that people enjoy using.
            </p>
          </div>
          <div className="offcanvas-contact-form">
            <h4 className="offcanvas-title">Get In Touch</h4>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Tell me about your project or collaboration idea"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit" className="common-btn" disabled={isSending}>
                  {isSending ? "Sending..." : "Submit Now"}
                </button>
                {/* Toast popup */}
                {showToast && (
                  <div
                    style={{
                      position: "fixed",
                      right: 20,
                      bottom: 20,
                      zIndex: 9999,
                      padding: "10px 14px",
                      borderRadius: 8,
                      color: "#fff",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                      background: toastType === "success" ? "#2ecc71" : "#e74c3c",
                      fontSize: 14,
                      maxWidth: 320,
                    }}
                    role="status"
                  >
                    {toastMessage}
                  </div>
                )}
            </form>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOffcanvasOpen && <div className="offcanvas-overlay" onClick={() => setIsOffcanvasOpen(false)}></div>}
    </>
  )
}

export default Header
