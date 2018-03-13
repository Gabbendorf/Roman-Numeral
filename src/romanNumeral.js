const converter = new Map([
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
]);

module.exports = class RomanNumeral {

  convert(number) {
    let convertedNumber = "";
    for (let arabicNumber of converter.keys()) {
      while (number >= arabicNumber) {
	convertedNumber += converter.get(arabicNumber);
	number -= arabicNumber;
      }
    }
    return convertedNumber;
  }
}
