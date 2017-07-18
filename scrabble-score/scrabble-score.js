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

  switch (word) {
    case "":
      return 0;
      break;
    case null:
      return 0;
      break;
    default:
      return;
  }
}
module.exports = Scrabble;
