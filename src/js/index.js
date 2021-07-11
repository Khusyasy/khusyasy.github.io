import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

var typed = new Typed("#typing-box", {
  stringsElement: "#typing-text",
  typeSpeed: 30,
  startDelay: 800,
  backSpeed: 20,
  backDelay: 400,
});

// AOS.init();
AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  easing: "ease-in-out",
  once: false,
  mirror: true,
});

Fancybox.bind("img", {});