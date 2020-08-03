const tl = new TimelineMax();

tl.fromTo('.nav-links a', 1, { opacity: "0" }, {opacity: "1", ease: Power2.easeInOut})
.fromTo('.logo', 1, {y: "-100%"}, {y: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.section1', 1, {y: "-100%"}, {y: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.albert', 1, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1")
.fromTo('.vanessa', 1, {x: "100%"}, {x: '0%', ease: Power2.easeInOut}, "-=1s")