const tl = new TimelineMax();

tl.fromTo('.nav-links a', 1, { opacity: "0" }, {opacity: "1", ease: Power2.easeInOut})
.fromTo('.logo', 1, {y: "-100%"}, {y: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.narrowTxt', 1, {y: "-200%"}, {y: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.contactIcons', 1, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut}, "-=0.7")
.fromTo('.mapTxt', 1, {y: "100%"}, {y: '0%', ease: Power2.easeInOut}, "-=1.35s")