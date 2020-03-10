import Product from '../classes/Product';
import OrderItem from '../classes/OrderItem';

import Popup from '../classes/Popup';
export default function() {
  const products = document.querySelectorAll('.js-product');
  const ordersForm = document.querySelector('.js-orders-form');
  
  
  

  products.forEach(product => {
    const order = new Product(product);

    product.addEventListener('submit', (e) => {
      e.preventDefault();
      order.submit();

    });
  });



  if (ordersForm) {
    const ordersFormPopup = new Popup(document.querySelector('.js-popup[orders-form]'));
    const openPopup = ordersForm.querySelector('button[open-popup]');
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
      const userName = ordersForm.querySelector('[name="user_name"]').value;
      const userPhone = ordersForm.querySelector('[name="phone"]').value;
      const userComment = ordersForm.querySelector('[name="comment"]').value;
      orders.user_name = userName;
      orders.phone = userPhone;
      orders.comment = userComment;
      
      fetch('./send-to-mail.php', {
        method: 'POST',
        body: JSON.stringify(orders)
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
