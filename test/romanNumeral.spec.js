const expect = require('chai').expect
const RomanNumeral = require('../src/romanNumeral')

describe('RomanNumeral', () => {

  const romanNumeral = new RomanNumeral()

  it ("converts zero", () => {
    expect(romanNumeral.convert(0)).to.eq("")
  })

  it ("converts one", () => {
    expect(romanNumeral.convert(1)).to.eq("I")
  })

  it ("converts two", () => {
    expect(romanNumeral.convert(2)).to.eq("II")
  })

  it ("converts four", () => {
    expect(romanNumeral.convert(4)).to.eq("IV")
  })

  it ("converts five", () => {
    expect(romanNumeral.convert(5)).to.eq("V")
  })

  it ("converts nine", () => {
    expect(romanNumeral.convert(9)).to.eq("IX")
  })

  it ("converts ten", () => {
    expect(romanNumeral.convert(10)).to.eq("X")
  })

  it ("converts fifteen", () => {
    expect(romanNumeral.convert(15)).to.eq("XV")
  })

  it ("converts twenty", () => {
    expect(romanNumeral.convert(20)).to.eq("XX")
  })

  it ("converts fifty", () => {
    expect(romanNumeral.convert(50)).to.eq("L")
  })

  it ("converts 3999", () => {
    expect(romanNumeral.convert(3999)).to.eq("MMMCMXCIX")
  })
})
