const navbar = document.querySelector(".navbar");
let scrollTopPosition = 0;


document.addEventListener("scroll", () => {
    scrollTopPosition = window.scrollY;
    scrollTopPosition > 90 ? navbar.classList.add('onscroll') : navbar.classList.remove('onscroll')
});