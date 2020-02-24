import { TimelineMax } from 'gsap/all';

export default function animation() {
  let tl = new TimelineMax();

  tl.fromTo('.js-header-animate', 2, {y: -300, opacity: 0}, {y: 0, opacity: 1});
  tl.fromTo('.js-hero-animate', 4, {opacity: 0}, {opacity: 1}, 0);
  tl.fromTo('.js-hero-img-animate', 2, {x: -2000, opacity: 0}, {x: 0, opacity: 1}, 0);
  tl.fromTo('.js-products-animate', 3, {y: 2000, opacity: 0}, {y: 0, opacity: 1}, 0);
  tl.fromTo('.js-preview-animate', 3, {x: 2000, opacity: 0}, {x: 0, opacity: 1}, 0);
}
