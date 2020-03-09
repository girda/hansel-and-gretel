export default class Product {
  constructor(product) {
    this.product = product;
    this.productName = product.querySelector('[name-product]').innerHTML;
    this.price = this.product.getAttribute('data-price');
    this.weight = this.product.getAttribute('data-weight');
    this.elementPrice = this.product.querySelector('[price]');
    this.quantity = this.product.querySelector('[quantity]');
    this.onChange();
  }

  onChange() {
    this.quantity.addEventListener('change', (e) => {

      let quantity = +this.quantity.value;
      this.elementPrice.innerHTML = quantity * +this.price;
    });

  }

  submit() {

    let orders = JSON.parse(bag.getData('orders'));
    const currentOrder = {
      title: this.productName, 
      price: `${+this.price * +this.quantity.value}`, 
      quantity: this.quantity.value, 
      imgUrl: './img/cake.png',
      weight: this.weight
    };

    if (orders !== null ) {

      let candidate = null;
      console.log(orders);
      
      // for (let i = 0; i < orders.list.length; i++) {
      //   const order = orders.list[i];
      //   for (let key in order) {
      //     if (key === 'name' && order[key] === currentOrder.name ) {
      //       candidate = order;
      //       break;
      //     }
      //   }
      // }

      if (candidate) {
        candidate.price = +candidate.price + +currentOrder.price;
        candidate.quantity = +candidate.quantity + +currentOrder.quantity;
        bag.setData('orders', JSON.stringify(orders));
      } else {
        orders.list.push(currentOrder);
        orders.time = +new Date();
        bag.setData('orders', JSON.stringify(orders));
      }

    } else {
      orders = {
        list: [currentOrder],
        time: +new Date()
      };
      bag.setData('orders', JSON.stringify(orders));
    }

    bag.updateLength('orders');

  }

}
