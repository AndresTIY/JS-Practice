var Pangram = function(string) {
  this.word = string;
};
Pangram.prototype.isPangram = function(string) {
  if (this.word.length < 1) {
    return false;
  }
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  string = this.word.toLowerCase();
};

module.exports = Pangram;

// pangram is a sentence using every letter of the alphabet
// at least once.

//go through string
//if char appears more than once, then false
