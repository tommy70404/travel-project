import $ from "jquery";
import waypotints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

export default class StickyHeader {
    constructor() {
        this.header = $('.site-header');
        this.triggerPoint = $('.large-hero__title');
        this.createWaypoint();


    }
    createWaypoint() {
        let currentItem = this;
        console.log(currentItem)
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
    
} 