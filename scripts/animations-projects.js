const tl = new TimelineMax();

tl.fromTo('.nav-links a', 1, {y: "-100%", opacity: "0" }, {y: "0%", opacity: "1", ease: Power2.easeInOut})
.fromTo('.logo', 1, {y: "-100%"}, {y: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.center', 1, {y: "-150%"}, {y: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.left', 1, {opacity: "0"}, {opacity: '1', ease: Power2.easeInOut}, "-=1")
.fromTo('.right', 1, {y: "100%", opacity: 0}, {y: '0%', opacity: 1, ease: Power2.easeInOut}, "-=1")