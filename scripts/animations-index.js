
const tl = new TimelineMax();

tl.fromTo('.nav-links a', 1, { x: "1000%" }, {x: "0%", ease: Power2.easeInOut})
.fromTo('.logo', 1, {x: "-100%"}, {x: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.cover-1', 1, {y: "-200%"}, {y: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.cover-2', 1, {y: "150%"}, {y: '0%', ease: Power2.easeInOut}, "-=0.5")
