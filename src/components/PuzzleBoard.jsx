import { useEffect, useMemo, useState } from 'react'
import { piecePath } from '../utils/puzzlePath'
import skills from '../data/skills'

const S = 100, R = 3, C = 4
const rn = () => Math.random() * 2 - 1
const sign = () => (Math.random() < 0.5 ? 1 : -1)
const scatter = () => skills.map(() => ({ tx: rn() * 170, ty: rn() * 150, r: rn() * 80 }))
const flat = skills.map(() => ({ tx: 0, ty: 0, r: 0 }))

// shuffleKey: 0 on first load; increase it to scatter and rebuild the puzzle.
export default function PuzzleBoard({ shuffleKey }) {
  const paths = useMemo(() => {
    const h = Array.from({ length: R + 1 }, (_, r) => Array.from({ length: C }, () => (r === 0 || r === R ? 0 : sign())))
    const v = Array.from({ length: R }, () => Array.from({ length: C + 1 }, (_, c) => (c === 0 || c === C ? 0 : sign())))
    return skills.map((_, i) => {
      const r = Math.floor(i / C), c = i % C
      return piecePath(S, h[r][c], -v[r][c + 1], -h[r + 1][c], v[r][c])
    })
  }, [])

  const [pos, setPos] = useState(scatter)
  const [solving, setSolving] = useState(false)
  const [wig, setWig] = useState(-1)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setPos(flat); return }
    setSolving(false)
    if (shuffleKey > 0) setPos(scatter())
    const wait = shuffleKey === 0 ? 350 : 1300
    const t1 = setTimeout(() => { setSolving(true); setPos(flat) }, wait)
    const t2 = setTimeout(() => setSolving(false), wait + 1900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [shuffleKey])

  const poke = (i) => { setWig(i); setTimeout(() => setWig(-1), 200) }

  return (
    <svg className="puzzle" viewBox="-30 -30 460 360" aria-label="Skills puzzle">
      {skills.map((label, i) => {
        const r = Math.floor(i / C), c = i % C, p = pos[i]
        return (
          <g key={label} transform={`translate(${c * S} ${r * S})`}>
            <g
              className={`p k${(r + c) % 4}`}
              onClick={() => poke(i)}
              style={{
                '--tx': `${p.tx}px`,
                '--ty': `${p.ty}px`,
                '--r': wig === i ? '12deg' : `${p.r}deg`,
                transitionDelay: solving ? `${i * 70}ms` : '0ms',
              }}
            >
              <path d={paths[i]} />
              <text x={S / 2} y={S / 2} className={label.length > 8 ? 'long' : ''}>{label}</text>
            </g>
          </g>
        )
      })}
    </svg>
  )
}
