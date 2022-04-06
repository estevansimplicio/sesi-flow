$(document).ready(function () {

    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');
    isOpen = false;

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            if (isOpen == false) {
                navMenu.classList.add('show-menu');
                isOpen = true;
            } else {
                navMenu.classList.remove('show-menu');
                isOpen = false;
            }
        })
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
            isOpen = false;
        })
    }

});