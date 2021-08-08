/*
  <button class="btn">Открыть</button>
  <button class="btn primary">Загрузить</button>
*/

function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (!bytes) {
    return '0 Byte';
  }
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

const element = (tag, classes = [], content = '') => {
  const node = document.createElement(tag);
  if (classes.length > 0) {
    node.classList.add(...classes);
  }
  if (content) {
    node.textContent = content;
  }
  return node;
};

const noop = () => {};

export function upload(selector = 'filer', options = {}) {
  let files = [];
  const onUpload = options.onUpload ?? noop;
  const input = document.querySelector(selector);

  const preview = element('div', ['preview']);
  const open = element('button', ['btn'], 'Открыть');
  const upload = element('button', ['btn', 'primary'], 'Загрузить');
  upload.style.display = 'none';

  if (options.isMulti) {
    input.setAttribute('multiple', '');
  }

  if (options.accept && Array.isArray(options.accept)) {
    input.setAttribute('accept', options.accept.join(', '));
  }
  input.insertAdjacentElement('afterend', preview);
  input.insertAdjacentElement('afterend', upload);
  input.insertAdjacentElement('afterend', open);

  const changeHandler = (event) => {
    if (!event.target.files.length) {
      return;
    }
    // Тут event.target.files - это FileList
    files = Array.from(event.target.files);

    upload.style.display = 'inline';

    files.forEach((file) => {
      preview.innerHTML = '';
      if (!file.type.match('image')) {
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const src = event.target.result;
        preview.insertAdjacentHTML(
          'afterbegin',
          `
            <div class="preview-image">
              <div class="preview-remove" data-name="${
                file.name
              }">&times;</div>
              <img src="${src}" alt="${file.name}">
              <div class="preview-info">
                <span>${file.name}</span>
                ${bytesToSize(file.size)}
              </div>
            </div>
          `
        );
      };
      reader.readAsDataURL(file); // это асинхронная операция!
    });
  };

  const removeImageHandler = (event) => {
    if (!event.target.dataset.name) {
      return;
    }
    const { name } = event.target.dataset;
    files = files.filter((file) => file.name !== name);
    if (!files.length) {
      upload.style.display = 'none';
    }
    const block = preview
      .querySelector(`[data-name="${name}"]`)
      .closest('.preview-image');
    block.classList.add('removing');
    setTimeout(() => block.remove(), 250);
  };

  const clearPreview = (el) => {
    el.style.bottom = '0px';
    el.innerHTML = `<div class="preview-info-progress"></div>`;
  };

  const uploadHandler = () => {
    preview
      .querySelectorAll('.preview-remove')
      .forEach((el) => el.remove());
    const previewInfo = preview.querySelectorAll('.preview-info');
    previewInfo.forEach(clearPreview);
    onUpload(files, previewInfo);
  };

  open.addEventListener('click', () => input.click());
  input.addEventListener('change', changeHandler);
  preview.addEventListener('click', removeImageHandler);
  upload.addEventListener('click', uploadHandler);
}
