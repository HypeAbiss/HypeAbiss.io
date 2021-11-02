/*~~~~~~~~~~ Show Menu ~~~~~~~~~~*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*~~~~~~~~~~ Remove Menu Mobile ~~~~~~~~~~*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*~~~~~~~~~~ Home Swiper ~~~~~~~~~~*/
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

/*~~~~~~~~~~ Merubah Background Header ~~~~~~~~~~*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*~~~~~~~~~~ Item Swiper ~~~~~~~~~~*/
let itemSwiper = new Swiper(".item-swiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });

/*~~~~~~~~~~ New Swiper ~~~~~~~~~~*/
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: 'true',
});

/*~~~~~~~~~~ Scroll Section link Aktif ~~~~~~~~~~*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*~~~~~~~~~~ Show Scroll Up | Kembali ke atas ~~~~~~~~~~*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*~~~~~~~~~~ Drag and Drop ~~~~~~~~~~*/
const dropItems = document.getElementById('drop-item')

new Sortable(dropItems, {
    animation: 350,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
});

/*~~~~~~~~~~ Show Reveal Animation ~~~~~~~~~~*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal('.home-swiper, .new-swiper, .newsletter__container, .creator__container')
sr.reveal('.category__data, .footer__content',{interval: 100})
sr.reveal('.about__data, .discount__img, .drop__card', {origin: 'left'})
sr.reveal('.about__img, .discount__data, .drop__container', {origin: 'right'})