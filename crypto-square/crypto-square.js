var Crypto = function(str) {
  this.str = str;
  function normalizePlaintext() {
    return str
      .toLowerCase()
      .split("")
      .filter(function(e) {
        return e.match(/[a-z0-9]/);
        // The match() method retrieves the matches when matching a string against a regular expression.
      })
      .join("");
  }

  function size() {
    return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
    /*size of rect is (r x c) or row * column
    if c >= r
    */
  }

  return {
    normalizePlaintext: normalizePlaintext,
    size: size
  };
};

module.exports = Crypto;

// normalize should remove all symbols and spaces lowercase, and then combine
// remove symbols
// remove spaces
// lowercase all letters
