import $ from 'jquery';


export default class MobileMenu {
    constructor() {
        this.heroContent = $('.large-hero__text-content');
        this.siteHeader = $('.site-header');
        this.menuIcon = $('.site-header__menu-icon');
        this.menuContent = $('.site-header__menu-content');
        this.events();

    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        console.log(this);
        this.menuContent.toggleClass('site-header__menu-content--is-visible');
        this.siteHeader.toggleClass('site-header--is-extended');
        this.heroContent.toggleClass('large-hero__text-content--clicked-on-menu');
        this.menuIcon.toggleClass('site-header__menu-icon--close-x');



    }
}