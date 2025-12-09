"use client"

import { useState, useEffect } from "react"
import { init, send } from "@emailjs/browser" 
import "./Design.css"

const Design = () => {
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
      phone: formData.phone,
      message: formData.message,
    }

    try {
      const result = await send("service_o7vyipl", "template_zkr9q8o", templateParams)
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

  return (
    <section className="design-section" id="counter">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="design-text">
              {/* human-centered design heading and description */}
              <h2>
                Thoughtful Design <span>for real people</span>
              </h2>
              <p>
                I design and build accessible, user-centered interfaces that solve real problems. I prioritize clarity,
                performance, and collaboration to turn ideas into polished, responsive products people enjoy using.
              </p>
            </div>
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="design-counter">
                  <span className="counter-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="60" viewBox="0 0 75 60" fill="none">
                      <path
                        d="M29.6018 60.0002C29.3531 60.0002 29.1043 59.8743 28.9178 59.7484L0.248601 30.6613C-0.124534 30.2835 -0.124534 29.7169 0.248601 29.3392L28.9799 0.252066C29.3531 -0.125689 29.9128 -0.125689 30.2859 0.252066L58.9551 29.2762C59.3282 29.654 59.3282 30.2206 58.9551 30.5983L30.2859 59.6854C30.0993 59.8743 29.8506 60.0002 29.6018 60.0002Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <h3>
                    <span className="counter">30</span>+
                  </h3>
                  <p>Complete project</p>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="design-counter">
                  <span className="counter-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="60" viewBox="0 0 75 60" fill="none">
                      <path
                        d="M70.8102 60.0031H4.19006C3.6314 60.0031 3.14258 59.3089 3.14258 58.5155C3.14258 57.7221 3.6314 57.0279 4.19006 57.0279H69.8325L72.6956 4.46591L51.6761 21.8213C51.1873 22.218 50.5588 22.0196 50.2794 21.3254C50.0001 20.6312 50.1398 19.7386 50.6286 19.3419L73.394 0.59814C73.7431 0.30062 74.1621 0.30062 74.5113 0.59814C74.8605 0.895661 75.0001 1.39153 75.0001 1.98657L71.8577 58.7138C71.7878 59.4081 71.3688 60.0031 70.8102 60.0031Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <h3>
                    <span className="counter">800</span>+
                  </h3>
                  <p>Client review</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="design-form">
              {/* clearer, collaboration-focused contact intro */}
              <h2>Interested in collaborating?</h2>
              <p>
                Whether you need UI design, front-end development, or product thinking, send a message and let's
                discuss how to bring your idea to life.
              </p>
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
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
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
      </div>
    </section>
  )
}

export default Design
