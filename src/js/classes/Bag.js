export default class Bag {
  constructor() {

  }

  getData(name) {
    return localStorage.getItem(name);
  }

  setData(name, data) {
    localStorage.setItem(name, data);
  }
}
