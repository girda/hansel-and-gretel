export default class Bag {
  constructor() {

  }

  getData(name) { // name String
    return localStorage.getItem(name); // return String
  }

  setData(name, data) { // name String, data String
    localStorage.setItem(name, data);
  }

  returnLength(name) {
    return this.getData(name) ? JSON.parse(this.getData(name)).list.length : null;

  }
}
