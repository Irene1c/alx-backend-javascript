// A class named EVCar that extends the Car class

import Car from "./10-car.js"; // eslint-disable-line

// Define symbols for the attributes used in cloneCar
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // returns a new object of the Car class
  cloneCar() {
    return new Car(this[_brand], this[_motor], this[_color]);
  }
}
