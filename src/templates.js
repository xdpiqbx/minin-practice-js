import { row, col } from './utils';

function title(value) {
  return row(col(`<h1>${value}</h1>`));
}

function text(value) {
  return row(col(`<p>${value}</p>`));
}

function columns(value) {
  return row(value.map(col).join(''));
}

function image(value) {
  return row(`<img src="${value}"/>`);
}

export const tplts = {
  title,
  text,
  columns,
  image,
};
