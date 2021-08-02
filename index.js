const fruits = [
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
          <a href="#" class="btn btn-primary" data-btn="price">Посмотреть цену</a>
          <a href="#" class="btn btn-danger">Удалить</a>
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

const modal = $.modal({
  title: "Vladilen Modal",
  closable: true,
  content: `
    <h4>Modal is working</h4>
    <p>Lorem ipsum dolor sit.</p>
  `,
  width: "400px",
  footerButtons: [
    {
      text: "Ок",
      type: "primary",
      handler() {
        console.log("Primary btn clicked");
        modal.close();
      },
    },
    {
      text: "Cancel",
      type: "danger",
      handler() {
        console.log("Danger btn clicked");
        modal.close();
      },
    },
  ],
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  if (btnType === "price") {
    console.log("price");
    modal.open();
  }
});
