import MobileMenu from './modules/MoblieMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import HideNav from './modules/HideNav';



var mobileMenu = new MobileMenu();
new RevealOnScroll('.feature-item', '95%','-15%');
new RevealOnScroll('.testimonials', '80%', '-20%');
new StickyHeader();
new HideNav();



// mobileMenu.events();

