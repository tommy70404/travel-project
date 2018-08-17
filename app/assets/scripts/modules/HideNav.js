import $ from "jquery";
import waypotints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

export default class HideNav {
    constructor() {
        this.target = $('.site-header');
        this.triggerPoint = $("div:gt(8)");
        this.createWaypoint();
    }

    createWaypoint() {
        let currentItem = this;
        console.log(this.triggerPoint)
        this.triggerPoint.each((index,value) => {
            new Waypoint ({
                element: value,
                handler: (direction) => {
                    if(currentItem.target.hasClass("site-header__dark")) {
                        if(direction == 'down') {
                            currentItem.target.addClass('site-header__hide');
                        } else {
                            currentItem.target.removeClass('site-header__hide');
                        }
                    } else {
                        currentItem.target.removeClass('site-header__hide');
                    }
                },
                offset: "0%"
            })
        })

    }
}