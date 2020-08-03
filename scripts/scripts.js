const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = '';
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        });
        //Burger ANIMATION
        burger.classList.toggle('toggle');
    });
    
    
}

navSlide();

bttbtn = document.getElementById('backToTop');

window.onscroll = function() {btnAppear()};

function btnAppear() {
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
        bttbtn.style.display = 'block';
    } else {
        bttbtn.style.display = 'none';
    }
}
function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var timeOut;
function scrollToTop() {
    if (document.body.scrollTop !=0 || document.documentElement.scrollTop != 0) {
        window.scrollBy(0, -50);
        timeOut = setTimeout ('scrollToTop()', 7);
    } else clearTimeout (timeOut);
}

