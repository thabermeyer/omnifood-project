$(document).ready(function() {

    $('.large-hero__nav').waypoint(function(direction) {

        if (direction === "down") {

            $('nav').addClass("large_hero__sticky-nav");

        } else {

            $('nav').removeClass("large_hero__sticky-nav");

        }

    }, {

        offset: '60px;'

    });

});