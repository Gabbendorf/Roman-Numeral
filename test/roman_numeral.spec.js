const expect = require('chai').expect
const RomanNumeral = require('../src/romanNumeral')

describe('RomanNumeral', () => {

  const romanNumeral = new RomanNumeral()

  it ("converts zero", () => {
    expect(romanNumeral.convert("0")).to.eq("")
  })

  it ("converts one", () => {
    expect(romanNumeral.convert("1")).to.eq("I")
  })

  it ("converts two", () => {
    expect(romanNumeral.convert("2")).to.eq("II")
  })

})
