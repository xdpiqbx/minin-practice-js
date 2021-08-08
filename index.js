const model = [
  {
    type: 'title',
    value: 'Hello from JS',
  },
  {
    type: 'text',
    value: 'here some main text',
  },
  {
    type: 'columns',
    value: [
      'here some text 1',
      'here some text 2',
      'here some text 3',
    ],
  },
];

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
  }

  $site.insertAdjacentHTML('beforeend', html);
});

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
