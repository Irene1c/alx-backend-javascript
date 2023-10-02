// Implementing a HolbertonClass class

export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new Error('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new Error('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  // Return the size when cast to a Number
  valueOf() {
    return this._size;
  }

  // Return the location when cast to a String
  toString() {
    return this._location;
  }
}
