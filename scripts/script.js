const menuToggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');
const homeMenu = document.querySelector('.homeMenu');
const aboutMenu = document.querySelector('.aboutMenu');
const servicesMenu = document.querySelector('.servicesMenu');
const workMenu = document.querySelector('.workMenu');
const contactMenu = document.querySelector('.contactMenu');

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
    homeMenu.addEventListener('click', toggleMenu);
    aboutMenu.addEventListener('click', toggleMenu);
    servicesMenu.addEventListener('click', toggleMenu);
    workMenu.addEventListener('click', toggleMenu);
    contactMenu.addEventListener('click', toggleMenu);

}

function iniciarApp () {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        sidebar.classList.toggle('active');
    })
}

function toggleMenu() {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}

