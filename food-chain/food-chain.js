function FoodChain() {
  var endOfVerse =
    "I don't know why she swallowed the fly. Perhaps she'll die.\n";
  var verse1 = "I know an old lady who swallowed a fly.\n" + endOfVerse;
  var verse2 =
    "I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n" +
    "She swallowed the spider to catch the fly.\n" +
    endOfVerse;
  function song(num) {
    switch (num) {
      case 1:
        return verse1;
        break;
      case 2:
        return verse2;
        break;
      default:
        return;
    }
  }

  return {
    verse: song
  };
}
module.exports = FoodChain;
"I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n" +
  "She swallowed the spider to catch the fly.\n" +
  "I don't know why she swallowed the fly. Perhaps she'll die.\n";
