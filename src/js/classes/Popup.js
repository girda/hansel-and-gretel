export default class Popup {
  constructor(popup) {
    this.popup = popup;
  }

  open() {
    this.popup.classList.add('is-show');
  }

  close() {
    this.popup.classList.remove('is-show');
  }
  
}
