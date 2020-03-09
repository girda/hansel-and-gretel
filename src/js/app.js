import animation from './components/animation.js';
import 'slick-carousel';
import order from './components/order';
import Counter from './classes/Counter';
import initBag from './components/bag';



const counters = document.querySelectorAll('.js-counter');
if (counters.length) counters.forEach(counter => new Counter(counter));


initBag();
animation();
order();

$('.js-hero-slider').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  cssEase: 'linear'
});

$('.js-comments-slider').slick({
  slidesToShow: 4
});
