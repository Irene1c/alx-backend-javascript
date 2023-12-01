//Async tests with done 

const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('Async test', () => {
  it('Handle async function', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.deep.equal({data: 'Successful response from the API' });
      done();
    });
  });
});
