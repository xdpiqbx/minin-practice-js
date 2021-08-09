function title(value) {
  return `
    <div class="row">
      <div class="col-sm">
        <h1>${value}</h1>
      </div>
    </div>`;
}

function text(value) {
  return `
    <div class="row">
      <div class="col-sm">
        <p>${value}</p>
      </div>
    </div>`;
}

function columns(value) {
  return `
  <div class="row">
    ${value.map((col) => `<div class="col-sm">${col}</div>`).join('')}
  </div>`;
}

function image(value) {
  return `
  <div class="row">
    <img src="${value}"/>
  </div>`;
}

export const tplts = {
  title,
  text,
  columns,
  image,
};
