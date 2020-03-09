import Product from '../classes/Product';
import OrderItem from '../classes/OrderItem';

import Popup from '../classes/Popup';
export default function() {
  const products = document.querySelectorAll('.js-product');
  const ordersForm = document.querySelector('.js-orders-form');
  const ordersFormPopup = new Popup(document.querySelector('.js-popup[orders-form]'));
  const openPopup = ordersForm.querySelector('button[open-popup]');
  

  products.forEach(product => {
    const order = new Product(product);

    product.addEventListener('submit', (e) => {
      e.preventDefault();
      order.submit();

    });
  });



  if (ordersForm) {
    const ordersFormContent = ordersForm.querySelector('.js-products-bag');
    const orders = JSON.parse(bag.getData('orders'));
    const ordersFormTotal = ordersForm.querySelector('[total]');
    let total = 0;

    orders.list.forEach(item => {
      const order = new OrderItem(item, ordersFormTotal);
      ordersFormContent.appendChild(order.createProduct());

      total += +item.price;
    });

    ordersFormTotal.innerText = `${total}`;
    openPopup.addEventListener('click', (e) => {
      ordersFormPopup.open();
    });
    ordersForm.addEventListener('submit', (e) => {
      e.preventDefault();
      fetch('./send-to-mail.php', {
        method: 'POST',
        body: JSON.stringify(orders.list)
      })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }


}
