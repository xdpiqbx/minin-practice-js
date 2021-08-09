import image from './assets/image.png';

export const model = [
  {
    type: 'title',
    value: 'Конструктор сайтов на JS',
    options: {
      tag: 'h1',
      styles: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        'text-align': 'center',
        padding: '1rem',
      },
    },
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
  {
    type: 'image',
    value: image,
  },
];
