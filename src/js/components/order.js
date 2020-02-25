export default function() {
  const product = document.querySelectorAll('.js-product');

  const orderInput = () => {

    const currentTotal = (counter, step, directory, priceStep) => {
      let weight = +counter;
      let price = +priceStep.innerHTML;
      if (directory === 'next') {
        weight += +step;
        price += +priceStep.getAttribute('price') * +step;
      } else {
        weight -= +step;
        price -= +priceStep.getAttribute('price') * +step;
      }
      // console.log({weight: weight, price: price});
      return {weight: weight, price: price};
    };

    product.forEach(prd => {
      const price = prd.querySelector('.js-product-price');
      const btnAddProduct = prd.querySelector('[type="submit"]');
      const nameProduct = prd.querySelector('.js-product-name').innerHTML;
      const counter = prd.querySelector('.js-counter');
      const counterBtn = counter.querySelectorAll('button');
      const counterStep = counter.getAttribute('step');
      const counterTotal = counter.querySelector('input');

      btnAddProduct.addEventListener('click', (e) => {
        e.preventDefault();
        const totalWeight = counter.querySelector('input').value;
        let orders = JSON.parse(localStorage.getItem('orders'));
        const currentOrder = {name: nameProduct, price: price.innerHTML, weight: totalWeight};

        if (orders !== null ) {

          let candidate = null;

          for (let i = 0; i < orders.orders.length; i++) {
            const order = orders.orders[i];
            for (let key in order) {
              if (key === 'name' && order[key] === currentOrder.name ) {
                candidate = order;
                break;
              }
            }
          }

          if (candidate) {
            candidate.price = +candidate.price + +currentOrder.price;
            candidate.weight = +candidate.weight + +currentOrder.weight;
            localStorage.setItem('orders', JSON.stringify(orders));
          } else {
            orders.orders.push(currentOrder);
            orders.time = +new Date();
            localStorage.setItem('orders', JSON.stringify(orders));
          }

        } else {
          orders = {
            orders: [currentOrder],
            time: +new Date()
          };
          localStorage.setItem('orders', JSON.stringify(orders));
        }

      });

      counterBtn.forEach(btn => {
        btn.addEventListener('click', function() {
          const counterTotalValue = counter.querySelector('input').value;
          const currentBtn = this.getAttribute('data');
          const result = currentTotal(counterTotalValue, counterStep, currentBtn, price);
          price.innerHTML = result.price;
          counterTotal.value = result.weight;
        });
      });

    });
  };

  const orderSelect = () => {
    product.forEach(prd => {
      const price = prd.querySelector('.js-product-price');
      const btnAddProduct = prd.querySelector('[type="submit"]');
      const nameProduct = prd.querySelector('.js-product-name').innerHTML;
      const selectProduct = prd.querySelector('select');

      selectProduct.addEventListener('change', () => {
        console.log(selectProduct.value);
      });
    });
  };

  if (document.querySelector('.js-counter')) {
    orderInput();
  }

  if (document.querySelector('.js-product select')) {
    orderSelect();
  }

}
