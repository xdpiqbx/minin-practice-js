import { row, col, css } from './utils';

function title(value, options) {
  const { tag = 'h1', styles } = options;
  return row(col(`<${tag}>${value}</${tag}>`), css(styles));
}

function text(value, options) {
  const { tag = 'p', styles } = options;
  return row(col(`<${tag}>${value}</${tag}>`), css(styles));
}

function columns(value, options) {
  const { tag = 'h1', styles } = options;
  return row(value.map(col).join(''), css(styles));
}

function image(value, options) {
  const { styles, imageStyles: is, alt = '' } = options;
  return row(
    `<img src="${value}" alt="${alt}" style="${css(is)}"/>`,
    css(styles)
  );
}

export const templates = {
  title,
  text,
  columns,
  image,
};
