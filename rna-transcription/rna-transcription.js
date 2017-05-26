var DnaTranscriber = function(dna) {
  this.value = dna;
};
DnaTranscriber.prototype.toRna = function(dna) {
  if (dna === "C") {
    return "G";
  } else if (dna === "G") {
    return "C";
  } else if (dna === "A") {
    return "U";
  } else if (dna === "T") {
    return "A";
  }
};

module.exports = DnaTranscriber;

// Given a DNA strand, return it's RNA complement
// RNA DNA strands are sequ of nucleotides
// DNA nucleotides=A C G T
// RNA nucleotides=A C G U
//transcribed RNA strand formed by
// replacing each n with it's complement
