"use client"

import { useEffect, useRef } from "react"
import "./MagicCursor.css"

const MagicCursor = () => {
  const cursorRef = useRef(null)
  const ballRef = useRef(null)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1
      cursorY += (mouseY - cursorY) * 0.1

      if (ballRef.current) {
        ballRef.current.style.transform = `translate(-50%, -50%) translate(${cursorX}px, ${cursorY}px)`
      }

      requestAnimationFrame(animateCursor)
    }

    const handleMouseEnter = () => {
      if (ballRef.current) {
        ballRef.current.style.width = "60px"
        ballRef.current.style.height = "60px"
        ballRef.current.style.backgroundColor = "rgba(59, 130, 246, 0.2)"
      }
    }

    const handleMouseLeave = () => {
      if (ballRef.current) {
        ballRef.current.style.width = "30px"
        ballRef.current.style.height = "30px"
        ballRef.current.style.backgroundColor = "transparent"
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    animateCursor()

    // Add hover effects to interactive elements
    const hoverElements = document.querySelectorAll("a, button, .portfolio-item, .blog-item")
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <div id="magic-cursor" ref={cursorRef}>
      <div id="ball" ref={ballRef}></div>
    </div>
  )
}

export default MagicCursor
