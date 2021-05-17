// Write your tests here!
const poly = require("../src/polybius")
const expect = require("chai").expect

describe("polybius", () => {
    it("should return a string", () => {
        const actual = poly.polybius("thinkful")
        expect(actual).to.be.a('string')
    })

    it("should return correct encoding", () => {
        const actual = poly.polybius("thinkful")
        const expected = "4432423352125413"
        expect(actual).to.equal(expected)
    })

    it("should return correct encoding with spaces", () => {
        const actual = poly.polybius("Hello World")
        const expected = "3251131343 2543241341"
        expect(actual).to.equal(expected)
    })
    it("should return i and j as the same number", () => {
        const actual = poly.polybius("ij")
        const expected = "4242"
        expect(actual).to.equal(expected)
    })
    it("should decode correctly", () => {
        const actual = poly.polybius("3251131343 2543241341", false)
        const expected = "hello world"
        expect(actual).to.equal(expected)
    })
    it("should return i/j when decoding", () => {
        const actual = poly.polybius("42", false)
        const expected = "(i/j)"
        expect(actual).to.equal(expected)
    })
    it("should return false for an invalid decode input", () => {
        const actual = poly.polybius("44324233521254134", false)
        expect(actual).to.be.false
    })
    
})