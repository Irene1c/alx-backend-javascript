// Test cases for calculateNumber function

const expect = require('chai').expect;
const calculateNumber = require("./2-calcul_chai.js");

describe('calculateNumber', () => {
  it('should round and sum the two numbers', () => {
    expect(calculateNumber('SUM', 1.3, 8.5)).to.equal(10);
  });
  it('should round and subtract the two numbers', () => {
    expect(calculateNumber('SUBTRACT', 4.2, 7.9)).to.equal(-4);
  });
  it('should round and divide the two numbers', () => {
    expect(calculateNumber('DIVIDE', 2.2, 4.6)).to.equal(0.4);
  });
  it('should round and return `Error`', () => {
    expect(calculateNumber('DIVIDE', 3.6, 0)).to.equal('Error');
  });
});
