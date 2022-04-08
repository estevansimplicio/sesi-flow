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

    function linkAction(){
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu')
        isOpen = false;
    }

    navLink.forEach(n => n.addEventListener('click', linkAction));


    //----------------------OWL CAROUSEL----------------------//

    $("#slider-services").owlCarousel({
        items: 5,
        center: true,
        responsive: {
            0 : {items: 1.10},
            300: {items: 1.25},
            400: {items: 1.75},
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

        onTranslated:callBack
        
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel();

    $('.switch-right').click(function() {
        owl.trigger('next.owl.carousel', [400]);
    })

    $('.switch-left').click(function() {
        owl.trigger('prev.owl.carousel', [400]);
    })

    $('.switch-left i').css('background-color', 'rgb(219, 219, 219)');
    $('.switch-left i').css('cursor', 'default');

    function callBack(){
        if($('.owl-carousel .owl-item').first().hasClass('active center')){
            $('.switch-left i').css('background-color', 'rgb(219, 219, 219)');
            $('.switch-left i').css('cursor', 'default');  
        }else if($('.owl-carousel .owl-item').last().hasClass('active center')){
            $('.switch-right i').css('background-color', 'rgb(219, 219, 219)');
            $('.switch-right i').css('cursor', 'default'); 
        }else{
            $('.switch-left i').css('background-color', 'rgb(53, 211, 219)');
            $('.switch-right i').css('background-color', 'rgb(53, 211, 219)');
            $('.switch-right i').css('cursor', 'pointer');  
            $('.switch-left i').css('cursor', 'pointer');
        }
    }

});