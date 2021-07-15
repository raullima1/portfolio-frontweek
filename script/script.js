document.addEventListener('DOMContentLoaded', () => {
  var tl = gsap.timeline();

  tl
  .from(".menu-1", {
    duration: 1,
    y: -50,
    opacity: 0,
    delay: 1
  })
  .from(".menu-2", {
    duration: 1,
    y: -50,
    opacity: 0,
  }, "-=0.8")
  .from(".menu-3", {
    duration: 1,
    y: -50,
    opacity: 0,
  }, "-=0.8")
  .from(".menu-4", {
    duration: 1,
    y: -50,
    opacity: 0,
  }, "-=0.8")
  .from(".menu-5", {
    duration: 1,
    y: -50,
    opacity: 0,
  }, "-=0.8")
  .from(".menu-6", {
    duration: 1,
    y: -50,
    opacity: 0,
  }, "-=0.8")
  .from(".menu-7", {
    duration: 1,
    y: -50,
    opacity: 0,
  }, "-=0.8")
  .from(".container-item div", {
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: {each: 0.2},
    ease: "power3.out",
  }, "-=0.8")
  .from(".container-item img", {
    duration: 1,
    x: 300,
    opacity: 0,
    ease: "power3.out",
  }, "-=0.8")

  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#section-works div", {
    duration: 1,
    x: -300,
    opacity: 0,
    stagger: {each: 0.5},
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#section-works",
    }
  
  });
  
})