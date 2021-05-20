import { useState, useEffect, useRef } from 'react'

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function useScrollDirection() {
  const [scrollPosition, setScrollPosition] = useState(null)
  const prevScrollPosition = usePrevious(scrollPosition)

  function handleGetDirection() {
    setScrollPosition(window.scrollY)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.addEventListener('scroll', handleGetDirection, false)
    return () => {
      window.removeEventListener('scroll', handleGetDirection, false)
    }
  }, [])

  return ({
    scrollDirection: (scrollPosition > prevScrollPosition) && (scrollPosition > 100) ? 'down' : 'up',
    scrollPosition,
  })
}
export default useScrollDirection
