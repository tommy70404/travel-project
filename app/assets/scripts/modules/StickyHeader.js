import $ from 'jquery';
import waypotints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll'

export default class StickyHeader {
    constructor() {
        this.header = $('.site-header');
        this.triggerPoint = $('.large-hero__title');
        this.pageSection = $('.page-section,.link');
        this.headerLinks = $('.primary-nav a');
        this.createWaypoint();
        this.createPageSectionWaypoint();
        this.createSmoothScrolling();

    }
    createSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createWaypoint() {
        let currentItem = this;
        new Waypoint({
            element: currentItem.triggerPoint[0],
            handler: (direction) => {
                if(direction == 'down'){
                    currentItem.header.addClass('site-header__dark');
                } else if(direction == 'up') {
                    currentItem.header.removeClass('site-header__dark');
                }
            },
            offset: "0%"
        })
    }
    createPageSectionWaypoint() {
        let that = this;
        this.pageSection.each(function(){
            let currentPage = this;
            new Waypoint({
                element: currentPage ,
                handler: function(direction){
                    if(direction == 'down'){
                        const matchingHeaderLink = currentPage.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentPage ,
                handler: function(direction){
                    if(direction == 'up') {
                        const matchingHeaderLink = currentPage.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                offset: "-40%"
            });
        });
    }
} 