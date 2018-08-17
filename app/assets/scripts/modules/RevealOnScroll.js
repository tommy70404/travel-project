import $ from "jquery";
import waypotints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


export default class RevealOnScroll  {
    constructor(node, offset, delOffset){
        this.itemToReveal = $(node);
        this.offsetValue = offset;
        this.deleteOffsetValue = delOffset;
        this.hiddenInitially();
        this.createWaypoints();
        this.deleteWaypoints()



    }

    hiddenInitially() {
        this.itemToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        let currentItem = this;
        this.itemToReveal.each((index, value) => {
            new Waypoint({
                element: value,
                handler: () => {
                    $(value).toggleClass('reveal-item--is-visible');
                },
                offset: currentItem.offsetValue

            });
        });
    }

    deleteWaypoints() {
        let currentItem = this;
        this.itemToReveal.each((index, value) => {
            new Waypoint({
                element: value,
                handler: () => {
                    $(value).toggleClass('reveal-item--is-visible');
                },
                offset: currentItem.deleteOffsetValue

            });
        });
    }
}