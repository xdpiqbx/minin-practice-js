import { model } from './model';
import { title, text, columns, image } from './templates';
import './styles/main.css';

const $site = document.querySelector('#site');

model.forEach((block) => {
  let html = '';

  switch (block.type) {
    case 'title':
      html = title(block.value);
      break;
    case 'text':
      html = text(block.value);
      break;
    case 'columns':
      html = columns(block.value);
      break;
    case 'image':
      html = image(block.value);
      break;
  }

  $site.insertAdjacentHTML('beforeend', html);
});
