import { useEffect, useRef } from 'react'
import { piecePath } from '../utils/puzzlePath'

const S = 20, T = 4, N = 16

export default function CursorSymbiote() {
  const ref = useRef(null)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const cv = ref.current
    const x = cv.getContext('2d')
    const dpr = Math.min(devicePixelRatio || 1, 2)
    let W = 0, H = 0, fr = 0, raf = 0
    const size = () => {
      W = innerWidth; H = innerHeight
      cv.width = W * dpr; cv.height = H * dpr
      x.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    size()

    const pc = new Path2D(piecePath(S, 1, 1, -1, -1))
    let cols = ['#3ddc97', '#5aa9ff', '#e879f9', '#fbbf24']
    const readCols = () => {
      const cs = getComputedStyle(document.documentElement)
      cols = ['--a', '--b', '--c', '--d'].map((n, i) => cs.getPropertyValue(n).trim() || cols[i])
    }
    readCols()

    const piece = (px, py, a, k, col, al) => {
      x.save()
      x.translate(px, py); x.rotate(a); x.scale(k, k); x.translate(-S / 2, -S / 2)
      x.globalAlpha = al; x.fillStyle = col; x.strokeStyle = col; x.lineWidth = 1.6 / k
      x.fill(pc); x.stroke(pc)
      x.restore()
    }

    const m = { x: W * 0.6, y: H * 0.4 }
    const bits = []
    const tens = Array.from({ length: T }, () => Array.from({ length: N }, () => ({ x: m.x, y: m.y })))
    const amb = Array.from({ length: 28 }, (_, i) => {
      const hx = Math.random() * W, hy = Math.random() * H
      return { hx, hy, x: hx, y: hy, vx: 0, vy: 0, a: Math.random() * 6, va: (Math.random() - 0.5) * 0.01, k: 0.7 + Math.random() * 1.1, c: i % 4 }
    })

    const onMove = (e) => { m.x = e.clientX; m.y = e.clientY }
    const onDown = (e) => {
      for (let q = 0; q < 12; q++) {
        const an = Math.random() * 6.283, sp = 2 + Math.random() * 4
        bits.push({ x: e.clientX, y: e.clientY, vx: Math.cos(an) * sp, vy: Math.sin(an) * sp, a: Math.random() * 6, va: (Math.random() - 0.5) * 0.3, l: 1, k: 0.5 + Math.random() * 0.6, c: q % 4 })
      }
    }
    addEventListener('resize', size)
    addEventListener('pointermove', onMove)
    addEventListener('pointerdown', onDown)

    const frame = () => {
      fr++
      if (fr % 90 === 0) readCols()
      const t = fr / 60
      x.clearRect(0, 0, W, H)

      // background pieces get pushed away by the cursor
      amb.forEach((o) => {
        const dx = o.x - m.x, dy = o.y - m.y, d = Math.hypot(dx, dy) || 1
        let near = 0
        if (d < 170) { near = 1 - d / 170; o.vx += (dx / d) * near * 1.4; o.vy += (dy / d) * near * 1.4; o.va += near * 0.01 }
        o.vx += (o.hx - o.x) * 0.004; o.vy += (o.hy - o.y) * 0.004
        o.vx *= 0.92; o.vy *= 0.92; o.va *= 0.97
        o.x += o.vx; o.y += o.vy; o.a += o.va + 0.002
        piece(o.x, o.y, o.a, o.k, cols[o.c], 0.1 + near * 0.45)
      })

      // symbiote tendrils made of puzzle pieces
      tens.forEach((ch, ti) => {
        const ang = t * (1.4 + ti * 0.25) * (ti % 2 ? -1 : 1) + ti * 1.57
        const rad = 16 + Math.sin(t * 2 + ti) * 10
        const h = ch[0]
        h.x += (m.x + Math.cos(ang) * rad - h.x) * 0.22
        h.y += (m.y + Math.sin(ang) * rad - h.y) * 0.22
        for (let j = 1; j < N; j++) {
          const p = ch[j - 1], n = ch[j]
          const wob = Math.sin(t * 3 + j * 0.7 + ti * 2) * 2.2
          const dx = p.x - n.x, dy = p.y - n.y, d = Math.hypot(dx, dy) || 1
          n.x += dx * 0.3 - (dy / d) * wob * 0.2
          n.y += dy * 0.3 + (dx / d) * wob * 0.2
        }
        for (let j = N - 1; j >= 0; j--) {
          const q = ch[j], pr = ch[Math.max(j - 1, 0)]
          const r = Math.atan2(pr.y - q.y, pr.x - q.x) + t * (1 + j * 0.05)
          const f = 1 - j / N, col = cols[(ti + (j >> 2)) % 4]
          x.shadowColor = col; x.shadowBlur = j < 3 ? 14 : 0
          piece(q.x, q.y, r, 0.28 + f * 0.75, col, 0.12 + f * 0.3)
        }
      })
      x.shadowBlur = 0

      // click burst
      for (let i = bits.length - 1; i >= 0; i--) {
        const b = bits[i]
        b.x += b.vx; b.y += b.vy; b.vx *= 0.95; b.vy *= 0.95; b.a += b.va; b.l -= 0.018
        if (b.l <= 0) { bits.splice(i, 1); continue }
        piece(b.x, b.y, b.a, b.k, cols[b.c], b.l * 0.8)
      }
      x.globalAlpha = 1
      raf = requestAnimationFrame(frame)
    }
    frame()

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', size)
      removeEventListener('pointermove', onMove)
      removeEventListener('pointerdown', onDown)
    }
  }, [])

  return <canvas id="fx" ref={ref} aria-hidden="true" />
}
