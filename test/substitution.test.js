// Write your tests here!
const sub = require("../src/substitution")
const expect = require("chai").expect

describe("Substitution", () => {
    it("should return a string", () => {
        const actual = sub.substitution("test", "abcdefghijklmnopqrstuvwxyz")
        expect(actual).to.be.a('string')
    })
    it("should return correct encoding", () => {
        const actual = sub.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "jrufscpw"
        expect(actual).to.equal(expected)
    })
    it("should return correct encoding with spaces", () => {
        const actual = sub.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
        const expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.equal(expected)
    })
    it("should work with special characters too", () => {
        const actual = sub.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
        const expected = "y&ii$r&"
        expect(actual).to.equal(expected)
    })
    it("should return false if the alphabet string is too short", () => {
        const actual = sub.substitution("message", "short");
        expect(actual).to.be.false
    })
    it("should return false if the alphabet string is too long", () => {
        const actual = sub.substitution("message", "qwertyuiopasdfghjklzxcvbnm!@#$");
        expect(actual).to.be.false
    })
    it("should return false if the alphabet string does not contain 26 unique characters", () => {
        const actual = sub.substitution("message", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false
    })
    it("should decode correctly", () => {
        const actual = sub.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    })
    it("should decode correctly with special characters", () => {
        const actual = sub.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        const expected = "message"
        expect(actual).to.equal(expected)
    })
})