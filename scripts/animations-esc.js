const tl = new TimelineMax();

tl.fromTo('.nav-links a', 1, { opacity: "0" }, {opacity: "1", ease: Power2.easeInOut})
.fromTo('.sectionesc', 1, {y: "-100%"}, {y: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.left h2', 1, {x: "-150%"}, {x: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.left p', 1, {y: "200%"}, {y: "0%", ease: Power2.easeInOut}, "-=1")
.fromTo('.imgEsc', 1, {x: "150%"}, {x: '0%', ease: Power2.easeInOut}, "-=1s")