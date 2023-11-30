// Test cases for calculateNumber function

const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber', () => {
  it('should round and sum the two numbers', () => {
    assert.equal(calculateNumber('SUM', 1.3, 8.5), 10);
  });
  it('should round and subtract the two numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 4.2, 7.9), -4);
  });
  it('should round and divide the two numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 2.2, 4.6), 0.4);
  });
  it('should round and return `Error`', () => {
    assert.equal(calculateNumber('DIVIDE', 3.6, 0), 'Error');
  });
});
