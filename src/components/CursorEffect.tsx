'use client'

import { useEffect, useState } from 'react'

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Cursor principal (pequeno) */}
      <div
        className="pointer-events-none fixed z-[9999] w-4 h-4 rounded-full bg-indigo-500 mix-blend-screen transition-transform duration-100 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Cursor secundário (grande com delay) */}
      <div
        className="pointer-events-none fixed z-[9998] w-8 h-8 rounded-full border-2 border-indigo-400/50 mix-blend-screen transition-all duration-300 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Efeito de rastro/glow */}
      <div
        className="pointer-events-none fixed z-[9997] w-32 h-32 rounded-full bg-indigo-600/20 blur-2xl transition-all duration-500 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}

export default CursorEffect
