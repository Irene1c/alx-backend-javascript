// Test cases for calculateNumber function

const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
  it('should sum the two numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should round first number and sum the two numbers', () => {
    assert.strictEqual(calculateNumber(2.7, 3), 6);
  });
  it('should round first number and sum the two numbers', () => {
    assert.strictEqual(calculateNumber(3.1, 2), 5);
  });
  it('should round second number and sum the two numbers', () => {
    assert.strictEqual(calculateNumber(3, 4.9), 8);
  });
  it('should round second number and sum the two numbers', () => {
    assert.strictEqual(calculateNumber(2, 6.1), 8);
  });
  it('should round both numbers and sum the two numbers', () => {
    assert.strictEqual(calculateNumber(1.6, 3.2), 5);
  }); 
  it('should round both numbers and sum the two numbers', () => {
    assert.strictEqual(calculateNumber(4.5, 2.7), 8);
  }); 
  it('should round negative numbers and sum the two numbers', () => {
    assert.strictEqual(calculateNumber(-5.6, -2.2), -8);
  });
  it('should round negative numbers and sum the two numbers', () => {
    assert.strictEqual(calculateNumber(-2.1, -4.9), -7);
  });
});
