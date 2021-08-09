import { model } from './model';
import { tplts } from './templates';
import './styles/main.css';

const $site = document.querySelector('#site');

model.forEach(({ type, value }) => {
  // switch (block.type) {
  //   case 'title':
  //     html = tplts.title(block.value);
  //     break;
  //   case 'text':
  //     html = tplts.text(block.value);
  //     break;
  //   case 'columns':
  //     html = tplts.columns(block.value);
  //     break;
  //   case 'image':
  //     html = tplts.image(block.value);
  //     break;
  // }
  if (tplts[type]) {
    $site.insertAdjacentHTML('beforeend', tplts[type](value));
  }
});
