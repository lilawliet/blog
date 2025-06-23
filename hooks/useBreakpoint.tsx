import { useEffect, useState } from 'react'

function getBreakpoint() {
  const width = window.innerWidth
  if (width < 640) return 'sm'
  if (width >= 640 && width < 768) return 'md'
  if (width >= 768 && width < 1024) return 'lg'
  if (width >= 1024 && width < 1280) return 'xl'
  if (width >= 1280 && width < 1536) return '2xl'
  return '3xl'
}

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint())

  useEffect(() => {
    function handleResize() {
      setBreakpoint(getBreakpoint())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return breakpoint
}
