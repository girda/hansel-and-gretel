export default class Popup {
  constructor(popup) {
    this.popup = popup;
    this.btnClose = popup.querySelector('[popup-close]');
    this.overflow = popup.querySelector('[popup-overflow]');
    this._init();
  }

  _init() {
    this.btnClose.addEventListener('click', (e) => {
      this.popup.classList.remove('is-show');
    });
    this.overflow.addEventListener('click', (e) => {
      this.popup.classList.remove('is-show');
    });
  }

  open() {
    this.popup.classList.add('is-show');
  }

  close() {
    this.popup.classList.remove('is-show');
  }
  
}
