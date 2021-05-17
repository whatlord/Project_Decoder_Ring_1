// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const realAlphabet = "abcdefghijklmnopqrstuvwxyz"


  function substitution(input, alphabet, encode = true) {
    if(!alphabet || [...new Set(alphabet.split(""))].length !== 26) { return false; }
    
    let result = ""
    if(encode){
      for(let letter of input.toLowerCase()){
        const index = realAlphabet.indexOf(letter);
        if (index < 0) {
          result += letter;
        } else {
          result += alphabet[index];
        }
      }
    }else{
      for(let letter of input.toLowerCase()){
        const index = alphabet.indexOf(letter);
        if (index < 0) {
          result += letter;
        } else {
          result += realAlphabet[index];
        }
      }
    }

    return result

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
