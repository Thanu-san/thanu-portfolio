import { useState } from 'react'
import useTypewriter from '../hooks/useTypewriter'
import PuzzleBoard from './PuzzleBoard'

export default function Hero() {
  const typed = useTypewriter('const thanu = new Student({ year: 2 });  // showcasing year-1 journey...', 50, 10000)
  const [key, setKey] = useState(0)
  const [busy, setBusy] = useState(false)

  const shuffle = () => {
    if (busy) return
    setBusy(true)
    setKey((k) => k + 1)
    setTimeout(() => setBusy(false), 3300)
  }

  return (
    <header className="hero">
      <div>
        <div className="tag"><i>$</i> whoami</div>
        <h1>Hi, I’m <span>Thanu</span>.</h1>
        <div className="type">{typed}</div>
        <p className="sub">
          Second-year IT student at ISTAD. This portfolio brings together my first-year learning journey, foundational skills, and projects—built one piece at a time.
        </p>
        <div className="btns">
          <a className="btn fill" href="#projects">View projects</a>
          <button className="btn" onClick={shuffle}>Shuffle puzzle ⟲</button>
        </div>
      </div>
      <div className="stage">
        <PuzzleBoard shuffleKey={key} />
        <div className="hint">psst… click a piece or shuffle it</div>
      </div>
    </header>
  )
}
