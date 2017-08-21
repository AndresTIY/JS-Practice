var WordProblem = function(question) {
  this.question = question;
  this.operators = {
    plus: "+",
    minus: "-",
    "multiplied by": "*",
    "divided by": "/"
  };
};

WordProblem.prototype.answer = function() {};

module.exports = {
  WordProblem: WordProblem
};
