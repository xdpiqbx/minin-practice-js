import { block } from '../utils';
import { TextBlock, TitleBlock } from './blocks';

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.addHandler.bind(this));
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
    const styles = event.target.style.value;

    let newBlock = {};
    switch (type) {
      case 'Text':
        newBlock = new TextBlock(value, { styles });
        break;
      case 'Title':
        newBlock = new TitleBlock(value, { styles });
        break;
    }

    this.update(newBlock);

    event.target.value.value = '';
    event.target.style.value = '';
  }
}
