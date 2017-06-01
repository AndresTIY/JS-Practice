var Bob = function(str) {
  this.string = str;
};
Bob.prototype.hey = function(str) {
  this.string = str;
  if (str === str.toUpperCase()) {
    return "Whoa, chill out!";
  } else if (str[str.length - 1] === "?") {
    return "Sure.";
  } else return "Whatever.";
};

module.exports = Bob;

//if string is upper case, return "Whoa, chill out!"
//if string is a question, return "Sure."
// if string is empty, return "Fine. Be that way!"
//if anything else, return "Whatever."
