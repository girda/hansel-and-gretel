export default class Counter {
  constructor(element) {
    this.elem = element;
    this.btnUp = this.elem.querySelector('[data="up"]');
    this.btnDown = this.elem.querySelector('[data="down"]');
    this.btns = [this.btnUp, this.btnDown];
    this.input = this.elem.querySelector('input');
    this.step = +this.elem.getAttribute('data-step');
    this.defaulValue = +this.input.value || 1;
    this.total = this.defaulValue;
    this.onChange();
  }

  onChange() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        console.log(this.total);
        console.log(this.defaulValue);
        console.log(this.step);
        if (btn.getAttribute('data') === 'up') {
          this.total += this.step;
        } else if (btn.getAttribute('data') === 'down' && this.total > this.step) {
          this.total -= this.step;
        }
        this.input.value = this.total;
      });
    });
  }
}
