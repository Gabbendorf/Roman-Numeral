module.exports = class RomanNumeral {

  constructor() {
    this.converter = new Map();
    this.converter.set(1000, "M");
    this.converter.set(900, "CM");
    this.converter.set(500, "D");
    this.converter.set(400, "CD");
    this.converter.set(100, "C");
    this.converter.set(90, "XC");
    this.converter.set(50, "L");
    this.converter.set(40, "XL");
    this.converter.set(10, "X");
    this.converter.set(9, "IX");
    this.converter.set(5, "V");
    this.converter.set(4, "IV");
    this.converter.set(1, "I");
  }

  convert(number) {
    var convertedNumber = "";
    for (var arabicNumber of this.converter.keys()) {
      while (number >= arabicNumber) {
	convertedNumber += this.converter.get(arabicNumber);
	number -= arabicNumber;
      }
    }
    return convertedNumber;
  }
}
