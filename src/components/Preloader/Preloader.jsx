"use client"

import { useEffect, useState } from "react"
import "./Preloader.css"

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="preloader">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
      </svg>
      <h5 className="preloader-text">Loading</h5>
    </div>
  )
}

export default Preloader
