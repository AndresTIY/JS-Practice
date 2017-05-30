var DnaTranscriber = function(dna) {
  this.value = dna;
};
DnaTranscriber.prototype.toRna = function(dna) {
  var complement = {
    C: "G",
    G: "C",
    A: "U",
    T: "A"
  };
  function returnComp(nucl) {
    return complement[nucl];
  }
  return dna.split("").map(returnComp).join("");
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
// switch (dna) {
//   case "C":
//     return rna + "G";
//     break;
//   case "G":
//     return rna + "C";
//     break;
//   case "A":
//     return rna + "U";
//     break;
//   case "T":
//     return rna + "A";
//     break;
//   default:
//     return "nothing";
// ["G", "C", "T", "A"].forEach(function(nucl, i, arr) {
//   switch (dna) {
//     case "C":
//       rna = rna + "G";
//       break;
//     case "G":
//       rna = rna + "C";
//       break;
//     case "A":
//       rna = rna + "U";
//       break;
//     case "T":
//       rna = rna + "A";
//       break;
//     default:
//       return "nothing";
//   }
