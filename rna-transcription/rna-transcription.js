var DnaTranscriber = function(dna) {
  this.value = dna;
};
DnaTranscriber.prototype.toRna = function(dna) {
  var rna = "";
  switch (dna) {
    case "C":
      return "G";
      break;
    case "G":
      return "C";
      break;
    case "A":
      return "U";
      break;
    case "T":
      return "A";
      break;
    default:
      return "nothing";
  }
};

module.exports = DnaTranscriber;

// Given a DNA strand, return it's RNA complement
// RNA DNA strands are sequ of nucleotides
// DNA nucleotides=A C G T
// RNA nucleotides=A C G U
//transcribed RNA strand formed by
// replacing each n with it's complement
// var rna = "";
// if (dna === "C") {
//   return rna + "G";
// } else if (dna === "G") {
//   return rna + "C";
// } else if (dna === "A") {
//   return rna + "U";
// } else if (dna === "T") {
//   return rna + "A";
// }
// };
