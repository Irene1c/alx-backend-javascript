// Implementing a Currency class with a method named displayFullCurrency

export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new Error('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  // code attribute getter
  get code() {
    return this._code;
  }

  // code atrribute setter
  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new Error('Code must be a string');
    } else {
      this._code = newCode;
    }
  }

  // name attribute getter
  get name() {
    return this._name;
  }

  // name atrribute setter
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a string');
    } else {
      this._name = newName;
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
