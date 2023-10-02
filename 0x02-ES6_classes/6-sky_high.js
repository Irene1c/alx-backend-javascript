// Implementing a class named SkyHighBuilding that extends from Building

import Building from './5-building.js'; // eslint-disable-line

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);

    if (typeof floors !== 'number') {
      throw new Error('floors must be a number');
    }

    this._floors = floors;
  }

  // floors attribute getter
  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
