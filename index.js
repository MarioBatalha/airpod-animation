const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.scene({
    duration: 8000,
    triggerElement: intro,
    
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller)

const textAnimation = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0})    
    
let scene2 = new ScrollMagic.scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: null 
})
    .setTween(textAnimation)
    .addTo(controller)

let accelAmount = 0.1;
let scrollpos = 0;
let delay = 0;


scene.on('update'), e => {
    scrollpos = e.scrollPos / 1000;
} 

setInterval(() => {
    delay += (scrollpos - delay) * accelAmount;

    video.currentTime = delay;
}, 33.3)

