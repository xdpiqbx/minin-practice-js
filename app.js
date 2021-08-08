import { upload } from './upload';
import firebase from 'firebase/app';
import 'firebase/storage';
import { firebaseConfig } from './firebase-config';

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
console.log(storage);

upload('#file', {
  isMulti: true,
  accept: ['.png', '.jpg', '.jpeg', '.gif'],
  onUpload(files, previewInfoBlocks) {
    files.forEach((file, index) => {
      const ref = storage.ref(`images/${file.name}`);
      const task = ref.put(file);
      task.on(
        'state_changed',
        (snapshot) => {
          const percentage =
            (
              (snapshot.bytesTransferred / snapshot.totalBytes) *
              100
            ).toFixed(0) + '%';
          const block = previewInfoBlocks[index].querySelector(
            '.preview-info-progress'
          );
          block.textContent = percentage;
          block.style.width = percentage;
        },
        (error) => {
          console.log(error);
        },
        () => {
          task.snapshot.ref.getDownloadURL().then((url) => {
            console.log('Download', url);
          });
          console.log('Complete');
        }
      );
    });
    console.log('files', files);
  },
});
