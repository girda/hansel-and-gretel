export default class Bag {
  constructor(element) {
    this.elementBag = element;
    this.elementBagLength = this.elementBag.querySelector('span');
  }

  getData(name) { // name String
    return localStorage.getItem(name); // return String
  }

  setData(name, data) { // name String, data String
    localStorage.setItem(name, data);
  }

  updateLength() {
    const orderLength = this.getData('orders') ? JSON.parse(this.getData('orders')).list.length : null;

    if (orderLength) {
      this.elementBagLength.classList.add('is-show');
      this.elementBagLength.innerHTML = orderLength;
    } else {
      this.elementBagLength.classList.remove('is-show');
    }

  }

}
