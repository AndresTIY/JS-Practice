var Acronyms = function(string) {
  this.string = string;
};

Acronyms.prototype.parse = function(string) {
  var words = string.split(" ");
  var acro = "";
  var i = 0;
  var nextWord;
  while (i < words.length) {
    nextWord = words[i];
    acro = acro + nextWord.charAt(0);
    i = i + 1;
  }
  return acro.toUpperCase();
};

module.exports = Acronyms;
