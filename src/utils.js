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
  return Object.keys(styles).map(styleToString).join('; ');
}

export function block(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="mb-3">
        <input
          class="form-control form-control-sm"
          name="value"
          placeholder="value"
        />
      </div>
      <div class="mb-3">
        <input
          class="form-control form-control-sm"
          name="style"
          placeholder="style"
        />
      </div>
      <button type="submit" class="btm btn-primary btn-sm">
        Добавить
      </button>
    </form>
    <hr />  
  `;
}
