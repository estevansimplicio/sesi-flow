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
        loop: false,
        responsive: {
            0 : {items: 1},
            480: {items: 2},
            1000: {items: 3},
            1200: {items: 4}
            
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
        if($('.owl-carousel .owl-item').first().hasClass('active')){
            $('.switch-left i').css('background-color', 'rgb(219, 219, 219)');
            $('.switch-left i').css('cursor', 'default');  
        }else if($('.owl-carousel .owl-item').last().hasClass('active')){
            $('.switch-right i').css('background-color', 'rgb(219, 219, 219)');
            $('.switch-right i').css('cursor', 'default'); 
        }else{
            $('.switch-left i').css('background-color', 'var(--first-color-alt)');
            $('.switch-right i').css('background-color', 'var(--first-color-alt)');
            $('.switch-right i').css('cursor', 'pointer');  
            $('.switch-left i').css('cursor', 'pointer');
        }
    }

});