let fruits = [
  {
    id: 1,
    title: "Яблоки",
    price: 20,
    img: "https://media.istockphoto.com/photos/red-apple-fruit-with-half-and-green-leaf-isolated-on-white-picture-id834816218",
  },
  {
    id: 2,
    title: "Апельсины",
    price: 30,
    img: "https://media.istockphoto.com/photos/tangerine-duo-with-leafs-picture-id182463420",
  },
  {
    id: 3,
    title: "Манго",
    price: 40,
    img: "https://media.istockphoto.com/photos/fresh-slices-of-mango-on-a-bed-of-leaves-picture-id168278888",
  },
];

const toHTML = (fruit) => {
  return `
    <div class="col">
      <div class="card">
        <img
          src="${fruit.img}"
          class="card-img-top"
          style="height: 250px; width: auto"
          alt="${fruit.title}"
        />
        <div class="card-body">
          <h5 class="card-title">${fruit.title}</h5>
          <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
          <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
        </div>
      </div>
    </div>
  `;
};
// https://youtu.be/GVGq0iy8GQE?list=PLqKQF2ojwm3n-ufn3E-l6Y0VxDrj3hM5M&t=450
function render() {
  const html = fruits.map(toHTML).join("");
  document.querySelector("#fruits").innerHTML = html;
}

render();

// Было
// const modal = $.modal({
//   title: "Цена на товар",
//   closable: true,
//   content: `
//     <h4>Modal is working</h4>
//     <p>Lorem ipsum dolor sit.</p>
//   `,
//   width: "400px",
//   footerButtons: [
//     {
//       text: "Ок",
//       type: "primary",
//       handler() {
//         console.log("Primary btn clicked");
//         modal.close();
//       },
//     },
//     {
//       text: "Cancel",
//       type: "danger",
//       handler() {
//         console.log("Danger btn clicked");
//         modal.close();
//       },
//     },
//   ],
// });

//Стало
const priceModal = $.modal({
  title: "Цена на товар",
  closable: true,
  width: "400px",
  footerButtons: [
    {
      text: "Ок",
      type: "primary",
      handler() {
        priceModal.close();
      },
    },
  ],
});

// Как в handler() передать id кнопки на которую нажал?
// создаю plugin confirm.js
// const confirmModal = $.modal({
//   title: "Вы уверены?",
//   closable: true,
//   width: "400px",
//   footerButtons: [
//     {
//       text: "Отменить",
//       type: "secondary",
//       handler() {
//         confirmModal.close();
//       },
//     },
//     {
//       text: "Удалить",
//       type: "danger",
//       handler() {
//         confirmModal.close();
//       },
//     },
//   ],
// });

document.addEventListener("click", (event) => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  const id = parseInt(event.target.dataset.id);
  const fruit = fruits.find((fruit) => fruit.id === id);
  if (btnType === "price") {
    priceModal.setContent(`
      <p>Цена на ${fruit.title}: <strong>${fruit.price} $</strong></p>
    `);
    priceModal.open();
  } else if (btnType === "remove") {
    // confirmModal.setContent(`
    //   <p>Вы удаляете фрукт: <strong>${fruit.title}</strong></p>
    // `);
    // confirmModal.open();
    $.confirm({
      title: "Вы уверены?",
      content: `<p>Вы удаляете фрукт: <strong>${fruit.title}</strong></p>`,
    })
      .then(() => {
        console.log("Remove");
        fruits = fruits.filter((fruit) => fruit.id !== id);
        render();
      })
      .catch(() => {
        console.log("Cancel");
      });
  }
});
