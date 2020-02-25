import animation from './components/animation.js';
import slick from 'slick-carousel';
import order from './components/order';

animation();

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

order();
