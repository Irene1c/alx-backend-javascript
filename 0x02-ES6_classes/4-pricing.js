// Implementing a Pricing class with a method displayFullPrice and static method convertPrice

import Currency from "./3-currency.js"; // eslint-disable-line

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new Error('Amount must be a number');
    }

    this._amount = amount;
    this._currency = currency; // The currency attribute is an instance of Currency class
  }

  // amount attribute getter
  get amount() {
    return this._amount;
  }

  // amount atrribute setter
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new Error('Amount must be a number');
    } else {
      this._amount = newAmount;
    }
  }

  // currency attribute getter
  get currency() {
    return this._currency;
  }

  // currency atrribute setter
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('must be a number');
    }
    return amount * conversionRate;
  }
}
