"use client"

import { useState } from "react"
import "./Subscribe.css"

const Subscribe = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Subscribed with email:", email)
    setEmail("")
  }

  return (
    <div className="subscribe-section">
      <div className="subscribe-overlay">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-10 m-auto">
              <div className="subscribe-text">
                <h3>SUBSCRIBE MY NEWSLETTER</h3>
                <form className="subscribe-form" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="common-btn">
                    Notify Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
