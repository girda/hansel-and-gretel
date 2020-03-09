import Bag from '../classes/Bag';

export default () => {
  const elementBag = document.querySelector('.js-bag');
  window.bag = new Bag(elementBag);
  bag.updateLength('orders');

  
};
