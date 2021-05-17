// Write your tests here!
const caesarFun = require("../src/caesar")
const expect = require("chai").expect

describe("caesar", () => {
    it("should shift forward correctly", () => {
        const actual = caesarFun.caesar("thinkful", 3)
        const expected = "wklqnixo"
        expect(actual).to.equal(expected)
    });

    it("should shift backward correctly", () => {
        const actual = caesarFun.caesar("thinkful", -3)
        const expected = "qefkhcri"
        expect(actual).to.equal(expected)
    });

    it("should decode correctly", () => {
        const actual = caesarFun.caesar("wklqnixo", 3, false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    });

    it("should ignore capitals, only return lowercase massages, maintain spaces and punctuation, and wrap around if a shift goes past z while encoding", () => {
        const actual = caesarFun.caesar("This is a secret message!", 8)
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.equal(expected)
    });

    it("should ignore capitals, only return lowercase massages, maintain spaces and punctuation, and wrap around if a shift goes past z while decoding", () => {
        const actual = caesarFun.caesar("BPQA qa I amkzmb umaaiom!", 8, false)
        const expected = "this is a secret message!"
        expect(actual).to.equal(expected)
    });

    it("should return false if no shift value is present", () => {
        const actual = caesarFun.caesar("thinkful")
        expect(actual).to.be.false
    });

    it("should return false if shift value is greater than 25", () => {
        const actual = caesarFun.caesar("thinkful", 99)
        expect(actual).to.be.false
    });

    it("should return false if shift value is less than -25", () => {
        const actual = caesarFun.caesar("thinkful", -26)
        expect(actual).to.be.false
    });
    
});