import animation from './components/animation.js';
import slick from 'slick-carousel';

animation();

$('.js-hero-slider').slick({
  dots: true
});

$('.js-comments-slider').slick({
  slidesToShow: 4
});
