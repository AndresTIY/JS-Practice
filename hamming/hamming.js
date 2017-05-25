var Hamming = function(a, b) {
  this.val1 = a;
  this.val2 = b;
};

Hamming.prototype.compute = function(a, b) {
  var length1 = a.length;
  var length2 = b.length;
  if (a === b) {
    return 0;
  }
};

module.exports = Hamming;
