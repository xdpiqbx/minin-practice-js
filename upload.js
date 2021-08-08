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

export function upload(selector = 'filer', options = {}) {
  const input = document.querySelector(selector);
  const preview = document.createElement('div');

  preview.classList.add('preview');

  const open = document.createElement('button');
  open.classList.add('btn');
  open.textContent = 'Открыть';

  if (options.isMulti) {
    input.setAttribute('multiple', '');
  }

  if (options.accept && Array.isArray(options.accept)) {
    input.setAttribute('accept', options.accept.join(', '));
  }
  input.insertAdjacentElement('afterend', preview);
  input.insertAdjacentElement('afterend', open);

  const changeHandler = (event) => {
    if (!event.target.files.length) {
      return;
    }
    // Тут event.target.files - это FileList
    const files = Array.from(event.target.files);
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
              <div class="preview-remove">&times;</div>
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

  open.addEventListener('click', () => input.click());
  input.addEventListener('change', changeHandler);
}
