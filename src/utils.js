export function row(content, styles = '') {
  return `
  <div style="${styles}" class="row">
      ${content}
  </div>`;
}

export function col(content) {
  return `
  <div class="col-sm">
      ${content}
  </div>`;
}

export function css(styles = {}) {
  const styleToString = (key) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(styleToString).join(';');

  // const keys = Object.keys(styles);
  // return keys
  //   .map((key) => {
  //     return `${key}: ${styles[key]}`;
  //   })
  //   .join(';');
}
