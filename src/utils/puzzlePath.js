// Draws one jigsaw edge. s: 0 = flat, 1 = knob sticks out, -1 = knob goes in.
export function edge(S, x, y, dx, dy, nx, ny, s) {
  const P = (u, w) => `${(x + dx * u * S + nx * s * w * S).toFixed(1)} ${(y + dy * u * S + ny * s * w * S).toFixed(1)}`
  if (!s) return `L${P(1, 0)}`
  return `L${P(.4, 0)}C${P(.4, .1)} ${P(.3, .1)} ${P(.3, .2)}C${P(.3, .32)} ${P(.7, .32)} ${P(.7, .2)}C${P(.7, .1)} ${P(.6, .1)} ${P(.6, 0)}L${P(1, 0)}`
}

// Full piece outline (SVG path string) from the four edge signs.
export function piecePath(S, top, right, bottom, left) {
  return `M0 0${edge(S, 0, 0, 1, 0, 0, -1, top)}${edge(S, S, 0, 0, 1, 1, 0, right)}${edge(S, S, S, -1, 0, 0, 1, bottom)}${edge(S, 0, S, 0, -1, -1, 0, left)}Z`
}
