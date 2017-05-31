var Pangram = function(string) {
  this.value = string;
};
Pangram.prototype.isPangram = function(string) {
  return false;
};

module.exports = Pangram;

// pangram is a sentence using every letter of the alphabet
// at least once.
