var Hamming = function(dna1, dna2) {
  this.val1 = dna1;
  this.val2 = dna2;
};

Hamming.prototype.compute = function(dna1, dna2) {
  var diff = 0;
  if (dna1.length !== dna2.length) {
    throw new Error("DNA strands must be of equal length.");
  }
  for (var i = 0; i <= dna1.length; i++) {
    if (dna1[i] !== dna2[i]) {
      diff = diff + 1;
    }
  }
  return diff;
};

var hamming = new Hamming();
var hamming1 = new Hamming("a", "a");
hamming.compute("a", "a");

module.exports = Hamming;

// compare array 1 to array 2
// if array 1 is different from array 2, return
// the number of differences
// convert string to array first
// if (dnaArr1[0] === dnaArr2[0]) {
//   return 0;
// } else if (dnaArr1[0] !== dnaArr2[0]) {
//   return 1;
// }
