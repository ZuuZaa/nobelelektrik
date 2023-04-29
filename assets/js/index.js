const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector('.menu-button');
const collapsedNav = document.querySelector('.collapse-wrapper');
const closeButton = document.querySelector('.cross-button');
const languagesButton = document.querySelector('.languages');
const selectOptions = document.querySelector('.select-options');
const slider = document.querySelector('.slider-container');
const sliderButtons = document.querySelectorAll('.slider-btn');
let scrollTopPosition = 0;
let sliderIndex = 0;


// ---- header scroll behavior ---------
document.addEventListener("scroll", () => {
    scrollTopPosition = window.scrollY;
    scrollTopPosition > 90 ? navbar.classList.add('onscroll') : navbar.classList.remove('onscroll')
});


// ------ open menu -------- 
menuButton.addEventListener('click', () => {
    collapsedNav.classList.add('show-nav');
})

// ---- close menu --------
closeButton.addEventListener('click', () => {
    collapsedNav.classList.remove('show-nav');
})
window.addEventListener("resize", () => {
    collapsedNav.classList.remove('show-nav');
});

languagesButton.addEventListener('click', () => {
    languagesButton.classList.toggle('options-open')
})
selectOptions.addEventListener('click', e => {
    languagesButton.classList.remove('options-open')
    console.log(languagesButton)

})




