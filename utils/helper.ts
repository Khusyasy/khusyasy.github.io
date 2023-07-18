export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function rem(v: number) {
  return v * parseFloat(getComputedStyle(document.documentElement).fontSize)
}
