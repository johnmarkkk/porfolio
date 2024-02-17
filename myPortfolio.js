let burgerMenu = document.querySelector(".burger");
let burgerShow = document.querySelector(".burger-menu");
let close = document.querySelector("#close");


burgerMenu.addEventListener('click', () => {
    burgerShow.style.display = "flex";
});

close.addEventListener('click', () => {
    burgerShow.style.display = "none";
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 549) {
        burgerShow.style.display = "none";
    }
})