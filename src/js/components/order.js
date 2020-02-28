import Product from '../classes/Product';

export default function() {
  const products = document.querySelectorAll('.js-product');

  products.forEach(product => {
    const order = new Product(product);

    product.addEventListener('submit', (e) => {
      e.preventDefault();
      order.submit();
      
    });
  });
}
