function Scrabble(word) {
  var points = {
    1: "AEIOULNRST",
    2: "DG",
    3: "BCMP",
    4: "FHVWY",
    5: "K",
    8: "JX",
    10: "QZ"
  };
  if (word === "") {
    return 0;
  } else if (word === null) {
    return 0;
  }
}
module.exports = Scrabble;
