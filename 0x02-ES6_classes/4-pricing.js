import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if ((typeof val !== 'number') && !(val instanceof Number)) {
      throw new TypeError('Amount must be a number');
    }
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(c) {
    if (!(c instanceof Currency)) {
      throw new TypeError('Currency must be an instanceof of Currency');
    }
    this._currency = c;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}
