// validate the usage of the Utils function

const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('Payment', () => {
  it('validate the usage of the Utils function', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    stub.restore();
    consoleSpy.restore();
  });
});
