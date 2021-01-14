/*
    HAMBURGER MOBILE OVERLAY
*/

// Open when someone clicks hamburger icon
function openNav() {
    document.querySelector('.cu-mobile-nav').style.width = "100%";
}

// Close when someone clicks on the "x" symbol inside the overlay
function closeNav() {
    document.querySelector('.cu-mobile-nav').style.width = "0%";
}

const hamburgerIcon = document.querySelector('.cu-hamburger');
const closeIcon = document.querySelector('.cu-close');

hamburgerIcon.onclick = openNav;
closeIcon.onclick = closeNav;

/*
    STICKY NAV HEADER
*/

window.onscroll = function () { navScroll() };

function navScroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('.cu-header-wrapper').classList.add("sticky")
    } else {
        document.querySelector('.cu-header-wrapper').classList.remove("sticky")
    }
}

/*
    CAROUSEL
*/

const card = document.querySelector('.cu-carousel li');
const cards = document.querySelectorAll('.cu-carousel li');
const carousel = document.querySelector('.cu-carousel');
let cardWidth = card.clientWidth;
let counter = 0;

window.addEventListener("resize", e => (cardWidth = card.offsetWidth));


/* Dots  */

const dots = document.querySelectorAll('.cu-dots .dot');

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
        for (const dot of dots) {
            dot.classList.remove('active')
        }
        this.classList.add('active')
        dotSlide(i);
    })
}

// Move Slide
function dotSlide(num) {
    carousel.style.transform = `translateX(${num * -cardWidth}px)`
    counter = num;
    arrowActive();
}

/* Arrows  */

const next = document.querySelector('.r-arrow');
const prev = document.querySelector(".l-arrow");


// Next Arrow
next.addEventListener('click', e => {
    if (counter < cards.length-1 ) {
        counter++;
        carousel.style.transform = `translateX(${counter * -cardWidth}px)`; 
        arrowActive();
        dotActive(counter)
    } 
})

// Previous 
prev.addEventListener('click', e => {
    if (counter >= 1) {
        counter-= 1;
        carousel.style.transform = `translateX(${counter * -cardWidth}px)`;  
        arrowActive()
        dotActive(counter)
    } 
})

// Check to see if arrow is inactive
function arrowActive() {
    if (counter > 0) {
        prev.classList.remove('not-active');
    } else {
        prev.classList.add('not-active');
    }

    if (counter < cards.length - 1) {
        next.classList.remove('not-active');
    } else {
        next.classList.add('not-active');
    }
}

function dotActive(num) {
    for (const dot of dots) {
        dot.classList.remove('active')
    }
    dots[num].classList.add('active')
}

