export default class OrderItem {
  constructor(product, totalPriceElement) {
    this.product = product;
    this.totalPriceElement = totalPriceElement;
  }

  createProduct() {
    const templateDiv = document.createElement('div');

    const product = templateDiv.cloneNode();
    const btn = document.createElement('button');
    const content = templateDiv.cloneNode();
    const wrapperImg = templateDiv.cloneNode();
    const img = document.createElement('img');
    const title = document.createElement('h4');
    const price = templateDiv.cloneNode();
    const quantity = templateDiv.cloneNode();

    product.classList.add('product-bag');
    btn.classList.add('product-bag__remove');
    content.classList.add('product-bag__content');
    wrapperImg.classList.add('product-bag__img');
    title.classList.add('product-bag__title');
    price.classList.add('product-bag__price');
    quantity.classList.add('product-bag__quantity');

    img.setAttribute('src', this.product.imgUrl);
    img.setAttribute('alt', this.product.title);
    btn.setAttribute('type', 'button');
    btn.setAttribute('title', `Видалити ${this.product.title}`);

    title.innerText = this.product.title;
    quantity.innerText = `${this.product.quantity} ${this.product.weight}`;
    price.innerHTML = `${this.product.price} <span>грн.</span>`;
    btn.innerText = 'remove';

    product.appendChild(wrapperImg);
    product.appendChild(content);
    product.appendChild(btn);
    wrapperImg.appendChild(img);
    content.appendChild(title);
    content.appendChild(quantity);
    content.appendChild(price);

    this.onRemoveProduct(btn);

    return product;

  }

  onRemoveProduct(btn) {
    let totalPrice = this.totalPriceElement;
    btn.addEventListener('click', function(e) {
      const orders = JSON.parse(bag.getData('orders'));
      const candidate = this.parentElement.querySelector('.product-bag__title');
      let total = 0;
      

      for (let i = 0; i < orders.list.length; i++) {
        if (candidate.innerText === orders.list[i].title) {
          orders.list.splice(i, 1);
          document.querySelector('.js-products-bag').removeChild(this.parentElement);
          break;
        }
      }

      if (orders.list.length) {
        orders.list.forEach(item => {
          total += +item.price;
        });
      } else {
        total = 0;
      }

      totalPrice.innerText = `${total}`;
      bag.setData('orders', JSON.stringify(orders));
      bag.updateLength();

      console.log(orders.list);
    });
  }

}
