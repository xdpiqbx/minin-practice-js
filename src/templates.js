import { row, col, css } from './utils';

function title(value, options) {
  const { tag = 'h1', styles } = options;
  return row(col(`<${tag}>${value}</${tag}>`), css(styles));
}

function text(value, options) {
  return row(col(`<p>${value}</p>`));
}

function columns(value, options) {
  return row(value.map(col).join(''));
}

function image(value, options) {
  return row(`<img src="${value}"/>`);
}

export const tplts = {
  title,
  text,
  columns,
  image,
};
