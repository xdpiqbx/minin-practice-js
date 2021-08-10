import { model } from './model';
import { templates } from './templates';
import './styles/main.css';

const $site = document.querySelector('#site');

model.forEach(({ type, value, options }) => {
  // switch (block.type) {
  //   case 'title':
  //     html = templates.title(block.value);
  //     break;
  //   case 'text':
  //     html = templates.text(block.value);
  //     break;
  //   case 'columns':
  //     html = templates.columns(block.value);
  //     break;
  //   case 'image':
  //     html = templates.image(block.value);
  //     break;
  // }
  if (templates[type]) {
    $site.insertAdjacentHTML(
      'beforeend',
      templates[type](value, options)
    );
  }
});
