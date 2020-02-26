export default class Product {
  constructor(param) {
    this.counterNext = param.btnNext;
    this.counterPrev = param.btnPrev;
    this.counterBtns = [this.counterPrev, this.counterNext];
    this.step = param.step;
    this.price = param.price;
    this.total = 0;
    this.elementPrice = param.elementPrice;
    this.init();
  }

  init() {
    console.log(this.counterNext);
    console.log(this.counterPrev);
    console.log(this.counterBtns);
    console.log(this.step);
    console.log(this.price);
    console.log(this.total);
    console.log(this.elementPrice);
        
  }

  counter() {

    // const currentTotal = (counter, step, directory, priceStep) => {
    //     let weight = +counter;
    //     let price = +priceStep.innerHTML;
    //     if (directory === 'next') {
    //       weight += +step;
    //       price += +priceStep.getAttribute('price') * +step;
    //     } else {
    //       weight -= +step;
    //       price -= +priceStep.getAttribute('price') * +step;
    //     }
    //     // console.log({weight: weight, price: price});
    //     return {weight: weight, price: price};
    //   };

    this.counterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // e.preventDefault();
        // const totalWeight = counter.querySelector('input').value;
        let orders = JSON.parse(localStorage.getItem('orders'));
        // const currentOrder = {name: nameProduct, price: price.innerHTML, weight: totalWeight};
            
            
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
    });
  }

  submit() {

  }
}
