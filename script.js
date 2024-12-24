// Navbar interaction
let menu = document.querySelector('#menu');
let overlay = document.querySelector('.overlay-mobile');
let menuBtn = document.querySelector('#open-sidebar');
let closeBtn = document.querySelector('#close-sidebar');
let dropbtn = document.querySelector('.dropbtn');
let dropdownContent = document.querySelector('.dropdown-content');

menuBtn.addEventListener('click', () => {
    menu.classList.add('open');
    overlay.classList.add('show');
});
closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('show');
});
dropbtn.addEventListener('click', () => {
    dropdownContent.classList.add('show');
});