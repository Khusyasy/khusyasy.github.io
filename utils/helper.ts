export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function rem(v: number) {
  return v * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

export function scrollToQuery(querySelector: string) {
  const element = document.querySelector(querySelector);
  const headerOffset = rem(8);
  const currScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + currScroll - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
