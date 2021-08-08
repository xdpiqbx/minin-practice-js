export function title(value) {
  return `
    <div class="row">
      <div class="col-sm">
        <h1>${value}</h1>
      </div>
    </div>`;
}

export function text(value) {
  return `
    <div class="row">
      <div class="col-sm">
        <p>${value}</p>
      </div>
    </div>`;
}

export function columns(value) {
  return `
  <div class="row">
    ${value.map((col) => `<div class="col-sm">${col}</div>`).join('')}
  </div>`;
}

export function image(value) {
  return `
  <div class="row">
    <img src="${value}"/>
  </div>`;
}
