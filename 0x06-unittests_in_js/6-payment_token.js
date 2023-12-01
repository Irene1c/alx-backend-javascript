// async operation

const getPaymentTokenFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success === true) {
      const data = {data: 'Successful response from the API' };
      resolve(data);
    } else {
      reject();
    }
  });
}

module.exports = getPaymentTokenFromAPI;
