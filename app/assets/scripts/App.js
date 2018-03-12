$(document).ready(function() {

    /* StickyHeader */

    $('#features').waypoint(function(direction) {

        if (direction === "down") {

            $('.large-hero__nav').addClass('large-hero__sticky-nav');

        } else {

            $('.large-hero__nav').removeClass('large-hero__sticky-nav');

        }

    }, {

        offset: '60px;'

    });

    /* ButtonScroll */

    $('.btn--scroll-to-sign-up'). click(function() {

        $('html, body').animate({scrollTop: $('#sign-up').offset().top}, 1000);

    });

    $('.btn--scroll-to-features'). click(function() {

        $('html, body').animate({scrollTop: $('#features').offset().top}, 1000);

    });

    $('.btn--scroll-to-how-it-works'). click(function() {

        $('html, body').animate({scrollTop: $('#how-it-works').offset().top}, 1000);

    });

    $('.btn--scroll-to-cities'). click(function() {

        $('html, body').animate({scrollTop: $('#cities').offset().top}, 1000);

    });

    /* Animations */

    $('.features__animated--fade-in').waypoint(function(direction) {

        $('.features__animated--fade-in').addClass('animated fadeIn');

    }, {

        offset: '70%'

    });

    $('.how-it-works__animated--fade-in').waypoint(function(direction) {

        $('.how-it-works__animated--fade-in').addClass('animated fadeInUp');

    }, {

        offset: '70%'

    });

    $('.cities__animated--fade-in').waypoint(function(direction) {

        $('.cities__animated--fade-in').addClass('animated fadeIn');

    }, {

        offset: '70%'

    });

    $('.sign-up__animated--pulse').waypoint(function(direction) {

        $('.sign-up__animated--pulse').addClass('animated pulse');

    }, {

        offset: '70%'

    });

});