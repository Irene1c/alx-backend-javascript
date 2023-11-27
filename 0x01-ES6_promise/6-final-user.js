// Handle multiple promises

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const [data1, data2] = results;
      return [
        {
          status: data1.status,
          value: data1.status === 'fulfilled' ? data1.value : undefined,
        },
        {
          status: data2.status,
          value: data2.status === 'rejected' ? data2.reason.toString() : undefined,
        },
      ];
    });
}
