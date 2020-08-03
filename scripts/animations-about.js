const tl = new TimelineMax();

tl.fromTo('.nav-links a', 1, { opacity: "0" }, {opacity: "1", ease: Power2.easeInOut})
.fromTo('.logo', 1, {y: "-100%"}, {y: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.left', 1, {x: "-100%"}, {x: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.better', 1, {x: "200%"}, {x: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.aims', 1, {x: "200%"}, {x: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.div2', 1, {opacity: "0"}, {opacity: '1', ease: Power2.easeInOut}, "-=0.3")
