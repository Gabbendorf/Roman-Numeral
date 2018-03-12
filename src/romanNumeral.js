module.exports = class RomanNumeral {

  convert(number) {
    var convertedNumber = "";
    while (number > 0) {
      convertedNumber += "I";
      number -= 1;
    }
    return convertedNumber;
  }
}
