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

const modal = $.modal({
  title: "Vladilen Modal",
  closable: true,
  content: `
    <h4>Modal is working</h4>
    <p>Lorem ipsum dolor sit.</p>
  `,
  width: "400px",
});
