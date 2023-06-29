export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }
  
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
