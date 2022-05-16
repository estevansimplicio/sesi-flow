$(document).ready(function () {

    //----------------------SANDWICH MENU----------------------//
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


    const navLink = document.querySelectorAll('.nav-link');

    function linkAction() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu')
        isOpen = false;
    }

    navLink.forEach(n => n.addEventListener('click', linkAction));


});