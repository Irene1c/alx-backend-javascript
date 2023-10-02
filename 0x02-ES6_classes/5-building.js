// Defining an abstract class

export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }

    this._sqft = sqft;

    if (new.target !== Building
      && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // sqft attribute getter
  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() { // eslint-disable-line
  }
}
