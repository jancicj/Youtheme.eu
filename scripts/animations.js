/*SCROLL APPEAR */

function scrollAppear(){
    var introText = document.querySelector('.section1');
    var introPosition = introText.getBoundingClientRect().top * 1.7;
    var screenPosition = window.innerHeight;

    if(introPosition < screenPosition){
        introText.classList.add('js-appear');
    }
}
    
    window.addEventListener('scroll', scrollAppear);

function scrollAppear2(){
    var introText = document.querySelector('.section2');
    var introPosition = introText.getBoundingClientRect().top * 1.7;
    var screenPosition = window.innerHeight;

    if(introPosition < screenPosition){
        introText.classList.add('js-appear');
    }
}
    
    window.addEventListener('scroll', scrollAppear2);

function scrollAppear3(){
    var introText = document.querySelector('.section3');
    var introPosition = introText.getBoundingClientRect().top * 1.7;
    var screenPosition = window.innerHeight;

    if(introPosition < screenPosition){
        introText.classList.add('js-appear');
    }
}
    
    window.addEventListener('scroll', scrollAppear3);

function scrollAppear4(){
    var introText = document.querySelector('.section5');
    var introPosition = introText.getBoundingClientRect().top * 1.7;
    var screenPosition = window.innerHeight;

    if(introPosition < screenPosition){
        introText.classList.add('js-appear');
    }
}
    
    window.addEventListener('scroll', scrollAppear4);