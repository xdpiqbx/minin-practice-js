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
  console.log(block);
});
