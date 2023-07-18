export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function rem(v: number) {
  return v * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

export function scrollToQuery(querySelector: string) {
  const scrollEL = document.getElementById("content-scroll");
  const element = document.querySelector(querySelector);
  const headerOffset = rem(8);
  if (scrollEL && element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;
    scrollEL.scrollTo({
      top: (offsetPosition),
      behavior: "smooth",
    });
  }
}

export function scrollToTop() {
  const scrollEL = document.getElementById("content-scroll");
  if (scrollEL) {
    scrollEL.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
