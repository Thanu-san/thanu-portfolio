import { useEffect, useState } from 'react'

export default function useTypewriter(text, speed = 55, pauseMs = 10000) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (n < text.length) {
      const t = setTimeout(() => setN((prev) => prev + 1), speed)
      return () => clearTimeout(t)
    }

    if (pauseMs > 0) {
      const resetTimer = setTimeout(() => {
        setN(0)
      }, pauseMs)
      return () => clearTimeout(resetTimer)
    }
  }, [n, text, speed, pauseMs])

  return text.slice(0, n)
}

