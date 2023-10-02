// Implementing a Airport class
// The default string description of the class should return the airport code

export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new Error('Code must be a string');
    }

    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
