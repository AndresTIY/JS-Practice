var vowels = ["a", "e", "i", "o", "u"];

function translate(word) {
  var newWord = word;

  for (var i = 0; i < vowels.length; i++) {
    if (word[0] !== vowels[i]) {
      //remove consonant from word
      var storedLetter = word[0];
      newWord = newWord.split("");
      newWord.shift();
      newWord.push(storedLetter);
      return newWord.join("") + "ay";
    } else {
      return newWord + "ay";
    }
  }
}

module.exports = { translate: translate };
// rule 1: if a word begins with a vowel, add ay to end
// rule 2: if a word begins with anything else, move it to the end
