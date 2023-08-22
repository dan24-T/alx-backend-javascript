/**
 * Rep Holberton Course.
 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Get course name
   */
  get name() {
    return this._name;
  }

  /**
   * Set name
   */
  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }
  
  get length() {
    return this._length;
  }
  
  set length(len) {
    if (typeof len !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = len;
  }
  
  get students() {
    return this._students;
  }
  
  set students(students) {
    if (!(students instanceof Array) || !students.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
