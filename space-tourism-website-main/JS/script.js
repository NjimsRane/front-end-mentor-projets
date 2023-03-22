const hamburgerMenu = document.getElementById('hamburger-menu');
const menuList = document.querySelector('.menu-list');
const hamburgerOpen = document.getElementById('hamburger-open');
const hamburgerClose = document.getElementById('hamburger-close');


hamburgerOpen.addEventListener('click', () => {
    hamburgerOpen.style.display = 'none';
    hamburgerClose.style.display = 'block';
    menuList.classList.add('active');
});
hamburgerClose.addEventListener('click', () => {
    hamburgerOpen.style.display = 'block';
    hamburgerClose.style.display = 'none';
    menuList.classList.remove('active');
});