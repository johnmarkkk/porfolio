let burgerMenu = document.querySelector(".burger");
let burgerShow = document.querySelector(".duplicate");
let close = document.querySelector("#close");


burgerMenu.addEventListener('click', () => {
    burgerShow.style.display = "flex";
    burgerShow.style.right = 0;
    burgerMenu.style.display = "none";
});

close.addEventListener('click', () => {
    burgerShow.style.right = "-250px";
    burgerMenu.style.display = "flex";
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 549) {
        burgerShow.style.display = "none";
        burgerMenu.style.display = "flex";
    }
})