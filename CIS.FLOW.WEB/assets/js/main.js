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


    //----------------------OWL CAROUSEL----------------------//

    $("#slider-services").owlCarousel({
        items: 5,
        center: true,
        responsive: {
            0 : {items: 1.5},
            500: {items: 2},
            600: {items: 2.5},
            700: {items: 3.25},
            900: {items: 3.75},
            1000: {items: 4.5},
            1200: {items: 5},
            1300: {items: 5.5},
            1500: {items: 6.25},
            1700: {items: 7.5},
            2000: {items: 8.5},
        },
        
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel();

    $('.switch-right').click(function() {
        owl.trigger('next.owl.carousel', [600]);
    })

    $('.switch-left').click(function() {
        owl.trigger('prev.owl.carousel', [600]);
    })

});