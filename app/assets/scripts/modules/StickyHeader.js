import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/jquery.waypoints';

$(document).ready(function() {

    $('.large-hero__nav').waypoint(function(direction) {

        if (direction === "down") {

            this.stickyHeader.addClass("large_hero__sticky-nav");

        } else {

            this.stickyHeader.removeClass("large_hero__sticky-nav");

        }

    }, {

        offset: '60px;'

    });

});