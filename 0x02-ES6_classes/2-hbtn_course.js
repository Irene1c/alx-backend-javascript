// Implementing a HolbertonCourse class with getters and setters

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new Error('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
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

  // length attribute getter
  get length() {
    return this._length;
  }

  // length atrribute setter
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new Error('Length must be a number');
    } else {
      this._length = newLength;
    }
  }

  // students attribute getter
  get students() {
    return this._students;
  }

  // students atrribute setter
  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every((student) => typeof student === 'string')) {
      throw new Error('Students must be an array of strings');
    } else {
      this._students = newStudents;
    }
  }
}
