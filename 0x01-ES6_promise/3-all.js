// Handle multiple successful promises

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [data1, data2] = results;
      console.log(`${data1.body} ${data2.firstName} ${data2.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
