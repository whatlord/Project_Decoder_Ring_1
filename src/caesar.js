// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if(!shift || shift < -25 || shift > 25) return false
    let chars = input.toLowerCase().split("")
    i = 0
    if(!encode) shift*=-1;
    for(let char in chars){
      if(chars[char].charCodeAt(0) >= 97 && chars[char].charCodeAt(0) <= 122){
        chars[char] = String.fromCharCode(((chars[char].charCodeAt(0) -71 + shift) % 26) + 97)
      }
    }

    
    return chars.join("")
  }

  
  /*
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  function ceasar2(input, shift, encode = true) {
    if(!shift || shift < -25 || shift > 25) { return false; }

    if (!encode) {
      shift *= -1;
    }
    let result = "";
    for (let letter of input.toLowerCase()) {
      const index = alphabets.indexOf(letter);
      if (index < 0) {
        result += letter;
      } else {
        const newIndex = (index + shift) % 26;
        result += alphabets[newIndex];
      }
    }

    return result;
  }
  */


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
