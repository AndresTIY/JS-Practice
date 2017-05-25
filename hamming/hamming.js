var Hamming = function(dna1, dna2) {
  this.val1 = dna1;
  this.val2 = dna2;
};

Hamming.prototype.compute = function(dna1, dna2) {
  var dnaArr1 = dna1.split("");
  var dnaArr2 = dna2.split("");
  if (dnaArr1[0] === dnaArr2[0]) {
    console.log(0);
    return 0;
  } else if (dnaArr1[0] !== dnaArr2[0]) {
    return 1;
  }
};

var hamming = new Hamming();
var hamming1 = new Hamming("a", "a");
hamming.compute("a", "a");

module.exports = Hamming;

// compare array 1 to array 2
// if array 1 is different from array 2, return
// the number of differences
// convert string to array first
