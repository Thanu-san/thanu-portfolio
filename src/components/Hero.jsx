import { useState } from 'react'
import useTypewriter from '../hooks/useTypewriter'
import PuzzleBoard from './PuzzleBoard'

export default function Hero() {
  const typed = useTypewriter('const dev = new Student();  // loading skills...')
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
        <h1>Hi, I’m <span>Your Name</span>.</h1>
        <div className="type">{typed}</div>
        <p className="sub">IT student who loves solving problems one piece at a time. Every skill, project and bug fixed is a piece of the bigger picture.</p>
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
