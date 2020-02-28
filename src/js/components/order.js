import Order from '../classes/Product';

export default function() {
  const products = document.querySelectorAll('.js-product');

  products.forEach(product => {
    const order = new Order(product);

    product.addEventListener('submit', (e) => {
      e.preventDefault();
      order.submit();

    });
  });
}
