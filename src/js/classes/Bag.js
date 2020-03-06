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

  updateLength(name) {
    const orderLength = this.getData(name) ? JSON.parse(this.getData(name)).list.length : null;

    if (orderLength) {
      this.elementBagLength.classList.add('is-show');
      this.elementBagLength.innerHTML = orderLength;
    } else {
      this.elementBagLength.classList.remove('is-show');
    }

  }

}
