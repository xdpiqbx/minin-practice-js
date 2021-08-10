import { block } from '../utils';

export class Sidebar {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.addHandler);
  }

  get template() {
    return [block('Title'), block('Text')].join('');
  }

  addHandler(event) {
    event.preventDefault();
    // console.log(event.target); // Вся форма
    // console.log(event.target.value.value); //значение input name="value"
    // console.log(event.target.style.value); //значение input name="style"
    const type = event.target.name;
    const value = event.target.value.value;
    const style = event.target.style.value;
    debugger;
    //https://youtu.be/0ViiJ8qTCFM?t=5997
  }
}
