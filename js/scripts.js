console.log('OK');
const topLid = document.querySelector("#topLid");

topLid.addEventListener("click", () => {
  topLid.style.transform = "rotate(-220deg)";
  tl2.resume();
  tl3.resume();
});

let tl1 = gsap.timeline();
let tl2 = gsap.timeline();
let tl3 = gsap.timeline();

tl1
  .from("#stack", {
    y: -1000
  })
  .from("#topBox", {
    y: -1000
  })
  .from("#topLid", {
    y: -1000
  });

tl2.pause();

tl2
  .from("#g1", {
    x: 250,
    y: 150,
    opacity: 0
  })
  .from("#o1", {
    x: 100,
    y: 150,
    opacity: 0
  })
  .from("#o2", {
    x: 0,
    y: 150,
    opacity: 0
  })
  .from("#g2", {
    x: -100,
    y: 150,
    opacity: 0
  })
  .from("#l", {
    x: -200,
    y: 150,
    opacity: 0
  })
  .from("#e", {
    x: -250,
    y: 150,
    opacity: 0
  });

tl3.pause();

tl3
  .to("#g1", {
    x: 120,
    y: 150,
    opacity: 1,
    delay: 4
  })
  .to("#o1", {
    x: 120,
    y: 150,
    opacity: 1
  })
  .to("#o2", {
    x: 50,
    y: 150,
    opacity: 1
  })
  .to("#g2", {
    x: -20,
    y: 150,
    opacity: 1
  })
  .to("#l", {
    x: -100,
    y: 150,
    opacity: 1
  })
  .to("#e", {
    x: -140,
    y: 150,
    opacity: 1
  })
  .to("#topLid", {
    rotate: 0,
    duration: 5
  });
