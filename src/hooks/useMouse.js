import { useState, useEffect} from 'react'
const isDesktop = typeof window !== "undefined" && window.innerWidth > 768

function useMouse() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mouseStatus, setMouseStatus] = useState(null)
  console.log({mousePosition})

  function handleMouseDown() {
    setMouseStatus("mousedown")
  }

  function handleMouseUp() {
    setMouseStatus("mouseup")
  }
  function handleMouseOut() {
    setMousePosition({ x: 0, y: 0 })
    setMouseStatus("mouseup")
  }

  function handleMouseMove(e) {
    setMousePosition({
      x: e.clientX || (e?.touches?.[0]?.clientX) || 0,
      y: e.clientY || (e?.touches?.[0]?.clientY) || 0,
    })
  }

  useEffect(() => {
    if(isDesktop){
      window.addEventListener("mousedown", handleMouseDown)
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("mouseout", handleMouseOut)
    }
    return () => {
      if(isDesktop){
        window.removeEventListener("mousedown", handleMouseDown)
        window.removeEventListener("mouseup", handleMouseUp)
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("mouseout", handleMouseOut)
      }
    }
  }, [])

  return {
    mousePosition,
    mouseStatus,
  }
}

export default useMouse