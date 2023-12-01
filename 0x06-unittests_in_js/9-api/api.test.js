//  Basic Integration testing

const expect = require('chai').expect;
const request = require('request');

describe('Basic Integration testing', () => {
  it('request http://localhost:7865/', (done) => {
    request.get('http://localhost:7865/', (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(res.headers['content-type']).to.include('text/html');
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  it('request http://localhost:7865/cart/:id', (done) => {
    request.get('http://localhost:7865/cart/11', (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(res.headers['content-type']).to.include('text/html');
      expect(body).to.equal('Payment methods for cart 11');
      done();
    });
  });
  it('request http://localhost:7865/cart/:id, id not int', (done) => {
    request.get('http://localhost:7865/cart/hi', (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
