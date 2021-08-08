import { upload } from './upload';
console.log('app.js');
upload('#file', {
  isMulti: true,
  accept: ['.png', '.jpg', '.jpeg', '.gif'],
});
